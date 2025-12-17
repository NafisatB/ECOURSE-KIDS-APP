import { InfoContainer } from "./InfoContainer";
import InfoIcon1 from '../../../assets/icons/info-icon1.svg?react'
import InfoIcon2 from '../../../assets/icons/info-icon2.svg?react'
import InfoIcon3 from '../../../assets/icons/info-icon3.svg?react'

export function Info() {
    return(
        <section className="max-w-[1320px] mx-auto lg:my-25 mt-20 px-5">
            <div className="grid md:grid-cols-3 gap-8">
                <InfoContainer 
                icon={<InfoIcon1 />}
                title="Start course"
                variant="secondary"
                description="Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur" />

                <InfoContainer 
                icon={<InfoIcon2 />}
                title="Expert teachers"
                description="Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur" />

                <InfoContainer 
                icon={<InfoIcon3 />}
                title="Strategic location"
                variant="secondary"
                description="Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur" />
            </div>
        </section>
    )
}