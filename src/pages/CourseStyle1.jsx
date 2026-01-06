import { PageHeaderAbtUs } from '../component/LandingPageSection/PageHeader/PageHeaderAbtUs'
import { SubHeader } from '../component/Card/SubHeader/SubHeader'
import { Style1 } from '../component/CoursesPage/CourseStyle1'
import { Footer } from '../component/AboutPageSection/Footer/Footer'
import FooterBg from '../assets/images/footer.jpg'
export function CourseStyle1() {
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
                <Style1/>
            </main>
            <footer id="contact" style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover bg-center">
                <Footer />
            </footer>
        </div>
    )
}