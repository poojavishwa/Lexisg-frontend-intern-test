import React from "react";
import CitationCard from "./CitationCard";

export default function ChatBubble({
  role,
  text,
  citations,
  loading,
  onCitationClick,
}) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-lg px-4 py-3 rounded-lg ${
          isUser
            ? "bg-indigo-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
      >
        <p className="whitespace-pre-wrap">
          {text}
          {loading && (
            <span className="animate-pulse ml-2">...</span>
          )}
        </p>

        {citations &&
          citations.map((c, idx) => (
            <CitationCard
              key={idx}
              citation={c}
              onClick={() => onCitationClick(c)}
            />
          ))}
      </div>
    </div>
  );
}
