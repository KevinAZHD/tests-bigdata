# Cuestionarios sobre Big Data

Aplicación web interactiva diseñada para comprobar, practicar y evaluar conocimientos sobre ecosistemas y tecnologías de Big Data.

## Propósito del Proyecto

El objetivo principal de esta plataforma es servir como herramienta de autoevaluación para que los usuarios puedan medir su nivel de aprendizaje y preparar exámenes o certificaciones mediante cuestionarios estructurados de opción múltiple, organizados por módulos temáticos y resultados de aprendizaje (RA).

---

## Estructura Completa del Proyecto

A continuación se detalla la organización de los archivos y carpetas del proyecto:

```text
tests-bigdata/
├── public/                 # Recursos públicos estáticos (íconos, etc.)
├── src/                    # Código fuente de la aplicación
│   ├── assets/             # Imágenes y assets del proyecto (ej. BDA.png, SBD.png)
│   ├── components/         # Componentes modulares y reutilizables de React
│   │   ├── ConfirmModal.jsx    # Pop-up de confirmación al intentar salir o reiniciar
│   │   ├── GithubButton.jsx    # Botón flotante para acceder al repositorio en GitHub
│   │   ├── InfoModal.jsx       # Modal informativo sobre los contenidos de cada RA
│   │   ├── QuestionCard.jsx    # Tarjeta que muestra la pregunta y maneja las respuestas
│   │   ├── QuestionMap.jsx     # Mapa inferior para navegación rápida entre preguntas
│   │   ├── QuizView.jsx        # Vista principal del flujo del cuestionario y resultados
│   │   └── ThemeToggle.jsx     # Selector flotante de modo claro y oscuro
│   ├── data/               # Preguntas del cuestionario y configuración de módulos
│   │   ├── questions/      # Archivos de datos con las colecciones de preguntas por RA
│   │   │   ├── bda-ra1.js
│   │   │   ├── bda-ra2.js
│   │   │   ├── bda-ra3.js
│   │   │   ├── bda-ra4.js
│   │   │   ├── bda-ra5.js
│   │   │   ├── sbd-ra1.js
│   │   │   ├── sbd-ra2.js
│   │   │   ├── sbd-ra3.js
│   │   │   └── sbd-ra4.js
│   │   └── modulesConfig.js # Configuración principal de los módulos de BDA y SBD
│   ├── utils/              # Funciones de utilidad
│   │   └── shuffle.js      # Algoritmo Fisher-Yates para mezclar preguntas y opciones
│   ├── App.jsx             # Componente raíz con enrutamiento dinámico por hash
│   ├── index.css           # Estilos globales y configuración de Tailwind CSS
│   └── main.jsx            # Punto de entrada de renderizado de React
├── eslint.config.js        # Reglas del linter ESLint
├── index.html              # Plantilla HTML principal
├── package.json            # Dependencias y scripts de ejecución
├── vite.config.js          # Configuración de compilación de Vite
└── README.md               # Documentación general del proyecto
```

---

## Características de Calidad de Vida (QoL)

La aplicación incluye diversas funcionalidades añadidas para mejorar la experiencia de usuario (Quality of Life):

1. **Persistencia del Tema Oscuro**: Recuerda la selección del tema (Modo Claro u Oscuro) a través del almacenamiento local (`localStorage`).
2. **Fijado de Cuestionarios (Pin)**: Permite fijar cuestionarios importantes o favoritos en la parte superior para acceder a ellos rápidamente.
3. **Mezcla Inteligente (Randomización)**: Las preguntas y sus opciones de respuesta se mezclan aleatoriamente cada vez que inicias un test mediante el algoritmo Fisher-Yates, evitando que memorices el orden.
4. **Prevención de Pérdida de Progreso**: Si intentas recargar la página (`F5`), ir hacia atrás o reiniciar mientras estás a mitad de un cuestionario, la app te avisará para confirmar la acción y evitar que pierdas tus respuestas.
5. **Navegación por Teclado**: Puedes usar las flechas del teclado (`Flecha Izquierda` y `Flecha Derecha`) para navegar fácilmente entre las preguntas.
6. **Mapa de Navegación Rápida**: Un mapa visual en la parte inferior muestra qué preguntas has respondido, cuáles son correctas (verde) e incorrectas (rojo), y permite saltar directamente a cualquier pregunta.
7. **Formateo en Negritas**: Soporte automático para resaltar fragmentos de texto encerrados entre `**` para una lectura más clara y fluida.

---

## Cómo Ejecutar el Proyecto en Local

### Requisitos Previos

- Tener instalado **Node.js** (versión recomendada LTS).

### Instrucciones

1. **Instalar Dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

3. **Construir para Producción**:
   ```bash
   npm run build
   ```
