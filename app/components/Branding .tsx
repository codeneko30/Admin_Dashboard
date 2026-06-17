export default function Branding() {
    return (
      <div className="border border-gray-200 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-gray-900">Branding</h2>
  
        <p className="text-xs text-gray-500 mt-0.5 mb-4">
          Your store logo and accent.
        </p>
  
        {/* Upload Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
  
          <button className="flex-1 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors font-medium text-left">
            Upload logo
          </button>
        </div>
      </div>
    );
  }