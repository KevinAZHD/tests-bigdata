// Preguntar si quiere salir
export const ConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center">
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">¿Estás seguro?</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Se perderá tu progreso actual en el test.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg font-semibold bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-500"
          >
            Sí, salir
          </button>
        </div>
      </div>
    </div>
  );
};
