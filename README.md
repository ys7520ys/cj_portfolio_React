## 프로젝트 이름 (html_pr01)
REACT 기반 "CJ ENM (클론)" 퍼블리싱 포트폴리오

## 배포 링크
<https://subtle-panda-ef9709.netlify.app>

## 개요 (OverView)
원래 존재하는 CJ ENM 홈페이지를 기반으로
UI,UX를 개선한 형태의 클론코딩 사이트입니다.

## 기술 스택 (Tech Stack)
Component / Router / useEffect / useState / useRef / Link / GSAP(motion.div) / AOS, Helmet(seo)

## 폴더 구조
<pre>
├── (css)
│       ├── font.css
│       ├── media_query.css
│       ├── reset.css
│       └── style.css
├── (public)
│      ├── (images)
│      │       ├── android-chrome-192x192.png
│      │       ├── android-chrome-512x512.png
│      │       ├── apple-touch-icon.png
│      │       ├── favicon-16x16.png
│      │       ├── favicon-32x32.png
│      │       ├── logo.png
│      │       ├── og_cjportfolio.png
│      │       └── site.webmanifest        
│      ├── _redirects
│      ├── favicon.ico
│      └── index.html    
├── (src)
│      ├── (assets)
│      │       ├── (img)
│      │       │     ├── add_01.png
│      │       │     ├── add_02.png
│      │       │     ├── add_03.png
│      │       │     ├── add_04.png
│      │       │     ├── add_05.png
│      │       │     ├── add_06.png
│      │       │     ├── asset-card01.png
│      │       │     ├── asset-card02.png
│      │       │     ├── asset-card03.png
│      │       │     ├── asset-card04.png
│      │       │     ├── asset-card05.png
│      │       │     ├── asset-card06.png
│      │       │     ├── asset-card07.png
│      │       │     ├── asset-card08.png
│      │       │     ├── asset-card09.png
│      │       │     ├── asset-card10.png
│      │       │     ├── asset-card11.png
│      │       │     ├── asset-card15.png
│      │       │     ├── asset-card16.png
│      │       │     ├── asset-card17.png
│      │       │     ├── asset-card18.png
│      │       │     ├── asset-card19.png
│      │       │     ├── asset-card20.png
│      │       │     ├── asset-card21.png
│      │       │     ├── asset-card22.png
│      │       │     ├── asset-card23.png
│      │       │     ├── asset-card24.png
│      │       │     ├── asset-card25.png
│      │       │     ├── asset-card26.png
│      │       │     ├── asset-card27.png
│      │       │     ├── asset-card28.png
│      │       │     ├── asset-card29.png
│      │       │     ├── asset-card30.png
│      │       │     ├── banner_ch01.png
│      │       │     ├── banner_ch02.png
│      │       │     ├── banner_ch03.png
│      │       │     ├── banner_ch04.png
│      │       │     ├── link_01.png
│      │       │     ├── link_02.png
│      │       │     ├── link_03.png
│      │       │     ├── link_04.png
│      │       │     ├── link_05.png
│      │       │     ├── link_06.png
│      │       │     ├── link_07.png
│      │       │     ├── link_08.png
│      │       │     ├── logo.png
│      │       │     ├── poster_01.png
│      │       │     ├── poster_02.png
│      │       │     ├── poster_03.png
│      │       │     ├── poster_04.png
│      │       │     ├── poster_05.png
│      │       │     ├── poster_06.png
│      │       │     ├── slideFirst_01.png
│      │       │     ├── slideFirst_02.png
│      │       │     ├── slideFirst_03.png
│      │       │     ├── slideFirst_04.png
│      │       │     ├── slideFirst_05.png
│      │       │     ├── slideFirst_06.png
│      │       │     ├── slideFirst_07.png
│      │       │     ├── slideFirst_08.png
│      │       │     ├── slideSecond_01.png
│      │       │     ├── slideSecond_02.png
│      │       │     ├── slideSecond_03.png
│      │       │     ├── slideSecond_04.png
│      │       │     ├── slideSecond_05.png
│      │       │     ├── slideSecond_06.png
│      │       │     ├── slideSecond_07.png
│      │       │     ├── slideSecond_08.png
│      │       │     ├── slideThird_01.png
│      │       │     ├── slideThird_02.png
│      │       │     ├── slideThird_03.png
│      │       │     ├── slideThird_04.png
│      │       │     ├── slideThird_05.png
│      │       │     ├── slideThird_06.png
│      │       │     ├── slideThird_07.png
│      │       │     └── wave.png
│      │       └── (scss)
│      │              ├── (layout)
│      │              │       ├── _footer.scss 
│      │              │       └── _header.scss
│      │              ├── (section)
│      │              │       ├── (About)
│      │              │       │      ├── _aboutBanner.scss
│      │              │       │      ├── _aboutNumber.scss
│      │              │       │      ├── _aboutSwiper.scss
│      │              │       │      └── _aboutIndex.scss
│      │              │       │
│      │              │       ├── (Asset)
│      │              │       │      ├── _assetBanner.scss
│      │              │       │      ├── _assetGridCard.scss
│      │              │       │      └── _assetIndex.scss
│      │              │       ├── (Contact)
│      │              │       │      ├── _contactBanner.scss
│      │              │       │      ├── _contactForm.scss
│      │              │       │      └── _contactIndex.scss
│      │              │       ├── (Detail)
│      │              │       │      ├── _detailReady.scss
│      │              │       │      └── _detailIndex.scss                         
│      │              │       ├── (Home)
│      │              │       │      ├── _homeBanner.scss
│      │              │       │      ├── _homeMainLicense.scss
│      │              │       │      ├── _homeNews.scss
│      │              │       │      └── _homeIndex.scss
│      │              │       ├── (News)
│      │              │       │      ├── _newsBanner.scss
│      │              │       │      ├── _newsGridCard.scss
│      │              │       │      └── _newsIndex.scss
│      │              ├── (setting)
│      │              │       ├── _font.scss
│      │              │       ├── _mixin.scss
│      │              │       ├── _reset.scss
│      │              │       └── _vars.scss
│      │              └── style.scss
│      ├── (component)
│      │       ├── (About)
│      │       │      ├── AboutBanner.jsx
│      │       │      ├── AboutNumber.jsx
│      │       │      └── AboutSwiper.jsx
│      │       ├── (Asset)
│      │       │      ├── AssetBanner.jsx
│      │       │      └── AssetGridCard.jsx
│      │       ├── (Contact)
│      │       │      ├── ContactBanner.jsx
│      │       │      └── ContactForm.jsx
│      │       ├── (Detail)
│      │       │      └── DetailReady.jsx
│      │       ├── (Home)
│      │       │      ├── HomeBanner.jsx
│      │       │      ├── HomeBannerWave.jsx
│      │       │      ├── HomeMainLicense.jsx
│      │       │      └── HomeNews.jsx
│      │       ├── (News)
│      │       │      ├── NewsBanner.jsx
│      │       │      └── NewsGridCard.jsx
│      ├── (constants)
│      │       ├── (data)
│      │       │      ├── home.js
│      │       │      ├── about.js
│      │       │      ├── asset.js
│      │       │      ├── news.js
│      │       │      └── contact.js
│      │       └── index.js
│      ├── (layout)
│      │       ├── Footer.jsx
│      │       ├── Header.jsx
│      │       └── Main.jsx
│      ├── (views)
│      │       ├── AboutPage.jsx
│      │       ├── AssetPage.jsx
│      │       ├── ContactPage.jsx
│      │       ├── DetailPage.jsx
│      │       ├── HomePage.jsx
│      │       └── NewsPage.jsx
│      ├── AnimatedRoutes.jsx
│      ├── App.js
│      └── index.js
├── gitignore
├── package-lock.json
├── package.json
└── README.md
</pre>

## 주요 기능
반응형 웹 (PC/Tablet/Mobile 대응)
시맨틱 마크업 및 웹 표준 준수
웹표준, 웹접근성
애니메이션
개별 데이터파일 연동

## 제작자
이름: 김예성
이메일: ys7520ys@naver.com
포트폴리오: "CJ ENM (클론)"
