import React, { useEffect,useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Aos from "aos";
import { Link } from "react-router-dom";

const AssetGridCard = ({ 
        selectedCategory_img 
    }) => {

    // 화면의 너비에 따른 동적 GSAP
    const sectionRef = useRef();
    useLayoutEffect(() => {
        let ctx;
        const setAnimation = () => {
            if(ctx) ctx.revert();
            ctx = gsap.context(() => {
                const isMobile = window.innerWidth <= 960;
                if (isMobile) {
                    const boxes = gsap.utils.toArray(".mobileBox");
                    gsap.utils.toArray(".mobileBox").forEach((box, i) => {
                        gsap.from(box, {
                            y: 40,
                            opacity: 0,
                            duration: 0.6,
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: box,
                                start: "top 90%",
                                toggleActions: "play none none none"
                            }
                        });
                    });
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    },200)
                } else {
                    gsap.from(".pcBox", {
                        opacity: 0,
                        y: 50,
                        delay: 1,
                        duration: 0.5,
                        ease: "power1.out",
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

    // 동적 gridCard 변경 state
    const gridRef = useRef(null);
    const [currentCategory, setCurrentCategory] = useState(selectedCategory_img);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDataReady, setIsDataReady] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        if (!gridRef.current || isAnimating || isFirstLoad) return;
        gsap.to(gridRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            onComplete: () => {
                setCurrentCategory(selectedCategory_img);
                gsap.set(gridRef.current, {y: 30});
                setIsDataReady(true);
            },
            delay: 0.2,
        });
    }, [selectedCategory_img]);
    useEffect(() => {
        setIsFirstLoad(false);
    },[])
    useEffect(() => {
        if (!isDataReady) return;
        gsap.to(gridRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            onComplete: () => {
                setIsAnimating(false);
                setIsDataReady(false);
            },
        });
        Aos.refresh();
    }, [isDataReady]);

    return (
        <section
            className="assetGridCard"
            ref={sectionRef}
        >
            <div className="assetGridCard__contents" ref={gridRef}>
                {currentCategory.map((img, index) => (
                    <Link
                        to="/detail"
                        className="item mobileBox pcBox"
                        key={index}
                        tabIndex="0"
                    >
                        <img src={img.img} alt={img.alt} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default AssetGridCard;

