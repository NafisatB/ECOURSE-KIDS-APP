
import { TestimonialCard } from '../../../component/LandingPageSection/Testimonial/TestimonialCard'
import User1 from '../../../assets/images/user1.svg?react'


export function Testimonial2() {
    return(
        <div className="relative lg:py-30 py-15 px-5 lg:px-0">
            
            <div className='max-w-[1350px] mx-auto'>
                <div>

                    <div className='lg:grid grid-cols-3 lg:gap-10 mt-10 flex flex-col items-center gap-5'>
                        <TestimonialCard
                        image={<User1 />}
                        name="Kathy Sullivan"
                        title="CEO at ordian IT"/>

                        <TestimonialCard
                        image={<User1 />}
                        name="Elsie Stroud"
                        title="CEO in Edwards"/>

                        <TestimonialCard
                        image={<User1 />}
                        name="John Doe"
                        title="CEO at ordian IT"/>

                        <TestimonialCard
                        image={<User1 />}
                        name="John Doe"
                        title="CEO at ordian IT"/>

                        <TestimonialCard
                        image={<User1 />}
                        name="John Doe"
                        title="CEO at ordian IT"/>

                        <TestimonialCard
                        image={<User1 />}
                        name="John Doe"
                        title="CEO at ordian IT"/>
                    </div>
                </div>
            </div>
        </div>
    )
}