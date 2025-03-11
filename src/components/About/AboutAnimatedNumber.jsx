import { useEffect, useRef } from "react";
import gsap from "gsap";

const RollingNumber = ({ target }) => {
    const digitsRef = useRef(new Array(String(target).length).fill(null));

    useEffect(() => {
        gsap.killTweensOf(digitsRef.current);
        String(target)
            .split("")
            .forEach((num, i) => {
                gsap.to(digitsRef.current[i], {
                    y: -num * 70,
                    duration: 1,
                });
            });
    }, [target]);

    return (
        <div style={{ 
            display: "flex", 
            fontSize: "48px", 
            fontWeight: "bold" 
            }}
        >
            {String(target).split("").map((_, i) => (
                <div 
                    key={i} 
                    style={{ 
                        width: "50px", 
                        height: "70px", 
                        overflow: "hidden", 
                        border: "2px solid black", 
                        textAlign: "center", 
                        }}
                    >
                    <div ref={(el) => (digitsRef.current[i] = el)} 
                        style={{ 
                            display: "flex", 
                            flexDirection: "column" 
                            }}
                    >
                        {[...Array(10).keys()].map((num) => (
                            <div key={num} 
                                style={{ 
                                    height: "70px", 
                                    lineHeight: "70px" 
                                    }}
                            >
                                {num}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function Count() {
    return <RollingNumber target={1563} />;
}
