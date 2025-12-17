import './TestimonialCard.css'
import StarRating from '../../../assets/icons/ratings.svg?react'

export function TestimonialCard({image, name, title}) {
    return(
        <div className='testimonial-card'>
            <StarRating />
            <p className="testimonial-card__comment">
                “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”
            </p>
            <div className="testimonial-card__profile">
                {image}
                <div className="testimonial-card__profile--user">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}