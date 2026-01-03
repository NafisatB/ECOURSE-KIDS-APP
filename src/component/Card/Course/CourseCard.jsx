import './CourseCard.css';
import { Button } from '../../Button/Button';
import { Rating } from '../Course/Rating/Rating';

export function CourseCard({
    image,
    badge,
    title,
    rating = 5,
    ratingCount = 4.5,
    price,
    lessonNumber,
    duration,
    studentCount,
    instructor,
    instructorAvatar,
    onEnroll
}) {
    return (
        <div className="course-card">
            <div className="course-card__image-wrapper">
                <img src={image} alt={title} className="course-card__image" />
                {badge && (
                    <span className="course-card__badge">{badge}</span>
                )}
            </div>

            <div className="course-card__content">
                <h3 className="course-card__title">{title}</h3>

                <div className="course-card__rating-price">
                    <Rating stars={rating} count={ratingCount} />
                    {price && <span className="course-card__price">{price}</span>}
                </div>

                <div className="course-card__meta">
                    {lessonNumber && (
                        <span className="course-card__meta-item">
                            <span className="course-card__meta-icon">📖</span>
                            Lesson {lessonNumber}
                        </span>
                    )}
                    {duration && (
                        <span className="course-card__meta-item">
                            <span className="course-card__meta-icon">⏱️</span>
                            {duration}
                        </span>
                    )}
                    {studentCount && (
                        <span className="course-card__meta-item">
                            <span className="course-card__meta-icon">👥</span>
                            Students {studentCount}
                        </span>
                    )}
                </div>

                <div className="course-card__footer">
                    <div className="course-card__instructor">
                        {instructorAvatar && (
                            <img
                                src={instructorAvatar}
                                alt={instructor}
                                className="course-card__avatar"
                            />
                        )}
                        {instructor && (
                            <span className="course-card__instructor-name">{instructor}</span>
                        )}
                    </div>
                    <Button
                        text="Enroll"
                        variant="pro"
                        rightIcon="→"
                        className="course-card__button"
                        onClick={onEnroll}
                    />
                </div>
            </div>
        </div>
    );
}
