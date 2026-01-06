import './CourseHeader.css';
import { Button } from '../../Button/Button';

export function CoursesHeader({
    label = 'OUR COURSES',
    title,

    // Button props (fully dynamic)
    buttonText = 'EXPLORE COURSES',
    buttonVariant = 'pro',
    buttonRightIcon = '→',
    onButtonClick,
    showButton = true,
}) {
    return (
        <div className="courses-header">
            <div className="courses-header__container">
                <div className="courses-header__content">
                    <span className="courses-header__label">{label}</span>
                    <h1 className="courses-header__title">{title}</h1>
                </div>

                {showButton && (
                    <Button
                        text={buttonText}
                        variant={buttonVariant}
                        rightIcon={buttonRightIcon}
                        className="courses-header__button"
                        onClick={onButtonClick}
                    />
                )}
            </div>
        </div>
    );
}
