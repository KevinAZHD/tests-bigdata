// Pintar mapa de botones de las preguntas
export const QuestionMap = ({ questions, answers, currentIdx, onSelectIdx }) => {
  return (
    <div className="max-w-4xl w-full mx-auto mt-8 bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl border border-gray-200 dark:border-zinc-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mapa de preguntas</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {questions.map((q, idx) => {
          const answered = answers[idx] !== undefined;
          const isCorrect = answered && q.options[answers[idx]].isCorrect;

          let badgeClass = "w-10 h-10 rounded-md font-bold flex items-center justify-center text-sm cursor-pointer border-2 ";

          if (currentIdx === idx) {
            badgeClass += "border-black dark:border-white ring-2 ring-black/50 dark:ring-white/50 ";
          } else {
            badgeClass += "border-gray-300 dark:border-zinc-700 hover:border-black dark:hover:border-white ";
          }

          if (!answered) {
            badgeClass += "bg-white dark:bg-zinc-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800";
          } else if (isCorrect) {
            badgeClass += "bg-green-100 dark:bg-green-600/20 text-green-700 dark:text-green-400";
          } else {
            badgeClass += "bg-red-100 dark:bg-red-600/20 text-red-700 dark:text-red-400";
          }

          return (
            <button key={idx} onClick={() => onSelectIdx(idx)} className={badgeClass}>
              {idx + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};
