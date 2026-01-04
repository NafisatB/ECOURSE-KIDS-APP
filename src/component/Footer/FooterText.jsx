import './FooterText.css'

export function FooterText({icon, text, variant='text-primary', info}) {
    return(
        <div className="footer-info">
            <div className="footer-info__icon">
                {icon}
            </div>
            <div className="footer-info__details">
                <span className={`footer-text ${variant}`}>{text}:</span>
                <p>{info}</p>
            </div>
        </div>
    )
}