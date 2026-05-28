import { CheckCircle, XCircle } from 'lucide-react';

// Formatear texto con negritas
const renderFormattedText = (text) => {
  if (!text) return null;
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-extrabold">{part}</strong>;
    }
    return part;
  });
};

// Pintar la tarjeta de la pregunta
export const QuestionCard = ({ question, index, answer, onSelectOption }) => {
  const hasAnswered = answer !== undefined;

  return (
    <div className="max-w-4xl w-full mx-auto bg-gray-50 dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-800 p-6 md:p-8 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          <span className="text-black dark:text-black dark:text-white mr-2">{index + 1}.</span>
          {renderFormattedText(question.question)}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, optIdx) => {
          const isSelected = answer === optIdx;
          let btnClass = "text-left p-4 rounded-xl border-2 flex items-center justify-between ";

          if (!hasAnswered) {
            btnClass += "bg-white dark:bg-zinc-900 border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-black dark:hover:border-white text-black dark:text-white cursor-pointer";
          } else {
            if (option.isCorrect) {
              btnClass += "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300";
            } else if (isSelected) {
              btnClass += "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300";
            } else {
              btnClass += "bg-white dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-gray-500 opacity-60";
            }
          }

          return (
            <button
              key={optIdx}
              onClick={() => onSelectOption(optIdx)}
              disabled={hasAnswered}
              className={btnClass}
            >
              <span className="text-lg">{renderFormattedText(option.text)}</span>
              {hasAnswered && option.isCorrect && <CheckCircle className="text-green-500 flex-shrink-0 ml-4" />}
              {hasAnswered && isSelected && !option.isCorrect && <XCircle className="text-red-500 flex-shrink-0 ml-4" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
