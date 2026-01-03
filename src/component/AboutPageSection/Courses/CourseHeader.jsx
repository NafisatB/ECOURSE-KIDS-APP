import './CourseHeader.css';
import { Button } from '../../Button/Button';

export function CoursesHeader({ label = 'OUR COURSES', title, onExplore }) {
    return (
        <div className="courses-header">
            <div className="courses-header__container">
                <div className="courses-header__content">
                    <span className="courses-header__label">{label}</span>
                    <h1 className="courses-header__title">{title}</h1>
                </div>
                <Button
                    text="EXPLORE COURSES"
                    variant="pro"
                    rightIcon="→"
                    className="courses-header__button"
                    onClick={onExplore}
                />
            </div>
        </div>
    );
}
