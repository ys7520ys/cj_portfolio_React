import { React, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { newsBanner } from "../../constants/data/news";

const NewsBanner = () => {

    // 화면의 너비에 따른 동적 GSAP
    const sectionRef = useRef();
    useLayoutEffect(() => {
        let ctx;
        const setAnimation = () => {
            if(ctx) ctx.revert();
            ctx = gsap.context(() => {
                const isMobile = window.innerWidth <= 1260;
                if (isMobile) {
                    gsap.from(".boxTitle", {
                        y: 40,
                        opacity: 0,
                        duration: 0.5,
                        delay: 0.3,
                        ease: "power1.out",
                    });
                    gsap.from(".boxSubtitle", {
                        y: 40,
                        opacity: 0,
                        duration: 0.5,
                        delay: 0.4,
                        ease: "power1.out",
                    });
                } else {
                    gsap.from(".boxTitle", {
                        x: -100,
                        opacity: 0,
                        duration: 0.7,
                        delay: 0.3,
                        ease: "power1.out",
                    });
                    gsap.from(".boxSubtitle", {
                        x: -100,
                        opacity: 0,
                        duration: 0.7,
                        delay: 0.4,
                        ease: "power1.out",
                    });
                }
            },sectionRef);
        };
        setAnimation();
        const handleResize = () => {
            setAnimation();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            if(ctx) ctx.revert();
            window.removeEventListener("resize", handleResize);
        }
    },[])

    // 최상단 자동 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section 
            className="newsBanner" 
            role="banner"
            aria-hidden="true"
            ref={sectionRef}
        >
            <div className="newsBanner__titleArea">
                <h2 

                    className="newsBanner__titleArea-titleText boxTitle"
                >
                    {newsBanner.banner_text.title}
                </h2>
                <h3 

                    className="newsBanner__titleArea-subtitleText boxSubtitle"
                >
                    {newsBanner.banner_text.subTitle[0]}<span class="mobile-br" />
                    {newsBanner.banner_text.subTitle[1]}
                </h3>
            </div>
        </section>
    )
}

export default NewsBanner;