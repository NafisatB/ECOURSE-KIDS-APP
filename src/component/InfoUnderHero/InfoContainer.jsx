import './InfoContainer.css'

export const InfoContainer = ({icon, title, description, className="", variant="primary"}) => {
    return(
        <div className={`info-card info-card--${variant} ${className}`}>
            <span className="info-card__icon">{icon}</span>
            <h4 className="info-card__title">{title}</h4>
            <p className="info-card__desc">{description}</p>
        </div>
    )
}