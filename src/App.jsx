import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, XCircle, Search, Home } from 'lucide-react';

// --- UTILIDADES ---
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// --- BASE DE DATOS DE PREGUNTAS ---

const ra3Questions = [
  { question: "Un equipo recibe datos de una API en JSON, los limpia y los consulta muchas veces por pocas columnas. ¿Qué conversión suele mejorar rendimiento analítico?", options: [{ text: "Pasar todo a texto plano sin esquema para simplificar tipos", isCorrect: false }, { text: "Mantener JSON indefinidamente como único formato de consulta aunque cada análisis escanee campos innecesarios", isCorrect: false }, { text: "Dividir cada fila en un fichero independiente para maximizar paralelismo", isCorrect: false }, { text: "Convertir los datos curados a Parquet u ORC", isCorrect: true }] },
  { question: "Una empresa procesa ventas cada noche para generar históricos y KPIs consolidados. ¿Qué enfoque es natural?", options: [{ text: "Escrituras registro a registro en HDFS como si fuera una base OLTP", isCorrect: false }, { text: "Streaming obligatorio en milisegundos aunque la decisión se tome semanalmente", isCorrect: false }, { text: "Batch con trabajos planificados", isCorrect: true }, { text: "Mensajería sin almacenamiento persistente de resultados históricos", isCorrect: false }] },
  { question: "Una consulta solo necesita `provincia` e `importe` de una tabla con cien columnas y miles de millones de filas. ¿Por qué Parquet puede reducir coste?", options: [{ text: "Porque elimina la necesidad de particionar datos", isCorrect: false }, { text: "Porque obliga a leer todos los campos para mantener integridad de cada fila", isCorrect: false }, { text: "Porque convierte cualquier consulta en una operación transaccional ACID", isCorrect: false }, { text: "Porque permite leer columnas necesarias y aprovechar compresión columnar", isCorrect: true }] },
  { question: "Un usuario se autentica correctamente, pero intenta borrar un topic de Kafka sin permisos. ¿Qué concepto debe impedirlo?", options: [{ text: "Autenticación, porque responder \"quién eres\" decide automáticamente todo lo que puedes hacer", isCorrect: false }, { text: "Compresión de datos", isCorrect: false }, { text: "Particionamiento del data lake", isCorrect: false }, { text: "Autorización", isCorrect: true }] },
  { question: "¿Cuándo sigue siendo PostgreSQL una opción sólida en una arquitectura Big Data?", options: [{ text: "Cuando todas las consultas deben depender de consistencia eventual sin restricciones", isCorrect: false }, { text: "Cuando se necesita almacenar petabytes de ficheros brutos como sustituto de un repositorio de objetos", isCorrect: false }, { text: "Cuando se pretende evitar cualquier definición de esquema o clave", isCorrect: false }, { text: "Cuando se quieren transacciones, integridad referencial, SQL y datos estructurados", isCorrect: true }] },
  { question: "Un data lake contiene datasets sin descripción, propietario ni clasificación de sensibilidad. ¿Qué componente ayudaría a resolverlo?", options: [{ text: "Cambiar Parquet por CSV en todos los datasets", isCorrect: false }, { text: "Un catálogo de datos con metadatos técnicos, de negocio y seguridad", isCorrect: true }, { text: "Eliminar todas las zonas curated para que cada usuario use raw directamente", isCorrect: false }, { text: "Más buckets sin nomenclatura común para repartir los ficheros de forma menos visible", isCorrect: false }] },
  { question: "Un clúster tiene espacio libre global, pero algunos nodos están casi llenos. ¿Por qué no basta mirar el total?", options: [{ text: "Porque los datos dejan de existir si el total supera el 50 %", isCorrect: false }, { text: "Porque solo el total determina replicación, rendimiento y distribución de bloques", isCorrect: false }, { text: "Porque todos los nodos llenos se vacían automáticamente al cambiar a CSV", isCorrect: false }, { text: "Porque el desequilibrio puede afectar escritura, replicación y rendimiento", isCorrect: true }] },
  { question: "Una plataforma cifra discos, pero transmite datos sin TLS entre Kafka, Spark y bases de datos. ¿Qué riesgo queda abierto?", options: [{ text: "Intercepción de datos durante comunicaciones internas", isCorrect: true }, { text: "Pérdida de compresión columnar en Parquet", isCorrect: false }, { text: "Exceso de particiones por fecha", isCorrect: false }, { text: "Imposibilidad de usar roles RBAC", isCorrect: false }] },
  { question: "Una arquitectura usa Kafka para recibir eventos, alertas streaming y luego compacta históricos en Parquet con Spark. ¿Qué equilibrio consigue?", options: [{ text: "Evita gestionar duplicados, retrasos o orden temporal en eventos", isCorrect: false }, { text: "Impide usar data lake porque Kafka almacena todos los datos analíticos para siempre", isCorrect: false }, { text: "Combina reacción inmediata con consolidación analítica posterior", isCorrect: true }, { text: "Sustituye completamente batch por streaming y elimina cualquier necesidad de datos históricos", isCorrect: false }] },
  { question: "Un plan de recuperación fija RPO de 15 minutos y RTO de 4 horas. ¿Qué significa?", options: [{ text: "Los backups dejan de ser necesarios si hay replicación", isCorrect: false }, { text: "Se acepta perder como máximo 15 minutos de datos y recuperar servicio en 4 horas", isCorrect: true }, { text: "El sistema debe conservar datos durante exactamente 4 horas", isCorrect: false }, { text: "Se acepta perder hasta 4 horas de datos y recuperar en 15 minutos", isCorrect: false }] },
  { question: "Una alerta se dispara cada minuto por eventos irrelevantes y el equipo deja de atenderla. ¿Qué falla?", options: [{ text: "La alerta no representa una situación accionable", isCorrect: true }, { text: "El cifrado en reposo está activado", isCorrect: false }, { text: "El formato Avro contiene esquema", isCorrect: false }, { text: "La plataforma tiene demasiada gobernanza documental", isCorrect: false }] },
  { question: "Un trabajo Spark lento lee muchos CSV completos aunque solo usa dos columnas. ¿Qué mejora podría atacar I/O y coste?", options: [{ text: "Generar un fichero por fila para maximizar tareas", isCorrect: false }, { text: "Quitar métricas de I/O para evitar ver el cuello de botella", isCorrect: false }, { text: "Convertir a Parquet y particionar según consultas frecuentes", isCorrect: true }, { text: "Añadir más columnas al CSV para que la consulta tenga más información que descartar", isCorrect: false }] },
  { question: "Un pipeline streaming escribe cientos de ficheros Parquet diminutos cada minuto. ¿Qué problema operativo puede crear?", options: [{ text: "Mejora ilimitada de rendimiento, porque más ficheros pequeños siempre implican mejor paralelismo", isCorrect: false }, { text: "Desaparición de la necesidad de catálogo", isCorrect: false }, { text: "Conversión automática de Parquet en Avro", isCorrect: false }, { text: "Sobrecarga por ficheros pequeños en almacenamiento y procesamiento", isCorrect: true }] },
  { question: "Un bucket crece un 30 % semanal y nadie revisa objetos antiguos, versiones ni clases de almacenamiento. ¿Qué dimensión operativa se está descuidando?", options: [{ text: "Autenticación multifactor de usuarios", isCorrect: false }, { text: "Evolución de esquemas Avro", isCorrect: false }, { text: "Modelado documental", isCorrect: false }, { text: "Coste y eficiencia operativa", isCorrect: true }] },
  { question: "Un topic Kafka acumula consumer lag durante horas. ¿Qué indica operativamente?", options: [{ text: "Los consumidores no están procesando eventos al ritmo necesario", isCorrect: true }, { text: "Avro ha perdido su esquema de forma automática", isCorrect: false }, { text: "Las tablas relacionales han normalizado demasiado sus dimensiones", isCorrect: false }, { text: "El data lake ha eliminado todos los objetos antiguos correctamente", isCorrect: false }] },
  { question: "Un modelo de IA cambia su comportamiento tras una recarga de datos. ¿Por qué el linaje es crítico?", options: [{ text: "Porque impide que los datos evolucionen", isCorrect: false }, { text: "Porque permite reconstruir qué datos y transformaciones alimentaron el modelo", isCorrect: true }, { text: "Porque elimina cualquier necesidad de calidad de datos", isCorrect: false }, { text: "Porque sustituye la evaluación del modelo por nombres de ficheros", isCorrect: false }] },
  { question: "Una colección MongoDB acepta documentos demasiado distintos sin validación. ¿Qué riesgo aparece?", options: [{ text: "Conversión automática de documentos en bloques HDFS", isCorrect: false }, { text: "Imposibilidad total de almacenar estructuras anidadas", isCorrect: false }, { text: "Eliminación de cualquier necesidad de índices", isCorrect: false }, { text: "Pérdida de calidad y dificultad de mantenimiento", isCorrect: true }] },
  { question: "Una plataforma recibe logs, imágenes, tablas de ventas y eventos de sensores. ¿Qué decisión arquitectónica es más sólida?", options: [{ text: "Combinar tecnologías según tipo de dato, patrón de acceso, consistencia y escalabilidad", isCorrect: true }, { text: "Priorizar siempre la herramienta más reciente aunque no encaje con las consultas previstas", isCorrect: false }, { text: "Guardar todo como CSV para evitar tomar decisiones sobre almacenamiento", isCorrect: false }, { text: "Forzar todas las fuentes a una única base relacional aunque unas sean objetos grandes y otras flujos de eventos constantes", isCorrect: false }] },
  { question: "Un sistema de fraude debe reaccionar mientras ocurre el pago. ¿Qué enfoque tiene más sentido?", options: [{ text: "Batch mensual, porque siempre ofrece menor latencia que el procesamiento en flujo", isCorrect: false }, { text: "Esperar a compactar todo en Parquet antes de lanzar cualquier alerta", isCorrect: false }, { text: "Streaming con eventos procesados continuamente", isCorrect: true }, { text: "Usar solo CSV manual para revisar pagos sospechosos al final del trimestre", isCorrect: false }] },
  { question: "Una zona raw contiene datos personales sin depurar. ¿Qué decisión de gobierno es más prudente?", options: [{ text: "Eliminar todos los metadatos para que nadie sepa qué datos hay", isCorrect: false }, { text: "Dar acceso general porque raw es la fuente más completa y por tanto siempre la más segura para análisis", isCorrect: false }, { text: "Restringir acceso y publicar datos depurados en zonas curated cuando proceda", isCorrect: true }, { text: "Usar nombres de carpetas más cortos como única medida de protección", isCorrect: false }] },
  { question: "Un equipo quiere usar HDFS para una aplicación con miles de actualizaciones pequeñas por segundo sobre registros individuales. ¿Qué problema aparece?", options: [{ text: "HDFS solo funciona con documentos JSON anidados y no con ficheros grandes", isCorrect: false }, { text: "HDFS impide dividir ficheros grandes en bloques distribuidos", isCorrect: false }, { text: "HDFS elimina la necesidad de metadatos para ubicar datos", isCorrect: false }, { text: "HDFS no está optimizado para baja latencia ni muchas escrituras pequeñas", isCorrect: true }] },
  { question: "Una regla detecta pedidos con fecha de entrega anterior a la compra. ¿Qué dimensión de calidad evalúa principalmente?", options: [{ text: "Compresión", isCorrect: false }, { text: "Consistencia", isCorrect: true }, { text: "Latencia de red", isCorrect: false }, { text: "Replicación", isCorrect: false }] },
  { question: "Una organización quiere construir un data lake para guardar CSV, JSON, Parquet, imágenes y artefactos de modelos. ¿Qué almacenamiento encaja mejor?", options: [{ text: "Un topic Kafka usado como archivo histórico indefinido de todos los datasets empresariales", isCorrect: false }, { text: "Un repositorio de objetos como S3 o MinIO", isCorrect: true }, { text: "Una única tabla PostgreSQL con una columna para cada posible formato, aunque crezca sin patrón ni control operativo", isCorrect: false }, { text: "Un índice visual de capturas de pantalla de los ficheros", isCorrect: false }] },
  { question: "En Cassandra, una clave de partición concentra la mayoría de escrituras en pocos nodos. ¿Qué problema puede causar?", options: [{ text: "Conversión de Cassandra en repositorio de objetos", isCorrect: false }, { text: "Eliminación de la necesidad de replicación", isCorrect: false }, { text: "Mejora automática de latencia por concentrar datos en menos nodos", isCorrect: false }, { text: "Distribución desigual y nodos calientes", isCorrect: true }] },
  { question: "Una réplica refleja inmediatamente un borrado accidental de datos. ¿Qué lección operativa muestra?", options: [{ text: "Replicación y backup cumplen funciones distintas", isCorrect: true }, { text: "Los backups solo sirven para mejorar latencia de lectura", isCorrect: false }, { text: "Replicar elimina siempre la necesidad de restaurar copias", isCorrect: false }, { text: "La disponibilidad impide cualquier error humano", isCorrect: false }] },
  { question: "Un sistema de eventos necesita mensajes binarios compactos y evolución controlada de esquema entre productores y consumidores. ¿Qué formato encaja?", options: [{ text: "Avro", isCorrect: true }, { text: "PNG, porque todo evento puede almacenarse como imagen", isCorrect: false }, { text: "Parquet, porque es siempre la mejor opción para mensajes evento a evento en streaming", isCorrect: false }, { text: "CSV, porque los esquemas evolucionan automáticamente al añadir comas", isCorrect: false }] },
  { question: "Un backup se ejecuta a diario, pero nunca se ha probado restaurarlo. ¿Qué riesgo existe?", options: [{ text: "Que la copia no sea recuperable cuando ocurra un incidente real", isCorrect: true }, { text: "Que probar restauraciones elimine automáticamente todos los datos productivos", isCorrect: false }, { text: "Que la replicación sustituya cualquier validación", isCorrect: false }, { text: "Que el RPO deje de existir por documentarse", isCorrect: false }] },
  { question: "Un repositorio cifra objetos en reposo, pero cualquier usuario del sistema puede leerlos mediante la aplicación. ¿Qué conclusión es correcta?", options: [{ text: "La gestión de claves no influye en la seguridad del cifrado", isCorrect: false }, { text: "El cifrado en reposo sustituye por completo a los permisos y a la auditoría de accesos", isCorrect: false }, { text: "Cifrar en reposo impide cualquier lectura legítima de datos", isCorrect: false }, { text: "Cifrado y control de accesos deben combinarse", isCorrect: true }] },
  { question: "Una aplicación necesita escrituras masivas, alta disponibilidad y consultas diseñadas por clave de partición. ¿Qué tecnología puede encajar?", options: [{ text: "HDFS como base de datos de baja latencia por registro", isCorrect: false }, { text: "CSV compartido en una carpeta de red como única capa de persistencia", isCorrect: false }, { text: "Cassandra", isCorrect: true }, { text: "PostgreSQL sin particionado ni estrategia de escalado, aunque el volumen crezca a ritmo de telemetría", isCorrect: false }] },
  { question: "En HDFS, un NameNode tiene problemas de memoria por millones de ficheros muy pequeños. ¿Cuál es la causa técnica más probable?", options: [{ text: "El factor de replicación convierte cada fichero pequeño en una tabla relacional", isCorrect: false }, { text: "Los DataNodes han dejado de almacenar bloques porque HDFS solo acepta objetos S3", isCorrect: false }, { text: "El NameNode debe mantener demasiados metadatos de ficheros y bloques", isCorrect: true }, { text: "Los ficheros pequeños siempre mejoran el procesamiento distribuido", isCorrect: false }] },
  { question: "Un equipo conserva todos los campos personales \"por si acaso\" aunque el análisis solo requiere provincia y rango de edad. ¿Qué principio se vulnera?", options: [{ text: "Lectura secuencial de ficheros grandes", isCorrect: false }, { text: "Minimización de datos", isCorrect: true }, { text: "Replicación entre nodos", isCorrect: false }, { text: "Serialización binaria", isCorrect: false }] },
  { question: "Después de un incidente por falta de espacio, el equipo restaura servicio y cierra el ticket sin analizar causa. ¿Qué falta en el ciclo operativo?", options: [{ text: "Desactivar alertas de capacidad para evitar interrupciones", isCorrect: false }, { text: "Eliminar todos los dashboards para reducir usuarios", isCorrect: false }, { text: "Convertir todos los datos a CSV para que ocupen siempre menos", isCorrect: false }, { text: "Revisión posterior para aprender y mejorar prevención", isCorrect: true }] },
  { question: "Una plataforma guarda datos personales en un bucket accesible por todos los analistas. ¿Qué principio se incumple claramente?", options: [{ text: "Evolución de esquemas en Avro", isCorrect: false }, { text: "Compactación de ficheros pequeños", isCorrect: false }, { text: "Mínimo privilegio y minimización de acceso", isCorrect: true }, { text: "Lectura selectiva de columnas en formato columnar", isCorrect: false }] },
  { question: "Una columna `importe_total` se calcula desde `importe_base`, impuestos y envío, tras excluir anulados. ¿Qué nivel de linaje resulta más útil?", options: [{ text: "Linaje detallado a nivel de columna y reglas de transformación", isCorrect: true }, { text: "Solo saber que existe un bucket llamado datos, sin información de columnas ni transformaciones", isCorrect: false }, { text: "Un recuento de ficheros pequeños sin relación con la métrica", isCorrect: false }, { text: "Una captura de pantalla del dashboard final", isCorrect: false }] },
  { question: "Un fichero CSV contiene fechas ambiguas, delimitadores dentro de campos y nulos mal representados. ¿Qué limitación ilustra?", options: [{ text: "CSV siempre comprime mejor que Parquet en analítica columnar masiva", isCorrect: false }, { text: "CSV es simple y compatible, pero no impone esquema fuerte ni tipos", isCorrect: true }, { text: "CSV permite evolución controlada de esquemas como Avro", isCorrect: false }, { text: "CSV es un sistema de mensajería distribuida para streaming", isCorrect: false }] },
  { question: "Un equipo modela Cassandra como si fuera una base relacional normalizada y luego necesita joins complejos. ¿Qué error cometió?", options: [{ text: "Usar Cassandra para datos con alta escritura y disponibilidad", isCorrect: false }, { text: "Ignorar que Cassandra se modela según consultas, no según normalización relacional clásica", isCorrect: true }, { text: "Diseñar tablas a partir de consultas previstas y aceptar cierta duplicación controlada", isCorrect: false }, { text: "Elegir claves de partición considerando distribución y acceso", isCorrect: false }] },
  { question: "Una API entrega documentos con campos anidados que cambian con frecuencia. ¿Qué tecnología puede simplificar el almacenamiento inicial?", options: [{ text: "Un fichero CSV rígido con columnas fijas para todas las variantes, aunque se pierdan campos anidados importantes", isCorrect: false }, { text: "MongoDB, siempre que se acompañe de reglas de esquema y gobierno", isCorrect: true }, { text: "Un gráfico circular que sustituya la persistencia de documentos", isCorrect: false }, { text: "HDFS como motor de consultas transaccionales por documento individual", isCorrect: false }] },
  { question: "Un dataset falla una regla de calidad crítica durante la ingesta. ¿Qué acción es razonable?", options: [{ text: "Convertirlo a JSON para que desaparezcan las contradicciones", isCorrect: false }, { text: "Enviarlo a cuarentena o marcarlo con calidad inferior", isCorrect: true }, { text: "Publicarlo como curated para que los usuarios descubran el problema durante el análisis final", isCorrect: false }, { text: "Borrar las reglas de calidad para que el pipeline no falle", isCorrect: false }] },
  { question: "Un fichero de varios terabytes debe analizarse en paralelo en un clúster. ¿Qué principio justifica dividirlo en bloques distribuidos?", options: [{ text: "Evitar cualquier forma de replicación para ahorrar espacio", isCorrect: false }, { text: "Reducir el número de metadatos hasta que el sistema no sepa dónde está cada fragmento", isCorrect: false }, { text: "Acercar procesamiento a datos y permitir paralelismo", isCorrect: true }, { text: "Garantizar que todo el procesamiento se ejecute en un único servidor central", isCorrect: false }] },
  { question: "Una empresa reemplaza DNI por identificadores internos, pero conserva una tabla segura para revertir el vínculo. ¿Qué técnica aplica?", options: [{ text: "Fragmentación HDFS", isCorrect: false }, { text: "Seudonimización", isCorrect: true }, { text: "Eliminación completa de datos personales", isCorrect: false }, { text: "Anonimización irreversible, porque ningún dato podría volver a asociarse a la persona", isCorrect: false }] },
  { question: "Un proceso detecta que hay pedidos con una fecha de entrega registrada como \"01/01/1900\". ¿Qué dimensión de calidad está fallando?", options: [{ text: "Veracidad / Precisión", isCorrect: true }, { text: "Completitud", isCorrect: false }, { text: "Consistencia", isCorrect: false }, { text: "Oportunidad / Latencia", isCorrect: false }] }
];

