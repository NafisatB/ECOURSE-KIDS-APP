import Cloud from '../../../assets/icons/cloud.svg?react'
import { TestimonialCard } from './TestimonialCard'
import { Title } from '../../Headings/Heading'
import User1 from '../../assets/images/user1.svg?react'
import Sun from '../../assets/images/hero-sun.svg?react'

export function Testimonials() {
    return(
        <div className="relative lg:py-30 py-15 px-5 lg:px-0">
            <Cloud
            className="absolute bottom-35 left-10"
            />
            <div className='max-w-[1320px] mx-auto'>
                <div>
                    <Title title="Testimonials" align='center'>
                        What parents say
                    </Title>
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
                    </div>
                </div>
            </div>
            <Sun
            className="absolute top-5 right-10 h-55"
            />
        </div>
    )
}