import AboutImg3 from '../../../assets/images/about-img3.svg?react'
import AboutImg4 from '../../../assets/images/about-img4.svg?react'
import AboutImg5 from '../../../assets/images/about-img5.svg?react'
import AboutImg6 from '../../../assets/images/about-img6.svg?react'

import { Title } from '../../Headings/Heading'
import { Button } from '../../Button/Button'

export function AboutUs() {
  return (
    <section className="relative overflow-hidden font-sora">
      {/* Decorative icon */}
      <div className="absolute left-12 top-24 hidden lg:block">
        <AboutImg6 />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 lg:px-0 mt-32 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGE STACK ================= */}
          <div className="relative flex justify-center lg:justify-start">

            {/* Image 1 */}
            <div className="hidden lg:block">
              <AboutImg3 />
            </div>

            {/* Image 2 */}
            <div className="relative z-10 lg:ml-8">
              <AboutImg4 />
            </div>

            {/* Experience Badge */}
            <div className="absolute top-6 right-12 bg-white shadow-xl rounded-xl w-36 h-36 flex flex-col items-center justify-center z-20">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-orange"></div>
                <span className="font-bold text-lg">35+</span>
              </div>
              <p className="text-sm text-text-secondary mt-2 text-center">
                Years Experience
              </p>
            </div>

            {/* Image 3 (overlapping bottom) */}
            <div className="absolute -bottom-16 left-28 hidden lg:block">
              <AboutImg5 />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <span className="text-orange font-semibold uppercase tracking-wide">
              About Us
            </span>

            <h2 className="text-4xl font-bold leading-tight mt-3 mb-6">
              Benefit From Our Online <br />
              Learning Expertise Earn{' '}
              <span className="text-orange">Professional</span>
            </h2>

            <p className="text-text-secondary leading-8 mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Our Mission:</h4>
                <p className="text-text-secondary text-sm leading-7">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Our Vision:</h4>
                <p className="text-text-secondary text-sm leading-7">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
            </div>

            <Button
              text="Admission Open"
              variant="secondary"
              className="px-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
