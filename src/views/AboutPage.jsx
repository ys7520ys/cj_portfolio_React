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
        <meta name="description" content="CJ ENM 회사의 IP " />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <meta name="robots" content="" />
        
        <meta property="og:title" content="CJ ENM CP License" />
        <meta property="og:description" content="CJ ENM의 다양한 라이센스로 세상을 넓혀갑니다." />
       
        <meta property="og:image" content="https://jovial-figolla-2d7b4d.netlify.app/images/og_cjportfolio.png" />{/* 먼저 git으로 해당 사이트를 올리고 올린 사이트에서 경로의 값을 연결해야 한다. (1200x630) og이미지 */}
        <meta property="og:url" content="https://yourwebsite.com/about" />{/* netlify에 올린 경로의 값을 넣는다. */}
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CJ ENM CP License" />
        <meta name="twitter:description" content="CJ ENM의 다양한 라이센스로 세상을 넓혀갑니다." />
            <meta name="twitter:image" content="https://jovial-figolla-2d7b4d.netlify.app/images/og_cjportfolio.png" />{/* 먼저 git으로 해당 사이트를 올리고 올린 사이트에서 경로의 값을 연결해야 한다. (1200x630) og이미지 */}

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