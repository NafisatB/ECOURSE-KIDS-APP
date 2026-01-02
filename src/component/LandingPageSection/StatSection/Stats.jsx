import './Stats.css'

export function Stats({icon, title, variant='primary', description}) {
    return(
        <div className={`stats-container stats--${variant}`}>
            <div className="stats-border">
                <span className="stats-container__icon">{icon}</span>
            </div>
            <div className='stat_desc'>
                <h4 className="stats-container__title">{title}</h4>
            <p className=" stats-container__desc">{description}</p>
            </div>
            
        </div>
    )
}