import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a wide range of services including web development, data analytics, and digital marketing.' },
    { question: 'How can I contact support?', answer: 'You can contact support via email at support@encreagetech.com or through our contact form on the website.' },
    { question: 'What payment methods do you accept?', answer: 'We accept various payment methods including credit cards, PayPal, and bank transfers.' },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-light-blue p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 shadow rounded cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="font-bold">{faq.question}</h3>
              <p className={activeIndex === index ? 'text-normal' : 'hidden'}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
