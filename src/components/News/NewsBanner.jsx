import React from "react";
// import { newData } from "../../constants";
import { newsBanner } from "../../constants/data/news";

const NewsBanner = () => {
    return (
        <section className="newsBanner" role="banner" aria-labelledby="newsBannerHeading">
            <div className="newsBanner__titleArea">
                <h2 
                    data-aos="fade-right" 
                    data-aos-duration="1100" 
                    data-aos-delay="100" 
                    className="newsBanner__titleArea-titleText"
                    id="newsBannerHeading"
                >
                    {newsBanner.banner_text.title}
                </h2>
                <h3 
                    data-aos="fade-right" 
                    data-aos-duration="1100" 
                    data-aos-delay="200" 
                    className="newsBanner__titleArea-subtitleText"
                >
                    {newsBanner.banner_text.subTitle[0]}<span class="mobile-br" />
                    {newsBanner.banner_text.subTitle[1]}
                </h3>
            </div>
        </section>
    )
}

export default NewsBanner;