const ra4Questions = [
  { question: "Un gráfico combina barras de ingresos y línea de margen. ¿Qué práctica evita confusión?", options: [{ text: "Sumar ambas métricas", isCorrect: false }, { text: "Ocultar la tasa para limpiar el diseño", isCorrect: false }, { text: "Usar unidades, leyendas y escalas claras", isCorrect: true }, { text: "Usar el mismo eje y color aunque ingresos y margen tengan unidades distintas y escalas muy diferentes", isCorrect: false }] },
  { question: "Un dashboard consulta millones de logs crudos en cada filtro y responde lentamente. ¿Qué decisión mejora el rendimiento sin perder utilidad?", options: [{ text: "Preparar agregaciones por hora, servicio y código de error", isCorrect: true }, { text: "Añadir más gráficos al informe aunque todos sigan consultando el mismo volumen de eventos crudos en cada interacción", isCorrect: false }, { text: "Eliminar todos los filtros para impedir que el usuario haga preguntas distintas", isCorrect: false }, { text: "Cambiar los logs a texto enriquecido para que ocupen menos espacio visual", isCorrect: false }] },
  { question: "Cada área redefine \"ventas netas\" con reglas propias. ¿Qué consecuencia es probable?", options: [{ text: "Más confianza, porque cada área ajusta el indicador sin coordinación ni reglas comunes", isCorrect: false }, { text: "Sustitución natural de dimensiones por métricas", isCorrect: false }, { text: "Cifras contradictorias para la misma pregunta", isCorrect: true }, { text: "Eliminación automática de errores de agregación", isCorrect: false }] },
  { question: "Una tienda online quiere analizar reseñas libres para detectar problemas logísticos. ¿Qué paso convierte mejor ese texto en información útil para BI?", options: [{ text: "Ordenar los comentarios por longitud para separar opiniones positivas y negativas", isCorrect: false }, { text: "Extraer tema, sentimiento, fecha y canal como atributos analizables", isCorrect: true }, { text: "Convertir cada comentario en una imagen para preservar su forma original", isCorrect: false }, { text: "Guardar todas las reseñas completas como documentos enlazados y confiar en que cada responsable lea manualmente los casos relevantes", isCorrect: false }] },
  { question: "Un calendario de calor muestra actividad diaria. ¿Qué pregunta responde mejor?", options: [{ text: "Qué cuentas comparten dispositivos dentro de una red compleja de fraude entre clientes, teléfonos e IP", isCorrect: false }, { text: "Qué atributos forman la dimensión producto", isCorrect: false }, { text: "Qué días concentran más actividad", isCorrect: true }, { text: "Qué variables numéricas están correlacionadas", isCorrect: false }] },
  { question: "Un outlier inclina una regresión de gasto de clientes. ¿Qué hacer?", options: [{ text: "Ocultar el gráfico y mirar solo el coeficiente", isCorrect: false }, { text: "Borrarlo automáticamente porque todo valor extremo es un error que debe desaparecer antes de visualizar", isCorrect: false }, { text: "Mantenerlo sin analizarlo porque los modelos siempre corrigen extremos", isCorrect: false }, { text: "Revisar origen, impacto y sentido de negocio", isCorrect: true }] },
  { question: "Un esquema muy normalizado confunde a usuarios de negocio al analizar productos. ¿Qué ajuste suele mejorar la usabilidad en BI?", options: [{ text: "Desnormalizar atributos en una dimensión de producto", isCorrect: true }, { text: "Mover categoría, subcategoría y proveedor a cada fila de hechos, aunque se repitan millones de veces y compliquen mantenimiento", isCorrect: false }, { text: "Cambiar todos los nombres por códigos internos más cortos", isCorrect: false }, { text: "Eliminar categorías para que solo exista el identificador técnico de producto", isCorrect: false }] },
  { question: "En un modelo de ventas, ¿qué decisión define si cada fila representa línea de pedido, pedido o resumen diario?", options: [{ text: "La granularidad de la tabla de hechos", isCorrect: true }, { text: "La longitud de los nombres de columna, porque evita que las medidas sean ambiguas", isCorrect: false }, { text: "La paleta visual del dashboard, porque determina cómo se agrupan las filas durante la consulta", isCorrect: false }, { text: "La normalización de cada categoría en una tabla independiente", isCorrect: false }] },
  { question: "Una serie de ventas sube durante meses y tiene picos cada viernes. ¿Qué lectura es correcta?", options: [{ text: "Hay tendencia creciente y estacionalidad semanal", isCorrect: true }, { text: "Hay que eliminar ambos patrones para dejar una serie plana", isCorrect: false }, { text: "No puede analizarse porque contiene más de un componente", isCorrect: false }, { text: "Los picos semanales son tendencia y la subida sostenida es ruido sin valor analítico", isCorrect: false }] },
  { question: "Un gráfico combina barras de ventas y línea de tasa de devolución con dos ejes. ¿Qué precaución es clave?", options: [{ text: "Sumar ventas y tasa para compartir un único eje", isCorrect: false }, { text: "Ocultar unidades para reducir texto, aunque el usuario no sepa qué escala corresponde a cada serie", isCorrect: false }, { text: "Explicar escalas y evitar relaciones visuales falsas", isCorrect: true }, { text: "Usar siempre dos ejes porque garantizan comparabilidad", isCorrect: false }] },
  { question: "Un mapa muestra domicilios exactos de pacientes. ¿Qué decisión reduce riesgo sin destruir el valor analítico?", options: [{ text: "Agregar casos por zonas o densidades", isCorrect: true }, { text: "Cambiar el color de los puntos sin alterar ubicación ni detalle", isCorrect: false }, { text: "Publicar coordenadas exactas porque la precisión siempre mejora cualquier informe, incluso con datos sensibles", isCorrect: false }, { text: "Ocultar la leyenda para que el mapa sea menos comprensible", isCorrect: false }] },
  { question: "Un gráfico de burbujas compara ventas, margen y volumen de productos. ¿Qué riesgo debe controlarse?", options: [{ text: "Que elimine la necesidad de leyendas y unidades", isCorrect: false }, { text: "Que el tamaño de burbuja distorsione magnitudes", isCorrect: true }, { text: "Que solo pueda representar una variable, aunque se use posición, color y tamaño para codificar información adicional", isCorrect: false }, { text: "Que convierta cualquier relación visual en causalidad demostrada", isCorrect: false }] },
  { question: "Para explorar relaciones entre muchas variables numéricas antes de modelar, ¿qué visualización ayuda?", options: [{ text: "Una tabla de dimensiones de producto", isCorrect: false }, { text: "Un pair plot o matriz de dispersión", isCorrect: true }, { text: "Un área apilada sin orden temporal", isCorrect: false }, { text: "Un mapa coroplético sin territorio ni zonas, usado solo para colorear variables que no tienen componente espacial", isCorrect: false }] },
  { question: "Un panel muestra errores por segundo y oculta tendencias semanales por exceso de ruido. ¿Qué cambio probarías?", options: [{ text: "Convertir cada segundo en un sector circular", isCorrect: false }, { text: "Eliminar el eje temporal", isCorrect: false }, { text: "Agregar por hora o día según la pregunta", isCorrect: true }, { text: "Aumentar el detalle a milisegundos para incorporar todavía más variación y más puntos en la línea temporal", isCorrect: false }] },
  { question: "Una anomalía temporal podría ser error de captura o campaña real. ¿Qué conviene?", options: [{ text: "Revisar fuente, contexto y eventos externos", isCorrect: true }, { text: "Cambiar a gráfico circular para ocultarla", isCorrect: false }, { text: "Clasificarla como estacionalidad aunque ocurra una sola vez", isCorrect: false }, { text: "Eliminarla siempre para que la línea quede suave, aunque pueda representar un evento relevante de negocio", isCorrect: false }] },
  { question: "Un inventario registra el stock disponible al cierre de cada día. ¿Qué tipo de hecho es más adecuado?", options: [{ text: "Una dimensión de producto, porque el stock deja de ser medida al tener fecha", isCorrect: false }, { text: "Una instantánea periódica", isCorrect: true }, { text: "Un hecho transaccional, porque toda fila con fecha representa automáticamente una operación individual de venta", isCorrect: false }, { text: "Una instantánea acumulada con todas las fases de entrega", isCorrect: false }] },
  { question: "Usuarios quieren consultar métricas sin conocer joins ni nombres físicos. ¿Qué lo facilita?", options: [{ text: "Un modelo semántico con medidas y nombres de negocio", isCorrect: true }, { text: "Un gráfico de puntos de tablas técnicas", isCorrect: false }, { text: "Un archivo de logs sin transformación, relaciones ni nombres de negocio, expuesto directamente a todos los usuarios", isCorrect: false }, { text: "Una carpeta con imágenes de dashboards antiguos", isCorrect: false }] },
  { question: "Se comparan perfiles de clientes con gasto, frecuencia, antigüedad y riesgo. ¿Cuándo puede servir un radar?", options: [{ text: "Cuando se necesite ubicar clientes en un territorio", isCorrect: false }, { text: "Cuando se quiera demostrar causalidad entre riesgo y gasto", isCorrect: false }, { text: "Cuando hay pocas variables comparables", isCorrect: true }, { text: "Cuando haya cientos de variables con escalas incompatibles y sin normalizar, porque el radar siempre simplifica cualquier complejidad", isCorrect: false }] },
  { question: "Una red tiene miles de nodos y enlaces y se vuelve ilegible. ¿Qué mejora ayuda?", options: [{ text: "Poner todos los nodos del mismo color y tamaño", isCorrect: false }, { text: "Añadir todos los enlaces posibles para que no falte ninguna conexión, aunque el gráfico quede todavía más saturado", isCorrect: false }, { text: "Descartar cualquier grafo con más de diez nodos", isCorrect: false }, { text: "Filtrar, agrupar comunidades o usar centralidad", isCorrect: true }] },
  { question: "Un informe compara tasa de incidencias por provincia. ¿Qué visualización encaja mejor si se quiere leer distribución territorial agregada?", options: [{ text: "Un radar con todas las provincias como ejes", isCorrect: false }, { text: "Una matriz de correlación entre nombres de provincia", isCorrect: false }, { text: "Un grafo de relaciones entre incidencias, aunque las incidencias no tengan enlaces significativos entre sí", isCorrect: false }, { text: "Un mapa coroplético por provincia", isCorrect: true }] },
  { question: "Una regresión global parece clara, pero hay categorías con comportamientos diferentes. ¿Qué mejora la interpretación?", options: [{ text: "Eliminar los puntos y dejar solo la línea", isCorrect: false }, { text: "Diferenciar categorías con color o facetas", isCorrect: true }, { text: "Ignorar las categorías para mantener una única línea, aunque se oculten diferencias relevantes entre segmentos", isCorrect: false }, { text: "Convertir la regresión en gráfico circular", isCorrect: false }] },
  { question: "Sensores, tickets y correos usan conceptos distintos de \"incidencia\". ¿Qué evita contradicciones en BI?", options: [{ text: "Usar siempre nombres originales aunque contradigan otros sistemas", isCorrect: false }, { text: "Estandarizar conceptos comunes", isCorrect: true }, { text: "Diseñar gráficos antes de resolver significados", isCorrect: false }, { text: "Mantener cada definición aislada y no documentarla, para que cada área interprete sus indicadores de forma autónoma", isCorrect: false }] },
  { question: "Tres informes calculan \"cliente activo\" de forma distinta. ¿Qué componente ayuda a corregirlo?", options: [{ text: "Un mapa de calor aplicado a todos los indicadores, aunque el problema sea de definición y no de visualización", isCorrect: false }, { text: "Un archivo con capturas de pantalla de informes anteriores", isCorrect: false }, { text: "Un modelo semántico compartido", isCorrect: true }, { text: "Un aumento del número de columnas visibles", isCorrect: false }] },
  { question: "Un responsable quiere navegar de ventas anuales a trimestres, meses y días. ¿Qué elemento facilita ese análisis?", options: [{ text: "Una matriz de correlación entre años y nombres de productos", isCorrect: false }, { text: "Un mapa de puntos con cada día representado como coordenada", isCorrect: false }, { text: "Una jerarquía temporal ordenada", isCorrect: true }, { text: "Una tabla de hechos sin columna de fecha para evitar que existan demasiados niveles temporales disponibles", isCorrect: false }] },
  { question: "Una dimensión de producto contiene categoría, marca y proveedor. ¿Qué permite?", options: [{ text: "Reemplazar todas las medidas numéricas", isCorrect: false }, { text: "Registrar cada venta individual y sus importes, sustituyendo completamente la necesidad de una tabla de hechos", isCorrect: false }, { text: "Demostrar causalidad entre marca y ventas", isCorrect: false }, { text: "Agrupar métricas por atributos descriptivos", isCorrect: true }] },
  { question: "Un informe consulta ventas por mes, región y categoría sobre miles de millones de filas. ¿Qué estrategia ayuda?", options: [{ text: "Eliminar región y categoría", isCorrect: false }, { text: "Consultar siempre todo el detalle transaccional aunque el usuario solo necesite valores agregados", isCorrect: false }, { text: "Convertir ventas en ratios y sumarlos", isCorrect: false }, { text: "Crear agregaciones a ese nivel de análisis", isCorrect: true }] },
  { question: "Una matriz de correlación con 40 variables es difícil de leer. ¿Qué mejora ayuda?", options: [{ text: "Filtrar u ordenar variables relevantes", isCorrect: true }, { text: "Sustituir coeficientes por nombres de columnas", isCorrect: false }, { text: "Añadir más variables para que el usuario tenga una vista completa aunque el mapa de calor quede saturado", isCorrect: false }, { text: "Quitar la escala de color", isCorrect: false }] },
  { question: "Un dashboard mezcla datos por lotes diarios y datos casi en tiempo real. ¿Qué debe aclararse?", options: [{ text: "Que todos los indicadores tienen el mismo retraso aunque procedan de sistemas con cargas y ventanas distintas", isCorrect: false }, { text: "Frescura, latencia y alcance de cada indicador", isCorrect: true }, { text: "Que el streaming elimina cualquier necesidad de validar calidad", isCorrect: false }, { text: "Que los datos recientes siempre son más correctos que los consolidados", isCorrect: false }] },
  { question: "Un banco quiere detectar cuentas conectadas por teléfonos, IP y dispositivos compartidos. ¿Qué técnica resulta adecuada?", options: [{ text: "Una tabla de stock diario por almacén", isCorrect: false }, { text: "Un grafo con nodos y enlaces", isCorrect: true }, { text: "Un gráfico de sectores con porcentaje de teléfonos por operador", isCorrect: false }, { text: "Un gráfico de barras con total mensual de cuentas, aunque no muestre vínculos entre entidades sospechosas", isCorrect: false }] },
  { question: "Un indicador de sentimiento automático aparece como \"negativo\" sin mostrar confianza ni reglas. ¿Qué mejora es más rigurosa?", options: [{ text: "Sustituir la explicación por un color llamativo en el dashboard", isCorrect: false }, { text: "Mostrarlo como inferencia con confianza y limitaciones", isCorrect: true }, { text: "Ocultar cualquier resultado automático aunque ayude a priorizar incidencias, porque no procede directamente de una base transaccional", isCorrect: false }, { text: "Redondear la confianza al 100 % para simplificar la decisión ejecutiva", isCorrect: false }] },
  { question: "Una fábrica quiere usar fotografías de máquinas en un cuadro de mando de mantenimiento. ¿Qué salida es más apropiada?", options: [{ text: "Una tabla con defecto detectado, equipo, fecha, ubicación y confianza", isCorrect: true }, { text: "Un conjunto de capturas seleccionadas por estética para representar visualmente la planta", isCorrect: false }, { text: "Un archivo comprimido con todas las imágenes originales sin metadatos asociados", isCorrect: false }, { text: "Una galería de imágenes sin etiquetas, organizada por nombre de archivo y revisada visualmente por dirección una vez al mes", isCorrect: false }] },
  { question: "Una matriz muestra alta correlación entre publicidad y ventas. ¿Qué conclusión es más prudente?", options: [{ text: "Ambas variables deben sumarse para obtener una métrica única", isCorrect: false }, { text: "La publicidad causa ventas con seguridad, porque un coeficiente alto elimina la necesidad de contexto externo", isCorrect: false }, { text: "La relación debe descartarse porque toda correlación visual es inútil", isCorrect: false }, { text: "Existe una asociación que debe investigarse", isCorrect: true }] },
  { question: "En coordenadas paralelas con muchos productos y métricas, ¿qué riesgo aparece?", options: [{ text: "Que impida comparar observaciones", isCorrect: false }, { text: "Que convierta variables en coordenadas GPS", isCorrect: false }, { text: "Que solo permita una variable, aunque esta técnica esté pensada precisamente para perfiles multivariable", isCorrect: false }, { text: "Que escalas y exceso de líneas oculten patrones", isCorrect: true }] },
  { question: "Para representar entregas entre almacenes y ciudades con volumen transportado, ¿qué debe existir?", options: [{ text: "Orígenes, destinos y magnitudes de movimiento", isCorrect: true }, { text: "Una dimensión de producto sin atributos geográficos", isCorrect: false }, { text: "Una matriz de dispersión de variables financieras", isCorrect: false }, { text: "Un porcentaje no aditivo sumado entre rutas, aunque se pierda el sentido real de la métrica logística", isCorrect: false }] },
  { question: "¿Qué ventaja tiene un hexbin con millones de puntos?", options: [{ text: "Eliminar la necesidad de leyenda", isCorrect: false }, { text: "Demostrar causalidad territorial automáticamente", isCorrect: false }, { text: "Mostrar cada observación con etiqueta completa, aunque haya tanto solapamiento que no se pueda leer el patrón", isCorrect: false }, { text: "Reducir solapamiento y mostrar densidad", isCorrect: true }] },
  { question: "Varias tiendas tienen conversiones distintas. ¿Cómo debe calcularse la conversión total?", options: [{ text: "Promediar siempre los porcentajes sin considerar el volumen de visitas", isCorrect: false }, { text: "Sumar todos los porcentajes de conversión como si fueran importes de venta acumulables por tienda y periodo", isCorrect: false }, { text: "Dividir compras totales entre visitas totales", isCorrect: true }, { text: "Elegir el porcentaje de la tienda con más visitas y usarlo como valor global", isCorrect: false }] },
  { question: "En una tabla de hechos, ¿para qué sirven id_producto, id_cliente e id_tienda?", options: [{ text: "Para reemplazar unidades e importes y evitar cálculos numéricos en cualquier herramienta de BI", isCorrect: false }, { text: "Para convertir la tabla en datos no estructurados", isCorrect: false }, { text: "Para conectar medidas con dimensiones", isCorrect: true }, { text: "Para impedir jerarquías en dimensiones", isCorrect: false }] },
  { question: "Se quiere medir el tiempo entre creación, pago, envío y entrega de pedidos. ¿Qué estructura conviene?", options: [{ text: "Una dimensión con nombres de estado pero sin fechas, para simplificar el modelo visual a los usuarios finales", isCorrect: false }, { text: "Un gráfico circular con pedidos por estado actual", isCorrect: false }, { text: "Una instantánea acumulada con fechas clave", isCorrect: true }, { text: "Un mapa coroplético por provincia de destino", isCorrect: false }] },
  { question: "Un dashboard compara muchas series temporales por canal. ¿Qué mejora su legibilidad?", options: [{ text: "Usar el mismo estilo sin leyenda", isCorrect: false }, { text: "Ordenar el eje temporal alfabéticamente", isCorrect: false }, { text: "Limitar series y usar colores coherentes", isCorrect: true }, { text: "Incluir todas las series disponibles aunque se crucen y oculten entre sí durante toda la evolución temporal", isCorrect: false }] },
  { question: "Dos fuentes registran incidencias con códigos, idiomas y categorías distintas. ¿Qué reto debe resolverse antes de comparar indicadores?", options: [{ text: "La causalidad, porque dos categorías distintas demuestran que una fuente causa errores en la otra", isCorrect: false }, { text: "La diversidad de estructuras y significados entre fuentes", isCorrect: true }, { text: "La estacionalidad, porque cualquier dato con fecha tiene necesariamente ciclos regulares que explican las diferencias", isCorrect: false }, { text: "La elección de un mapa, porque toda incidencia debe visualizarse geográficamente", isCorrect: false }] }
];

