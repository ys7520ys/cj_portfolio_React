import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header role="banner" className="header">
      <div className="header__container">
        <Link to="/" className="header__logo"  tabIndex="0" onClick={""}>
          <img src={logoImg} alt="CJENM 로고 이미지" title="홈페이지로 이동하기" aria-label="홈페이지로 이동하기"/>
        </Link>
        <nav className="header__nav" aria-label="메인 네비게이션">
          <ul className="header__nav-lists" role="menu">
            <li className="list" role="none">
              <Link to="/about" className="list-link" aria-label="ABOUT US 페이지로 이동" title="ABOUT US페이지로 이동하기">
                ABOUT US
              </Link>
            </li>
            <li className="list" role="none">
              <Link to="/asset" className="list-link" aria-label="ASSET 페이지로 이동" title="ASSET 페이지로 이동하기">
                ASSET
              </Link>
            </li>
            <li className="list" role="none">
              <Link to="/news" className="list-link" aria-label="NEWS 페이지로 이동" title="NEWS 페이지로 이동하기">
                NEWS
              </Link>
            </li>
            <li className="list" role="none">
              <Link to="/contactUs" className="list-link" aria-label="CONTACT US 페이지로 이동"title="CONTACT US 페이지로 이동하기">
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
        <button aria-expanded={menuOpen} aria-controls="sideMenu" aria-label="메뉴 열기" className="header__menuBtn" onClick={()=>{setMenuOpen(!menuOpen)}}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </button>
        <nav className={`header__sideMenu ${menuOpen ? "active":""}`} id="sideMenu" aria-hidden={!menuOpen}>
          <button className="header__sideMenu-closeBtn" aria-label="메뉴 닫기" tabIndex={menuOpen ? "0":"-1"} onClick={()=>{setMenuOpen(!menuOpen)}}>X</button>
          <ul className="sideMenu__lists" aria-hidden={!menuOpen}>
            <li className="sideMenu__lists-list"><Link to="/about" tabIndex={menuOpen ? "0":"-1"}  onClick={()=>{setMenuOpen(!menuOpen)}}>ABOUT US</Link></li>
            <li className="sideMenu__lists-list"><Link to="/asset" tabIndex={menuOpen ? "0":"-1"} onClick={()=>{setMenuOpen(!menuOpen)}}>ASSET</Link></li>
            <li className="sideMenu__lists-list"><Link to="/news" tabIndex={menuOpen ? "0":"-1"} onClick={()=>{setMenuOpen(!menuOpen)}}>NEWS</Link></li>
            <li className="sideMenu__lists-list"><Link to="/contactUs" tabIndex={menuOpen ? "0":"-1"} onClick={()=>{setMenuOpen(!menuOpen)}}>CONTACT US</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header;