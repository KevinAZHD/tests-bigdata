export const ra3Questions = [
  {
    "question": "¿Por qué los contenidos vistos en clase comparan la integridad con el transporte de mercancía frágil?",
    "options": [
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": true
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": false
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      }
    ],
    "explanation": "Dato es como paquete frágil. No basta con que llegue, tiene que llegar entero y sin romper. Integridad = que no se pierda ni se estropee por el camino."
  },
  {
    "question": "¿Cuál es la diferencia más precisa entre corrupción de datos y pérdida de datos?",
    "options": [
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      },
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": false
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": true
      }
    ],
    "explanation": "Corrupción = dato existe pero está mal (cambiado, roto). Pérdida = dato directamente no está. Uno está estropeado, el otro desapareció."
  },
  {
    "question": "¿Qué función cumplen principalmente los mecanismos de verificación de integridad en sistemas distribuidos?",
    "options": [
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": true
      },
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      }
    ],
    "explanation": "Verificación de integridad = detectar cuanto antes que algo fue mal y poder arreglarlo. Mejor pillar el error pronto que descubrirlo meses después."
  },
  {
    "question": "¿Qué responsabilidad corresponde principalmente a los productores de datos dentro de la gestión de integridad?",
    "options": [
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": true
      }
    ],
    "explanation": "Productor de datos debe generar eventos claros: con versión, trazables, sin ambigüedad. Si el origen es basura, todo lo demás será basura."
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones describe mejor por qué la integridad en arquitecturas distribuidas se considera una cuestión de gestión además de técnica?",
    "options": [
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": false
      },
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": false
      },
      {
        "text": "Porque requiere responsabilidades claras entre componentes y procesos",
        "isCorrect": true
      },
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": false
      }
    ],
    "explanation": "Integridad no es solo técnica. Necesitas que cada equipo/componente sepa quién es responsable de qué. Sin roles claros, nadie cuida el dato."
  },
  {
    "question": "¿Cuál es el impacto organizativo más profundo de una mala calidad de datos?",
    "options": [
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "La pérdida de confianza y malas decisiones",
        "isCorrect": true
      },
      {
        "text": "Un precio en céntimos se interpreta como euros",
        "isCorrect": false
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": false
      }
    ],
    "explanation": "Mala calidad de datos → nadie se fía de los informes → decisiones basadas en datos malos. Peor efecto: se pierde la confianza en todo el sistema."
  },
  {
    "question": "¿Cuál es la principal diferencia práctica entre replicación y erasure coding?",
    "options": [
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": true
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      }
    ],
    "explanation": "Replicación = copias completas, recuperas rápido pero gasta mucho disco. Erasure coding = trocea y distribuye, ahorra espacio pero tarda más en recuperar."
  },
  {
    "question": "¿Por qué una divergencia entre sistemas no implica siempre que el sistema esté roto?",
    "options": [
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": true
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      }
    ],
    "explanation": "Divergencia temporal no siempre es error. Si el sistema converge y está dentro del contrato, es consistencia eventual aceptable. No todo tiene que ser instantáneo."
  },
  {
    "question": "¿Por qué los fallos silenciosos son especialmente peligrosos en sistemas de datos?",
    "options": [
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Porque aparentan normalidad con resultados inválidos",
        "isCorrect": true
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Que no se pierdan, corrompan ni queden en estados imposibles",
        "isCorrect": false
      }
    ],
    "explanation": "Fallo silencioso = todo parece bien pero los datos son incorrectos. Es el peor tipo de error porque no saltan alarmas. Descubres tarde."
  },
  {
    "question": "¿Qué significa asegurar coherencia \"dentro de un contrato\" en una arquitectura distribuida?",
    "options": [
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": true
      }
    ],
    "explanation": "Coherencia 'dentro del contrato' = OK que haya diferencias temporales si están dentro de las reglas pactadas. Lo importante es que todos lo sepan."
  },
  {
    "question": "¿Qué describe mejor un estado parcial o half commit?",
    "options": [
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      },
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": false
      },
      {
        "text": "Transformar sin romper significado ni dejar salidas incoherentes",
        "isCorrect": false
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": true
      }
    ],
    "explanation": "Half commit = operación a medias visible. Parte del dato se guardó, parte no. Usuario ve un estado inconsistente. Peligroso."
  },
  {
    "question": "¿Qué práctica refleja mejor una gestión correcta de la consistencia eventual?",
    "options": [
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "Definir latencias aceptables y avisar cuándo el dato es provisional",
        "isCorrect": true
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": false
      }
    ],
    "explanation": "Consistencia eventual bien gestionada: defines cuánto tarda en converger y avisas que el dato es provisional mientras tanto. Sin engaños."
  },
  {
    "question": "¿Cuál de estos casos representa un problema de precisión y no principalmente de completitud?",
    "options": [
      {
        "text": "Un precio en céntimos se interpreta como euros",
        "isCorrect": true
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      }
    ],
    "explanation": "Precisión = el valor debe representar la realidad. Si 1500 céntimos se interpreta como 1500€, el dato existe pero es impreciso. Problema de precisión, no de completitud."
  },
  {
    "question": "¿Qué ejemplo representa mejor una corrupción lógica y no una corrupción de bits?",
    "options": [
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Porque requiere responsabilidades claras entre componentes y procesos",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": true
      }
    ],
    "explanation": "Corrupción lógica = estructura rota pero no bits dañados. CSV con columnas desplazadas porque un separador se escapó mal. Dato presente pero inútil."
  },
  {
    "question": "¿Cuál es el orden correcto del ciclo de respuesta cuando \"no cuadra\" un dato crítico?",
    "options": [
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": true
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      }
    ],
    "explanation": "Ciclo de respuesta: primero detectar → aislar el problema → diagnosticar causa → corregir → reprocesar datos afectados → prevenir que repita. En ese orden."
  },
  {
    "question": "¿Cuál es la función principal de los contratos de datos o Data Contracts?",
    "options": [
      {
        "text": "Porque el consumidor puede tratar datos intermedios como definitivos",
        "isCorrect": false
      },
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": false
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": true
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      }
    ],
    "explanation": "Data Contract = acuerdo entre productor y consumidor. Si cambias esquema o significado, avisas primero. Sin sorpresas. Evita roturas silenciosas."
  },
  {
    "question": "¿Qué persigue la reconciliación con una fuente de verdad o source-of-truth?",
    "options": [
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "Validar que el pipeline y el origen cuentan lo mismo",
        "isCorrect": true
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      },
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": false
      }
    ],
    "explanation": "Reconciliación = comparar: ¿el pipeline dice lo mismo que el origen? Si la fuente tiene 1000 registros y el pipeline muestra 980, hay problema."
  },
  {
    "question": "¿Qué problema intenta resolver el uso de ACKs en sistemas de mensajería?",
    "options": [
      {
        "text": "Separar registros problemáticos sin romper todo el flujo",
        "isCorrect": false
      },
      {
        "text": "Porque aparentan normalidad con resultados inválidos",
        "isCorrect": false
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": true
      }
    ],
    "explanation": "ACK = confirmación de recibido. Emisor envía mensaje, receptor confirma. Si no hay ACK, se reenvía. Reduce pérdidas de mensajes."
  },
  {
    "question": "¿Cuál de estos ejemplos corresponde mejor a una auditoría de consistencia?",
    "options": [
      {
        "text": "Validar que el pipeline y el origen cuentan lo mismo",
        "isCorrect": false
      },
      {
        "text": "La pérdida de confianza y malas decisiones",
        "isCorrect": false
      },
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": true
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      }
    ],
    "explanation": "Auditoría de consistencia = verificar cuentas. ¿Total de líneas procesadas = total esperado? Si no cuadra, algo se perdió o sobra."
  },
  {
    "question": "¿Por qué es peligroso consumir una partición antes de que exista una marca clara de completitud?",
    "options": [
      {
        "text": "Un campo cambia y aparecen nulls silenciosos",
        "isCorrect": false
      },
      {
        "text": "Porque el consumidor puede tratar datos intermedios como definitivos",
        "isCorrect": true
      },
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": false
      },
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": false
      }
    ],
    "explanation": "Sin marca de completitud, consumidor lee datos a medio escribir pensando que son finales. Decisiones basadas en datos incompletos = peligro."
  },
  {
    "question": "¿Qué efecto operativo puede producir el skew o desbalance fuerte de particiones?",
    "options": [
      {
        "text": "Porque requiere responsabilidades claras entre componentes y procesos",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": true
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      }
    ],
    "explanation": "Skew/desbalance = unas particiones con montaña de datos, otras vacías. Las gordas tardan más → timeouts → ventanas incompletas. Todo se retrasa."
  },
  {
    "question": "¿Qué expresa mejor el concepto de integridad de datos en un sistema distribuido?",
    "options": [
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      },
      {
        "text": "Que no se pierdan, corrompan ni queden en estados imposibles",
        "isCorrect": true
      }
    ],
    "explanation": "Integridad en distribuido = tres garantías: no perder datos, no corromperlos, no dejar estados imposibles. Simple pero difícil de conseguir."
  },
  {
    "question": "¿Cuál es la finalidad principal de una cuarentena o dead-letter en un pipeline?",
    "options": [
      {
        "text": "Separar registros problemáticos sin romper todo el flujo",
        "isCorrect": true
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      }
    ],
    "explanation": "Dead-letter/cuarentena = registro malo va a un lado aparte. Pipeline sigue funcionando con los buenos. No para todo por un dato roto."
  },
  {
    "question": "¿En qué dos momentos suele aplicarse la verificación mediante checksum?",
    "options": [
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "Escribir en temporal y promocionar solo al completar",
        "isCorrect": false
      },
      {
        "text": "Al escribir el dato y al volver a leerlo",
        "isCorrect": true
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      }
    ],
    "explanation": "Checksum se aplica dos veces: al escribir (calcular huella) y al leer (verificar huella). Si no coincide al leer, dato se corrompió en disco."
  },
  {
    "question": "¿Por qué el metastore o catálogo se considera una pieza de integridad y no solo de documentación?",
    "options": [
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": true
      },
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": false
      },
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      }
    ],
    "explanation": "Catálogo/metastore = pieza de integridad. Sin lineage ni metadatos, no sabes de dónde viene el dato, qué significa ni si es fiable. No es solo documentación."
  },
  {
    "question": "¿Qué función cumple la separación raw/bronze, silver/refined y gold/curated en la gestión de integridad?",
    "options": [
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": true
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      }
    ],
    "explanation": "Raw/Bronze = dato crudo sin tocar. Silver = limpio y validado. Gold = certificado y listo para negocio. Cada capa promete un nivel de calidad diferente."
  },
  {
    "question": "¿Por qué la completitud puede degradarse con frecuencia en entornos distribuidos?",
    "options": [
      {
        "text": "Porque hay saturación, timeouts y fallos parciales",
        "isCorrect": true
      },
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": false
      },
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": false
      },
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": false
      }
    ],
    "explanation": "En distribuido la completitud sufre porque hay red, timeouts, saturación, fallos parciales. Muchas cosas pueden perder datos por el camino."
  },
  {
    "question": "¿Cuál de estas situaciones encaja mejor con una pérdida de datos y no con duplicación o corrupción?",
    "options": [
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": false
      },
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": false
      },
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": true
      },
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      }
    ],
    "explanation": "Cola borra mensajes sin que consumidor los lea = pérdida pura. Dato ya no existe. No está duplicado ni corrupto, simplemente desapareció."
  },
  {
    "question": "¿Cuál de estos elementos pertenece más claramente a la fiabilidad de datos?",
    "options": [
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": true
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      }
    ],
    "explanation": "Fiabilidad = consistencia sostenida. Tabla sin huecos en un rango temporal = dato fiable. Si hay huecos, no puedes confiar en los análisis."
  },
  {
    "question": "¿Cuál de las siguientes situaciones ilustra mejor un problema de completitud?",
    "options": [
      {
        "text": "Separar registros problemáticos sin romper todo el flujo",
        "isCorrect": false
      },
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": false
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "Un sistema de logs pierde eventos en un pico",
        "isCorrect": true
      }
    ],
    "explanation": "Completitud = tener todos los datos. Sistema pierde eventos durante pico de carga = problema de completitud. Faltan registros."
  },
  {
    "question": "¿Qué explica mejor por qué errores pequeños pueden acabar produciendo efectos grandes en negocio?",
    "options": [
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Escribir en temporal y promocionar solo al completar",
        "isCorrect": false
      },
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": true
      },
      {
        "text": "Al escribir el dato y al volver a leerlo",
        "isCorrect": false
      }
    ],
    "explanation": "Error pequeño en dato individual → se multiplica al agregar miles/millones de registros. Un céntimo mal × 10 millones = 100.000€ de error."
  },
  {
    "question": "¿Por qué conservar datos raw y diseñar reprocesos deterministas ayuda a defender la integridad?",
    "options": [
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": true
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      },
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": false
      }
    ],
    "explanation": "Guardar raw + reprocesos deterministas = poder reconstruir todo desde cero. Si algo sale mal, vuelves atrás y reprocesas. Seguridad total."
  },
  {
    "question": "¿Qué idea recoge mejor la dimensión de precisión en calidad de datos?",
    "options": [
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": true
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      }
    ],
    "explanation": "Precisión = el dato refleja la realidad. Temperatura real 22°C, dato dice 22°C. Si dice 220°C, falta precisión."
  },
  {
    "question": "¿Qué propiedad debe tener un consumidor para que procesar dos veces un mismo evento no cambie el resultado final?",
    "options": [
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": true
      }
    ],
    "explanation": "Idempotente = procesar mismo evento 2 veces da mismo resultado. Crucial cuando hay reintentos. Sin idempotencia, duplicados causan estragos."
  },
  {
    "question": "¿Qué inconveniente se asocia de forma más directa a la replicación triple?",
    "options": [
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": true
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      }
    ],
    "explanation": "Replicación triple = 3 copias de todo. Dato de 1TB ocupa 3TB. Más seguro sí, pero triple coste de disco."
  },
  {
    "question": "¿Qué idea corrigen los contenidos vistos en clase cuando advierte sobre almacenamiento distribuido como HDFS o S3?",
    "options": [
      {
        "text": "Porque aparentan normalidad con resultados inválidos",
        "isCorrect": false
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": true
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      }
    ],
    "explanation": "HDFS/S3 guardan bytes de forma fiable, pero no saben si hay duplicados ni entienden qué significan los datos. Almacenar ≠ resolver problemas de calidad."
  },
  {
    "question": "¿Qué significa validar \"en la frontera\" dentro del flujo de datos?",
    "options": [
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": true
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      }
    ],
    "explanation": "Validar 'en la frontera' = comprobar datos en cuanto llegan. ¿Formato correcto? ¿Tipos válidos? ¿Rangos lógicos? Mejor rechazar basura al entrar que limpiarla después."
  },
  {
    "question": "¿Qué ventaja aporta HDFS al usar checksums por chunk en lugar de uno único para todo el fichero?",
    "options": [
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": true
      }
    ],
    "explanation": "Checksum por chunk = si un trozo se corrompe, sabes exactamente cuál. Con checksum único de todo el fichero, solo sabes que 'algo' falló pero no dónde."
  },
  {
    "question": "¿Qué aportan las auditorías de completitud en un sistema distribuido?",
    "options": [
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Porque necesita mecanismos técnicos y también reglas organizativas claras",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": true
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      }
    ],
    "explanation": "Auditoría de completitud = verificar: ¿llegaron todos los registros esperados? ¿Hay huecos temporales? Te avisa antes de que nadie se queje."
  },
  {
    "question": "En el mini caso de movilidad compartida, ¿qué situación se usa como ejemplo de problema de consistencia?",
    "options": [
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": false
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": true
      }
    ],
    "explanation": "App reintenta operación → se ejecuta dos veces → duplica desbloqueos/acciones. Ejemplo claro de cómo reintentos sin idempotencia causan inconsistencia."
  },
  {
    "question": "¿Por qué es importante definir una source of truth por dominio?",
    "options": [
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": true
      }
    ],
    "explanation": "Source of truth = fuente de verdad por dominio. Cuando dos sistemas dicen cosas diferentes, el SoT manda. Sin eso, nadie sabe cuál es el dato bueno."
  },
  {
    "question": "¿Qué patrón de detección y gestión aparece en el ejemplo del cambio de esquema silencioso?",
    "options": [
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Test de nulls, validación de esquema y cuarentena de versiones no soportadas",
        "isCorrect": true
      },
      {
        "text": "Transformar sin romper significado ni dejar salidas incoherentes",
        "isCorrect": false
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      }
    ],
    "explanation": "Cambio de esquema silencioso → detectar con tests de nulls + validar esquema + mandar versiones no soportadas a cuarentena. Patrón defensivo completo."
  },
  {
    "question": "¿Qué condición hace posible un reproceso fiable y controlado tras un problema de integridad?",
    "options": [
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": true
      },
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": false
      }
    ],
    "explanation": "Reproceso fiable = proceso determinista (misma entrada → misma salida) + trazabilidad (saber qué se hizo). Sin esto, reprocesar es una lotería."
  },
  {
    "question": "¿Cuál es el riesgo más típico cuando falla la capa de ingesta en una arquitectura distribuida?",
    "options": [
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": true
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      }
    ],
    "explanation": "Fallo en ingesta = primer punto donde datos entran. Si falla ahí, o pierdes datos silenciosamente o generas duplicados. Es la puerta de entrada."
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones expresa mejor la diferencia entre calidad y fiabilidad de los datos?",
    "options": [
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": true
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": false
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      }
    ],
    "explanation": "Calidad = ¿datos buenos para este uso? Fiabilidad = ¿puedo confiar en que serán buenos mañana también? Calidad es puntual, fiabilidad es sostenida."
  },
  {
    "question": "¿Cuál de los siguientes patrones encaja mejor con un problema de fiabilidad?",
    "options": [
      {
        "text": "Un campo cambia y aparecen nulls silenciosos",
        "isCorrect": true
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      }
    ],
    "explanation": "Fiabilidad rota: un campo cambia de nombre/tipo sin avisar → aparecen nulls → nadie se entera hasta que algo explota. Fallo silencioso típico."
  },
  {
    "question": "¿Por qué los contenidos afirman que en Big Data el primer problema no es el algoritmo?",
    "options": [
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": true
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": false
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      }
    ],
    "explanation": "En Big Data, datos se degradan por el camino (pérdidas, duplicados, corrupción). Si datos llegan rotos, da igual qué algoritmo uses. Garbage in, garbage out."
  },
  {
    "question": "¿Qué rasgo describe mejor la idea de estabilidad semántica dentro de la fiabilidad?",
    "options": [
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": false
      },
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": true
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      }
    ],
    "explanation": "Estabilidad semántica = campo 'precio' siempre significa precio en euros. Si mañana cambia a dólares sin avisar, se rompe todo el análisis silenciosamente."
  },
  {
    "question": "¿Qué señal sugieren los contenidos como indicio realista de problema de calidad en producción?",
    "options": [
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": true
      },
      {
        "text": "Un precio en céntimos se interpreta como euros",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": false
      }
    ],
    "explanation": "Señal de alarma en producción: métricas bajan sin razón o aparecen huecos en datos temporales. Si nadie hizo cambios, probablemente se perdieron datos."
  },
  {
    "question": "¿Qué explica mejor por qué errores pequeños pueden acabar produciendo efectos graves?",
    "options": [
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": true
      },
      {
        "text": "Escribir en temporal y promocionar solo al completar",
        "isCorrect": false
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Al escribir el dato y al volver a leerlo",
        "isCorrect": false
      }
    ],
    "explanation": "Error pequeño en dato individual → se multiplica al agregar miles/millones de registros. Un céntimo mal × 10 millones = 100.000€ de error."
  },
  {
    "question": "¿Cuál de estas situaciones encaja mejor con una pérdida de datos y no con duplicación?",
    "options": [
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": true
      },
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      },
      {
        "text": "Porque el consumidor puede tratar datos intermedios como definitivos",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      }
    ],
    "explanation": "Cola borra mensajes sin que consumidor los lea = pérdida pura. Dato ya no existe. No está duplicado ni corrupto, simplemente desapareció."
  },
  {
    "question": "¿Por qué los sistemas \"al menos una vez\" aumentan el riesgo de duplicados?",
    "options": [
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": true
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      }
    ],
    "explanation": "At-least-once = si hay duda, reenviar. Mejor tener mensaje duplicado (que puedes deduplicar) que perderlo para siempre. Más seguro pero más duplicados."
  },
  {
    "question": "En el mini caso de movilidad compartida, ¿qué situación se usa como ejemplo de problema de duplicados?",
    "options": [
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": true
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Al escribir el dato y al volver a leerlo",
        "isCorrect": false
      }
    ],
    "explanation": "App reintenta operación → se ejecuta dos veces → duplica desbloqueos/acciones. Ejemplo claro de cómo reintentos sin idempotencia causan inconsistencia."
  },
  {
    "question": "En el ejemplo de duplicados en compras, ¿qué combinación de medidas se usa para resolverlos?",
    "options": [
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": true
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": false
      }
    ],
    "explanation": "Para resolver duplicados en compras: 1) clave única (payment_id), 2) reconciliar con origen, 3) consumidor idempotente. Tres capas de defensa."
  },
  {
    "question": "¿Qué propiedad debe tener un consumidor para que procesar dos veces un mismo evento no cause daño?",
    "options": [
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": true
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      }
    ],
    "explanation": "Idempotente = procesar mismo evento 2 veces da mismo resultado. Crucial cuando hay reintentos. Sin idempotencia, duplicados causan estragos."
  },
  {
    "question": "¿Cuál de los siguientes ejemplos corresponde mejor a una auditoría de consistencia?",
    "options": [
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": true
      },
      {
        "text": "Al escribir el dato y al volver a leerlo",
        "isCorrect": false
      }
    ],
    "explanation": "Auditoría de consistencia = verificar cuentas. ¿Total de líneas procesadas = total esperado? Si no cuadra, algo se perdió o sobra."
  },
  {
    "question": "¿Por qué los contenidos comparan la integridad con el transporte de una mercancía?",
    "options": [
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": true
      },
      {
        "text": "Test de nulls, validación de esquema y cuarentena de versiones no soportadas",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      }
    ],
    "explanation": "Dato es como paquete frágil. No basta con que llegue, tiene que llegar entero y sin romper. Integridad = que no se pierda ni se estropee por el camino."
  },
  {
    "question": "¿Qué riesgo aparece al trabajar con consistencia eventual en sistemas replicados?",
    "options": [
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": false
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": true
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": false
      }
    ],
    "explanation": "Consistencia eventual = réplicas tardan en sincronizar. Si tomas decisión crítica con copia desactualizada, decides con datos viejos. Peligro real."
  },
  {
    "question": "¿Qué matiz es clave para entender la consistencia en sistemas distribuidos?",
    "options": [
      {
        "text": "Separar registros problemáticos sin detener todo el flujo",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": true
      },
      {
        "text": "La pérdida de confianza y malas decisiones",
        "isCorrect": false
      }
    ],
    "explanation": "Consistencia = que todos los componentes cuenten la misma historia. Si ventas dice 100 y facturación dice 80, hay inconsistencia. Algo no cuadra."
  },
  {
    "question": "¿Cuál es la finalidad principal de los contratos de datos o Data Contracts?",
    "options": [
      {
        "text": "Test de nulls, validación de esquema y cuarentena de versiones no soportadas",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": true
      }
    ],
    "explanation": "Data Contract = acuerdo entre productor y consumidor. Si cambias esquema o significado, avisas primero. Sin sorpresas. Evita roturas silenciosas."
  },
  {
    "question": "¿Qué función cumple la separación raw/bronze, silver/refined y gold/curated en la arquitectura?",
    "options": [
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": true
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      }
    ],
    "explanation": "Raw/Bronze = dato crudo sin tocar. Silver = limpio y validado. Gold = certificado y listo para negocio. Cada capa promete un nivel de calidad diferente."
  },
  {
    "question": "¿Qué idea corrigen los contenidos cuando advierten sobre el almacenamiento distribuido como solución completa?",
    "options": [
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": false
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": true
      },
      {
        "text": "Definir latencias aceptables y avisar cuándo el dato es provisional",
        "isCorrect": false
      },
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": false
      }
    ],
    "explanation": "HDFS/S3 guardan bytes de forma fiable, pero no saben si hay duplicados ni entienden qué significan los datos. Almacenar ≠ resolver problemas de calidad."
  },
  {
    "question": "¿Cuál es la responsabilidad principal de los productores de datos dentro de un sistema fiable?",
    "options": [
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      },
      {
        "text": "Porque necesita mecanismos técnicos y también reglas organizativas claras",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": true
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      }
    ],
    "explanation": "Productor de datos debe generar eventos claros: con versión, trazables, sin ambigüedad. Si el origen es basura, todo lo demás será basura."
  },
  {
    "question": "¿Cuál es el riesgo más típico cuando falla la capa de ingesta en una arquitectura de datos?",
    "options": [
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": false
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": true
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      }
    ],
    "explanation": "Fallo en ingesta = primer punto donde datos entran. Si falla ahí, o pierdes datos silenciosamente o generas duplicados. Es la puerta de entrada."
  },
  {
    "question": "¿Qué describe mejor un checksum o suma de verificación?",
    "options": [
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": true
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      }
    ],
    "explanation": "Checksum = huella digital del dato. Si un solo bit cambia, huella cambia. Comparas huella antes y después → sabes si dato se corrompió."
  },
  {
    "question": "¿Qué función cumplen principalmente los mecanismos de verificación de integridad?",
    "options": [
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": true
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Un sistema de logs pierde eventos en un pico",
        "isCorrect": false
      }
    ],
    "explanation": "Verificación de integridad = detectar cuanto antes que algo fue mal y poder arreglarlo. Mejor pillar el error pronto que descubrirlo meses después."
  },
  {
    "question": "¿Qué estrategia reduce mejor el riesgo de exponer datos a medio escribir?",
    "options": [
      {
        "text": "Escribir en temporal y promocionar solo al completar",
        "isCorrect": true
      },
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": false
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      }
    ],
    "explanation": "Patrón stage-then-promote: escribes en carpeta temporal, cuando terminas bien, mueves a la definitiva. Nadie ve datos a medio escribir."
  },
  {
    "question": "¿Qué condición hace posible un reproceso fiable y controlado tras un problema de datos?",
    "options": [
      {
        "text": "Se generan métricas inconsistentes y se pierde confianza",
        "isCorrect": false
      },
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": false
      },
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": true
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      }
    ],
    "explanation": "Reproceso fiable = proceso determinista (misma entrada → misma salida) + trazabilidad (saber qué se hizo). Sin esto, reprocesar es una lotería."
  },
  {
    "question": "¿Cuál es la responsabilidad principal del motor de procesamiento respecto a la integridad?",
    "options": [
      {
        "text": "Transformar sin romper significado ni dejar salidas incoherentes",
        "isCorrect": true
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      }
    ],
    "explanation": "Motor de procesamiento debe transformar datos sin estropear su significado. Si entra precio en céntimos, no debe salir interpretado como euros."
  },
  {
    "question": "¿Cuándo suele ser preferible el erasure coding frente a la replicación clásica?",
    "options": [
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": true
      },
      {
        "text": "Un campo cambia y aparecen nulls silenciosos",
        "isCorrect": false
      },
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": false
      },
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": false
      }
    ],
    "explanation": "Erasure coding mejor que replicación cuando tienes petabytes. Ahorra mucho espacio (1.5x vs 3x), aunque recuperar es más lento."
  },
  {
    "question": "¿Cuál es el principal compromiso del modelo “al menos una vez”?",
    "options": [
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      },
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": true
      },
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      }
    ],
    "explanation": "At-least-once = mejor repetir que perder. Garantiza que nada se pierde, pero a cambio puede meter duplicados. Es un compromiso, necesitas idempotencia después."
  },
  {
    "question": "En el ejemplo de duplicados en compras, ¿qué combinación de medidas se usa para detectar y gestionar el problema?",
    "options": [
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": true
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      },
      {
        "text": "Que no se pierdan, corrompan ni queden en estados imposibles",
        "isCorrect": false
      }
    ],
    "explanation": "Para resolver duplicados en compras: 1) clave única (payment_id), 2) reconciliar con origen, 3) consumidor idempotente. Tres capas de defensa."
  },
  {
    "question": "¿Cuál es el orden correcto del ciclo de respuesta cuando “no cuadra” un dato crítico?",
    "options": [
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": true
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      }
    ],
    "explanation": "Ciclo de respuesta: primero detectar → aislar el problema → diagnosticar causa → corregir → reprocesar datos afectados → prevenir que repita. En ese orden."
  },
  {
    "question": "¿Por qué los contenidos vistos en clase afirman que en Big Data el primer problema rara vez es el algoritmo?",
    "options": [
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      },
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": true
      },
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": false
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      }
    ],
    "explanation": "En Big Data, datos se degradan por el camino (pérdidas, duplicados, corrupción). Si datos llegan rotos, da igual qué algoritmo uses. Garbage in, garbage out."
  },
  {
    "question": "¿Qué gestión proponen los contenidos vistos en clase para los datos tardíos que alteran el cierre diario?",
    "options": [
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "Un precio en céntimos se interpreta como euros",
        "isCorrect": false
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": false
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": true
      }
    ],
    "explanation": "Datos tardíos: fijar hora de cierre → antes de esa hora, dato es provisional. Después, es definitivo. Si llega tarde, va a corrección o siguiente período."
  },
  {
    "question": "¿Qué riesgo aparece cuando la capa de consumo usa datos “de donde sea” por estar disponibles?",
    "options": [
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Se generan métricas inconsistentes y se pierde confianza",
        "isCorrect": true
      }
    ],
    "explanation": "Consumir datos 'de donde sea' sin control → métricas diferentes según la fuente → nadie sabe cuál es la buena → se pierde confianza en todo."
  },
  {
    "question": "¿Qué significa validar “en la frontera” dentro del flujo de datos?",
    "options": [
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": true
      }
    ],
    "explanation": "Validar 'en la frontera' = comprobar datos en cuanto llegan. ¿Formato correcto? ¿Tipos válidos? ¿Rangos lógicos? Mejor rechazar basura al entrar que limpiarla después."
  },
  {
    "question": "¿Por qué los contenidos vistos en clase definen la integridad como una propiedad “socio-técnica”?",
    "options": [
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      },
      {
        "text": "Porque necesita mecanismos técnicos y también reglas organizativas claras",
        "isCorrect": true
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      }
    ],
    "explanation": "Socio-técnica = no basta con herramientas. Necesitas también reglas, responsabilidades y procesos organizativos. Tecnología sola no garantiza integridad."
  },
  {
    "question": "¿Qué significa asegurar coherencia “dentro de un contrato” en una arquitectura distribuida?",
    "options": [
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": true
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      }
    ],
    "explanation": "Coherencia 'dentro del contrato' = OK que haya diferencias temporales si están dentro de las reglas pactadas. Lo importante es que todos lo sepan."
  },
  {
    "question": "¿Qué señal de alarma sugieren los contenidos vistos en clase como indicio realista de pérdida de datos?",
    "options": [
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      },
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": true
      }
    ],
    "explanation": "Señal de alarma en producción: métricas bajan sin razón o aparecen huecos en datos temporales. Si nadie hizo cambios, probablemente se perdieron datos."
  },
  {
    "question": "¿Por qué los sistemas “al menos una vez” aumentan el riesgo de duplicados?",
    "options": [
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": true
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      }
    ],
    "explanation": "At-least-once = si hay duda, reenviar. Mejor tener mensaje duplicado (que puedes deduplicar) que perderlo para siempre. Más seguro pero más duplicados."
  },
  {
    "question": "¿Por qué los contenidos vistos en clase utilizan la analogía del aeropuerto para explicar la verificación?",
    "options": [
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": true
      }
    ],
    "explanation": "Analogía aeropuerto: pasas varios controles (embarque, seguridad, aduanas). Cada capa verifica algo. Sin capas de control, sistema no es fiable."
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones expresa mejor la diferencia entre calidad y fiabilidad de los datos en sistemas distribuidos?",
    "options": [
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": true
      }
    ],
    "explanation": "Calidad = ¿datos buenos para este uso? Fiabilidad = ¿puedo confiar en que serán buenos mañana también? Calidad es puntual, fiabilidad es sostenida."
  }
];
