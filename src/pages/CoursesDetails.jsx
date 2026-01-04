import { PageHeaderAbtUs } from '../component/LandingPageSection/PageHeader/PageHeaderAbtUs'
import { SubHeader } from '../component/Card/SubHeader/SubHeader'
import { Footer } from '../component/AboutPageSection/Footer/Footer'
import FooterBg from '../assets/images/footer.jpg'

export const CoursesDetails = () => {
    return (
        <div className="relative md:max-w-[1920px] mx-auto">
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
            </main>

            <footer id="contact" style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover bg-center">
                <Footer />
            </footer>
        </div>
    )
}