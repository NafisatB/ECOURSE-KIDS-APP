import { CourseCard } from '../../Card/Course/CourseCard'
import CourseImg1 from '../../../assets/images/course-img1.svg'
import CourseImg2 from '../../../assets/images/course-img2.svg'
import CourseImg3 from '../../../assets/images/course-img3.svg'
import CourseInstructor1 from '../../../assets/images/course-instructor1.svg'
import CourseInstructor2 from '../../../assets/images/course-instructor2.svg'
import CourseInstructor3 from '../../../assets/images/course-instructor3.svg'

import { CoursesHeader } from './CourseHeader';

export function Courses() {
    const handleEnroll = () => {
        console.log('User enrolled!');
    };

    const handleExplore = () => {
        console.log('Explore courses clicked!');
    };

    return (
        <div>
            <CoursesHeader
                label="OUR COURSES"
                title="Creating A Community Of Life Long Learners."
                onExplore={handleExplore}
            />

            <div style={{ padding: '2rem 1rem',}}>
                <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 0.5fr))', }}>
                <CourseCard
                    image={CourseImg1}
                    badge="Digital Marketing"
                    title="It Statistics Data Science And Business Analysis"
                    rating={5}
                    ratingCount={4.5}
                    price="#50.00"
                    lessonNumber={10}
                    duration="19h 30m"
                    studentCount="20+"
                    instructor="Samantha"
                    instructorAvatar={CourseInstructor1}
                    onEnroll={handleEnroll}
                />

                <CourseCard
                    image={CourseImg2}
                    badge="Digital Marketing"
                    title="It Statistics Data Science And Business Analysis"
                    rating={4}
                    ratingCount={4.5}
                    price="#50.00"
                    lessonNumber={10}
                    duration="19h 30m"
                    studentCount="20+"
                    instructor="Charles"
                    instructorAvatar={CourseInstructor2}
                    onEnroll={handleEnroll}
                />

                <CourseCard
                    image={CourseImg3}
                    badge="Digital Marketing"
                    title="It Statistics Data Science And Business Analysis"
                    rating={5}
                    ratingCount={4.5}
                    price="#50.00"
                    lessonNumber={10}
                    duration="19h 30m"
                    studentCount="20+"
                    instructor="Morgan"
                    instructorAvatar={CourseInstructor3}
                />
                </div>
            </div>
        </div>
    );
}
