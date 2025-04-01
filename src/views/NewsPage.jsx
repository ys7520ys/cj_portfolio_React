import {React, useState, useEffect} from "react";
import { Helmet } from "react-helmet-async";
import NewsBanner from "../components/News/NewsBanner";
import NewsNav from "../components/News/NewsGridCard";

const NewsPage = () => {

  const [announceText, setAnnounceText] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnnounceText("NEWS 페이지로 이동하였습니다, CJ ENM의 새로운 소식과 뉴스들을 확인할 수 있는 페이지입니다.");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <html lang="ko" />
        <title>NEWS | CJ ENM CP License</title>
        <meta name="description" content="CJ ENM의 새로운 소식과 뉴스들을 확인하세요." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jovial-figolla-2d7b4d.netlify.app/news" />
      </Helmet>
      <h1 className="sr-only">
        CJ ENM | NEWS 페이지
      </h1>
      <div aria-live="polite" className="sr-only">
        {announceText}
      </div>
      <NewsBanner />
      <NewsNav />
    </>
  )
}

export default NewsPage;