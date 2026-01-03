
import { Stats } from '../../LandingPageSection/StatSection/Stats'
import StatsIcon1 from '../../../assets/icons/stats1.svg?react'
import StatsIcon2 from '../../../assets/icons/stats2.svg?react'
import StatsIcon3 from '../../../assets/icons/stats3.svg?react'
import StatsIcon4 from '../../../assets/icons/stats4.svg?react'
import BorderBg from '../../../assets/images/border-testimonial.png'
import BgTestimonial from '../../../assets/images/testimonial-bg.svg?react'

export function Testimonial() {
    return (

        <div className="relative lg:py-30 py-15 px-5 lg:px-0">

            <div style={{ backgroundImage: `url(${BorderBg})` }} className="border-none w-[1320px] h-[170px] rounded-[200px] p-6 bg-light-orange bg-center absolute left-1/2  -translate-x-1/2 -translate-y-1/3">
                <div className=" grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-4 max-w-[1200px] mx-auto lg:mb-20 mb-10 px-5 lg:px-0 py-5 lg:py-0">
                    <div className="relative flex flex-col justify-center">
                        <Stats
                            variant='secondary'
                            icon={<StatsIcon1 />}
                            title="3K+"
                            description="Successfully Trained" />

                    </div>

                    <div className="relative flex justify-center">
                        <Stats
                            variant='secondary'
                            icon={<StatsIcon2 />}
                            title="15K+"
                            description="Classes Completed" />

                    </div>

                    <div className="relative flex justify-center">
                        <Stats
                            variant='secondary'
                            icon={<StatsIcon3 />}
                            title="97K+"
                            description="Satisfaction Rate" />

                    </div>

                    <div className="flex justify-center">
                        <Stats
                            variant='secondary'
                            icon={<StatsIcon4 />}
                            title="102K+"
                            description="Students Community" />
                    </div>
                </div>
            </div>

            <BgTestimonial className='bg-cover  bg-center' />
        </div>
    )
}