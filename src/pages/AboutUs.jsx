import {PageHeaderAbtUs} from '../component/LandingPageSection/PageHeader/PageHeaderAbtUs'
import  {SubHeader} from '../component/Card/SubHeader/SubHeader'
import {AboutUs} from '../component/AboutPageSection/AboutUs/AboutUs2'
import { Testimonial } from '../component/AboutPageSection/Testimonial/Testimonial'
import {Courses} from '../component/AboutPageSection/Courses/Courses'

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
            <Testimonial />
            <Courses/>
        </div>
    )
}
