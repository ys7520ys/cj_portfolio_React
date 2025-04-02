import { React, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeNews } from "../../constants/data/home";

gsap.registerPlugin(ScrollTrigger);

const HomeNews = () => {

    // 화면의 너비에 따른 동적 GSAP
    const sectionRef = useRef();
    useLayoutEffect(() => {
        let ctx;
        const setAnimation = () => {
            if(ctx) ctx.revert();
            ctx = gsap.context(() => {
                const isMobile = window.innerWidth <= 960;
                if (isMobile) {
                    gsap.utils.toArray(".box").forEach((box, i) => {
                        gsap.from(box, {
                            y: 80,
                            opacity: 0,
                            duration: 0.5,
                            delay: 0.2,  
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: box,
                                start: "top 110%",
                                toggleActions: "play none none none"
                            }
                        });
                    });
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    },200)
                } else {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%",
                            toggleActions: "play none none none"
                        }
                    })
                    tl.delay(1)
                    tl.from([".box1",".box2",".box3"], {
                        opacity: 0,
                        y: 100,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.15
                    });
                }
            },sectionRef);
        };
        setAnimation();
        const handleResize = () => {
            setAnimation();
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            if(ctx) ctx.revert();
            window.removeEventListener("resize", handleResize);
        }
    },[])

    return (
        <section ref={sectionRef} className="homeNews">
            <p className="sr-only">CJ ENM 작품들의 새로운 소식들을 확인하세요.</p>
            <h4 
                className="homeNews__title" 
            >
                새로운 소식
            </h4>
            <div className="homeNews__contents">
                <Link
                    to="/detail"
                    tabIndex="0"
                    className="content box box1"
                >
                    <div className="content__imgBox">
                        <img 
                            className="content__imgBox-img" 
                            src={homeNews.news_img[0].img} 
                            alt={homeNews.news_img[0].alt} 
                        />
                    </div>
                    <div className="content__infoBox">
                        <p className="content__infoBox-text" aria-hidden="true">
                            {homeNews.news_text[0]}
                        </p>
                    </div>
                </Link>
                <Link 
                    to="/detail"
                    tabIndex="0" 
                    className="content box box2"
                >
                    <div className="content__imgBox">
                        <img 
                            className="content__imgBox-img" 
                            src={homeNews.news_img[1].img} 
                            alt={homeNews.news_img[1].alt} 
                        />
                    </div>
                    <div className="content__infoBox">
                        <p className="content__infoBox-text" aria-hidden="true">
                            {homeNews.news_text[1]}
                        </p>
                    </div>
                </Link>
                <Link 
                    to="/detail"
                    tabIndex="0" 
                    className="content box box3"
                >
                    <div className="content__imgBox">
                        <img 
                            className="content__imgBox-img" 
                            src={homeNews.news_img[2].img} 
                            alt={homeNews.news_img[2].alt}      
                        />
                    </div>
                    <div className="content__infoBox">
                        <p className="content__infoBox-text" aria-hidden="true">
                            {homeNews.news_text[2]}
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default HomeNews;