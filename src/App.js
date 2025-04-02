import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import AnimateRoutes from "./AnimatedRoutes";

import { homeMainLicense } from "./constants/data/home";
import { homeNews } from "./constants/data/home";
import { assetGridCard } from "../src/constants/data/asset";
import { aboutSwiper } from "./constants/data/about";
import { newsGridCard } from "./constants/data/news";

// 모든 이미지의 값을 미리 로드
const preloadImages = (imageList) => {
    imageList.forEach((src) => {
        const img = new Image();
        img.src = src;
    })
}
const App = () => {
    useEffect(() => {
        const allImages = [
            ...homeMainLicense.mainLicense_img.map((item) => item.img),
            ...homeNews.news_img.map((item) => item.img),

            ...newsGridCard.gridCard_img.map((item) => item.img),

            ...aboutSwiper.swiper_img.first.map((item) => item.img),
            ...aboutSwiper.swiper_img.second.map((item) => item.img),
            ...aboutSwiper.swiper_img.third.map((item) => item.img),

            ...assetGridCard.gridCard_img.tv.map((item) => item.img),
            ...assetGridCard.gridCard_img.ani.map((item) => item.img),
        ];
        preloadImages(allImages);
    }, []);

    // Aos 기본 셋업
    useEffect(() => {
        Aos.init({
            duration: 600,
            once: false,
        });
        Aos.refresh();
    });

    // 동적 helmet 변경을 위해 <HelmetProvider>로 감싸서 구성성
    return (
        <HelmetProvider>
            <Router>
                <Header />
                <AnimateRoutes />
                <Footer />
            </Router>
        </HelmetProvider>
    )
}

export default App;