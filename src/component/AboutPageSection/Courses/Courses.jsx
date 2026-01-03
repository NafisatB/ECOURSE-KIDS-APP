import { CourseCard } from '../../Card/Course/CourseCard'
import CourseImg1 from '../../../assets/images/course-img1.svg'
import CourseImg2 from '../../../assets/images/course-img2.svg'
import CourseImg3 from '../../../assets/images/course-img3.svg'


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
                    price="450.00"
                    lessonNumber={10}
                    duration="19h 30m"
                    studentCount="20+"
                    instructor="Samantha"
                    instructorAvatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                    onEnroll={handleEnroll}
                />

                <CourseCard
                    image={CourseImg2}
                    badge="Web Development"
                    title="Advanced React & TypeScript Mastery"
                    rating={4}
                    ratingCount={3.8}
                    price="599.00"
                    lessonNumber={24}
                    duration="32h"
                    studentCount="150+"
                    instructor="John Smith"
                    instructorAvatar="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                    onEnroll={handleEnroll}
                />

                <CourseCard
                    image={CourseImg3}
                    badge="UI/UX Design"
                    title="Complete Design System Creation Guide"
                    rating={5}
                    ratingCount={5.0}
                    price="349.00"
                    lessonNumber={18}
                    duration="24h 15m"
                    studentCount="85+"
                    instructor="Emma Davis"
                    instructorAvatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                    onEnroll={handleEnroll}
                />
                </div>
            </div>
        </div>
    );
}
