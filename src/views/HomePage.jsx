import React from "react";
import { Helmet } from "react-helmet-async";
import Main from "../layout/Main.jsx";
import Banner from "../components/Home/HomeBanner.jsx";
import MainLicense from "../components/Home/HomeMainLicense.jsx";
import News from "../components/Home/HomeNews.jsx";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CJ ENM CP License</title>
        
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
        <Banner />
        <MainLicense />
        <News />
      </Main>
    </>
  )
}

export default HomePage;