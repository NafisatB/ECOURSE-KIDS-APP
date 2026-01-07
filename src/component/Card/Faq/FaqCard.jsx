import { useState } from 'react';
import './FaqCard.css';

export function FaqCard({ question, answer, image, faqs = [] }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    const items = faqs.length > 0 ? faqs : [{ question, answer, image }];

    return (
        <div className="faq-card">
            {items.map((item, index) => (
                <div key={index} className="faq-card__item">
                    <button
                        className={`faq-card__header ${expandedIndex === index ? 'faq-card__header--expanded' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="faq-card__question">{item.question}</span>
                        <span className="faq-card__toggle">
                            {expandedIndex === index ? '−' : '+'}
                        </span>
                    </button>

                    {expandedIndex === index && (
                        <div className="faq-card__content">
                            <div className="faq-card__answer-wrapper">
                                <p className="faq-card__answer">{item.answer}</p>
                                {item.image && (
                                    <img src={item.image} alt={item.question} className="faq-card__answer-image" />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
