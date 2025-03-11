import React, { useEffect } from "react";
import { homeBanner } from "../../constants/data/home";

const HomeBanner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <section className="homeBanner" role="banner" aria-labelledby="homeBannerHeading">
            <div className="homeBanner__introAni">
                <div 
                    className="homeBanner__introAni-yellowMonster" 
                    data-aos="fade-up-right" 
                    data-aos-delay="100"
                >
                    <img src={homeBanner.banner_img[0]} />
                </div>
                <div 
                    className="homeBanner__introAni-redCircle" 
                    data-aos="fade-up-left" 
                    data-aos-delay="300"
                >
                    <img src={homeBanner.banner_img[1]} />
                </div>
                <div 
                    className="homeBanner__introAni-magic" 
                    data-aos="fade-up-right" 
                    data-aos-delay="500"
                    >
                    <img src={homeBanner.banner_img[2]} />
                </div>
                <div 
                    className="homeBanner__introAni-greenMonster" 
                    data-aos="fade-up-left" 
                    data-aos-delay="700"
                >
                    <img src={homeBanner.banner_img[3]} />
                </div>
                <div className="homeBanner__mainTitle">
                    <h2 
                        className="homeBanner__mainTitle-title" 
                        data-aos="fade-up" 
                        data-aos-delay="900"
                        id="homeBannerHeading"
                    >
                        {homeBanner.banner_text.title}
                    </h2>
                    <h3 
                        className="homeBanner__mainTitle-subtitle" 
                        data-aos="fade-up" 
                        data-aos-delay="1000"
                    >
                        {homeBanner.banner_text.subTitle}
                    </h3>
                </div>
            </div>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
        </section>
    )
}

export default HomeBanner;

