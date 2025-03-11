import React, { useState, useEffect } from "react";
import { assetBanner } from "../../constants/data/asset";
import { assetGridCard } from "../../constants/data/asset";

const AssetBanner = ({ onCategoryChangeImg, onCategoryChangeText, selectedCategory_text }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const [btnActive, setBtnActive] = useState(false);
    const btnToggle = () => {
        setBtnActive((prev) => {
            const newState = !prev;
            onCategoryChangeImg(newState ? assetGridCard.gridCard_img.ani : assetGridCard.gridCard_img.tv);
            onCategoryChangeText(newState ? assetBanner.banner_text.ani : assetBanner.banner_text.tv);
            return newState;
        });
    }

    return (
        <section 
            className="assetBanner" 
            aria-labelledby="assetBannerHeading"
            role="banner"   
        >
            <div className="assetBanner__titleArea">
                <h2
                    className="assetBanner__titleArea-titleText"
                    data-aos="fade-right"
                    data-aos-duration="1100"
                    data-aos-delay="100"
                    id="assetBannerHeading"
                >
                    {assetBanner.banner_text.title}
                </h2>
                <h3
                    className="assetBanner__titleArea-subtitleText"
                    data-aos="fade-right"
                    data-aos-duration="1100"
                    data-aos-delay="200"
                >
                    {selectedCategory_text[0]}<span class="mobile-br" />
                    {selectedCategory_text[1]}<span class="mobile-br" />
                    {selectedCategory_text[2]}
                </h3>
                <div
                    className="slideBtn"
                    data-aos="fade-left"
                    data-aos-duration="1100"
                    data-aos-delay="600"
                    onClick={btnToggle}
                >
                    <button 
                        className={`slideBtn__box ${btnActive ? "active" : ""}`} 
                        role="button"
                    />
                    <p className="slideBtn__text-tv">
                        TV 방송
                    </p>
                    <p className="slideBtn__text-ani">
                        애니메이션
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AssetBanner;