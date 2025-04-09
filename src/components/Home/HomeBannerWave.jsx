import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HomeBannerWave = () => {

    // wave banner 애니메이션 Ref
    const wave1Ref = useRef(null);
    const wave2Ref = useRef(null);
    const wave3Ref = useRef(null);

    // wave 애니메이션 동작
    useEffect(() => {
        gsap.to(wave1Ref.current, {
            x: "150px",
            duration: 6, 
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
        gsap.to(wave2Ref.current, {
            x: "200px",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
        });
        gsap.to(wave3Ref.current, {
            x: "250px",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power3.inOut",
        });
    }, []);

    return (
        <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "300px", 
            overflow: "hidden" 
        }}>
            <svg 
                viewBox="0 0 1200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    width: "100%" 
                }}
            >
                <path 
                    ref={wave1Ref} 
                    d="M0 100 C200 200, 400 0, 600 100 S1000 200, 1200 100 V200 H0 Z" 
                    fill="rgba(74, 144, 226, 0.6)" 
                />
                <path 
                    ref={wave2Ref} 
                    d="M0 120 C250 150, 500 50, 750 120 S1200 180, 1400 120 V200 H0 Z" 
                    fill="rgba(142, 68, 173, 0.5)" 
                />
            </svg>
        </div>
    );
};

export default HomeBannerWave;
