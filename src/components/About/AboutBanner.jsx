import { React, useEffect } from "react";
import { aboutBanner } from "../../constants/data/about";

const AboutBanner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <section 
            className="aboutBanner" 
            role="banner" // 배너 역할을 부여한다.
            aria-labelledby="aboutBannerHeading"
        >
            <div className="aboutBanner__content">
                <img 
                    className="aboutBanner__content-char" 
                    src={aboutBanner.banner_img} 
                    alt=""
                    aria-hidden="true"     
                />
                <div 
                    className="speechBubble" 
                    data-aos="fade-up" 
                    data-aos-delay="1500"
                >
                    <h2 
                        className="speechBubble__text" 
                        id="aboutBannerHeading" 
                    >
                        {aboutBanner.banner_text}
                    </h2>
                    <div className="speechBubble__deco" />
                </div>
            </div>
        </section>
    )
}

export default AboutBanner;     