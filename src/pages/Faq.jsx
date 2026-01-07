import { FaqC } from "../component/Card/Faq/Faq"
import { PageHeaderAbtUs } from '../component/LandingPageSection/PageHeader/PageHeaderAbtUs'
import { SubHeader } from '../component/Card/SubHeader/SubHeader'
import { Footer } from '../component/AboutPageSection/Footer/Footer'
import FooterBg from '../assets/images/footer.jpg'


export function Faq() {
    return (
        <div className="relative md:max-w-[1920px] mx-auto overflow-x-hidden">
            <header>
                <PageHeaderAbtUs />
            </header>

            <main>
                <SubHeader
                    title="FAQS"
                    breadcrumb={
                        <>
                            <span>Home</span>
                            <span className="mx-1 text-light-orange font-semibold">//</span>
                            <span>Faqs</span>
                        </>
                    } />

                <FaqC/>
            </main>
            <footer id="contact" style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover bg-center">
                <Footer />
            </footer>
        </div>
    )
}