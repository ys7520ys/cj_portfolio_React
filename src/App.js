import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import AnimateRoutes from "./AnimatedRoutes";
// import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./views/HomePage";


import { homeMainLicense } from "./constants/data/home";
import { homeNews } from "./constants/data/home";
import { assetGridCard } from "../src/constants/data/asset";
import { aboutSwiper } from "./constants/data/about";
import { newsGridCard } from "./constants/data/news";
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
  },[]);

  useEffect(() => {
    Aos.init({
        duration: 600, // 애니메이션 지속 시간
        once: false, // 한 번만 실행되도록 설정
    });
    Aos.refresh(); // 새로고침 시 다시 초기화
  });
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

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