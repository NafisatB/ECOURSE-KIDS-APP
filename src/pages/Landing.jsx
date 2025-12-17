import {PageHeader} from '../component/PageHeader/PageHeader'
import {Hero} from '../component/HeroSection/Hero'
import {Info} from '../component/InfoUnderHero/Info'

export const LandingPage = ()=> {
    return(
        <div className="md:max-w-[1920px] mx-auto overflow-x-hidden">
            <header>
                <PageHeader />
            </header>
            <main>
                <Hero />
                 <Info />
                {/* // <AboutUs />
                // <MidSection />
                // <WhyUs />
                // <Testimonials />
                // <Instructors />
                // <Newsletter /> */}
            </main>
            {/* // <footer style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover bg-center">
            //     <Footer />
            // </footer> */}
        </div>
    )
}