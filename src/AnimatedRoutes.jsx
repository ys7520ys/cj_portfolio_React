import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import AssetPage from "./views/AssetPage";
import NewsPage from "./views/NewsPage";
import ContactPage from "./views/ContactPage";
import DetailPage from "./views/DetailPage";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
}

function AnimateRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            }
          />
          <Route  
            path="/asset"
            element={
              <PageWrapper>
                <AssetPage />
              </PageWrapper>
            }
          />
          <Route 
            path="/news"
            element={
              <PageWrapper>
                <NewsPage />
              </PageWrapper>
            }
          />
          <Route 
            path="/contactUs"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />
          <Route 
            path="/detail"
            element={
              <PageWrapper>
                <DetailPage />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

const PageWrapper = ({ children }) => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  )
}

export default AnimateRoutes;