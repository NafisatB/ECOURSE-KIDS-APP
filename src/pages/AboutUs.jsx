import {PageHeaderAbtUs} from '../component/LandingPageSection/PageHeader/PageHeaderAbtUs'
import  {SubHeader} from '../component/Card/SubHeader/SubHeader'
import {AboutUs} from '../component/LandingPageSection/AboutUs/AboutUs2'
export const AboutPage = () => {
    return (
        <div className="relative md:max-w-[1920px] mx-auto overflow-x-hidden">
            <header>
                <PageHeaderAbtUs />
            </header>
            <SubHeader
                title="ABOUT US"
                breadcrumb={
                <>
                <span>Home</span>
                <span className="mx-1 text-light-orange font-semibold">//</span>
                <span>About Us</span>
                </>
            }/>
            <AboutUs/>
        </div>
    )
}
