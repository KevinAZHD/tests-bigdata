import { useState, useEffect } from 'react';
import { ChevronLeft, Info, Pin } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle.jsx';
import { QuizView } from './components/QuizView.jsx';
import { GitHubButton } from './components/GitHubButton.jsx';
import { InfoModal } from './components/InfoModal.jsx';
import { modulesConfig } from './data/modulesConfig.js';

// Punto de entrada de la aplicación
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [infoRA, setInfoRA] = useState(null);
  const [pinnedRAs, setPinnedRAs] = useState(() => {
    try {
      const saved = localStorage.getItem('pinnedRAs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Guardar o quitar RA fijada
  const togglePin = (raKey) => {
    setPinnedRAs(prev => {
      const next = prev.includes(raKey)
        ? prev.filter(k => k !== raKey)
        : [...prev, raKey];
      localStorage.setItem('pinnedRAs', JSON.stringify(next));
      return next;
    });
  };

  // Separar ruta de la URL
  const pathWithoutHash = currentPath.startsWith('#') ? currentPath.substring(1) : currentPath;
  const parts = pathWithoutHash.split('/').filter(Boolean);
  const moduleId = parts[0];
  const raId = parts[1];

  // Escuchar cambios de ruta y activar modo oscuro por defecto
  useEffect(() => {
    if (!document.documentElement.classList.contains('light')) {
      document.documentElement.classList.add('dark');
    }
    const onHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Cambiar título de la pestaña según la ruta
  useEffect(() => {
    if (moduleId && raId) {
      document.title = `Test ${moduleId.toUpperCase()} ${raId.toUpperCase()}`;
    } else if (moduleId) {
      const currentModule = modulesConfig[moduleId];
      document.title = currentModule ? currentModule.title : 'Cuestionarios Big Data';
    } else {
      document.title = 'Cuestionarios Big Data';
    }
  }, [moduleId, raId]);

  // Cambiar ruta de la URL
  const navigate = (path) => {
    window.location.hash = path;
  };

  // Pintar test si se elige módulo y RA
  if (moduleId && raId) {
    const currentModule = modulesConfig[moduleId];
    if (currentModule) {
      const currentRA = currentModule.ras.find(r => r.id === raId);
      if (currentRA) {
        return (
          <>
            <ThemeToggle />
            <GitHubButton />
            <QuizView
              key={currentRA.id}
              title={currentRA.quizTitle}
              rawQuestions={currentRA.questions}
              onBackToMenu={() => navigate('#/')}
            />
          </>
        );
      }
    }
  }

  // Pintar menú de un módulo (como BDA o SBD)
  if (moduleId) {
    const currentModule = modulesConfig[moduleId];
    if (currentModule) {
      return (
        <>
          <ThemeToggle />
          <GitHubButton />
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-gray-50 dark:bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-zinc-800 text-center">
              <div className="relative flex justify-center items-center mb-10">
                <button onClick={() => navigate('#/')} className="absolute left-0 flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">
                  <ChevronLeft size={24} />
                </button>
                <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">{currentModule.title}</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md md:max-w-3xl mx-auto">
                {currentModule.ras.map((ra, index) => {
                  const isLastOdd = currentModule.ras.length % 2 !== 0 && index === currentModule.ras.length - 1;
                  const isPinned = pinnedRAs.includes(`${moduleId}-${ra.id}`);
                  return (
                    <div
                      key={ra.id}
                      className={isLastOdd ? "relative md:col-span-2 md:justify-self-center md:w-[calc(50%-0.5rem)] w-full" : "relative"}
                    >
                      <button
                        onClick={(e) => { e.stopPropagation(); togglePin(`${moduleId}-${ra.id}`); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 rounded-full hover:bg-orange-50 dark:hover:bg-orange-950/30 z-10 transition-all active:scale-95 group/pin"
                      >
                        <Pin size={20} className={`transition-transform duration-300 ${isPinned ? "text-orange-500 fill-orange-500 rotate-45" : "group-hover/pin:rotate-45"}`} />
                      </button>
                      <button
                        onClick={() => navigate(`#/${moduleId}/${ra.id}`)}
                        className={`flex flex-col items-center justify-center p-6 border-2 bg-white dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl group w-full transition-all text-center ${isPinned
                          ? 'border-orange-400 dark:border-orange-500 shadow-md shadow-orange-500/10 dark:shadow-orange-500/20 hover:border-orange-500 dark:hover:border-orange-400'
                          : 'border-gray-300 dark:border-zinc-700 hover:border-black dark:hover:border-white'
                          }`}
                      >
                        <span className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-black dark:text-white">{ra.title}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-base">{ra.questions.length} Preguntas</span>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setInfoRA(ra); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/30 z-10 transition-all active:scale-95 group/info"
                      >
                        <Info size={20} className="transition-all duration-300 group-hover/info:rotate-12 group-hover/info:scale-110" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <InfoModal infoRA={infoRA} onClose={() => setInfoRA(null)} />
        </>
      );
    }
  }

  // Pintar pantalla de inicio
  return (
    <>
      <ThemeToggle />
      <GitHubButton />
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-gray-50 dark:bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-zinc-800 text-center">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white tracking-tight">
              Cuestionarios sobre Big Data
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">Selecciona un módulo para ver sus cuestionarios.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {Object.values(modulesConfig).map((mod) => (
              <button
                key={mod.id}
                onClick={() => navigate(`#/${mod.id}`)}
                className="group relative overflow-hidden rounded-2xl border-4 border-gray-300 dark:border-zinc-700 bg-gray-200 dark:bg-zinc-800 hover:border-black dark:hover:border-white cursor-pointer"
              >
                <img src={mod.image} alt={mod.id.toUpperCase()} className="w-full h-56 object-cover opacity-100 group-hover:opacity-80 transition-all duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 text-center transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-zinc-800">
                  <span className="text-xl font-bold text-black dark:text-white tracking-wide">
                    {mod.fullName}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <InfoModal infoRA={infoRA} onClose={() => setInfoRA(null)} />
    </>
  );
}