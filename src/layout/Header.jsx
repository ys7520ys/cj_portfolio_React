import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";

const Header = () => {

    // 버튼 클릭 확인용 state
	const [menuOpen, setMenuOpen] = useState(false);
	const openBtnRef = useRef(null);
	const closeBtnRef = useRef(null);

    // 자동 포커스 함수 
	useEffect(() => {
		if(menuOpen) {
			closeBtnRef.current?.focus();
		}else {	
			openBtnRef.current?.focus();
		}
	},[menuOpen]);

	return (
		<header role="banner" className="header">
			<div className="header__container">
				<Link 
					to="/" 
					className="header__logo" 
					tabIndex="0" 
				>
					<img 
						src={logoImg} 
						alt="CJENM 로고 이미지" 
						aria-label="홈페이지로 이동하기" 
					/>
				</Link>
				<nav className="header__nav" role="navigation">
					<ul className="header__nav-lists">
						<li className="list">
							<Link 
								to="/about" 
								className="list-link" 
								aria-label="ABOUT US 페이지로 이동" 
							>
								ABOUT US
							</Link>
						</li>
						<li className="list">
							<Link 
								to="/asset" 
								className="list-link" 
								aria-label="ASSET 페이지로 이동" 
							>
								ASSET
							</Link>
						</li>
						<li className="list">
							<Link 
								to="/news" 
								className="list-link" 
								aria-label="NEWS 페이지로 이동" 
							>
								NEWS
							</Link>
						</li>
						<li className="list">
							<Link 
								to="/contactUs" 
								className="list-link" 
								aria-label="CONTACT US 페이지로 이동" 
							>
								CONTACT US
							</Link>
						</li>
					</ul>
				</nav>
				<button 
					aria-expanded={menuOpen} 
					aria-controls="sideMenu" 
					aria-label="카테고리 메뉴 닫힘, 메뉴 열기"
					className="header__menuBtn" 
					ref={openBtnRef}
					onClick={() => { setMenuOpen(!menuOpen) }}
				>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</button>
				<nav 
					className={`header__sideMenu ${menuOpen ? "active" : ""}`} 
					id="sideMenu" 
					aria-hidden={!menuOpen}
				>
					<button 
						className="header__sideMenu-closeBtn" 
						aria-label="카테고리 메뉴 열림, 메뉴 닫기" 
						tabIndex={menuOpen ? "0" : "-1"} 
						onClick={() => { setMenuOpen(!menuOpen) }}
						ref={closeBtnRef}
					>
						X
					</button>
					<ul className="sideMenu__lists" aria-hidden={!menuOpen}>
						<li className="sideMenu__lists-list">
							<Link 
								to="/about" 
								tabIndex={menuOpen ? "0" : "-1"} 
								onClick={() => { setMenuOpen(!menuOpen) }}
								aria-label="ABOUT 페이지로 이동"
							>
								ABOUT US
							</Link>
						</li>
						<li className="sideMenu__lists-list">
							<Link 
								to="/asset" 
								tabIndex={menuOpen ? "0" : "-1"} 
								onClick={() => { setMenuOpen(!menuOpen) }}
								aria-label="ASSET 페이지로 이동"
							>
								ASSET
							</Link>
						</li>
						<li className="sideMenu__lists-list">
							<Link 
								to="/news" 
								tabIndex={menuOpen ? "0" : "-1"} 
								onClick={() => { setMenuOpen(!menuOpen) }}
								aria-label="NEWS 페이지로 이동"
							>
								NEWS
							</Link>
						</li>
						<li className="sideMenu__lists-list">
							<Link
								to="/contactUs" 
								tabIndex={menuOpen ? "0" : "-1"} 
								onClick={() => { setMenuOpen(!menuOpen) }}
								aria-label="CONTACTUS 페이지로 이동"
							>
								CONTACT US
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;