import StatImg from '../../../assets/images/stats-img.svg?react'
import StatFlower from '../../../assets/images/stats-flower.svg?react'
import { Stats } from './Stats'
import StatsIcon1 from '../../../assets/icons/stats1.svg?react'
import StatsIcon2 from '../../../assets/icons/stats2.svg?react'
import StatsIcon3 from '../../../assets/icons/stats3.svg?react'
import StatsIcon4 from '../../../assets/icons/stats4.svg?react'

export function StatSection() {
    return (
        <>
            <div className="w-full flex justify-center overflow-hidden relative">
                <StatImg className="block -mb-5 h-auto"/>
                <StatFlower className="absolute bottom-0 right-30"/>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-4 max-w-[1200px] mx-auto lg:mb-20 mb-10 px-5 lg:px-0 py-5 lg:py-0">
                <div className="relative flex justify-center">
                    <Stats
                    icon={<StatsIcon1 />} 
                    title="2,500" 
                    description="Total teachers" />
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-40 border-r border-dashed border-text-primary"></div>
                </div>

                <div className="relative flex justify-center">
                    <Stats 
                    icon={<StatsIcon2 />} 
                    title="5,000" 
                    description="Total students" />
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-40 border-r border-dashed border-text-primary"></div>
                </div>

                <div className="relative flex justify-center">
                    <Stats 
                    icon={<StatsIcon3 />} 
                    title="350" 
                    description="Total classrooms" />
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-40 border-r border-dashed border-text-primary"></div>
                </div>

                <div className="flex justify-center">
                    <Stats 
                    icon={<StatsIcon4 />} 
                    title="1,200" 
                    description="Best awards won" />
                </div>
            </div>
        </>
    )
}
