import Bird from '../../../assets/images/hero-bird.svg?react'
import { Button } from '../../Button/Button'
import { Title } from '../../Headings/Heading'
import HalfCircle from "../../../assets/icons/half-circle.svg?react";
import { ArticleCard } from '../../../component/Card/Article/ArticleCard'
import Newsletter1 from "../../../assets/images/newsletter-img1.svg?react";
import Newsletter2 from "../../../assets/images/newsletter-img2.svg?react";
import Newsletter3 from "../../../assets/images/newsletter-img3.svg?react";

export function Newsletter() {
    return (
        <div className="relative lg:px-0 px-5">
            <Bird className="hidden lg:block" />
            <HalfCircle className="hidden lg:block absolute right-200 top-5" />
            <div className="max-w-[1320px] mx-auto lg:mb-20 my-15 lg:my-0">
                <div className="lg:flex items-center justify-between">
                    <Title title="explore newsletter">most popular posts</Title>
                    <div>
                        <Button text="All blog posts" variant="secondary" />
                    </div>
                </div>
                <div className="lg:grid grid-cols-3 gap-8 justify-items-center mt-8">
                    <ArticleCard
                    img={<Newsletter1 />}
                    date="15 April 2024"
                    comments="Comments(06)"
                    text="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                    />

                    <ArticleCard
                    img={<Newsletter2 />}
                    date="15 April 2024"
                    comments="Comments(06)"
                    text="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                    />

                    <ArticleCard
                    img={<Newsletter3 />}
                    date="15 April 2024"
                    comments="Comments(06)"
                    text="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                    />
                </div>
            </div>
        </div>
    );
}
