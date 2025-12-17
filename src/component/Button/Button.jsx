import './Button.css';

export function Button({ text, variant = "primary", className = "", ...props }) {
    return (
        <button
            className={`btn ${variant} ${className}`}
            {...props}
        >
            {text}
        </button>
    );
}
