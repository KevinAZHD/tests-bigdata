import { X } from 'lucide-react';

// Mostrar ventana con info del RA
export const InfoModal = ({ infoRA, onClose }) => {
  if (!infoRA) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 p-6 rounded-2xl shadow-2xl max-w-sm w-full relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white bg-gray-100 dark:bg-zinc-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700">
          <X size={20} />
        </button>
        <h3 className="text-xl font-bold text-black dark:text-white mb-4 pr-6">
          {infoRA.infoTitle}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {infoRA.info}
        </p>
      </div>
    </div>
  );
};
