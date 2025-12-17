import './Stats.css'

export function Stats({icon, title, description}) {
    return(
        <div className="stats-container">
            <div className="stats-border">
                <span className="stats-container__icon">{icon}</span>
            </div>
            <h4 className="stats-container__title">{title}</h4>
            <p className="stats-container__desc">{description}</p>
        </div>
    )
}