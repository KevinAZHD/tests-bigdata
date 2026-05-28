export const ra2Questions = [
  {
    question: "Según el inicio del capítulo 4, ¿qué se busca al presentar casos de uso de Big Data?",
    options: [
      { text: "Mostrar únicamente diagramas ideales sin entrar en problemas reales", isCorrect: false },
      { text: "Presentar una lista cerrada de herramientas que hay que instalar obligatoriamente", isCorrect: false },
      { text: "Conectar conceptos abstractos con escenarios concretos como logs, clickstream o loT", isCorrect: true },
      { text: "Demostrar que Big Data resuelve cualquier problema sin diseño ni planificación", isCorrect: false }
    ],
    explanation: "Caso de uso = conectar teoría con vida real. Logs, clickstream, IoT son ejemplos concretos que dan sentido a conceptos abstractos."
  },
  {
    question: "¿Qué problema práctico empuja a pasar de logs locales a un sistema de logging centralizado?",
    options: [
      { text: "No poder generar gráficos de colores en los paneles de monitorización", isCorrect: false },
      { text: "Pérdida automática de los logs tras reiniciar cualquier proceso o máquina", isCorrect: false },
      { text: "No saber en qué máquina mirar cuando una incidencia afecta a múltiples servicios", isCorrect: true },
      { text: "Evitar configurar permisos de lectura del sistema de archivos local", isCorrect: false }
    ],
    explanation: "Muchos servicios = muchas máquinas. Si incidencia toca varios, ¿en cuál miras? Por eso centralizar logs: todo en un sitio, buscar fácil."
  },
  {
    question: "En una arquitectura de logs con agentes, Kafka y ElasticSearch, ¿qué papel típico juega Kafka?",
    options: [
      { text: "Actuar como cola distribuida que recibe, amortigua y reparte los eventos de log", isCorrect: true },
      { text: "Servir directamente los dashboards finales de Kibana al usuario de negocio", isCorrect: false },
      { text: "Indexar y buscar cadenas de texto dentro de cada mensaje de log recibido", isCorrect: false },
      { text: "Agregar métricas numéricas calculando promedio y percentiles sobre los logs", isCorrect: false }
    ],
    explanation: "Kafka = cola distribuida. Recibe eventos, los guarda temporalmente, y los reparte a quien los necesite (ElasticSearch, Spark...). No indexa ni muestra dashboards, solo transporta."
  },
  {
    question: "¿Por qué muchas organizaciones pasan de solo usar Google Analytics a capturar eventos propios de clickstream?",
    options: [
      { text: "Para dejar de depender de cualquier servicio de analítica y eliminar el tracking público", isCorrect: false },
      { text: "Para responder preguntas avanzadas sobre recorridos, experimentos A/B y modelos de recomendación", isCorrect: true },
      { text: "Porque Google Analytics no funciona con eventos del navegador en móviles nativos", isCorrect: false },
      { text: "Para reducir drásticamente el coste mensual de licencias sin perder funcionalidad", isCorrect: false }
    ],
    explanation: "Google Analytics da info básica. Pero si quieres saber recorrido completo del usuario, hacer A/B testing o recomendar productos, necesitas capturar tus propios eventos clickstream."
  },
  {
    question: "¿Qué característica clave tienen los datos de sensores en un escenario loT según el texto?",
    options: [
      { text: "Provienen siempre de uno o dos dispositivos muy potentes ubicados en un único centro", isCorrect: false },
      { text: "Cada dispositivo envía poca información, pero el conjunto genera un flujo continuo relevante", isCorrect: true },
      { text: "Son siempre estructurados, con esquema fijo y validados antes de enviarse a la nube", isCorrect: false },
      { text: "Requieren siempre sincronización centralizada en origen antes de comenzar a procesar", isCorrect: false }
    ],
    explanation: "Un sensor solo manda poquito dato. Pero miles de sensores juntos = río continuo de datos. Volumen viene de la cantidad de dispositivos, no de uno solo."
  },
  {
    question: "¿Qué describe mejor la relación entre batch y streaming en un caso como detección de fraude?",
    options: [
      { text: "Batch decide en tiempo real y streaming recalcula lentamente los históricos cada noche", isCorrect: false },
      { text: "Streaming aporta decisiones rápidas y batch aporta análisis profundos sobre el histórico completo", isCorrect: true },
      { text: "Streaming entrena el modelo y batch solo carga los datos nuevos en la base", isCorrect: false },
      { text: "Ambos duplican el mismo cálculo para garantizar coherencia por comparación diaria", isCorrect: false }
    ],
    explanation: "Streaming = decisión rápida (¿esta transacción es fraude AHORA?). Batch = análisis profundo sobre todo el histórico (patrones, reentrenar modelos). Se complementan."
  },
  {
    question: "¿Por qué los \"small files\" son un problema frecuente en arquitecturas de logs y eventos?",
    options: [
      { text: "Porque el sistema dedica mucho tiempo a abrir y cerrar miles de archivos minúsculos en lugar de procesar datos", isCorrect: true },
      { text: "Porque los ficheros pequeños no permiten aplicar compresión efectiva en ningún formato conocido", isCorrect: false },
      { text: "Porque HDFS y S3 cobran por fichero, haciendo que muchos archivos pequeños sean muy caros", isCorrect: false },
      { text: "Porque impiden la ejecución paralela al forzar que todo se lea secuencialmente desde disco", isCorrect: false }
    ],
    explanation: "Miles de archivitos pequeños = sistema pierde tiempo abriendo y cerrando ficheros en vez de leer datos. Overhead de gestión mata rendimiento."
  },
  {
    question: "¿Qué efecto producen los hotspots y el skew en sistemas distribuidos de datos o cómputo?",
    options: [
      { text: "Reparten de forma perfecta la carga para aprovechar al máximo todos los nodos sin desequilibrio", isCorrect: false },
      { text: "Hacen que algunas particiones o tareas se saturen mientras otras quedan casi ociosas", isCorrect: true },
      { text: "Duplican el consumo de memoria en todos los nodos por igual hasta agotar el clúster", isCorrect: false },
      { text: "Optimizan el tiempo total al concentrar cómputo donde hay más datos acumulados", isCorrect: false }
    ],
    explanation: "Hotspot/skew = desequilibrio. Unas particiones se saturan, otras no hacen nada. Job entero espera al más lento. Reparto desigual = desperdicio."
  },
  {
    question: "¿Cómo ajustan muchas empresas maduras el almacenamiento de logs para equilibrar coste y capacidad de análisis?",
    options: [
      { text: "Guardan únicamente métricas agregadas y descartan todos los eventos individuales desde el inicio", isCorrect: false },
      { text: "Mantienen todo en alta disponibilidad con réplicas sincronas durante años sin compresión", isCorrect: false },
      { text: "Combinan logs crudos baratos a largo plazo con una ventana corta indexada y métricas agregadas", isCorrect: true },
      { text: "Borran los logs al cabo de 24 horas para cumplir con normativas de privacidad estrictas", isCorrect: false }
    ],
    explanation: "Estrategia inteligente: logs crudos baratos en almacenamiento frío (largo plazo), ventana corta indexada para buscar rápido (días/semanas), y métricas agregadas siempre disponibles."
  },
  {
    question: "Según el cierre del capítulo, ¿qué enfoque se propone al elegir tecnologías para un sistema Big Data?",
    options: [
      { text: "Optar siempre por la herramienta más nueva para evitar problemas de compatibilidad futura", isCorrect: false },
      { text: "Elegir únicamente tecnologías open source sin considerar las capacidades del equipo técnico", isCorrect: false },
      { text: "Partir del problema, los datos, los plazos, el presupuesto y la tolerancia al fallo", isCorrect: true },
      { text: "Seguir la arquitectura de referencia de alguna empresa grande sin adaptar nada al contexto", isCorrect: false }
    ],
    explanation: "No existe herramienta mágica. Primero entender: qué problema, qué datos, cuánto tiempo, cuánto dinero, cuánto fallo tolero. Luego elegir tecnología."
  },
  {
    question: "Según el capítulo, ¿qué relación distingue mejor escalabilidad de elasticidad?",
    options: [
      { text: "La escalabilidad mide únicamente latencias y la elasticidad solo throughput agregado", isCorrect: false },
      { text: "La escalabilidad describe cómo crece el sistema y la elasticidad cómo se adapta a la carga", isCorrect: true },
      { text: "La escalabilidad se refiere solo a hardware y elasticidad solo a software de aplicación", isCorrect: false },
      { text: "La escalabilidad aplica únicamente al batch mientras la elasticidad es solo para streaming", isCorrect: false }
    ],
    explanation: "Escalabilidad = capacidad de crecer (más datos, más usuarios). Elasticidad = capacidad de adaptarse dinámicamente a la carga (sube/baja recursos según demanda)."
  },
  {
    question: "¿Qué describe mejor el escalado vertical según el texto?",
    options: [
      { text: "Duplicar el número de réplicas de lectura en un clúster de bases de datos", isCorrect: false },
      { text: "Mover datos entre particiones para mejorar el balance de carga distribuido", isCorrect: false },
      { text: "Aumentar CPU, RAM and disco de una misma máquina haciéndola más grande", isCorrect: true },
      { text: "Reescribir código de forma más eficiente para reducir el consumo de recursos", isCorrect: false }
    ],
    explanation: "Escalado vertical = hacer máquina más grande. Más CPU, más RAM, más disco en la MISMA máquina. Como ponerle más músculo a un solo servidor."
  },
  {
    question: "¿Cuál de estas afirmaciones refleja mejor el escalado horizontal en sistemas distribuidos?",
    options: [
      { text: "Usar varias máquinas similares coordinadas en lugar de un único servidor gigante", isCorrect: true },
      { text: "Aumentar el ancho de banda de red entre el servidor central y los clientes finales", isCorrect: false },
      { text: "Sustituir discos mecánicos por SSD para multiplicar las IOPS de entrada y salida", isCorrect: false },
      { text: "Comprimir todos los datos almacenados para liberar espacio en un solo nodo grande", isCorrect: false }
    ],
    explanation: "Escalado horizontal = añadir más máquinas. En vez de un servidor gigante, muchos servidores normales coordinados. Repartes carga entre todos."
  },
  {
    question: "¿Qué idea capta mejor la elasticidad tal como se explica en el capítulo?",
    options: [
      { text: "Configurar manualmente un número fijo alto de nodos y no cambiarlo nunca", isCorrect: false },
      { text: "Crear siempre un clúster nuevo para cada job y destruirlo inmediatamente al terminar", isCorrect: false },
      { text: "Aumentar y reducir recursos automáticamente según métricas como CPU o tamaño de colas", isCorrect: true },
      { text: "Mantener todos los nodos encendidos siempre al máximo para evitar latencias de arranque", isCorrect: false }
    ],
    explanation: "Elasticidad = auto-escalar. CPU sube → añadir nodos. Carga baja → quitar nodos. Sistema se adapta solo según métricas. No manual, automático."
  },
  {
    question: "¿Cuál es el papel principal de las colas en un sistema elástico según el texto?",
    options: [
      { text: "Eliminar la necesidad de escalar consumidores porque la cola procesa mensajes por sí misma", isCorrect: false },
      { text: "Amortiguar picos permitiendo que productores y consumidores trabajen a ritmos diferentes", isCorrect: true },
      { text: "Garantizar que siempre haya un único consumidor activo para evitar competencia por mensajes", isCorrect: false },
      { text: "Reducir automáticamente el número de mensajes descartando los más antiguos del buffer", isCorrect: false }
    ],
    explanation: "Cola = amortiguador. Productor va rápido, consumidor va lento, cola absorbe el pico. Cada uno a su ritmo sin que nadie se rompa."
  },
  {
    question: "Además del coste económico, ¿qué otro coste importante introduce la escalabilidad horizontal?",
    options: [
      { text: "Añadir más discos locales siempre reduce la complejidad de la arquitectura de datos", isCorrect: false },
      { text: "Aumenta la complejidad y la coordinación entre nodos, particiones y reequilibrios", isCorrect: true },
      { text: "Elimina la necesidad de monitorizar porque cada nodo se gestiona de forma independiente", isCorrect: false },
      { text: "Reduce el tiempo necesario para entrenar al equipo en operaciones y mantenimiento del sistema", isCorrect: false }
    ],
    explanation: "Más máquinas = más cosas pueden fallar, coordinar, rebalancear particiones. No solo cuesta dinero, cuesta complejidad operacional."
  },
  {
    question: "¿Qué se entiende por throughput en el contexto de escalabilidad del capítulo?",
    options: [
      { text: "La cantidad de trabajo que el sistema realiza por unidad de tiempo", isCorrect: true },
      { text: "El porcentaje de CPU libre que queda disponible en cada nodo del clúster", isCorrect: false },
      { text: "El tiempo medio que tarda una petición individual desde que entra hasta que sale", isCorrect: false },
      { text: "El número de particiones configuradas en el sistema de mensajería de la plataforma", isCorrect: false }
    ],
    explanation: "Throughput = cuánto trabajo por segundo. Registros/s, GB/s, peticiones/s. Es cantidad de trabajo hecho por unidad de tiempo, no velocidad de una sola petición."
  },
  {
    question: "¿Cómo se define la latencia según el capítulo sobre escalabilidad?",
    options: [
      { text: "La cantidad total de datos almacenados en todos los nodos del sistema distribuido", isCorrect: false },
      { text: "El tiempo que transcurre desde que una petición entra hasta que se produce la respuesta", isCorrect: true },
      { text: "El número de mensajes procesados por segundo sumando todos los consumidores activos", isCorrect: false },
      { text: "El intervalo de tiempo entre dos ejecuciones consecutivas de un job batch programado", isCorrect: false }
    ],
    explanation: "Latencia = tiempo de respuesta. Desde que pides algo hasta que llega. Petición entra → respuesta sale. Ese tiempo es latencia."
  },
  {
    question: "¿Qué indica una utilización de CPU muy baja y estable en todos los nodos mientras se quejan de falta de recursos?",
    options: [
      { text: "Que el sistema está correctamente dimensionado y no necesita ajustes de capacidad alguna", isCorrect: false },
      { text: "Que probablemente la configuración de colas, límites o particiones está impidiendo usar bien la capacidad", isCorrect: true },
      { text: "Que la red está saturada y por eso los nodos no reciben suficiente carga para procesar", isCorrect: false },
      { text: "Que los jobs están optimizados al máximo y todo el procesamiento ocurre en memoria caché", isCorrect: false }
    ],
    explanation: "CPU baja pero dicen que faltan recursos = algo bloquea. Colas mal configuradas, límites de paralelismo, pocas particiones... La capacidad está ahí pero no se usa."
  },
  {
    question: "Según los patrones prácticos descritos, ¿por qué muchas organizaciones crean más particiones de Kafka de las que necesitan al principio?",
    options: [
      { text: "Aumentar la latencia de lectura para que los consumidores procesen más despacio de forma controlada", isCorrect: false },
      { text: "Facilitar que el sistema pueda escalar consumidores en el futuro sin rediseñar el topic", isCorrect: true },
      { text: "Forzar que cada productor escriba en todas las particiones de forma obligatoria y balanceada", isCorrect: false },
      { text: "Reducir el espacio total en disco necesario al fragmentar los mensajes entre más directorios", isCorrect: false }
    ],
    explanation: "Más particiones de Kafka ahora = poder añadir más consumidores después sin tocar el topic. Es pensar en el futuro. Particiones no se pueden bajar fácil."
  },
  {
    question: "¿Qué describe mejor un sistema distribuido según el capítulo?",
    options: [
      { text: "Un servidor único muy potente y centralizado", isCorrect: false },
      { text: "Conjunto de máquinas cooperando por red coherente", isCorrect: false },
      { text: "Varios programas independientes sin comunicación entre ellos", isCorrect: false },
      { text: "Grupo de procesos coordinados que aparentan un único sistema", isCorrect: true }
    ],
    explanation: "Sistema distribuido = varios procesos en varias máquinas que se coordinan y desde fuera parecen uno solo. La clave es la coordinación + transparencia."
  },
  {
    question: "¿En qué situación típica alguien acaba diciendo \"esto hay que distribuirlo\"?",
    options: [
      { text: "Cuando el servidor tiene recursos de sobra libres", isCorrect: false },
      { text: "Cuando disminuye el tráfico y baja el número de usuarios", isCorrect: false },
      { text: "Cuando informes tardan horas y el servidor se satura", isCorrect: true },
      { text: "Cuando las copias de seguridad caben cómodamente en disco", isCorrect: false }
    ],
    explanation: "Servidor saturado + informes que tardan horas = señal clara de que una máquina sola no puede. Ahí es cuando toca distribuir."
  },
  {
    question: "¿Por qué escalar solo \"hacia arriba\" una máquina tiene fecha de caducidad?",
    options: [
      { text: "Porque las instancias pequeñas no aceptan bases grandes", isCorrect: false },
      { text: "Porque la nube encarece mucho las máquinas gigantes demasiado", isCorrect: false },
      { text: "Porque los discos SSD siempre son más lentos que los mecánicos", isCorrect: false },
      { text: "Porque hay límites físicos y de coste al crecer una sola máquina", isCorrect: true }
    ],
    explanation: "Una máquina tiene tope de CPU, RAM, disco. Y cuanto más grande, más cara exponencialmente. Llega un punto donde no se puede meter más hierro."
  },
  {
    question: "¿Cómo debe plantearse el diseño frente a fallos en un sistema distribuido?",
    options: [
      { text: "Aceptar fallos frecuentes y diseñar para seguir operando", isCorrect: true },
      { text: "Suponer que las excepciones casi nunca ocurren en producción", isCorrect: false },
      { text: "Tratar cualquier error como un caso imposible de ver", isCorrect: false },
      { text: "Confiar en que todos los nodos funcionen siempre perfectos", isCorrect: false }
    ],
    explanation: "En distribuido, cosas SIEMPRE van a fallar. Disco muere, red cae, proceso se cuelga. Diseñar asumiendo que todo va perfecto = receta para desastre."
  },
  {
    question: "¿Qué suposición realista debe hacerse sobre la red en sistemas distribuidos?",
    options: [
      { text: "Que todos los mensajes llegarán siempre en estricto orden", isCorrect: false },
      { text: "Que la red ofrece latencia fija y totalmente predecible", isCorrect: false },
      { text: "Que algunos mensajes llegarán tarde, duplicados o desordenados", isCorrect: true },
      { text: "Que solo hay problemas cuando se cae todo el data center", isCorrect: false }
    ],
    explanation: "Red no es perfecta. Mensajes llegan tarde, duplicados, desordenados. Asumir orden perfecto y latencia fija = bugs garantizados en producción."
  },
  {
    question: "Según el teorema CAP, ¿qué obliga a decidir una partición de red?",
    options: [
      { text: "Se mantiene siempre consistencia fuerte, disponibilidad y particiones", isCorrect: false },
      { text: "Debes elegir entre consistencia fuerte o disponibilidad plena", isCorrect: true },
      { text: "Puedes seguir teniendo todas las propiedades sin sacrificios", isCorrect: false },
      { text: "Desaparece la tolerancia a fallos y el sistema se detiene", isCorrect: false }
    ],
    explanation: "CAP: si hay partición de red, toca elegir. ¿Consistencia (todos ven lo mismo)? ¿O disponibilidad (todos pueden leer/escribir)? No puedes tener las dos a la vez."
  },
  {
    question: "¿Cuál de estos ejemplos refleja mejor consistencia eventual?",
    options: [
      { text: "Ver el saldo bancario actualizado al instante en todos", isCorrect: false },
      { text: "Obtener error hasta que todas las réplicas confirmen cambios", isCorrect: false },
      { text: "Nunca mostrar diferencias entre almacén y sistema de pedidos", isCorrect: false },
      { text: "Ver que el contador de likes tarda pero converge", isCorrect: true }
    ],
    explanation: "Consistencia eventual = dato no se actualiza al instante en todos lados, pero al final converge. Likes tardan unos segundos pero al rato todos ven el mismo número."
  },
  {
    question: "¿Cuál es el objetivo principal de replicar datos en sistemas como HDFS o Kafka?",
    options: [
      { text: "Aumentar tolerancia a fallos guardando copias en nodos", isCorrect: true },
      { text: "Reducir el tamaño total eliminando datos duplicados", isCorrect: false },
      { text: "Evitar para siempre la necesidad de hacer backups", isCorrect: false },
      { text: "Guardar todos los datos completos solo en una máquina", isCorrect: false }
    ],
    explanation: "Replicar = guardar copias en distintos nodos. Si un nodo muere, los datos siguen vivos en las copias. Tolerancia a fallos pura."
  },
  {
    question: "¿Por qué se particionan los datos en sistemas tipo Cassandra o ElasticSearch?",
    options: [
      { text: "Conseguir que cada nodo almacene exactamente todos los datos", isCorrect: false },
      { text: "Repartir datos y carga entre nodos con particiones", isCorrect: true },
      { text: "Forzar que cada consulta recorra el cluster completo siempre", isCorrect: false },
      { text: "Convertir todas las operaciones en un proceso totalmente secuencial", isCorrect: false }
    ],
    explanation: "Particionar = dividir datos entre nodos. Cada nodo guarda solo un trozo. Así repartes tanto almacenamiento como carga de trabajo."
  },
  {
    question: "¿Qué describe mejor el skew en un job de Spark u otro motor distribuido?",
    options: [
      { text: "Cuando todas las tareas terminan al mismo tiempo exacto", isCorrect: false },
      { text: "Cuando el cluster queda parado y no se lanzan tareas", isCorrect: false },
      { text: "Cuando pocas tareas reciben muchos más datos que el resto", isCorrect: true },
      { text: "Cuando hay demasiadas particiones pequeñas ocupando muy poca memoria", isCorrect: false }
    ],
    explanation: "Skew = reparto desigual. Pocas tareas reciben montaña de datos, el resto casi nada. Todo el job espera a las tareas gordas. Cuello de botella."
  },
  {
    question: "¿Qué problema principal resuelven los motores de computación distribuida frente al \"script nocturno\" único?",
    options: [
      { text: "Ejecutar el mismo script varias veces en la misma máquina sin cambios generales", isCorrect: false },
      { text: "Trocear el trabajo y ejecutarlo en paralelo sobre datos repartidos en el clúster", isCorrect: true },
      { text: "Evitar configurar cron porque el motor lo programa automáticamente cada noche", isCorrect: false },
      { text: "Deshabilitar la compresión para que los ficheros se lean con mayor velocidad garantizada", isCorrect: false }
    ],
    explanation: "Script único en una máquina = lento si hay muchos datos. Motor distribuido trocea trabajo y lo reparte entre muchas máquinas en paralelo. Más rápido."
  },
  {
    question: "¿Qué caracteriza al procesamiento batch frente a otras formas de computación distribuida?",
    options: [
      { text: "Procesar eventos individualmente según llegan, manteniendo jobs activos de forma continua", isCorrect: false },
      { text: "Acumular datos durante un periodo y lanzar jobs que recorren grandes lotes", isCorrect: true },
      { text: "Leer datos directamente desde memoria principal sin pasar por el sistema de archivos", isCorrect: false },
      { text: "Usar únicamente bases relacionales sincronizadas para evitar redundancia del almacenamiento", isCorrect: false }
    ],
    explanation: "Batch = juntar datos de un periodo (horas, día) y procesarlos todos de golpe en un job. No es en tiempo real, es por lotes acumulados."
  },
  {
    question: "En el modelo de streaming descrito en el capítulo, ¿cómo se entiende el procesamiento de datos?",
    options: [
      { text: "Como servicios que consumen flujos de eventos continuos y producen resultados casi en tiempo real", isCorrect: true },
      { text: "Como jobs programados cada minuto para ejecutar lotes sobre datos que llegan de golpe", isCorrect: false },
      { text: "Como procesos que solo operan durante horario comercial y se detienen por la noche", isCorrect: false },
      { text: "Como consultas SQL lanzadas manualmente sobre tablas históricas cuando alguien lo pide", isCorrect: false }
    ],
    explanation: "Streaming = procesar datos según llegan, continuamente, sin esperar. Flujo constante de eventos → resultados casi en tiempo real."
  },
  {
    question: "¿Qué provoca una operación tipo groupByKey o reduceByKey en motores como Spark o Flink?",
    options: [
      { text: "Garantiza que cada tarea lea solo datos locales sin usar la red del clúster en producción", isCorrect: false },
      { text: "Evita toda coordinación porque distribuye las claves de forma aleatoria sin reagrupar nada", isCorrect: false },
      { text: "Hace que todos los datos con la misma clave se reorganicen hacia la misma tarea", isCorrect: true },
      { text: "Obliga a que todos los executors ejecuten la misma función sin particiones intermedias", isCorrect: false }
    ],
    explanation: "groupByKey/reduceByKey = shuffle. Datos con misma clave viajan por red hasta juntarse en la misma tarea. Es costoso pero necesario para agrupar."
  },
  {
    question: "Ante un fallo parcial donde solo muere un executor, ¿cómo actúa típicamente Spark según el capítulo?",
    options: [
      { text: "Reejecuta únicamente las tareas falladas en otro executor manteniendo el resto del job en marcha", isCorrect: true },
      { text: "Cancela todo el job y vuelve a ejecutarlo desde el inicio completo sin reaprovechar nada", isCorrect: false },
      { text: "Continúa ignorando las tareas perdidas porque Spark garantiza siempre que todo sigue sin fallos", isCorrect: false },
      { text: "Guarda en memoria RAM del driver el estado completo y lo redistribuye globalmente", isCorrect: false }
    ],
    explanation: "Muere un executor → Spark solo reejercuta las tareas que estaban ahí. El resto del job sigue sin parar. No tira todo y empieza de cero."
  },
  {
    question: "¿Qué combinación permite a un job de Flink reanudarse tras un fallo sin empezar desde cero?",
    options: [
      { text: "Usar solo memoria local en cada operador para guardar el estado reciente de los cálculos", isCorrect: false },
      { text: "Checkpoints consistentes del estado más offsets de lectura almacenados de las fuentes como Kafka", isCorrect: true },
      { text: "Duplicar cada mensaje en dos topics distintos y comparar resultados al final del día", isCorrect: false },
      { text: "Confiar en que las fuentes reenvían automáticamente todo sin necesidad de guardar offsets", isCorrect: false }
    ],
    explanation: "Flink guarda checkpoints (foto del estado) + offsets (por dónde iba leyendo). Si falla, vuelve al último checkpoint y sigue desde ahí. No desde cero."
  },
  {
    question: "¿Qué busca evitar el uso de backoff en los reintentos de operaciones fallidas?",
    options: [
      { text: "Que los logs registren muchos errores repetidos y difíciles de filtrar luego manualmente siempre también", isCorrect: false },
      { text: "Que los reintentos no saturen aún más un sistema ya debilitado por el primer fallo", isCorrect: true },
      { text: "Que el framework tenga que medir tiempos de espera variables complicando el código", isCorrect: false },
      { text: "Que nunca se reintente ninguna operación fallida asumiendo que es definitivamente incorrecta", isCorrect: false }
    ],
    explanation: "Backoff = esperar cada vez más entre reintentos. Si sistema está caído y bombardeas con reintentos inmediatos, lo hundes más. Esperar un poco → dar tiempo a recuperarse."
  },
  {
    question: "¿Qué describe mejor una operation idempotente en el contexto de sistemas de datos resilientes?",
    options: [
      { text: "Una operación que nunca se ejecuta dos veces porque el sistema prohíbe cualquier reintento posible", isCorrect: false },
      { text: "Una operación cuyo resultado final es el mismo aunque se ejecute varias veces seguidas", isCorrect: true },
      { text: "Una operación que siempre falla con el mismo error garantizando consistencia de mensajes", isCorrect: false },
      { text: "Una operación que suma valores cada vez que se aplica, acumulando un total progresivo", isCorrect: false }
    ],
    explanation: "Idempotente = ejecutar 1 vez o 5 veces da mismo resultado. Ejemplo: SET valor=10 es idempotente. SUM +=10 NO es idempotente. Importante para reintentos seguros."
  },
  {
    question: "Cuando un sistema ofrece garantías at-least-once sobre el procesamiento de mensajes, ¿qué está prometiendo?",
    options: [
      { text: "Que cada mensaje se procesará cero o una vez, pero nunca se duplicará en ningún escenario", isCorrect: false },
      { text: "Que cada mensaje se procesará al menos una vez, pudiendo repetirse en ciertos fallos", isCorrect: true },
      { text: "Que se descartarán automáticamente todos los mensajes repetidos antes de procesarlos", isCorrect: false },
      { text: "Que exactamente un nodo procesa cada mensaje sin reparticiones ni reintentos adicionales", isCorrect: false }
    ],
    explanation: "At-least-once = garantizo que proceso cada mensaje al menos 1 vez. Si hay fallo, reintento. Puede que se procese 2 veces, pero nunca se pierde."
  },
  {
    question: "¿Qué idea resume mejor la resiliencia según el capítulo de computación distribuida y resiliencia?",
    options: [
      { text: "Es una propiedad exclusiva del framework de cómputo y no del resto de componentes externos", isCorrect: false },
      { text: "Es una propiedad del conjunto donde diseño, motores, colas, bases y métricas colaboran", isCorrect: true },
      { text: "Depende únicamente de contratar más nodos para tolerar la pérdida de cualquier servidor", isCorrect: false },
      { text: "Se logra automáticamente sin diseño si usas herramientas modernas del ecosistema Big Data", isCorrect: false }
    ],
    explanation: "Resiliencia no es cosa de un solo componente. Necesitas diseño + motor + colas + bases + monitorización. Todo junto cooperando. No se compra, se diseña."
  }
];
