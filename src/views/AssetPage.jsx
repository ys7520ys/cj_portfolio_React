import {React, useState} from "react";
import { Helmet } from "react-helmet-async";
import Main from "../layout/Main";
import AssetSwiperBanner from "../components/Asset/AssetBanner";
import AssetGridCard from "../components/Asset/AssetGridCard";
import { assetCardTv } from "../constants";
import { assetBanner, assetGridCard } from "../constants/data/asset";

const AssetPage = () => {
  // const [selectedCategory,setSelectedCategory] = useState(assetGridCard.gridCard_img);
  const [selectedCategory_img,setSelectedCategory_img] = useState(assetGridCard.gridCard_img.tv);
  const [selectedCategory_text,setSelectedCategory_text] = useState(assetBanner.banner_text.tv);

  const handleCategoryImgChange = (category) => {
    setSelectedCategory_img(category);
  }
  const handleCategoryTextChange = (category) => {
    setSelectedCategory_text(category);
  }
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
        <AssetSwiperBanner 
          onCategoryChangeText={handleCategoryTextChange} 
          onCategoryChangeImg={handleCategoryImgChange}
          selectedCategory_text={selectedCategory_text} 
          selectedCategory_img={selectedCategory_img} 
          setSelectedCategory_text={setSelectedCategory_text}
          setSelectedCategory_img={setSelectedCategory_img}
        />
        <AssetGridCard 
          selectedCategory_img={selectedCategory_img} 
          setSelectedCategory_img={setSelectedCategory_img}
        />
      </Main>
    </>
  )
}

export default AssetPage;