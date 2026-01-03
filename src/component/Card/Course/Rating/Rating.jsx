import './Rating.css';

export function Rating({ stars, count }) {
    return (
        <div className="rating">
            <div className="rating__stars">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`rating__star ${i < stars ? 'rating__star--filled' : ''}`}>
                        ★
                    </span>
                ))}
            </div>
            <span className="rating__count">{count}k</span>
        </div>
    );
}