const ra5Questions = [
  { question: "Una cadena baja ventas en varias tiendas. Al cruzar stock y tráfico se ve que algunas tienen roturas y otras baja conversión. ¿Qué demuestra el caso?", options: [{ text: "La misma caída puede requerir acciones distintas según la causa", isCorrect: true }, { text: "La conversión de visitantes nunca ayuda a interpretar ventas", isCorrect: false }, { text: "Todas las tiendas deben recibir la misma promoción para simplificar la respuesta operativa", isCorrect: false }, { text: "El stock no debe integrarse porque pertenece a operaciones y no a ventas", isCorrect: false }] },
  { question: "Una campaña tiene muchos clics pero pocas compras. ¿Qué análisis ayuda a localizar el problema?", options: [{ text: "Medir solo impresiones porque son siempre el mejor indicador de rentabilidad", isCorrect: false }, { text: "Sumar clics e ingresos como si fueran la misma unidad de medida", isCorrect: false }, { text: "Eliminar el canal del análisis para que no se vea bajo rendimiento", isCorrect: false }, { text: "Revisar el embudo de conversión por fases", isCorrect: true }] },
  { question: "Una empresa evalúa una herramienta BI solo por precio de licencia. ¿Qué está ignorando?", options: [{ text: "Que el coste total incluye implantación, formación, mantenimiento, infraestructura, conectores y trabajo de equipos", isCorrect: true }, { text: "Que las licencias son siempre irrelevantes en cualquier proyecto empresarial", isCorrect: false }, { text: "Que BI no requiere inversión si ya existen hojas de cálculo", isCorrect: false }, { text: "Que una herramienta barata siempre tendrá mejor gobierno del dato", isCorrect: false }] },
  { question: "El equipo técnico construye un modelo correcto, pero irrelevante para negocio. ¿Qué rol faltó o participó poco?", options: [{ text: "Compresor de archivos, porque reduce tamaño de datos", isCorrect: false }, { text: "Usuario clave o analista de negocio", isCorrect: true }, { text: "Motor de visualización, porque siempre define objetivos estratégicos", isCorrect: false }, { text: "Calendario del sistema operativo, porque decide KPIs", isCorrect: false }] },
  { question: "Un informe mensual financiero es fiable, auditado y basado en ERP. ¿Cuándo podría no bastar un enfoque BI tradicional?", options: [{ text: "Cuando el objetivo sea tener una versión común y trazable de cifras internas", isCorrect: false }, { text: "Cuando haya que reaccionar a eventos web, redes o fraude casi en tiempo real", isCorrect: true }, { text: "Cuando se necesite controlar permisos y trazabilidad de indicadores financieros", isCorrect: false }, { text: "Cuando la pregunta sea facturación mensual por zona con datos estructurados y estables", isCorrect: false }] },
  { question: "Una empresa tiene muchos datos de ventas, campañas y soporte, pero sus decisiones siguen basándose en intuición. ¿Qué aporta BI en este caso?", options: [{ text: "Acumular más tablas sin cambiar cómo se interpretan ni qué decisiones deben mejorar", isCorrect: false }, { text: "Sustituir todo criterio profesional por gráficos automáticos", isCorrect: false }, { text: "Usar solo informes históricos aunque la empresa necesite reaccionar ante cambios recientes", isCorrect: false }, { text: "Convertir datos en información útil para decidir", isCorrect: true }] },
  { question: "Una solución BI permite consultar datos personales de clientes a perfiles que solo necesitan agregados. ¿Qué principio de adopción se está incumpliendo?", options: [{ text: "Diseño visual, porque bastaría con cambiar el tipo de gráfico para proteger datos", isCorrect: false }, { text: "Seguridad, minimización y cumplimiento", isCorrect: true }, { text: "Atribución de campañas, porque toda privacidad depende del último clic", isCorrect: false }, { text: "Escalabilidad, porque todos los problemas de privacidad se resuelven añadiendo más servidores", isCorrect: false }] },
  { question: "Si se excluyen pedidos cancelados de \"pedidos válidos\", ¿qué debe hacerse?", options: [{ text: "Ocultar la fórmula porque los usuarios solo necesitan ver el número final", isCorrect: false }, { text: "Aplicar el criterio solo en algunos informes para adaptarse a cada reunión sin avisar", isCorrect: false }, { text: "Documentar la métrica y aplicar la regla de forma consistente", isCorrect: true }, { text: "Cambiar el criterio cada semana para reflejar la opinión del último usuario", isCorrect: false }] },
  { question: "Se quiere calcular tasa de conversión como pedidos confirmados entre sesiones. ¿Qué definición es necesaria?", options: [{ text: "El color de cada canal en el gráfico final, aunque todavía no estén integradas sesiones y pedidos", isCorrect: false }, { text: "La longitud del nombre técnico de las columnas usadas", isCorrect: false }, { text: "El número máximo de gráficos que tendrá el dashboard", isCorrect: false }, { text: "Qué cuenta como sesión y qué cuenta como pedido confirmado", isCorrect: true }] },
  { question: "Una regla de calidad detecta que el 40 % de clientes llega sin identificador en una carga diaria. ¿Qué debería ocurrir?", options: [{ text: "Publicar el informe sin avisar porque el proceso técnico terminó correctamente", isCorrect: false }, { text: "Activar una alerta y revisar la carga antes de usar indicadores afectados", isCorrect: true }, { text: "Convertir los identificadores vacíos en clientes nuevos para aumentar captación", isCorrect: false }, { text: "Borrar toda la historia previa para que la carga actual sea la única referencia", isCorrect: false }] },
  { question: "Una empresa cree que \"más datos\" siempre implica mejores decisiones. ¿Qué riesgo está ignorando?", options: [{ text: "Que todas las decisiones estratégicas deban tomarse sin datos para ser creativas", isCorrect: false }, { text: "Que el exceso de datos pueda añadir ruido si no son relevantes ni están bien definidos", isCorrect: true }, { text: "Que los dashboards no puedan trabajar nunca con fuentes externas", isCorrect: false }, { text: "Que el Big Data impida cualquier análisis predictivo por definición", isCorrect: false }] },
  { question: "Un informe de marketing muestra muchos clics y pocas ventas. ¿Qué decisión debería facilitar?", options: [{ text: "Agrupar todos los canales para no distinguir bajo rendimiento", isCorrect: false }, { text: "Eliminar coste de campaña para que el ROAS parezca mayor", isCorrect: false }, { text: "Revisar audiencia, mensaje o página de destino", isCorrect: true }, { text: "Mantener inversión solo porque el volumen de clics es alto, aunque no se convierta en ingresos", isCorrect: false }] },
  { question: "Una empresa vende en euros, dólares y libras, y quiere comparar ingresos globales. ¿Qué preparación necesita?", options: [{ text: "Convertir importes a una moneda común con criterio definido", isCorrect: true }, { text: "Sumar todos los importes tal como llegan porque todos representan dinero aunque estén en monedas distintas", isCorrect: false }, { text: "Ordenar ventas por país para evitar calcular tipos de cambio", isCorrect: false }, { text: "Cambiar el símbolo visual de moneda en el dashboard sin transform los datos", isCorrect: false }] },
  { question: "Un proyecto publica el primer informe y lo da por terminado. ¿Qué visión es más adecuada?", options: [{ text: "La mejora continua solo aplica a campañas, no a modelos analíticos", isCorrect: false }, { text: "El BI debe mantenerse, corregirse y adaptarse", isCorrect: true }, { text: "El BI termina al publicar porque cualquier cambio posterior compromete la estabilidad de la herramienta", isCorrect: false }, { text: "Los usuarios ya no deben aportar feedback tras la publicación", isCorrect: false }] },
  { question: "Antes de publicar un modelo BI, la facturación no coincide con contabilidad. ¿Qué actitud es correcta?", options: [{ text: "Borrar el indicador de facturación para evitar discusión con finanzas", isCorrect: false }, { text: "Publicar igualmente porque toda diferencia entre sistemas es normal y no requiere explicación", isCorrect: false }, { text: "Forzar el dato BI a coincidir sin investigar filtros, devoluciones, impuestos o fechas", isCorrect: false }, { text: "Conciliar criterios y documentar diferencias", isCorrect: true }] },
  { question: "Una organización tiene hojas aisladas, informes manuales y poca trazabilidad. ¿Qué nivel de madurez describe mejor?", options: [{ text: "Integrado, porque ya existe un modelo común con KPIs definidos", isCorrect: false }, { text: "Inicial", isCorrect: true }, { text: "Data-driven, porque todas las decisiones están gobernadas por modelos compartidos y procesos automatizados", isCorrect: false }, { text: "Avanzado, porque cualquier hoja de cálculo equivale a analítica predictiva", isCorrect: false }] },
  { question: "En NovaMarket, pedidos sin campaña se clasifican como \"sin campaña atribuida\". ¿Qué evita esta regla?", options: [{ text: "Que sea necesario documentar criterios de integración", isCorrect: false }, { text: "Que todos los pedidos directos se asignen artificialmente a la campaña con mayor presupuesto", isCorrect: true }, { text: "Que existan pedidos procedentes de tráfico directo", isCorrect: false }, { text: "Que puedan analizarse ventas por canal en cualquier informe", isCorrect: false }] },
  { question: "Un campo de importe aparece vacío en algunas operaciones. ¿Qué tratamiento es más prudente?", options: [{ text: "Convertir el campo a texto para que los valores vacíos no afecten a cálculos", isCorrect: false }, { text: "Sustituir todos los vacíos por cero para evitar huecos, aunque puedan significar dato pendiente o no aplicable", isCorrect: false }, { text: "Analizar el significado del vacío antes de imputar, eliminar o marcar", isCorrect: true }, { text: "Eliminar toda la fuente porque contiene algunos valores ausentes", isCorrect: false }] },
  { question: "Un equipo quiere calcular margen por producto. Tiene ventas, pero no costes. ¿Qué decisión es más correcta?", options: [{ text: "Usar el precio más alto del catálogo como coste aproximado en todos los productos", isCorrect: false }, { text: "Incorporar una fuente de costes antes de definir la métrica", isCorrect: true }, { text: "Sustituir margen por número de clics, aunque mida otro fenómeno distinto", isCorrect: false }, { text: "Calcular margen como ventas totales porque ambas cifras suelen evolucionar en la misma dirección", isCorrect: false }] },
  { question: "Durante el perfilado aparecen fechas futuras, correos sin arroba y códigos postales con formatos distintos. ¿Qué función cumple este paso?", options: [{ text: "Crear directamente visualizaciones ejecutivas sin intervención técnica", isCorrect: false }, { text: "Sustituir la limpieza porque ya se han visto las anomalías principales", isCorrect: false }, { text: "Detectar patrones de calidad antes de transformar", isCorrect: true }, { text: "Corregir automáticamente todos los problemas sin necesidad de reglas ni validación posterior", isCorrect: false }] },
  { question: "Un comercio quiere detectar clientes con riesgo de abandono para priorizar retención. ¿Qué caso de uso está mejor formulado?", options: [{ text: "Analizar clientes de forma general, sin definir acción, fuentes ni criterio de riesgo", isCorrect: false }, { text: "Crear un gráfico con todos los clientes ordenados alfabéticamente", isCorrect: false }, { text: "Enviar la misma promoción a todos los clientes para evitar segmentación", isCorrect: false }, { text: "Estimar probabilidad de abandono y activar acciones según valor esperado", isCorrect: true }] },
  { question: "Una ficha de indicador incluye fórmula, fuente, frecuencia, responsable y exclusiones. ¿Qué problema ayuda a evitar?", options: [{ text: "Que existan responsables de negocio", isCorrect: false }, { text: "Que haya que validar datos antes de publicar", isCorrect: false }, { text: "Que el indicador pueda usarse en más de un informe", isCorrect: false }, { text: "Que distintos usuarios interpreten el KPI de formas incompatibles", isCorrect: true }] },
  { question: "En la primera versión de un proyecto BI se decide dejar fuera predicción avanzada y recomendaciones. ¿Qué principio refleja?", options: [{ text: "Publicar antes de definir métricas para ganar velocidad", isCorrect: false }, { text: "Evitar integrar fuentes porque toda integración es innecesaria", isCorrect: false }, { text: "Renunciar definitivamente a cualquier analítica avanzada futura", isCorrect: false }, { text: "Delimitar alcance para construir una base fiable", isCorrect: true }] },
  { question: "Un cliente compró recientemente, compra a menudo y gasta mucho. ¿Qué lectura permite RFM?", options: [{ text: "Que su valor solo puede medirse con menciones en redes sociales", isCorrect: false }, { text: "Que debe excluirse de fidelización porque ya aporta valor suficiente y no necesita seguimiento", isCorrect: false }, { text: "Que no puede segmentarse porque RFM solo sirve para productos", isCorrect: false }, { text: "Que puede ser un cliente prioritario para fidelización", isCorrect: true }] },
  { question: "Un análisis de sentimiento clasifica como positivo un mensaje sarcástico. ¿Qué precaución se confirma?", options: [{ text: "Que el sentimiento automático es orientativo", isCorrect: true }, { text: "Que el BI solo debe usar datos contables", isCorrect: false }, { text: "Que las redes sociales no pueden aportar ningún valor analítico", isCorrect: false }, { text: "Que todo texto de redes debe convertirse automáticamente en métrica exacta sin revisión ni contexto", isCorrect: false }] },
  { question: "Dos pedidos tienen mismo importe y fecha, pero distintos identificadores. ¿Qué error sería peligroso al limpiar duplicados?", options: [{ text: "Revisar claves compuestas antes de decidir si son duplicados", isCorrect: false }, { text: "Documentar la regla usada para futuras cargas", isCorrect: false }, { text: "Eliminarlos solo por parecer iguales en pocos campos", isCorrect: true }, { text: "Consultar el sistema origen si hay dudas sobre identidad del pedido", isCorrect: false }] },
  { question: "Un informe ejecutivo incluye 40 gráficos detallados de producto, campaña, pedido y cliente. ¿Qué problema puede tener?", options: [{ text: "Mejorar automáticamente la adopción por tener más elementos visuales", isCorrect: false }, { text: "Ser demasiado accionable porque muestra pocos detalles técnicos", isCorrect: false }, { text: "Saturar a dirección y ocultar desviaciones clave", isCorrect: true }, { text: "Impedir cualquier análisis posterior en informes específicos", isCorrect: false }] },
  { question: "Una empresa SaaS detecta que quienes no usan una función clave en 15 días cancelan más. ¿Qué acción usa mejor el insight?", options: [{ text: "Ocultar la función clave para que el patrón deje de medirse", isCorrect: false }, { text: "Activar onboarding y contacto proactivo", isCorrect: true }, { text: "Enviar la misma factura con descuento a todos los clientes sin analizar valor ni riesgo", isCorrect: false }, { text: "Esperar al cierre trimestral para mirar solo cancelaciones agregadas sin intervención sobre usuarios en riesgo", isCorrect: false }] },
  { question: "Un informe solo muestra qué ocurrió. Otro explica causas, estima riesgos y recomienda acciones. ¿Qué nivel supera lo puramente descriptivo?", options: [{ text: "La duplicación manual de informes en hojas separadas para que cada área tenga su propia versión", isCorrect: false }, { text: "La analítica diagnóstica, predictiva o prescriptiva", isCorrect: true }, { text: "El aumento de colores en las tarjetas KPI", isCorrect: false }, { text: "La eliminación de preguntas de negocio para dejar solo datos disponibles", isCorrect: false }] },
  { question: "Una campaña genera muchos ingresos iniciales pero también muchas devoluciones y bajo margen. ¿Qué conclusión es más razonable?", options: [{ text: "Evaluar rentabilidad con margen, devoluciones y valor de cliente", isCorrect: true }, { text: "Atribuir todas las devoluciones a atención al cliente sin revisar producto ni expectativas", isCorrect: false }, { text: "Detener todas las campañas porque una de ellas tiene problemas de calidad de venta", isCorrect: false }, { text: "Mantenerla sin cambios porque los ingresos iniciales son siempre el único criterio válido de marketing", isCorrect: false }] },
  { question: "Separar hechos de ventas y hechos de devoluciones en el modelo evita un problema. ¿Cuál?", options: [{ text: "Que las devoluciones puedan analizarse por motivo, producto o fecha de forma independiente", isCorrect: false }, { text: "Que existan métricas combinadas como ingresos netos o tasa de devolución", isCorrect: false }, { text: "Que el modelo use dimensiones de fecha, producto o cliente", isCorrect: false }, { text: "Que ventas y devoluciones se mezclen como si fueran eventos idénticos", isCorrect: true }] },
  { question: "Una marca detecta muchas menciones negativas en una zona y las cruza con incidencias técnicas. ¿Qué valor aporta BI?", options: [{ text: "Ignorar redes sociales porque no son datos estructurados de ERP", isCorrect: false }, { text: "Relacionar conversación social con incidencias para priorizar respuesta", isCorrect: true }, { text: "Contar menciones sin conectarlas con operaciones, aunque existan datos internos que podrían explicar el problema", isCorrect: false }, { text: "Sustituir soporte técnico por análisis de sentimiento automático", isCorrect: false }] },
  { question: "Un sistema usa `enviado`, otro `shipped`, otro `E` y otro `2` para el mismo estado. ¿Qué debe hacerse para informar correctamente?", options: [{ text: "Usar el valor más corto porque ocupa menos espacio en la visualización", isCorrect: false }, { text: "Mantener todos los valores separados para que el dashboard refleje la complejidad técnica de cada sistema", isCorrect: false }, { text: "Mapearlos a una categoría común", isCorrect: true }, { text: "Eliminar los pedidos enviados porque aparecen con demasiadas variantes", isCorrect: false }] },
  { question: "Marketing define \"cliente activo\" como quien abre correos, y finanzas como quien compra. ¿Qué problema debe resolver el BI?", options: [{ text: "Cambiar el tipo de gráfico para que ambas cifras parezcan visualmente equivalentes", isCorrect: false }, { text: "Acordar una definición común o distinguir indicadores diferentes", isCorrect: true }, { text: "Elegir la cifra más alta para mejorar la percepción de resultados ante dirección", isCorrect: false }, { text: "Ocultar el indicador porque dos áreas no coinciden en su interpretación inicial", isCorrect: false }] },
  { question: "Una cadena minorista añade datos de sensores, redes sociales y navegación web a su BI tradicional. ¿Qué justifica usar capacidades Big Data?", options: [{ text: "Que todas las fuentes sean pequeñas, estables y relacionales, sin necesidad de procesamiento escalable", isCorrect: false }, { text: "Que se elimine la necesidad de definir indicadores de negocio", isCorrect: false }, { text: "Que los informes tengan más colores y gráficos, aunque las fuentes sigan siendo las mismas", isCorrect: false }, { text: "Que aumenten volumen, velocidad y variedad de datos", isCorrect: true }] },
  { question: "En un entorno Big Data se conserva una zona bruta, una depurada y una analítica. ¿Qué ventaja aporta esta separación?", options: [{ text: "Mantener trazabilidad y preparar capas distintas para distintos usos", isCorrect: true }, { text: "Obligar a que todos los usuarios consulten datos sin limpiar para evitar interpretaciones filtradas", isCorrect: false }, { text: "Hacer que cualquier dato sea correcto solo por pasar por más carpetas", isCorrect: false }, { text: "Evitar por completo la necesidad de documentación de procesos", isCorrect: false }] },
  { question: "Un cliente ve anuncio, busca la marca, abre un correo y compra días después. ¿Qué riesgo tiene atribuir todo al último clic?", options: [{ text: "Que se sobrevaloren canales finales y se infravaloren contactos que generaron interés inicial", isCorrect: true }, { text: "Que no pueda medirse ninguna conversión en comercio electrónico", isCorrect: false }, { text: "Que desaparezca la necesidad de conocer coste de campaña", isCorrect: false }, { text: "Que se valore exactamente igual cada canal aunque haya participado de forma distinta en la conversión", isCorrect: false }] },
  { question: "Ventas físicas se registran por fecha de caja y ecommerce por fecha de pedido. ¿Qué problema aparece al compararlas directamente?", options: [{ text: "Falta de comparabilidad temporal", isCorrect: true }, { text: "Falta de análisis de sentimiento", isCorrect: false }, { text: "Exceso de visualizaciones en el informe", isCorrect: false }, { text: "Imposibilidad absoluta de comparar canales", isCorrect: false }] },
  { question: "Un responsable regional solo debe ver ventas de su región. ¿Qué mecanismo puede aplicarse?", options: [{ text: "Eliminar la dimensión región del modelo", isCorrect: false }, { text: "Publicar todos los datos y pedir verbalmente que no consulte otras regiones", isCorrect: false }, { text: "Seguridad a nivel de fila", isCorrect: true }, { text: "Cambiar el color de las regiones no autorizadas", isCorrect: false }] },
  { question: "En NovaMarket, marketing habla de conversiones, finanzas de ingresos netos y atención al cliente de devoluciones. ¿Qué necesita la dirección?", options: [{ text: "Una visión integrada con métricas definidas", isCorrect: true }, { text: "Más hojas manuales sin responsables de fuente", isCorrect: false }, { text: "Que cada área mantenga sus cifras aisladas para evitar discusiones sobre definiciones", isCorrect: false }, { text: "Un único gráfico de ventas brutas que sustituya todas las métricas", isCorrect: false }] }
];


