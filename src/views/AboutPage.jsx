import React from "react";
import { Helmet } from "react-helmet-async";
import Main from "../layout/Main";
import AboutBanner from "../components/About/AboutBanner";
import CountingNum from "../components/About/AboutNumber";
import Swiper from "../components/About/AboutSwiper";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - 회사명</title>
        
        <meta name="description" content="회사에 대한 설명이 들어가는 곳입니다." />
        
        <meta property="og:title" content="About Us - 회사명" />
        <meta property="og:description" content="회사에 대한 설명이 들어가는 곳입니다." />
        <meta property="og:image" content="https://yourwebsite.com/path/to/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - 회사명" />
        <meta name="twitter:description" content="회사에 대한 설명이 들어가는 곳입니다." />
        <meta name="twitter:image" content="https://yourwebsite.com/path/to/image.jpg" />
      </Helmet>
      <Main>
        <AboutBanner />
        <CountingNum />
        <Swiper />
      </Main>
    </>
  )
}

export default AboutPage;