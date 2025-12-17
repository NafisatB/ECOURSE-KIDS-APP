import './Overlay.css'

export function Overlay ({title, description, icon, className="", variant="secondary"}) {
    return (
        <div className={`info-overlay  info-overlay--${variant} ${className}`}>
            <div className="info-overlay__text">
                <h4 className='info-overlay__text--title'>{title}</h4>
                <p className='info-overlay__text--desc'>{description}</p>
            </div>
            <div className="info-overlay__icon">
                {icon}
            </div>
        </div>
    )
}