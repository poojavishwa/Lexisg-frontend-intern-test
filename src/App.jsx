import React, { useState } from "react";
import ChatBubble from "./component/ChatBubble";
import QueryForm from "./component/QueryForm";
import PdfModal from "./component/PdfModal";

const MOCK_RESPONSE = {
  answer:
    "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
  citations: [
    {
      text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
    },
  ],
};

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfModal, setPdfModal] = useState(null);

  const handleSubmit = (query) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { role: "user", text: query },
    ]);
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: MOCK_RESPONSE.answer,
          citations: MOCK_RESPONSE.citations,
        },
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white shadow rounded-lg flex flex-col overflow-hidden">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-700">
            Lexi Legal Assistant
          </h1>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <ChatBubble
              key={i}
              role={msg.role}
              text={msg.text}
              citations={msg.citations}
              onCitationClick={setPdfModal}
            />
          ))}

          {loading && (
            <ChatBubble
              role="assistant"
              text="Lexi is typing"
              loading
            />
          )}
        </div>

        <div className="p-4 border-t">
          <QueryForm
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>

      {pdfModal && (
        <PdfModal
          citation={pdfModal}
          onClose={() => setPdfModal(null)}
        />
      )}
    </div>
  );
}
