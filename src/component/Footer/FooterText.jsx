import './FooterText.css'

export function FooterText({icon, text, info}) {
    return(
        <div className="footer-info">
            <div className="footer-info__icon">
                {icon}
            </div>
            <div className="footer-info__details">
                <span>{text}:</span>
                <p>{info}</p>
            </div>
        </div>
    )
}