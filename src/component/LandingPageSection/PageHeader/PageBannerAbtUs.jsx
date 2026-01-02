import FacebookIcon from "../../../assets/icons/facebook.svg?react";
import InstagramIcon from "../../../assets/icons/instagram.svg?react";
import LinkedinIcon from "../../../assets/icons/linkedin-2.svg?react";
import PhoneIcon from "../../../assets/icons/phone-2.svg?react";
import EnvelopeIcon from "../../../assets/icons/envelope-2.svg?react";
import YoutubeIcon from "../../../assets/icons/youtube.svg?react";




export const PageBannerAbtUs = () => {
    return (
        <div className="relative  hidden md:block bg-whisper-blue text-white font-sora text-xs md:text-sm">
            <div className="max-w-[1720px] mx-auto h-[50px] items-center flex flex-col md:flex-row justify-between">

                {/* Blue overlay */}
                <div className="absolute left-0 top-0 h-[50px] w-[17.3%] bg-slate-blue"></div>

                {/* Left section */}
                <div className=" relative flex flex-wrap gap-5 px-5 items-center justify-center md:justify-start">

                    {/* Social icons */}
                    <ul className="flex gap-5 items-center">
                        <li><FacebookIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><LinkedinIcon /></li>
                        <li><YoutubeIcon /></li>
                    </ul>

                    {/* Phone */}
                    <div className="flex gap-10 ">
                        <div className="flex gap-2 items-center text-text-primary">
                            <PhoneIcon />
                            <p>(00) 875 784 5682</p>
                        </div>

                        {/* Email */}
                        <div className="flex gap-2 items-center text-text-primary">
                            <EnvelopeIcon />
                            <p>pacargoinfo@gmail.com</p>
                        </div>
                    </div>


                </div>


                <div className="md:-my-2 mt-2 px-5 py-2 flex flex-wrap gap-10 items-center justify-center md:justify-start">
                    {/* desktop menu/Icons */}
                    <ul className='hidden lg:flex text-sound-silence gap-10 font-sora leading-[15px] text-[15px] font-normal'>
                        <li className='flex items-center gap-1'>
                            Portal
                        </li>
                        <li className='flex items-center gap-1'>
                            Calender
                        </li>
                        <li className='flex items-center gap-1'>
                            Alunmi

                        </li>
                        <li className='flex items-center gap-1'>
                            Events
                        </li>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-5 bg-text-primary/50"></div>

                        <li className='flex items-center gap-1'>
                            Contact Us
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
