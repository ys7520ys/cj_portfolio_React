import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Aos from "aos";

const AssetGridCard = ({ selectedCategory_img }) => {
    const [aosSettings, setAosSettings] = useState({
        box1: { effect: "fade-up", effectOffset: "150", duration: "500" },
    })
    useEffect(() => {
        const updateAOS = () => {
            setAosSettings({
                box1: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "50", duration: "500" }
                    : { effect: "fade-up", effectOffset: "150", duration: "500" },
            });
        };
        updateAOS();
        window.addEventListener("resize", updateAOS);

        return () => {
            window.removeEventListener("resize", updateAOS);
        }
    }, [])
    const gridRef = useRef(null);
    const [currentCategory, setCurrentCategory] = useState(selectedCategory_img);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDataReady, setIsDataReady] = useState(false);

    useEffect(() => {
        if (!gridRef.current || isAnimating) return;
        gsap.to(gridRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.7,
            onComplete: () => {
                setCurrentCategory(selectedCategory_img);
                setIsDataReady(true);
            },
        });
    }, [selectedCategory_img]);
    useEffect(() => {
        if (!isDataReady) return;
        gsap.to(gridRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
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
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
        >
            <div className="assetGridCard__contents" ref={gridRef}>
                {currentCategory.map((img, index) => (
                    <div
                        className="item"
                        data-aos={aosSettings.box1.effect}
                        data-aos-offset={aosSettings.box1.effectOffset}
                        data-aos-duration={aosSettings.box1.duration}
                        key={index}
                        tabIndex="0"
                    >
                        <img src={img.img} alt={img.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AssetGridCard;

