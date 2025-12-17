import AboutCloud from '../../../assets/images/cloud.svg?react'
import AboutImg1 from '../../../assets/images/about-img1.svg?react'
import AboutImg2 from '../../../assets/images/about-img2.svg?react'
import { Title } from '../../Headings/Heading'
import { ListCard } from '../../Card/List/List'
import CheckIcon from '../../../assets/icons/check1.svg?react'
import { Button } from '../../Button/Button'
import { Overlay } from '../Overlay/Overlay'
import OverlayImg from '../../../assets/images/overlay.svg?react'
import HeroBird from '../../../assets/images/hero-bird.svg?react'

export function AboutUs() {
    return(
        <section className='relative'>
            <AboutCloud className='ml-20' />
            <div className='lg:flex max-w-[1320px] mx-auto gap-15 font-sora mb-20 relative px-5 lg:px-0'>
                <Overlay 
                title="Happy"
                variant="secondary"
                description="Students" 
                icon={<OverlayImg />}
                className='hidden lg:flex absolute top-15 left-5'
                />

                <div className='h-3 w-3 bg-orange rounded-full absolute left-10 top-50'></div>

                <div className='lg:flex gap-8'>
                    <div className='flex lg:items-end justify-center'>
                        <AboutImg1 className="border pl-1 rounded-[300px] border-t-0 border-r-0 border-orange" />
                    </div>
                    <div className='hidden lg:block my-8 border pl-1 rounded-[300px] border-t-0 border-r-0 border-orange'>
                        <AboutImg2 />
                    </div>
                </div>

                <div className='hidden lg:block h-6 w-6 bg-secondary rounded-full absolute left-135 top-10'></div>
                <div className='hidden lg:block h-3 w-3 bg-primary rounded-full absolute left-135 bottom-5'></div>

                <div className='md:flex flex-col justify-center lg:mt-0 mt-10' >
                    <Title title="About us" >
                        It's our passion to work with children at <span>kindergarten.</span>
                    </Title>
                    <p className='text-text-secondary leading-[32.3px] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud..</p>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <ListCard
                        icon={<CheckIcon />}
                        text="Quality educators"
                        />
                        <ListCard
                        icon={<CheckIcon />}
                        text="Play to learn"
                        />
                        <ListCard
                        icon={<CheckIcon />}
                        text="Safety and security"
                        />
                        <ListCard
                        icon={<CheckIcon />}
                        text="Homelike environment"
                        />
                    </div>
                    <Button
                    text="Admission open"
                    variant="secondary" 
                    className='mt-5 w-fit'/>
                </div>
            </div>
            <HeroBird className="absolute bottom-0 right-0 scale-x-[-1]" />
        </section>
    )
}