import './List.css'

export function ListCard({icon, text, variant="primary", className=""}) {
    return(
        <div className={`list-card list-card--${variant} ${className}`}>
            <span>{icon}</span>
            <p>{text}</p>
        </div>
    )
}