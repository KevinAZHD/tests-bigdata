export const ra3Questions = [
  {
    "question": "¿Qué condición hace posible un reproceso fiable y controlado tras un problema de datos?",
    "options": [
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": true
      },
      {
        "text": "Se generan métricas inconsistentes y se pierde confianza",
        "isCorrect": false
      },
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": false
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es la responsabilidad principal de los productores de datos dentro de un sistema fiable?",
    "options": [
      {
        "text": "Porque necesita mecanismos técnicos y también reglas organizativas claras",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué práctica refleja mejor una gestión correcta de la consistencia eventual?",
    "options": [
      {
        "text": "Definir latencias aceptables y avisar cuándo el dato es provisional",
        "isCorrect": true
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": false
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué los sistemas \"al menos una vez\" aumentan el riesgo de duplicados?",
    "options": [
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": true
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es la principal diferencia práctica entre replicación y erasure coding?",
    "options": [
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": true
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué riesgo más típico aparece cuando falla la entrega de mensajes?",
    "options": [
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": true
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      },
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": false
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      }
    ]
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
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es la diferencia entre calidad y fiabilidad de los datos?",
    "options": [
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
      },
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En el mini caso de movilidad compartida, ¿qué situación se usa como ejemplo de problema de duplicados?",
    "options": [
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": true
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Al escribir el dato y al volver a leerlo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es la esencia de un contrato de datos o Data Contract?",
    "options": [
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": true
      },
      {
        "text": "Test de nulls, validación de esquema y cuarentena de versiones no soportadas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué conjunto de medidas resuelve el problema de duplicados en el mini caso de compras?",
    "options": [
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": false
      },
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Por qué el determinismo es importante para el reprocesamiento?",
    "options": [
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": true
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      },
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": false
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es el síntoma más típico de un problema de completitud no detectado a tiempo?",
    "options": [
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": true
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": false
      },
      {
        "text": "Un precio en céntimos se interpreta como euros",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué objetivo principal persiguen los mecanismos de integridad en un sistema de datos?",
    "options": [
      {
        "text": "Que no se pierdan, corrompan ni queden en estados imposibles",
        "isCorrect": true
      },
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es la principal consecuencia cuando los datos no son fiables?",
    "options": [
      {
        "text": "La pérdida de confianza y malas decisiones",
        "isCorrect": true
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": false
      },
      {
        "text": "Un precio en céntimos se interpreta como euros",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué la integridad no puede garantizarse únicamente mediante almacenamiento?",
    "options": [
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": true
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Test de nulls, validación de esquema y cuarentena de versiones no soportadas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué función cumplen principalmente los mecanismos de verificación de integridad en sistemas distribuidos?",
    "options": [
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": true
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál de estos elementos pertenece más claramente a la fiabilidad de datos?",
    "options": [
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": true
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué gestión proponen los contenidos vistos en clase para los datos tardíos que alteran el cierre diario?",
    "options": [
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": true
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": false
      },
      {
        "text": "Un precio en céntimos se interpreta como euros",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En el mini caso de movilidad compartida, ¿qué situación se usa como ejemplo de problema de consistencia?",
    "options": [
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": false
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": true
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué describe mejor un estado parcial o half commit?",
    "options": [
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": true
      },
      {
        "text": "Transformar sin romper significado ni dejar salidas incoherentes",
        "isCorrect": false
      },
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué los contenidos vistos en clase definen la integridad como una propiedad \"socio-técnica\"?",
    "options": [
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Porque necesita mecanismos técnicos y también reglas organizativas claras",
        "isCorrect": true
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿En qué dos momentos suele aplicarse la verificación mediante checksum?",
    "options": [
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
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
      }
    ]
  },
  {
    "question": "¿Por qué los contenidos vistos en clase comparan la integridad con el transporte de mercancía frágil?",
    "options": [
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": true
      },
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": false
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué aportan las auditorías de completitud en un sistema distribuido?",
    "options": [
      {
        "text": "Porque necesita mecanismos técnicos y también reglas organizativas claras",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": true
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué rasgo describe mejor la idea de estabilidad semántica dentro de la fiabilidad?",
    "options": [
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": false
      },
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Por qué los contenidos vistos en clase utilizan la analogía del aeropuerto para explicar la verificación?",
    "options": [
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Porque hay capas de control que hacen fiable el sistema",
        "isCorrect": true
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué idea corrigen los contenidos vistos en clase cuando advierte sobre almacenamiento distribuido como HDFS S3?",
    "options": [
      {
        "text": "Porque aparentan normalidad con resultados inválidos",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": false
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué ventaja aporta HDFS al usar checksums por chunk en lugar de uno único para todo el fichero?",
    "options": [
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": true
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones expresa mejor la diferencia entre calidad y fiabilidad de los datos en sistemas distribuidos?",
    "options": [
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "La calidad evalúa uso y la fiabilidad confianza sostenida",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué significa asegurar coherencia \"dentro de un contrato\" en una arquitectura distribuida?",
    "options": [
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": false
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": true
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      }
    ]
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
    ]
  },
  {
    "question": "¿Por qué el metastore o catálogo se considera una pieza de integridad y no solo de documentación?",
    "options": [
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": false
      },
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Por qué es peligroso consumir una partición antes de que exista una marca clara de completitud?",
    "options": [
      {
        "text": "Porque el consumidor puede tratar datos intermedios como definitivos",
        "isCorrect": true
      },
      {
        "text": "Un campo cambia y aparecen nulls silenciosos",
        "isCorrect": false
      },
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": false
      },
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué persigue la reconciliación con una fuente de verdad o source-of-truth?",
    "options": [
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": false
      },
      {
        "text": "Validar que el pipeline y el origen cuentan lo mismo",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué matiz es clave para entender la consistencia en sistemas distribuidos?",
    "options": [
      {
        "text": "Separar registros problemáticos sin detener todo el flujo",
        "isCorrect": false
      },
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": true
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "La pérdida de confianza y malas decisiones",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué la completitud puede degradarse con frecuencia en entornos distribuidos?",
    "options": [
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": false
      },
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": false
      },
      {
        "text": "Porque hay saturación, timeouts y fallos parciales",
        "isCorrect": true
      },
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué efecto operativo puede producir el skew o desbalance fuerte de particiones?",
    "options": [
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": false
      },
      {
        "text": "Porque requiere responsabilidades claras entre componentes y procesos",
        "isCorrect": false
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué condición hace posible un reproceso fiable y controlado tras un problema de integridad?",
    "options": [
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": false
      },
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": false
      },
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué patrón de detección y gestión aparece en el ejemplo del cambio de esquema silencioso?",
    "options": [
      {
        "text": "Transformar sin romper significado ni dejar salidas incoherentes",
        "isCorrect": false
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Test de nulls, validación de esquema y cuarentena de versiones no soportadas",
        "isCorrect": true
      },
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué propiedad debe tener un consumidor para que procesar dos veces un mismo evento no cause daño?",
    "options": [
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": true
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué estrategia reduce mejor el riesgo de exponer datos a medio escribir?",
    "options": [
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      },
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      },
      {
        "text": "Reduce pérdida, pero puede introducir duplicados",
        "isCorrect": false
      },
      {
        "text": "Escribir en temporal y promocionar solo al completar",
        "isCorrect": true
      }
    ]
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
    ]
  },
  {
    "question": "¿Qué idea recoge mejor la dimensión de precisión en calidad de datos?",
    "options": [
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      },
      {
        "text": "Que el valor represente correctamente la realidad",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué problema intenta resolver el uso de ACKs en sistemas de mensajería?",
    "options": [
      {
        "text": "Porque aparentan normalidad con resultados inválidos",
        "isCorrect": false
      },
      {
        "text": "Confirmar recepción o procesamiento para reducir pérdidas",
        "isCorrect": true
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Separar registros problemáticos sin romper todo el flujo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál de estas situaciones encaja mejor con una pérdida de datos y no con duplicación?",
    "options": [
      {
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      },
      {
        "text": "Porque el consumidor puede tratar datos intermedios como definitivos",
        "isCorrect": false
      },
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Cuál es la función principal de los contratos de datos o Data Contracts?",
    "options": [
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": false
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      },
      {
        "text": "Porque el consumidor puede tratar datos intermedios como definitivos",
        "isCorrect": false
      },
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué significa asegurar coherencia \"dentro de un contrato\" en una arquitectura distribuida?",
    "options": [
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": false
      },
      {
        "text": "Se generan métricas inconsistentes y se pierde confianza",
        "isCorrect": false
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": true
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué los sistemas \"al menos una vez\" aumentan el riesgo de duplicados?",
    "options": [
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": true
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": false
      },
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": false
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué significa validar \"en la frontera\" dentro del flujo de datos?",
    "options": [
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": true
      },
      {
        "text": "Porque no basta con que la caja llegue; debe llegar correcta y completa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué la integridad en arquitecturas distribuidas se considera una cuestión de gestión además de técnica?",
    "options": [
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": false
      },
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": false
      },
      {
        "text": "Porque requiere responsabilidades claras entre componentes y procesos",
        "isCorrect": true
      },
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es la diferencia más precisa entre corrupción de datos y pérdida de datos?",
    "options": [
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": true
      },
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": false
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué una divergencia entre sistemas no implica siempre que el sistema esté roto?",
    "options": [
      {
        "text": "Permiten verificar expectativas sobre volumen o huecos",
        "isCorrect": false
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": true
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué señal de alarma sugieren los contenidos vistos en clase como indicio realista de pérdida de datos?",
    "options": [
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": true
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      },
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      }
    ]
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
        "text": "Que el proceso sea determinista y tenga trazabilidad",
        "isCorrect": false
      },
      {
        "text": "Una cola elimina mensajes antes de que el consumidor los lea",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué función cumple la separación raw/bronze, silver/refined y gold/curated en la arquitectura?",
    "options": [
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
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
      }
    ]
  },
  {
    "question": "¿Qué significa validar \"en la frontera\" dentro del flujo de datos?",
    "options": [
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": true
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Provoca retrasos, timeouts y ventanas incompletas de procesamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué explica mejor por qué errores pequeños pueden acabar produciendo efectos graves en negocio?",
    "options": [
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      },
      {
        "text": "Porque hay saturación, timeouts y fallos parciales",
        "isCorrect": false
      },
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": true
      },
      {
        "text": "Se generan métricas inconsistentes y se pierde confianza",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es el orden correcto del ciclo de respuesta cuando \"no cuadra\" un dato crítico?",
    "options": [
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": false
      },
      {
        "text": "Porque sin lineage ni metadatos no puede probarse ni interpretarse el dato",
        "isCorrect": false
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": true
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es la finalidad principal de una cuarentena o dead-letter en un pipeline?",
    "options": [
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
      },
      {
        "text": "Separar registros problemáticos sin romper todo el flujo",
        "isCorrect": true
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué papel cumple la separación raw/bronze, silver/refined y gold/curated en la gestión de integridad?",
    "options": [
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": true
      },
      {
        "text": "Que una tabla no tenga huecos en una franja",
        "isCorrect": false
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": false
      },
      {
        "text": "Transformar sin romper significado ni dejar salidas incoherentes",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué riesgo aparece al trabajar con consistencia eventual en sistemas replicados?",
    "options": [
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": false
      },
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Comprobar formato, tipos y rangos al entrar",
        "isCorrect": false
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Cuál es el principal compromiso del modelo \"al menos una vez\"?",
    "options": [
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      },
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
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
    ]
  },
  {
    "question": "¿Por qué los fallos silenciosos son especialmente peligrosos en sistemas de datos?",
    "options": [
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Que no se pierdan, corrompan ni queden en estados imposibles",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Porque aparentan normalidad con resultados inválidos",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Por qué es importante definir una source of truth por dominio?",
    "options": [
      {
        "text": "Que distintas vistas no cuenten historias incompatibles",
        "isCorrect": false
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": true
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      },
      {
        "text": "La app reintenta y duplica desbloqueos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál de las siguientes situaciones ilustra mejor un problema de completitud?",
    "options": [
      {
        "text": "Evitar cambios silenciosos acordando esquema y significado",
        "isCorrect": false
      },
      {
        "text": "Separar registros problemáticos sin romper todo el flujo",
        "isCorrect": false
      },
      {
        "text": "Un sistema de logs pierde eventos en un pico",
        "isCorrect": true
      },
      {
        "text": "Porque permite reconstruir salidas de forma controlada y trazable",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué describe mejor un checksum o suma de verificación?",
    "options": [
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "Una huella del contenido que cambia si el dato cambia",
        "isCorrect": true
      },
      {
        "text": "Una operación que deja datos visibles aunque quedó a medias",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuándo suele ser preferible el erasure coding frente a la replicación clásica?",
    "options": [
      {
        "text": "Que un campo no cambie de significado sin aviso",
        "isCorrect": false
      },
      {
        "text": "La replicación recupera más rápido; erasure coding ahorra espacio",
        "isCorrect": false
      },
      {
        "text": "Cuando interesa ahorrar almacenamiento a gran escala",
        "isCorrect": true
      },
      {
        "text": "Un campo cambia y aparecen nulls silenciosos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué inconveniente se asocia de forma más directa a la replicación triple?",
    "options": [
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Que una decisión crítica use una copia aún desactualizada",
        "isCorrect": false
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
      {
        "text": "Que multiplica el coste de almacenamiento",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Por qué los contenidos afirman que en Big Data el primer problema no es el algoritmo?",
    "options": [
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "Porque puede existir consistencia eventual aceptable",
        "isCorrect": false
      },
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Cuál de estos ejemplos corresponde mejor a una auditoría de consistencia?",
    "options": [
      {
        "text": "Expresar distintas promesas de trazabilidad, limpieza y certificación",
        "isCorrect": false
      },
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": true
      },
      {
        "text": "Validar que el pipeline y el origen cuentan lo mismo",
        "isCorrect": false
      },
      {
        "text": "La pérdida de confianza y malas decisiones",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué ejemplo representa mejor una corrupción lógica y no una corrupción de bits?",
    "options": [
      {
        "text": "Que se acepten divergencias si entran en reglas conocidas y comunicadas",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Un CSV con columnas corridas por un separador mal escapado",
        "isCorrect": true
      },
      {
        "text": "Porque requiere responsabilidades claras entre componentes y procesos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es el riesgo más típico cuando falla la capa de ingesta en una arquitectura distribuida?",
    "options": [
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": true
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
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué los contenidos vistos en clase afirman que en Big Data el primer problema rara vez es el algoritmo?",
    "options": [
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": true
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      },
      {
        "text": "Porque se amplifican al agregarse los datos",
        "isCorrect": false
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué función cumplen principalmente los mecanismos de verificación de integridad?",
    "options": [
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": true
      },
      {
        "text": "Detectar corrupción con granularidad más fina",
        "isCorrect": false
      },
      {
        "text": "Idempotencia en el tratamiento del evento recibido",
        "isCorrect": false
      },
      {
        "text": "Un sistema de logs pierde eventos en un pico",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál de los siguientes patrones encaja mejor con un problema de fiabilidad?",
    "options": [
      {
        "text": "Porque prefieren repetir mensajes antes que arriesgarse a perderlos",
        "isCorrect": false
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
        "text": "Un campo cambia y aparecen nulls silenciosos",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué idea corrigen los contenidos cuando advierten sobre el almacenamiento distribuido como solución completa?",
    "options": [
      {
        "text": "En la corrupción el dato está, pero alterado; en la pérdida falta",
        "isCorrect": false
      },
      {
        "text": "Porque los datos se degradan antes del análisis",
        "isCorrect": false
      },
      {
        "text": "Definir latencias aceptables y avisar cuándo el dato es provisional",
        "isCorrect": false
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Cuál es la responsabilidad principal del motor de procesamiento respecto a la integridad?",
    "options": [
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": false
      },
      {
        "text": "Detectar fallos y limitar daños recuperables",
        "isCorrect": false
      },
      {
        "text": "Transformar sin romper significado ni dejar salidas incoherentes",
        "isCorrect": true
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál de los siguientes ejemplos corresponde mejor a una auditoría de consistencia?",
    "options": [
      {
        "text": "Porque permite decidir qué sistema manda cuando hay discrepancias",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Al escribir el dato y al volver a leerlo",
        "isCorrect": false
      },
      {
        "text": "Comprobar que la suma de líneas coincide con el total",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué responsabilidad corresponde principalmente a los productores de datos dentro de la gestión de integridad?",
    "options": [
      {
        "text": "Que aparezcan pérdidas silenciosas o duplicados por entrega mal gestionada",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": true
      },
      {
        "text": "Definir una hora de cierre definitiva y tratar antes el dato como provisional",
        "isCorrect": false
      },
      {
        "text": "Que guardar datos ahí no resuelve por sí solo duplicados ni semántica",
        "isCorrect": false
      }
    ]
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
    ]
  },
  {
    "question": "¿Qué riesgo aparece cuando la capa de consumo usa datos \"de donde sea\" por estar disponibles?",
    "options": [
      {
        "text": "Detectar, aislar, diagnosticar, corregir, reprocesar y prevenir",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
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
    ]
  },
  {
    "question": "En el ejemplo de duplicados en compras, ¿qué combinación de medidas se usa para detectar y gestionar el problema?",
    "options": [
      {
        "text": "Que no se pierdan, corrompan ni queden en estados imposibles",
        "isCorrect": false
      },
      {
        "text": "Que aparezcan huecos temporales o bajen métricas sin explicación",
        "isCorrect": false
      },
      {
        "text": "Generar eventos trazables, versionados y sin ambigüedad",
        "isCorrect": false
      },
      {
        "text": "Unicidad por payment_id, reconciliación e idempotencia del consumidor",
        "isCorrect": true
      }
    ]
  }
];
