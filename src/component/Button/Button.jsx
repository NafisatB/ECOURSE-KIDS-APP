import './Button.css';

export function Button({ text, variant = "primary", rightIcon, className = "", ...props }) {
    return (
        <button
            className={`btn ${variant} ${className}`}
            {...props}
        >
            <span className="btn__text">{text}</span>

            {rightIcon && (
                <span className="btn__icon btn__icon--right">
                    {rightIcon}
                </span>
            )}
        </button>
    );
}
