import HeroBird from '../../assets/images/hero-bird.svg?react'
import HeroSun from '../../assets/images/hero-sun.svg?react'
import { Button } from '../Button/Button'
import PlayIcon from '../../assets/icons/play.svg?react'
import HeroCross from '../../assets/icons/hero-cross.svg?react'
import HeroArrow from '../../assets/icons/hero-arrow.svg?react'
import Cloud from '../../assets/images/cloud.svg?react'
import HeroChild1 from '../../assets/images/hero-child1.svg?react'
import HeroChild2 from '../../assets/images/hero-child2.svg?react'
import { Overlay } from '../Overlay/Overlay'
import OverlayImg from '../../assets/images/overlay.svg?react'

export function Hero() {
    return(
        <section className="bg-light-background relative pb-10 px-4 md:px-0">
            <HeroBird className="hidden md:block" />
            <Overlay 
            title="5.8K"
            description="Success Courses" 
            className='hidden lg:flex absolute lg:top-40 lg:right-80'
            />
            <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center">
                <div className='flex flex-col justify-center mb-10 md:mb-35 text-center md:text-left'>
                    <h1 className='font-epilogue font-bold lg:text-6xl md:text-5xl text-accent w-full md:w-[648px] leading-[48px] md:leading-[72px] text-4xl mt-8'>
                        The Best Place <br className='hidden lg:block' /> To Learn and Play <br className='hidden lg:block' /> For Kids
                    </h1>
                    <p className='text-text-secondary font-sora text-base md:text-lg w-full md:w-[620px] leading-[28px] md:leading-[32px] my-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='flex gap-5 md:gap-10 items-center'>
                        <Button
                        text='Browse Courses'
                        variant='secondary'
                        className='mt-2'/>

                        <div className='flex items-center gap-5 relative'>
                            <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full z-10">
                                <PlayIcon/>
                            </div>
                            <div className='h-10 w-10 bg-primary/30 rounded-full absolute right-22 top-5'></div>
                            <a className="underline" href="http://www.youtube.com">Watch Now</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 relative mt-35 lg:mt-0">
                    <HeroCross className="hidden absolute -left-10 md:-left-25 hidden md:block" />
                    <HeroArrow className="hidden absolute -top-10 md:-top-20 left-5 md:left-15 hidden md:block" />
                    <div>
                        <div className="bg-secondary rounded-b-[137px] rounded-tl-[137px] h-[300px] md:h-[386px] flex items-end mx-auto md:mx-0">
                            <HeroChild1 className="w-full md:w-auto" />
                        </div>
                    </div>

                    <div className="mt-10 md:mt-60 hidden lg:block">
                        <div className="bg-primary rounded-t-[137px] rounded-br-[137px] h-[300px] md:h-[386px] w-full md:w-[303px] relative overflow-visible mx-auto md:mx-0">
                            <HeroChild2 className="absolute right-0 md:right-[-50px] bottom-0 w-full md:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <HeroSun className="hidden absolute top-10 right-0 hidden md:block"/>
            <HeroCross className="hidden absolute bottom-10 right-4 md:right-20 hidden md:block"/>
            <Cloud className="hidden absolute bottom-15 left-10 md:left-160 hidden md:block"/>
            <Overlay 
            title="10K+"
            variant="primary"
            description="Students" 
            icon={<OverlayImg />}
            className='hidden lg:flex absolute bottom-20 left-4 md:left-220'
            />
        </section>
    )
}