// --- COMPONENTE QUIZ INDIVIDUAL ---
const QuizView = ({ title, rawQuestions, onBackToMenu }) => {
  const [gameState, setGameState] = useState('playing'); // start directly at 'playing'
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [pendingAction, setPendingAction] = useState(null);

  useEffect(() => {
    // Se ejecuta al cargar el componente directamente para mezclar el orden inicial
    const shuffledQuestions = shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestions(shuffledQuestions);
    setAnswers({});
    setCurrentIdx(0);
    setGameState('playing');
  }, [rawQuestions]);

  const executeRestart = () => {
    const shuffledQuestions = shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestions(shuffledQuestions);
    setAnswers({});
    setCurrentIdx(0);
    setGameState('playing');
    setPendingAction(null);
  };

  const handleRestart = () => {
    if (gameState === 'playing' && Object.keys(answers).length < questions.length) {
      setPendingAction('restart');
      return;
    }
    executeRestart();
  };

  const handleBack = () => {
    if (gameState === 'playing' && Object.keys(answers).length < questions.length) {
      setPendingAction('back');
    } else {
      onBackToMenu();
    }
  };

  const handleSelectOption = (optionIndex) => {
    if (answers[currentIdx] !== undefined) return;
    setAnswers(prev => ({
      ...prev,
      [currentIdx]: optionIndex
    }));
  };

  if (questions.length === 0) return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Cargando test...</div>;

  const currentQuestion = questions[currentIdx];
  const hasAnsweredCurrent = answers[currentIdx] !== undefined;
  const totalAnswered = Object.keys(answers).length;
  const correctAnswersCount = Object.entries(answers).filter(
    ([qIdx, optIdx]) => questions[qIdx].options[optIdx].isCorrect
  ).length;

  if (gameState === 'results') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 animate-in zoom-in duration-300">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-400">Resultados Finales</h2>
        <h3 className="text-xl text-slate-400 mb-6">{title}</h3>
        <div className="text-6xl font-black mb-6">
          <span className={correctAnswersCount >= (questions.length / 2) ? 'text-green-500' : 'text-red-500'}>
            {correctAnswersCount}
          </span>
          <span className="text-slate-500"> / {questions.length}</span>
        </div>
        <p className="text-xl text-slate-300 mb-8">
          Has respondido correctamente el {Math.round((correctAnswersCount / questions.length) * 100)}% de las preguntas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => { setGameState('playing'); setCurrentIdx(0); }} className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200">
            <Search size={24} /> REVISAR RESPUESTAS
          </button>
          <button onClick={handleRestart} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200">
            <RotateCcw size={24} /> REINICIAR CON ORDEN NUEVO
          </button>
          <button onClick={onBackToMenu} className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200">
            <Home size={24} /> MENÚ
          </button>
        </div>
      </div>
    );
  }

  // --- VISTA DE JUEGO / REVISIÓN ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 flex flex-col animate-in fade-in duration-300">
      
      {/* HEADER DE PROGRESO */}
      <div className="max-w-4xl w-full mx-auto flex justify-between items-center mb-6">
        <div>
          <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Progreso</span>
          <div className="text-2xl font-bold">{totalAnswered} <span className="text-slate-500">/ {questions.length}</span></div>
        </div>
        
        <button onClick={handleBack} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800">
          <Home size={20} /> <span className="hidden sm:inline">Menú Principal</span>
        </button>

        <div className="text-right">
          <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Aciertos</span>
          <div className="text-2xl font-bold text-green-500">{correctAnswersCount}</div>
        </div>
      </div>

      {/* CONTENEDOR PREGUNTA */}
      <div className="max-w-4xl w-full mx-auto bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-6 md:p-10 flex-grow flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            <span className="text-blue-500 mr-2">{currentIdx + 1}.</span> 
            {currentQuestion.question}
          </h2>
        </div>

        <div className="flex flex-col gap-3 mb-10 flex-grow">
          {currentQuestion.options.map((option, optIdx) => {
            const isSelected = answers[currentIdx] === optIdx;
            let btnClass = "text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ";
            
            if (!hasAnsweredCurrent) {
              btnClass += "bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-blue-500 cursor-pointer";
            } else {
              if (option.isCorrect) {
                btnClass += "bg-green-900/30 border-green-500 text-green-300";
              } else if (isSelected && !option.isCorrect) {
                btnClass += "bg-red-900/30 border-red-500 text-red-300";
              } else {
                btnClass += "bg-slate-800/50 border-slate-800 text-slate-500 opacity-60";
              }
            }

            return (
              <button key={optIdx} onClick={() => handleSelectOption(optIdx)} disabled={hasAnsweredCurrent} className={btnClass}>
                <span className="text-lg">{option.text}</span>
                {hasAnsweredCurrent && option.isCorrect && <CheckCircle className="text-green-500 flex-shrink-0 ml-4" />}
                {hasAnsweredCurrent && isSelected && !option.isCorrect && <XCircle className="text-red-500 flex-shrink-0 ml-4" />}
              </button>
            );
          })}
        </div>

        {/* NAVEGACIÓN INFERIOR */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <button onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))} disabled={currentIdx === 0} className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronLeft size={20} /> Anterior
          </button>

          {totalAnswered === questions.length && currentIdx === questions.length - 1 ? (
            <button onClick={() => setGameState('results')} className="px-8 py-3 rounded-lg font-bold bg-green-600 hover:bg-green-500 text-white transition-colors">
              Ver Resultados
            </button>
          ) : (
            <button onClick={() => setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1))} disabled={currentIdx === questions.length - 1} className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              Siguiente <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      {/* MAPA DE PREGUNTAS RÁPIDO */}
      <div className="max-w-4xl w-full mx-auto mt-8 bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Mapa de preguntas</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => {
            const answered = answers[idx] !== undefined;
            const isCorrect = answered && q.options[answers[idx]].isCorrect;
            
            let badgeClass = "w-10 h-10 rounded-md font-bold flex items-center justify-center text-sm cursor-pointer transition-colors border-2 ";
            
            if (currentIdx === idx) {
              badgeClass += "border-blue-500 ring-2 ring-blue-500/50 ";
            } else {
              badgeClass += "border-transparent ";
            }

            if (!answered) {
              badgeClass += "bg-slate-800 text-slate-400 hover:bg-slate-700";
            } else if (isCorrect) {
              badgeClass += "bg-green-600/20 text-green-400";
            } else {
              badgeClass += "bg-red-600/20 text-red-400";
            }

            return (
              <button key={idx} onClick={() => setCurrentIdx(idx)} className={badgeClass}>
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* MODAL DE CONFIRMACIÓN CUSTOM */}
      {pendingAction && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold text-white mb-2">¿Estás seguro?</h3>
            <p className="text-slate-300 mb-6">
              Se perderá tu progreso actual en el test.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setPendingAction(null)}
                className="px-4 py-2 rounded-lg font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  if (pendingAction === 'back') onBackToMenu();
                  if (pendingAction === 'restart') executeRestart();
                }}
                className="px-4 py-2 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-500 transition-colors"
              >
                Sí, salir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL APP ---
