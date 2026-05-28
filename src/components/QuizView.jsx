import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Search, Home, AlertTriangle } from 'lucide-react';
import { shuffleArray } from '../utils/shuffle.js';
import { QuestionCard } from './QuestionCard.jsx';
import { QuestionMap } from './QuestionMap.jsx';
import { ConfirmModal } from './ConfirmModal.jsx';

// Controlar y pintar la vista del test
export const QuizView = ({ title, rawQuestions, onBackToMenu }) => {
  const [gameState, setGameState] = useState('playing');
  const [isRevision, setIsRevision] = useState(false);
  const [questions, setQuestions] = useState(() => {
    return shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [pendingAction, setPendingAction] = useState(null);
  const [attemptCount, setAttemptCount] = useState(1);
  const [revisionData, setRevisionData] = useState(null);

  // Evitar salir sin querer y perder progreso
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (gameState === 'playing' || gameState === 'results') {
        e.preventDefault();
        e.returnValue = '¿Seguro que quieres salir? Se perderá el progreso.';
        return e.returnValue;
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [gameState, answers]);

  // Manejar teclado para cambiar pregunta
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (pendingAction) return;
      if (e.key === 'ArrowLeft') {
        setCurrentIdx(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pendingAction, questions.length]);

  // Cambiar a resultados si se responden todas
  useEffect(() => {
    if (questions.length > 0 && Object.keys(answers).length === questions.length && !isRevision && gameState === 'playing') {
      const timer = setTimeout(() => {
        setGameState('results');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [answers, questions.length, isRevision, gameState]);

  // Limpiar estados y empezar de nuevo
  const executeRestart = () => {
    const shuffledQuestions = shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestions(shuffledQuestions);
    setAnswers({});
    setCurrentIdx(0);
    setGameState('playing');
    setIsRevision(false);
    setPendingAction(null);
    setAttemptCount(prev => prev + 1);
    setRevisionData(null);
  };

  // Reintentar solo las preguntas falladas
  const executeRetryWrong = () => {
    const wrongOriginalQuestions = Object.entries(answers)
      .filter(([qIdx, optIdx]) => !questions[qIdx].options[optIdx].isCorrect)
      .map(([qIdx]) => {
        const answeredQ = questions[qIdx];
        return rawQuestions.find(rq => rq.question === answeredQ.question);
      })
      .filter(Boolean);

    const shuffledWrong = shuffleArray(wrongOriginalQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestions(shuffledWrong);
    setAnswers({});
    setCurrentIdx(0);
    setGameState('playing');
    setIsRevision(false);
    setPendingAction(null);
    setAttemptCount(prev => prev + 1);
    setRevisionData(null);
  };

  // Preguntar antes de reiniciar si está a medias
  const handleRestart = () => {
    if (gameState === 'playing' && Object.keys(answers).length < questions.length) {
      setPendingAction('restart');
      return;
    }
    executeRestart();
  };

  // Preguntar antes de volver a inicio
  const handleBack = () => {
    setPendingAction('back');
  };

  // Guardar la opción elegida por el usuario
  const handleSelectOption = (optionIndex) => {
    if (answers[currentIdx] !== undefined) return;
    setAnswers(prev => ({
      ...prev,
      [currentIdx]: optionIndex
    }));
  };

  // Mostrar aviso de carga si no hay preguntas
  if (questions.length === 0) {
    return <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">Cargando test...</div>;
  }

  const currentQuestion = questions[currentIdx];
  const totalAnswered = Object.keys(answers).length;
  const correctAnswersCount = Object.entries(answers).filter(
    ([qIdx, optIdx]) => questions[qIdx].options[optIdx].isCorrect
  ).length;

  // Pintar los resultados al terminar
  if (gameState === 'results') {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-4xl font-extrabold mb-4 text-black dark:text-white">Resultados Finales</h2>
        <h3 className="text-xl text-gray-500 dark:text-gray-400 mb-6">{title}</h3>
        <div className="text-6xl font-black mb-6">
          <span className={correctAnswersCount >= (questions.length / 2) ? 'text-green-500' : 'text-red-500'}>
            {correctAnswersCount}
          </span>
          <span className="text-gray-400 dark:text-gray-500"> / {questions.length}</span>
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Has respondido correctamente el {Math.round((correctAnswersCount / questions.length) * 100)}% de las preguntas.
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-lg w-full mx-auto">
          <button onClick={() => { setRevisionData({ questions, answers }); setGameState('playing'); setIsRevision(true); setCurrentIdx(0); }} className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-black dark:text-white font-bold py-4 px-6 rounded-xl">
            <Search size={24} /> REVISIÓN
          </button>
          <button onClick={executeRetryWrong} disabled={correctAnswersCount === questions.length} className={`flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl ${correctAnswersCount === questions.length ? 'bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-500 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}>
            <AlertTriangle size={24} /> REINTENTAR FALLADAS
          </button>
          <button onClick={handleRestart} className="flex items-center justify-center gap-2 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-bold py-4 px-6 rounded-xl">
            <RotateCcw size={24} /> REINICIAR TODO
          </button>
          <button onClick={handleBack} className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white font-bold py-4 px-6 rounded-xl">
            <Home size={24} /> INICIO
          </button>
        </div>
        <ConfirmModal
          isOpen={!!pendingAction}
          onCancel={() => setPendingAction(null)}
          onConfirm={() => {
            if (pendingAction === 'back') onBackToMenu();
            if (pendingAction === 'restart') executeRestart();
          }}
        />
      </div>
    );
  }

  // Pintar pantalla de preguntas
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-4 md:p-8 flex flex-col justify-center">
      {/* Pintar cabecera de progreso */}
      <div className="sticky top-0 z-40 bg-white dark:bg-black py-3 md:static md:z-auto md:bg-transparent md:dark:bg-transparent md:py-0 max-w-4xl w-full mx-auto mb-6">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progreso</span>
            <div className="text-2xl font-bold">{totalAnswered} <span className="text-gray-400 dark:text-gray-500">/ {questions.length}</span></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Intento: {attemptCount}</span>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3">
              <button onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))} className={`p-2 rounded-lg bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 ${currentIdx === 0 ? 'invisible' : ''}`}>
                <ChevronLeft size={24} />
              </button>

              <button onClick={handleBack} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800">
                <Home size={20} /> <span className="hidden sm:inline">Inicio</span>
              </button>

              <button onClick={() => setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1))} className={`p-2 rounded-lg bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 ${currentIdx === questions.length - 1 ? 'invisible' : ''}`}>
                <ChevronRight size={24} />
              </button>
            </div>
            {isRevision && revisionData && (
              <button
                onClick={() => {
                  setQuestions(revisionData.questions);
                  setAnswers(revisionData.answers);
                  setIsRevision(false);
                  setGameState('results');
                  setCurrentIdx(0);
                }}
                className="absolute left-1/2 -translate-x-1/2 mt-1 text-sm text-gray-500 dark:text-gray-400 underline hover:text-black dark:hover:text-white transition-colors whitespace-nowrap"
              >
                Finalizar revisión
              </button>
            )}
          </div>

          <div className="text-right">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Aciertos</span>
            <div className="text-2xl font-bold text-green-500">{correctAnswersCount}</div>
          </div>
        </div>
      </div>

      {/* Pintar tarjeta de pregunta */}
      <QuestionCard
        question={currentQuestion}
        index={currentIdx}
        answer={answers[currentIdx]}
        onSelectOption={handleSelectOption}
      />

      {/* Pintar mapa de preguntas */}
      <QuestionMap
        questions={questions}
        answers={answers}
        currentIdx={currentIdx}
        onSelectIdx={setCurrentIdx}
      />

      {/* Pintar ventana de confirmación si hace falta */}
      <ConfirmModal
        isOpen={!!pendingAction}
        onCancel={() => setPendingAction(null)}
        onConfirm={() => {
          if (pendingAction === 'back') onBackToMenu();
          if (pendingAction === 'restart') executeRestart();
        }}
      />
    </div>
  );
};
