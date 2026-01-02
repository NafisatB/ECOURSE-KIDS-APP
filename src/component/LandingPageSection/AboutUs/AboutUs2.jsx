import AboutImg3 from '../../../assets/images/about-img3.svg?react'
import AboutImg4 from '../../../assets/images/about-img4.svg?react'
import AboutImg5 from '../../../assets/images/about-img5.svg?react'
import AboutImg6 from '../../../assets/images/about-img6.svg?react'
import AboutImg7 from '../../../assets/images/about-img7.svg?react'
import ArrowIcon from '../../../assets/icons/arrow-icon.svg?react'
import { Button } from '../../Button/Button'

export function AboutUs() {
  return (
    <section className="relative overflow-hidden font-sora">
      {/* Decorative icon */}
      <div className="absolute left-55 top-20 hidden lg:block">
        <AboutImg6 />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 lg:px-0 mt-40 mb-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* ================= LEFT IMAGE STACK ================= */}
          <div className="relative flex justify-center lg:justify-start h-[500px]">

            {/* Image 1 - Top Left */}
            <div className="absolute top-0 left-0 hidden lg:block">
              <AboutImg3 />
            </div>

           

            {/* Image 3 - Bottom Right */}
            <div className="relative top-66 left-70 hidden lg:block ">
              <AboutImg4 />
            </div>

            {/* Image 4 - Bottom Left Overlap */}
            <div className="t-0 right-8 lg:right-auto lg:left-70 lg:block absolute hidden lg:block">
              <AboutImg5 />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <div className=" font-sora flex items-center gap-2 mb-6">
              <AboutImg7/>
              <span className="text-orange font-normal uppercase leading-8 tracking-wide text-xm">
                About Us
              </span>
            </div>

            <h2 className="text-4xl font-sora font-bold tracking-wide leading-[49.6px] text-[45px] text-text-primary font-bold leading-tight mt-3 mb-6">
              Benefit From Our Online <br />
              Learning Expertise Earn{' '}
              <span className="text-orange">Professional</span>
            </h2>

            <p className="tracking-wide text-text-accent font-sora font-normal leading-8 mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="tracking-wide grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-2  font-sora leading-[17px]  text-text-primary uppercase text-[17px] tracking-wide">Our Mission:</h4>
                <p className="text-text-secondary text-sm leading-7">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2  font-sora leading-[17px]  text-text-primary uppercase text-[17px] tracking-wide">Our Vision:</h4>
                <p className="text-text-secondary font-sora text-normal leading-7">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
            </div>

            <Button
              text="Admission Open"
              variant="tertiary"
              className="px-8"
              rightIcon={<ArrowIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
