import { useRef } from 'react'
import { Title } from '../../Headings/Heading'
import PrevIcon from '../../../assets/icons/prev.svg?react'
import NextIcon from '../../../assets/icons/next.svg?react'
import Bird from '../../../assets/images/hero-bird.svg?react'
import { InstructorsCard } from '../../LandingPageSection/Instructors/InstructorsCard'
import Teacher1 from '../../../assets/images/teacher1.svg?react'
import Teacher2 from '../../../assets/images/teacher2.svg?react'
import Teacher3 from '../../../assets/images/teacher3.svg?react'
import Teacher4 from '../../../assets/images/teacher4.svg?react'

export function Instructors() {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }

    return(
        <section className="relative bg-whisper-blue py-15 lg:py-25 ">
            <div className="max-w-[1320px] mx-auto">
                <div className="md:flex items-center justify-between px-5 lg:px-0">
                    <Title title="teachers">
                        Meet our instructors
                    </Title>
                    <div className="flex gap-5">
                        <button onClick={scrollLeft}>
                            <PrevIcon className="lg:h-auto lg:w-auto h-10 w-10" />
                        </button>
                        <button onClick={scrollRight}>
                            <NextIcon className="lg:h-auto lg:w-auto h-10 w-10" />
                        </button>
                    </div>
                </div>
                <div
                ref={scrollRef}
                className="mt-5 gap-5 flex overflow-x-auto scroll-smooth lg:grid lg:grid-cols-4 lg:gap-10 lg:overflow-visible justify-items-center">
                    <InstructorsCard
                    image={<Teacher1 />}
                    name="cheryl curry"
                    role="Teacher"/>

                    <InstructorsCard
                    image={<Teacher2 />}
                    name="willie diaz"
                    role="Teacher"/>

                    <InstructorsCard
                    image={<Teacher3 />}
                    name="jane sifuentes"
                    role="Teacher"/>

                    <InstructorsCard
                    image={<Teacher4 />}
                    name="michael hammond"
                    role="Teacher"/>
                </div>
            </div>
        </section>
    )
}