


export default function SecondaryButton({ label }) {
    return (
      <button
        className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        {label}
      </button>
    );
  }