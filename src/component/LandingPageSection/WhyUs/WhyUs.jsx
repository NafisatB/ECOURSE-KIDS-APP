import { Title } from '../../Headings/Heading'
import HeroBird from '../../../assets/images/hero-bird.svg?react'
import WhyusImg from '../../../assets/images/why-us.svg?react'
import { ListCard } from '../../Card/List/List'
import CheckIcon2 from '../../../assets/icons/check2.svg?react'
import { Button } from '../../Button/Button'
import CarIcon from '../../../assets/icons/car.svg?react'
import RainbowIcon from '../../../assets/icons/rainbow.svg?react'
import SplashIcon from '../../../assets/icons/splash.svg?react'
import WaveIcon from '../../../assets/icons/wave.svg?react'

export function WhyUs() {
    return(
        <div className="bg-grey-background font-sora pb-25 pt-10 lg:pt-0 relative px-5 lg:px-0">
            <HeroBird className="hidden lg:block" />
            <div className="max-w-[1320px] md:flex mx-auto items-center gap-10">
                <div className="relative">
                    <CarIcon
                    className="absolute lg:right-40 -top-10 right-10"
                    />
                    <Title title="why choose us">
                        new approach to fun
                    </Title>
                    <p className='text-text-secondary leading-[32.3px] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <div className="md:grid grid-cols-2 gap-1">
                        <ListCard
                        icon={<CheckIcon2 />}
                        text="Best teaching"
                        variant="secondary"
                        />
                        <ListCard
                        icon={<CheckIcon2 />}
                        text="Quality educators"
                        variant="secondary"
                        />
                        <ListCard
                        icon={<CheckIcon2 />}
                        text="Expert tutors"
                        variant="secondary"
                        />
                        <ListCard
                        icon={<CheckIcon2 />}
                        text="Affordable"
                        variant="secondary"
                        />
                    </div>
                    <Button
                    text="Find events"
                    className='mt-5'
                    />
                    <RainbowIcon
                    className="hidden lg:block absolute right-30" 
                    />
                </div>
                <div className="relative">
                    <WhyusImg
                    className="relative z-10 lg:w-auto w-full h-full mt-10 lg:mt-0"
                    />
                    <SplashIcon
                    className="hidden lg:block absolute -top-13 -right-18"
                    />
                </div>
            </div>
            <WaveIcon className="absolute right-10 bottom-5" />
        </div>
    )
}