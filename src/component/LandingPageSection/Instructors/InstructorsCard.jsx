import './InstructorsCard.css'
import ShareIcon from '../../../assets/icons/share.svg?react'

export function InstructorsCard({ image, name, role }) {
    return (
        <div className="instructor-card">
            <div className="instructor-card__img">
                {image}
            </div>
            <div className="instructor__card-details">
                <h4 className='instructor-card__name'>{name}</h4>
                <p className='instructor-card__role'>{role}</p>
            </div>
            <div className="instructor-card__share">
                <ShareIcon />
            </div>
        </div>
    )
}
