import React, { useState } from "react";

export default function QueryForm({ onSubmit, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 border border-gray-300 p-4 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        type="text"
        placeholder="Type your legal question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-3 rounded-lg font-semibold text-black transition  ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
}
