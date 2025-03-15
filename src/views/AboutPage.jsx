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
        <html lang="ko" />
        <title>ABOUT US | CJ ENM CP License</title>
        <meta name="description" content="회사에 대한 설명이 들어가는 곳입니다." />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <meta name="robots" content="" />
        
        <meta property="og:title" content="About Us - 회사명" />
        <meta property="og:description" content="회사에 대한 설명이 들어가는 곳입니다." />
        <meta property="og:image" content="https://yourwebsite.com/path/to/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - 회사명" />
        <meta name="twitter:description" content="회사에 대한 설명이 들어가는 곳입니다." />
        <meta name="twitter:image" content="https://yourwebsite.com/path/to/image.jpg" />

        <script type="application/Id+json">
        {`
          {
            "@context": "https://schema.org",  // ✅ 고정값 (항상 Schema.org 표준을 따라야 함)
            "@type": "Website",

            "name": "CJ ENM",
            "url": "https://yourwebsite.com",  // ✅ 개별 설정 (사이트의 실제 URL 입력)
            
            "logo": "https://yourwebsite.com/images/logo.jpg",  // ✅ 개별 설정 (회사 로고 이미지 URL)
            "description": "회사에 대한 설명이 들어가는 곳입니다.",  // ✅ 개별 설정 (회사 또는 사이트 설명)
            
            "sameAs": [  // ✅ 개별 설정 (회사 또는 브랜드의 SNS 계정 링크 추가)
              "https://www.facebook.com/yourcompany",
              "https://www.instagram.com/yourcompany",
              "https://www.linkedin.com/company/yourcompany"
            ]
          }
        `}

        </script>
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