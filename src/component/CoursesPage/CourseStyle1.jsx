import { CourseCard } from '../../component/Card/Course/CourseCard'
import CourseImg6 from '../../assets/images/course-img6.svg'
import CourseImg7 from '../../assets/images/course-img7.svg'
import CourseImg8 from '../../assets/images/course-img8.svg'
import CourseImg9 from '../../assets/images/course-img9.svg'
import CourseImg10 from '../../assets/images/course-img10.svg'
import CourseInstructor1 from '../../assets/images/course-instructor1.svg'
import CourseInstructor2 from '../../assets/images/course-instructor2.svg'
import CourseInstructor3 from '../../assets/images/course-instructor3.svg'

import { CoursesHeader } from '../../component/AboutPageSection/Courses/CourseHeader';

export function Style1() {
    const handleEnroll = () => {
        console.log('User enrolled!');
    };

    const handleExplore = () => {
        console.log('Explore courses clicked!');
    };

    return (
        <div className='pt-40 max-w-[1350px] mx-auto gap-15 font-sora mb-20 relative px-5 lg:px-0'>
            <CoursesHeader
                label="TOP POPULAR COURSE"
                title="Edunity Course Student Can Join With Us"
                buttonText="Load More Course"
                buttonVariant="purple-btn"
                buttonRightIcon="→"
                onButtonClick={() => navigate('/courses')}
            />

            <div style={{ padding: '2rem 1rem', }}>
                <div className=" grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-8">
                    <CourseCard
                        image={CourseImg6}
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
                        image={CourseImg7}
                        badge="Digital Marketing"
                        title="Beginner Adobe Illustrator for Graphic Design"
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
                        image={CourseImg8}
                        badge="Digital Marketing"
                        title="Starting SEO As Your Home Based Business"
                        rating={5}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="Morgan"
                        instructorAvatar={CourseInstructor3}
                    />

                    <CourseCard
                        image={CourseImg8}
                        badge="Digital Marketing"
                        title="Beginner Adobe Illustrator for Graphic Design"
                        rating={4}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="Brian Brower"
                        instructorAvatar={CourseInstructor2}
                        onEnroll={handleEnroll}
                    />

                    <CourseCard
                        image={CourseImg9}
                        badge="Digital Marketing"
                        title="It Statistics Data Science And Business Analysis"
                        rating={4}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="Rodriquez"
                        instructorAvatar={CourseInstructor2}
                        onEnroll={handleEnroll}
                    />

                    <CourseCard
                        image={CourseImg10}
                        badge="Digital Marketing"
                        title="Starting SEO As Your Home Based Business"
                        rating={4}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="Morgan"
                        instructorAvatar={CourseInstructor2}
                        onEnroll={handleEnroll}
                    />



                </div>
            </div>
        </div>
    );
}
