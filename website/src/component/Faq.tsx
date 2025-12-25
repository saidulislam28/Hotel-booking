"use client";

import { useState, useRef } from "react";

const FAQSection = ({
  faqs
}: {
  faqs: { id: number; question: string; answer: string }[];

}) => {
  const [openId, setOpenId] = useState(null);
  const refs = useRef({});

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-5">
      <div className="space-y-4">
        {faqs.map(({ id, question, answer }, index) => (
          <div key={id} className="rounded-md p-2 ">
            <button
              onClick={() => toggle(id)}
              className="cursor-pointer w-full text-left font-bold hover:text-[#B1905E] flex justify-between items-center"
            >
              {question}
              <span className="text-2xl">{openId === id ? "–" : "+"}</span>
            </button>

            <div
              ref={(el) => (refs.current[id] = el)}
              className="overflow-hidden transition-all duration-400 ease-in-out"
              style={{
                maxHeight:
                  openId === id ? `${refs.current[id]?.scrollHeight}px` : "0px",
                opacity: openId === id ? 1 : 0,
                marginTop: openId === id ? "8px" : "0px",
              }}
            >
              <p className="secondary_text">{answer}</p>
            </div>

            {index !== faqs.length - 1 && (
              <div
                className="mt-5"
                style={{ borderTop: "0.5px solid #cdd1ce" }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
