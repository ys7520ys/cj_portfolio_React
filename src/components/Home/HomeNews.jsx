import { React, useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { newData } from "../../constants";
import { homeNews } from "../../constants/data/home";

const HomeNews = () => {
    const [homeNews__title, Set_homeNews__title] = useState({
        title: { effect: "fade-up", effectOffset: "100" },
    })
    const [contentBox1, Set_contentBox1] = useState({
        content1: { effect: "fade-up", delay: "100" }
    })
    const [contentBox2, Set_contentBox2] = useState({
        content2: { effect: "fade-up", delay: "100" }
    })
    const [contentBox3, Set_contentBox3] = useState({
        content3: { effect: "fade-up", delay: "100" }
    })
    useEffect(() => {
        const updateAOS = () => {
            Set_homeNews__title({
                title: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "50" }
                    : { effect: "slide-up", effectOffset: "100" },
            });
            Set_contentBox1({
                content1: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "100", delay: "0" }
                    : { effect: "fade-up", effectOffset: "100", delay: "100" }
            });
            Set_contentBox2({
                content2: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "100", delay: "0" }
                    : { effect: "fade-up", effectOffset: "100", delay: "200" }
            });
            Set_contentBox3({
                content3: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "100", delay: "0" }
                    : { effect: "fade-up", effectOffset: "100", delay: "300" }
            });
            setTimeout(() => {
                Aos.refreshHard();
            }, 100);
        };
        updateAOS();
        window.addEventListener("resize", updateAOS);

        return () => {
            window.removeEventListener("resize", updateAOS);
        }
    }, [])
    return (
        <section className="homeNews">
            <h4 
                className="homeNews__title" 
                data-aos={homeNews__title.title.effect} 
                data-aos-offSet={homeNews__title.title.effectOffset}
            >
                새로운 소식
            </h4>
            <div className="homeNews__contents">
                <div
                    tabIndex="0"
                    data-aos={contentBox1.content1.effect}
                    data-aos-delay={contentBox1.content1.delay}
                    data-aos-offSet={contentBox1.content1.effectOffset}
                    className="content"
                >
                    <div className="content__imgBox">
                        <img 
                            className="content__imgBox-img" 
                            src={homeNews.news_img[0].img} 
                            alt={homeNews.news_img[0].alt} 
                            title="명탐정 코난 상품소개" 
                        />
                    </div>
                    <div className="content__infoBox">
                        <p className="content__infoBox-text">{homeNews.news_text[0]}</p>
                    </div>
                </div>
                <div 
                    tabIndex="0" 
                    data-aos={contentBox2.content2.effect} 
                    data-aos-delay={contentBox2.content2.delay} 
                    data-aos-offSet={contentBox2.content2.effectOffset} 
                    className="content"
                >
                    <div className="content__imgBox">
                        <img 
                            className="content__imgBox-img" 
                            src={homeNews.news_img[1].img} 
                            alt={homeNews.news_img[1].alt} 
                            title="소이베베X신비아파트, 마미버드 상품소개"
                        />
                    </div>
                    <div className="content__infoBox">
                        <p className="content__infoBox-text">{homeNews.news_text[1]}</p>
                    </div>
                </div>
                <div 
                    tabIndex="0" 
                    data-aos={contentBox3.content3.effect} 
                    data-aos-delay={contentBox3.content3.delay} 
                    data-aos-offSet={contentBox3.content3.effectOffset} 
                    className="content"
                >
                    <div className="content__imgBox">
                        <img 
                            className="content__imgBox-img" 
                            src={homeNews.news_img[2].img} 
                            alt={homeNews.news_img[2].alt} 
                            title="신비아파트 업데이트 정보" 
                        />
                    </div>
                    <div className="content__infoBox">
                        <p className="content__infoBox-text">{homeNews.news_text[2]}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeNews;