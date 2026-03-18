import { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-banner">
                <div className="cookie-consent-content">
                    <h3>我們使用 Cookies</h3>
                    <p>為了提供更好的使用者體驗，本網站使用 Cookies。繼續瀏覽即表示您同意我們的 Cookie 政策。</p>
                </div>
                <div className="cookie-consent-actions">
                    <button className="btn-decline" onClick={handleDecline}>拒絕</button>
                    <button className="btn-accept" onClick={handleAccept}>接受</button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
