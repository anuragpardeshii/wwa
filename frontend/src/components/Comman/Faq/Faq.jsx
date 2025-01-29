import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqQuestions } from '../../../assets/lists/Faq'; // Import FaqQuestions from FAQ.js

export default function FAQ () {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {FaqQuestions.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleQuestion(item.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center gap-4"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <ChevronDown
                className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openId === item.id ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openId === item.id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4 text-gray-600 whitespace-pre-line">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