export default function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  if (selectedQuiz === 'RA3') return <QuizView title="Test RA3 de SBD" rawQuestions={ra3Questions} onBackToMenu={() => setSelectedQuiz(null)} />;
  if (selectedQuiz === 'RA4') return <QuizView title="Test RA4 de SBD" rawQuestions={ra4Questions} onBackToMenu={() => setSelectedQuiz(null)} />;
  if (selectedQuiz === 'RA5') return <QuizView title="Test RA5 de BDA" rawQuestions={ra5Questions} onBackToMenu={() => setSelectedQuiz(null)} />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-800 text-center">
        
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400 tracking-tight">
            Cuestionarios finales de Rubén EV3
          </h1>
          <p className="text-xl text-slate-400">Selecciona el módulo para comenzar la prueba interactiva.</p>
        </div>

        <div className="flex flex-col gap-5">
          <button 
            onClick={() => setSelectedQuiz('RA3')}
            className="flex flex-col items-center justify-center p-6 border-2 border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-blue-500 rounded-2xl transition-all duration-300 group"
          >
            <span className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Test RA3 de SBD</span>
            <span className="text-slate-400 text-sm">{ra3Questions.length} Preguntas</span>
          </button>

          <button 
            onClick={() => setSelectedQuiz('RA4')}
            className="flex flex-col items-center justify-center p-6 border-2 border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-blue-500 rounded-2xl transition-all duration-300 group"
          >
            <span className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Test RA4 de SBD</span>
            <span className="text-slate-400 text-sm">{ra4Questions.length} Preguntas</span>
          </button>

          <button 
            onClick={() => setSelectedQuiz('RA5')}
            className="flex flex-col items-center justify-center p-6 border-2 border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-blue-500 rounded-2xl transition-all duration-300 group"
          >
            <span className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Test RA5 de BDA</span>
            <span className="text-slate-400 text-sm">{ra5Questions.length} Preguntas</span>
          </button>
        </div>

      </div>
    </div>
  );
}