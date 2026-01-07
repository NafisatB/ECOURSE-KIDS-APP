import { FaqCard } from './FaqCard';
import FaqImg from '../../../assets/images/faq-img.svg'

export function FaqC() {
    const faqItems = [
        {
            question: 'Why do students prefer online learning?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            image: FaqImg,
        },
        {
            question: 'Where should I study abroad?',
            answer: 'Consider factors such as climate, culture, language, cost of living, and educational quality. Research different countries and universities to find the best fit for your academic and personal goals.'
        },
        {
            question: 'How can I contact a school directly?',
            answer: 'Most schools have contact information on their official websites, including email addresses, phone numbers, and contact forms. You can also reach out through their social media channels or admissions offices.'
        },
        {
            question: 'How do I find a school where I want to study?',
            answer: 'Use online platforms like university ranking websites, education search portals, and directories. You can filter by location, program type, and specialization to narrow down your options.'
        },
        {
            question: 'What are the requirements for international students?',
            answer: 'Requirements vary by country and institution but typically include a valid passport, visa application, proof of English proficiency, academic transcripts, and sometimes standardized test scores.'
        }
    ];

    return (
        <div style={{ padding: '8rem' }}>
            <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
                <FaqCard faqs={faqItems} />
            </div>
        </div>
    );
}
