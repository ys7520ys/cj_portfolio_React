import { React, useEffect, useState } from "react";
import { newData } from "../../constants";
import { newsGridCard } from "../../constants/data/news";
import Aos from "aos";

const NewsGridCard = () => {
    const [item, Set_item] = useState({
        item: { effect: "fade-up", effectOffset: "100" },
    })
    useEffect(() => {
        const updateAOS = () => {
            Set_item({
                item: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "50" }
                    : { effect: "fade-up", effectOffset: "0" },
            });
        };
        updateAOS();
        window.addEventListener("resize", updateAOS);
        return () => {
            window.removeEventListener("resize", updateAOS);
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className="newsGridCard"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
        >
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="newsGridCard__contents"
            >
                {newsGridCard.gridCard_img.map((img, index) => (
                    <div
                        className="item"
                        key={index}
                        data-aos={item.item.effect}
                        data-aos-offset={item.item.effectOffset}
                        tabIndex="0"
                    >
                        <div className="item__img">
                            <img src={img.img} alt={img.alt} />
                        </div>
                        <div className="item__text">
                            {newsGridCard.gridCard_text[index]}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewsGridCard;