import TimeIcon from "../../assets/icons/time.svg?react";
import LocationIcon from "../../assets/icons/location.svg?react";
import UkIcon from "../../assets/icons/uk.svg?react";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg?react";
import FacebookIcon from "../../assets/icons/facebook.svg?react";
import TwitterIcon from "../../assets/icons/twitter.svg?react";
import SkypeIcon from "../../assets/icons/skype.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";

export const PageBanner = () => {
  return (
    <div className="hidden md:block bg-primary text-white font-sora text-xs md:text-sm">
      <div className="max-w-[1320px] mx-auto h-[50px] items-center flex flex-col md:flex-row justify-between">
        
        {/* Left section */}
        <div className="flex flex-wrap gap-5 justify-center md:justify-start items-center">
          
          <div className="flex gap-2 items-center">
            <TimeIcon />
            <p>Working: Monday - Friday: 9am - 5pm</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-white/40"></div>

          <div className="flex gap-2 items-center">
            <LocationIcon />
            <p>Hudson, Wisconsin (WI), 54016</p>
          </div>

        </div>

        {/* Right section */}
        <div className="bg-secondary h-[50px] md:-my-2 mt-2 px-5 py-2 flex flex-wrap gap-10 items-center justify-center md:justify-start">
          
          <div className="flex items-center gap-2">
            <UkIcon className="object-contain" />
            <p>English</p>
            <ArrowDownIcon />
          </div>

          <ul className="flex gap-3 items-center">
            <li><FacebookIcon /></li>
            <li><TwitterIcon /></li>
            <li><SkypeIcon /></li>
            <li><LinkedinIcon /></li>
          </ul>

        </div>
      </div>
    </div>
  );
};
