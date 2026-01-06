import { PageHeaderAbtUs } from '../component/LandingPageSection/PageHeader/PageHeaderAbtUs'
import { SubHeader } from '../component/Card/SubHeader/SubHeader'
import { CDetail } from '../component/CoursesPage/CourseDetail'
import CourseImg4 from '../assets/images/course-img4.svg'
import CourseImg5 from '../assets/images/course-img5.svg'
import { Footer } from '../component/AboutPageSection/Footer/Footer'
import FooterBg from '../assets/images/footer.jpg'

export const CoursesDetails = () => {
    return (
        <div className="relative md:max-w-[1920px] mx-auto overflow-x-hidden">
            <header>
                <PageHeaderAbtUs />
            </header>

            <main>
                <SubHeader
                    title="COURSE DETAILS"
                    breadcrumb={
                        <>
                            <span>Home</span>
                            <span className="mx-1 text-light-orange font-semibold">//</span>
                            <span>Course</span>
                        </>
                    } />

                <CDetail
                    image={CourseImg4}
                    image2={CourseImg5}
                    rating={5}
                    ratingCount={(4.7)}
                    title="Web Development Fully Complete Guideline"
                    lessonNumber={10}
                    startTime="9:00AM"
                    endTime="01:00 PM"
                    studentCount="20+"
                    originalPrice="120"
                    salePrice="60"
                    money_back_guarantee="29-Da Money-Back Guarantee"
                    tabs={['Overview', 'Curriculum', 'Instructor', 'Reviews']}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.."
                    
                    learningOutcomes= {['Himenaeos. Vestibulum sollicitudin varius mauris non dignissim.Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus.Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis Nullam sed mi non odio feugiat volutpat sit amet nec elit.Maecenas id hendrerit ipsum']}
                    
                    
                    courseDetails={{
                        schedule: '4:00 Pm 6:00 Pm',
                        startDate: 'To be announced',
                        enrolled: 100,
                        lectures: 80,
                        skillLevel: 'Basic',
                        classDays: 'Monday-Friday',
                        language: 'English'
                    }}
                />
            </main>

            <footer id="contact" style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover bg-center">
                <Footer />
            </footer>
        </div>
    )
}