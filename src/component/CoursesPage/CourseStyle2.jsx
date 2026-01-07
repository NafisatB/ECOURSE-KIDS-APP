import { CourseCard } from '../../component/Card/Course/CourseCard'
import CourseImg11 from '../../assets/images/course-img11.svg'
import CourseImg12 from '../../assets/images/course-img12.svg'
import CourseImg13 from '../../assets/images/course-img13.svg'
import CourseImg14 from '../../assets/images/course-img14.svg'
import CourseImg15 from '../../assets/images/course-img15.svg'
import CourseImg16 from '../../assets/images/course-img16.svg'
import CourseInstructor4 from '../../assets/images/course-instructor4.svg'



export function Style2() {
    const handleEnroll = () => {
        console.log('User enrolled!');
    };

    const handleExplore = () => {
        console.log('Explore courses clicked!');
    };

    return (
        <div className='pt-40 max-w-[1350px] mx-auto gap-15 font-sora mb-20 relative px-5 lg:px-0'>
         

            <div >
                <div className=" grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-8">
                    <CourseCard
                        image={CourseImg11}
                        title="It Statistics Data Science And Business Analysis"
                        rating={5}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="By Angela in Development"
                        instructorAvatar={CourseInstructor4}
                        onEnroll={handleEnroll}
                    />

                    <CourseCard
                        image={CourseImg12}
                        title="Beginner Adobe Illustrator for Graphic Design"
                        rating={4}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="By Angela in Development"
                        instructorAvatar={CourseInstructor4}
                        onEnroll={handleEnroll}
                    />

                    <CourseCard
                        image={CourseImg13}
                        title="Starting SEO As Your Home Based Business"
                        rating={5}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="By Angela in Development"
                        instructorAvatar={CourseInstructor4}
                    />

                    <CourseCard
                        image={CourseImg14}
                        title="Beginner Adobe Illustrator for Graphic Design"
                        rating={4}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="By Angela in Development"
                        instructorAvatar={CourseInstructor4}
                        onEnroll={handleEnroll}
                    />

                    <CourseCard
                        image={CourseImg15}
                        badge="Digital Marketing"
                        title="It Statistics Data Science And Business Analysis"
                        rating={4}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="By Angela in Development"
                        instructorAvatar={CourseInstructor4}
                        onEnroll={handleEnroll}
                    />

                    <CourseCard
                        image={CourseImg16}
                        title="Starting SEO As Your Home Based Business"
                        rating={4}
                        ratingCount={4.5}
                        price="#50.00"
                        lessonNumber={10}
                        duration="19h 30m"
                        studentCount="20+"
                        instructor="By Angela in Development"
                        instructorAvatar={CourseInstructor4}
                        onEnroll={handleEnroll}
                    />



                </div>
            </div>
        </div>
    );
}
