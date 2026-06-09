import React from "react";

export default function MediaSection() {
    const images = [];

    return (
        <div className="border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Media
            </h2>

            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer transition-colors border-gray-200 bg-gray-50 hover:bg-gray-100">

                <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                />

                <svg
                    className="w-8 h-8 text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 15l-5-5L5 21"
                    />
                </svg>

                <p className="text-sm font-medium text-gray-700">
                    Upload images
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                    PNG, JPG up to 10MB
                </p>
            </label>

            {images.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-4">
                    {images.map((src, i) => (
                        <div key={i} className="relative group">
                            <img
                                src={src}
                                alt={`upload-${i}`}
                                className="w-full h-20 object-cover rounded-lg border border-gray-200"
                            />
                            <button className="absolute top-1 right-1 w-5 h-5 bg-gray-900 text-white rounded-full text-xs items-center justify-center hidden group-hover:flex">
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}