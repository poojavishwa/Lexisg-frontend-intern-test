import React from "react";

export default function CitationCard({ citation, onClick }) {
  return (
    <div
      onClick={onClick}
      className="mt-3 p-3 bg-white border border-indigo-200 rounded shadow cursor-pointer hover:bg-indigo-50 transition"
    >
      <p className="text-gray-700 italic text-sm">
        “{citation.text}”
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Source: {citation.source}
      </p>
    </div>
  );
}
