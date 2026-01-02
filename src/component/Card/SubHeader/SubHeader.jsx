import bgImage from '../../../assets/images/subheader-bg.jpg?react';
import  SubheaderLeft from '../../../assets/icons/subheader-left.png?react';
import  SubheaderWave from '../../../assets/icons/subheader-wave.png?react';
import SubheaderStar  from '../../../assets/icons/subheader-star.png?react';
import HalfCircle from '../../../assets/icons/half-circle.svg?react';

export function SubHeader({
  title,
  breadcrumb,
  className = "",
}) {
  return (
    <section
      className={`relative w-full overflow-x-hidden pb-10 px-4 md:px-0 ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Decorations */}
      <img
        src={SubheaderLeft}
        alt="left decor"
        className="absolute top-15 left-10"
        />

        <img
        src={SubheaderWave}
        alt="left decor"
        className="absolute top-40 left-100 "
        />

        <img
        src= {SubheaderStar} 
        alt="left decor"
        className="absolute top-15 right-15"
        />
        <HalfCircle className="absolute bottom-13 right-100"/>
        
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-6xl md:text-4xl font-bold font-Epilogue  leading-16 text-text-primary">
          {title}
        </h1>
        <p className="text-base font-normal font-sora  text-text-primary leading-8">{breadcrumb}</p>
      </div>
    </section>
  );
}
