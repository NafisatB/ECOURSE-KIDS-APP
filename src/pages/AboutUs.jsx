import { PageHeaderAbtUs } from '../component/LandingPageSection/PageHeader/PageHeaderAbtUs'
import { SubHeader } from '../component/Card/SubHeader/SubHeader'
import { AboutUs } from '../component/AboutPageSection/AboutUs/AboutUs2'
import { Testimonial } from '../component/AboutPageSection/Testimonial/Testimonial'
import { Courses } from '../component/AboutPageSection/Courses/Courses'
import { Instructors } from '../component/AboutPageSection/Instructors/Instructors'
import { Footer } from '../component/AboutPageSection/Footer/Footer'
import FooterBg from '../assets/images/footer.jpg'

export const AboutPage = () => {
    return (
        <div className="relative md:max-w-[1920px] mx-auto overflow-x-hidden">
            <header>
                <PageHeaderAbtUs />
            </header>
            <main>
                <SubHeader
                    title="ABOUT US"
                    breadcrumb={
                        <>
                            <span>Home</span>
                            <span className="mx-1 text-light-orange font-semibold">//</span>
                            <span>About Us</span>
                        </>
                    } />
                <AboutUs />
                <Testimonial />
                <Courses />
                <Instructors />
            </main>
            <footer id="contact" style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover bg-center">
                <Footer />
            </footer>
        </div>
    )
}
