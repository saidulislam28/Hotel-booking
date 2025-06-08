"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is your return policy?",
    answer: "You can return any item within 30 days for a full refund.",
  },
  {
    id: 2,
    question: "Do you offer technical support?",
    answer: "Yes, we offer 24/7 support via email and live chat.",
  },
  {
    id: 3,
    question: "How long does shipping take?",
    answer: "Shipping typically takes 3-5 business days.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-5">
      <div className="space-y-4">
        {faqs.map(({ id, question, answer }, index) => (
          <div key={id} className=" rounded-md p-4 transition">
            <button
              className="cursor-pointer w-full text-left font-bold hover:text-[#B1905E] flex justify-between items-center"
              onClick={() => toggle(id)}
            >
              {question}
              <span className="text-2xl">{openId === id ? "--" : "+"}</span>
            </button>
            {openId === id && <p className="mt-2 secondary_text">{answer}</p>}
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
