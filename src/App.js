import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
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

// 이미지의 값을 바로 로드한다. (원래 각 컴포넌트에서 로둥하여 구성하였지만, 시작 페이지에서 구성)
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
        duration: 600, 
        once: false, 
    });
    Aos.refresh();
  });

  return (
    <HelmetProvider> 
      {/* 동적으로 helmet의 값을 변경하기 위해서 <HelmetProvider>로 감싸서 구성하였다. */}
      <Router>
        <Header />
        <AnimateRoutes />
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App;