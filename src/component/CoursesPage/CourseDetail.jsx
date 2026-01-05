import { useState } from 'react';
import './CourseDetail.css';
import { Rating } from '../Card/Course/Rating/Rating';
import { Button } from '../Button/Button';
import CourseImg5 from '../../assets/images/course-img5.svg'

export function CDetail({
    image,
    image2,
    rating = 4.7,
    ratingCount = 180,
    title,
    lessonNumber,
    startTime,
    endTime,
    studentCount,
    tabs = ['Overview', 'Curriculum', 'Instructor', 'Reviews'],
    tabContent = {},
    originalPrice,
    salePrice,
    money_back_guarantee,
    onBuyNow,
    courseDetails = {},
    description,
    learningOutcomes = []
}) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="course-detail">
            <div className="course-detail__container">
                <div className="course-detail__main">
                    <div className="course-detail__image-wrapper">
                        <img src={image} alt={title} className="course-detail__image" />
                    </div>

                    <div className="course-detail__header">
                        <Rating stars={Math.floor(rating)} count={ratingCount} />
                        <h1 className="course-detail__title">{title}</h1>

                        <div className="course-detail__meta">
                            {lessonNumber && (
                                <span className="course-detail__meta-item">
                                    <span className="course-detail__meta-icon">📖</span>
                                    Lesson {lessonNumber}
                                </span>
                            )}
                            {startTime && endTime && (
                                <span className="course-detail__meta-item">
                                    <span className="course-detail__meta-icon">⏰</span>
                                    {startTime}-{endTime}
                                </span>
                            )}
                            {studentCount && (
                                <span className="course-detail__meta-item">
                                    <span className="course-detail__meta-icon">👥</span>
                                    Students {studentCount}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="course-detail__tabs">
                        <div className="course-detail__tabs-nav">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`course-detail__tab-button ${activeTab === index ? 'course-detail__tab-button--active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                    </div>

                    {description && (
                        <div className="course-detail__description-section">
                            <div className="course-detail__description-block">
                                <h3 className="course-detail__section-title">Course Description</h3>
                                <p className="course-detail__description-text">{description}</p>
                            </div>

                            {learningOutcomes.length > 0 && (
                                <div className="course-detail__learning-block">
                                    <h3 className="course-detail__section-title">What Will I Learn From This Course?</h3>
                                    <p className="course-detail__description-text">{description}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <aside className="course-detail__sidebar">
                    <div className="course-detail__sidebar-image">
                        <img src={image2} alt={title} />
                    </div>

                    <div className="course-detail__pricing">
                        <div className="course-detail__price-group">
                            <p>Course Fee</p>
                            <div className='Course__price'>
                                 {salePrice && (
                                    <span className="course-detail__sale-price">${salePrice}</span>
                                )}
                                {originalPrice && (
                                    <span className="course-detail__original-price">${originalPrice}</span>
                                )}
                               
                            </div>

                        </div>
                        {money_back_guarantee && (
                            <p className="course-detail__guarantee">{money_back_guarantee}</p>
                        )}
                    </div>

                    <Button
                        text="BUY NOW"
                        variant="btn-course"
                        className="course-detail__buy-button"
                        onClick={onBuyNow}
                    />

                    <div className="course-detail__details-grid">
                        {courseDetails.schedule && (
                            <>
                                <div className="course-detail__detail-item">
                                    <span className="course-detail__detail-label">Class Schedule</span>
                                    <span className="course-detail__detail-value">{courseDetails.schedule}</span>
                                </div>
                                <div className="course-detail__detail-item">
                                    <span className="course-detail__detail-label">Start Date</span>
                                    <span className="course-detail__detail-value">{courseDetails.startDate || '-'}</span>
                                </div>
                            </>
                        )}
                        {courseDetails.enrolled && (
                            <>
                                <div className="course-detail__detail-item">
                                    <span className="course-detail__detail-label">Enrolled</span>
                                    <span className="course-detail__detail-value">{courseDetails.enrolled}</span>
                                </div>
                                <div className="course-detail__detail-item">
                                    <span className="course-detail__detail-label">Lectures</span>
                                    <span className="course-detail__detail-value">{courseDetails.lectures}</span>
                                </div>
                            </>
                        )}
                        {courseDetails.skillLevel && (
                            <>
                                <div className="course-detail__detail-item">
                                    <span className="course-detail__detail-label">Skill Level</span>
                                    <span className="course-detail__detail-value">{courseDetails.skillLevel}</span>
                                </div>
                                <div className="course-detail__detail-item">
                                    <span className="course-detail__detail-label">Class Days</span>
                                    <span className="course-detail__detail-value">{courseDetails.classDays || '-'}</span>
                                </div>
                            </>
                        )}
                        {courseDetails.language && (
                            <div className="course-detail__detail-item course-detail__detail-item--full">
                                <span className="course-detail__detail-label">Language</span>
                                <span className="course-detail__detail-value">{courseDetails.language}</span>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
}
