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

const App = () => {
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