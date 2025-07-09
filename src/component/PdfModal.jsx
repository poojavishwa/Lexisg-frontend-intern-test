import React from "react";

export default function PdfModal({ citation, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <p className="text-gray-700">
          Click to Open PDF
        </p>
        <a
          href={citation.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Open this PDF 
        </a>
      </div>
    </div>
  );
}
