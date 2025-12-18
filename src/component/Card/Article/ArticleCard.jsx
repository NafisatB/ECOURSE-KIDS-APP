import './ArticleCard.css'
import { Button } from '../../Button/Button'
import CalendarIcon from '../../../assets/icons/calendar.svg?react'
import ChatIcon from '../../../assets/icons/chat.svg?react'

export function ArticleCard({img, date, comments, text}) {
    return(
        <div className="article-card">
            <div className="article-card__img">
                {img}
            </div>
            <div className="article-card__details">
                <span>
                    <CalendarIcon />
                    {date}
                </span>
                <span>
                    <ChatIcon />
                    {comments}
                </span>
            </div>
            <p className="article-card__text">{text}</p>
            <div>
                <Button
                text="Read more"
                />
            </div>
        </div>
    )
}