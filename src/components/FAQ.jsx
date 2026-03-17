import { useState } from 'react';
import { FAQ_DATA } from '../data/faq';

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq-section" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 id="faq-title" className="section-header__title">
                        了解更多資訊
                    </h2>
                    <p className="section-header__desc">
                        我們整理了客戶最常詢問的問題，幫助您快速了解 SalesPilot。
                    </p>
                </div>

                <div className="faq-list">
                    {FAQ_DATA.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div 
                                key={item.id} 
                                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${item.id}`}
                                >
                                    <h3>{item.question}</h3>
                                    <span className="faq-icon" aria-hidden="true">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </button>
                                <div 
                                    id={`faq-answer-${item.id}`}
                                    className="faq-answer-wrapper"
                                    aria-hidden={!isOpen}
                                >
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
