import { React, useEffect, useState } from "react";
// import { mainData } from "../../constants";
import { homeMainLicense } from "../../constants/data/home";
import Aos from "aos";

// width: 960px 이상에서 작동할 AOS 기본값
const HomeMainLicense = () => {
    const [homeMainLicense__headerLine, Set_homeMainLicense__headerLine] = useState({
        homeMainLicense__headerLine: { effect: "fade-up", effectOffset: "200" },
    })
    const [middle__left, Set_middle__left] = useState({
        middle__left: { effect: "fade-up", effectOffset: "100", delay: "100" },
    })
    const [middle__right, Set_middle__right] = useState({
        middle__right: { effect: "fade-up", effectOffset: "100", delay: "150" },
    })
    const [small__first, Set_small__first] = useState({
        small__first: { effect: "fade-up", effectOffset: "50", delay: "50" },
    })
    const [small__second, Set_small__second] = useState({
        small__second: { effect: "fade-up", effectOffset: "50", delay: "100" },
    })
    const [small__third, Set_small__third] = useState({
        small__third: { effect: "fade-up", effectOffset: "50", delay: "150" },
    })
    const [small__fourth, Set_small__fourth] = useState({
        small__fourth: { effect: "fade-up", effectOffset: "50", delay: "200" },
    })
    const [content__largeTop, Set_content__largeTop] = useState({
        content__largeTop: { effect: "fade-up", effectOffset: "50", delay: "300" },
    })
    const [content__largeBottom, Set_content__largeBottom] = useState({
        content__largeBottom: { effect: "fade-up", effectOffset: "100", delay: "300" },
    })
    // width: 960px 이하에서 작동할 AOS 값
    useEffect(() => {
        const updateAOS = () => {
            Set_homeMainLicense__headerLine({
                homeMainLicense__headerLine: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10" }
                    : { effect: "fade-up", effectOffset: "200" },
            });
            Set_middle__left({
                middle__left: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "0" }
                    : { effect: "fade-up", effectOffset: "100", delay: "100" },
            });
            Set_middle__right({
                middle__right: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "100" }
                    : { effect: "fade-up", effectOffset: "100", delay: "200" },
            });
            Set_small__first({
                small__first: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "100" }
                    : { effect: "fade-up", effectOffset: "50", delay: "50" },
            });
            Set_small__second({
                small__second: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "100" }
                    : { effect: "fade-up", effectOffset: "50", delay: "100" },
            });
            Set_small__third({
                small__third: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "100" }
                    : { effect: "fade-up", effectOffset: "50", delay: "150" },
            });
            Set_small__fourth({
                small__fourth: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "100" }
                    : { effect: "fade-up", effectOffset: "50", delay: "200" },
            });
            Set_content__largeTop({
                content__largeTop: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "0" }
                    : { effect: "fade-up", effectOffset: "50", delay: "0" },
            });
            Set_content__largeBottom({
                content__largeBottom: window.innerWidth <= 960
                    ? { effect: "fade-up", effectOffset: "10", delay: "0" }
                    : { effect: "fade-up", effectOffset: "200", delay: "300" },
            });
        };
        updateAOS();
        window.addEventListener("resize", updateAOS);
        return () => {
            window.removeEventListener("resize", updateAOS);
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="homeMainLicense">
                <div
                    data-aos={homeMainLicense__headerLine.homeMainLicense__headerLine.effect}
                    data-aos-offset={homeMainLicense__headerLine.homeMainLicense__headerLine.effectOffset}
                    className="homeMainLicense__headerLine"
                >
                    <h4 className="homeMainLicense__headerLine-title">메인 라이센스</h4>
                    <button className="homeMainLicense__headerLine-viewAllBtn">
                        전체보기
                    </button>
                </div>
                <div className="homeMainLicense__contents">
                    <div className="homeMainLicense__contents-top">
                        <div
                            tabIndex="0"
                            data-aos={content__largeTop.content__largeTop.effect}
                            data-aos-offSet={content__largeTop.content__largeTop.effectOffset}
                            data-aos-delay={content__largeTop.content__largeTop.delay}
                            className="content__large"
                        >
                            {/* Entertainment Shows, Animation이 들어가야 한다. */}
                            <div className="content__large-categoryBox">
                                Entertainment Shows
                            </div>
                            {/* 이미지에 div의 값을 추가하였다. */}
                            <div className="content__large-imgBox">
                                <img 
                                    src={homeMainLicense.mainLicense_img[0].img} 
                                    alt={homeMainLicense.mainLicense_img[0].alt} 
                                    title="스트릿우먼파이터2" 
                                    className="content__left-img" 
                                />
                            </div>
                            <div className="content__large-hoverBox">
                                <div className="hoverTextBox">
                                    <div className="hoverTextBox__title">프로그램 정보</div>
                                    <div className="hoverTextBox__subtitle">
                                        <ul className="hoverTextBox__subtitle-parent">
                                            <li className="parent__list">장르</li>
                                            <li className="parent__list">방영기간</li>
                                            <li className="parent__list">연출</li>
                                            <li className="parent__list">CP</li>
                                            <li className="parent__list">출연진</li>
                                        </ul>
                                        <ul className="hoverTextBox__subtitle-children">
                                            <li className="children__list">음악</li>
                                            <li className="children__list">2023.08.22 ~</li>
                                            <li className="children__list">김지은</li>
                                            <li className="children__list">권영찬</li>
                                            <li className="children__list">울를러 +7</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__middleSmall">
                            <div className="middle">
                                <div
                                    tabIndex="0"
                                    data-aos={middle__left.middle__left.effect}
                                    data-aos-offSet={middle__left.middle__left.effectOffset}
                                    data-aos-delay={middle__left.middle__left.delay}
                                    className="middle__left"
                                >
                                    <div className="middle__left-categoryBox">
                                        Entertainment Shows
                                    </div>
                                    {/* 이미지에 div의 값을 추가하였다. */}
                                    <div className="middle__left-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[1].img} 
                                            alt={homeMainLicense.mainLicense_img[1].alt} 
                                            title="유퀴즈 온더 블럭!" 
                                        />
                                    </div>
                                    <div className="middle__left-hoverBox">
                                        <div className="hoverTextBox">
                                            <div className="hoverTextBox__title">프로그램 정보</div>
                                            <div className="hoverTextBox__subtitle">
                                                <ul className="hoverTextBox__subtitle-parent">
                                                    <li className="parent__list">장르</li>
                                                    <li className="parent__list">방영기간</li>
                                                    <li className="parent__list">연출</li>
                                                    <li className="parent__list">CP</li>
                                                    <li className="parent__list">출연진</li>
                                                </ul>
                                                <ul className="hoverTextBox__subtitle-children">
                                                    <li className="children__list">예능</li>
                                                    <li className="children__list">2018.08.29 ~</li>
                                                    <li className="children__list">이기연</li>
                                                    <li className="children__list">박희연</li>
                                                    <li className="children__list">유재석, 조세호</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={middle__right.middle__right.effect}
                                    data-aos-offSet={middle__right.middle__right.effectOffset}
                                    data-aos-delay={middle__right.middle__right.delay}
                                    className="middle__right"
                                >
                                    <div className="middle__right-categoryBox">
                                        Movies
                                    </div>
                                    {/* 이미지에 div의 값을 추가하였다. */}
                                    <div className="middle__right-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[2].img} 
                                            alt={homeMainLicense.mainLicense_img[2].alt} 
                                            title="기생충" 
                                        />
                                    </div>
                                    <div className="middle__left-hoverBox">
                                        <div className="hoverTextBox">
                                            <div className="hoverTextBox__title">프로그램 정보</div>
                                            <div className="hoverTextBox__subtitle">
                                                <ul className="hoverTextBox__subtitle-parent">
                                                    <li className="parent__list">장르</li>
                                                    <li className="parent__list">개봉일</li>
                                                    <li className="parent__list">감독</li>
                                                    <li className="parent__list">극본</li>
                                                    <li className="parent__list">출연진</li>
                                                    <li className="parent__list">제작사</li>
                                                </ul>
                                                <ul className="child">
                                                    <li className="children__list">드라마</li>
                                                    <li className="children__list">2019.05.30</li>
                                                    <li className="children__list">봉준호</li>
                                                    <li className="children__list">봉준호, 한진원</li>
                                                    <li className="children__list">송강호 +6</li>
                                                    <li className="children__list">바른손이앤에이</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small">
                                <div
                                    tabIndex="0"
                                    data-aos={small__first.small__first.effect}
                                    data-aos-offSet={small__first.small__first.effectOffset}
                                    data-aos-delay={small__first.small__first.delay}
                                    className="small__first"
                                >
                                    <div className="small__first-categoryBox"></div>
                                    <div className="small__first-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[6].img} 
                                            alt={homeMainLicense.mainLicense_img[6].alt} 
                                            title="뿅뿅 지구 오락실" 
                                        />
                                    </div>
                                    <div className="small__first-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[0]}</p>
                                        <p className="text__en">Entertainment Shows</p>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={small__second.small__second.effect}
                                    data-aos-offSet={small__second.small__second.effectOffset}
                                    data-aos-delay={small__second.small__second.delay}
                                    className="small__second"
                                >
                                    <div className="small__second-categoryBox"></div>
                                    <div className="small__second-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[7].img} 
                                            alt={homeMainLicense.mainLicense_img[7].alt} 
                                            title="댄스가수 유랑단" 
                                        />
                                    </div>
                                    <div className="small__second-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[1]}</p>
                                        <p className="text__en">Entertainment Shows</p>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={small__third.small__third.effect}
                                    data-aos-offSet={small__third.small__third.effectOffset}
                                    data-aos-delay={small__third.small__third.delay}
                                    className="small__third"
                                >
                                    <div className="small__third-categoryBox"></div>
                                    <div className="small__third-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[8].img} 
                                            alt={homeMainLicense.mainLicense_img[8].alt} 
                                            title="보이즈 플래닛" 
                                        />
                                    </div>
                                    <div className="small__third-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[2]}</p>
                                        <p className="text__en">Entertainment Shows</p>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={small__fourth.small__fourth.effect}
                                    data-aos-offSet={small__fourth.small__fourth.effectOffset}
                                    data-aos-delay={small__fourth.small__fourth.delay}
                                    className="small__fourth"
                                >
                                    <div className="small__fourth-categoryBox"></div>
                                    <div className="small__fourth-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[9].img} 
                                            alt={homeMainLicense.mainLicense_img[9].alt} 
                                            title="헤어질 결심" 
                                        />
                                    </div>
                                    <div className="small__fourth-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[3]}</p>
                                        <p className="text__en">Entertainment Shows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homeMainLicense__contents-bottom">
                        <div className="content__middleSmall">
                            <div className="middle">
                                <div
                                    tabIndex="0"
                                    data-aos={middle__left.middle__left.effect}
                                    data-aos-offSet={middle__left.middle__left.effectOffset}
                                    data-aos-delay={middle__left.middle__left.delay}
                                    className="middle__left"
                                >
                                    <div className="middle__left-categoryBox">
                                        Animation
                                    </div>
                                    <div className="middle__left-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[3].img} 
                                            alt={homeMainLicense.mainLicense_img[3].alt} 
                                            title="히어로 인사이드" 
                                        />
                                    </div>
                                    <div className="middle__left-hoverBox">
                                        <div className="hoverTextBox">
                                            <div className="hoverTextBox__title">프로그램 정보</div>
                                            <div className="hoverTextBox__subtitle">
                                                <ul className="hoverTextBox__subtitle-parent">
                                                    <li className="parent__list">장르</li>
                                                    <li className="parent__list">방영기간</li>
                                                    <li className="parent__list"><br /></li>
                                                    <li className="parent__list">제작사</li>
                                                </ul>
                                                <ul className="hoverTextBox__subtitle-children">
                                                    <li className="children__list">키즈</li>
                                                    <li className="children__list">2023.10.11 2023.12.31</li>
                                                    <li className="children__list">밀리언볼트</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={middle__right.middle__right.effect}
                                    data-aos-offSet={middle__right.middle__right.effectOffset}
                                    data-aos-delay={middle__right.middle__right.delay}
                                    className="middle__right"
                                >
                                    <div className="middle__right-categoryBox">
                                        Animation
                                    </div>
                                    <div className="middle__right-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[4].img} 
                                            alt={homeMainLicense.mainLicense_img[4].alt} 
                                            title="명탐정코난 할로윈의신부" 
                                        />
                                    </div>
                                    <div className="middle__right-hoverBox">
                                        <div className="hoverTextBox">
                                            <div className="hoverTextBox__title">프로그램 정보</div>
                                            <div className="hoverTextBox__subtitle">
                                                <ul className="hoverTextBox__subtitle-parent">
                                                    <li className="parent__list">장르</li>
                                                    <li className="parent__list">제작사</li>
                                                </ul>
                                                <ul className="hoverTextBox__subtitle-children">
                                                    <li className="children__list">청소년</li>
                                                    <li className="children__list">TMS (ETM)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small">
                                <div
                                    tabIndex="0"
                                    data-aos={small__first.small__first.effect}
                                    data-aos-offSet={small__first.small__first.effectOffset}
                                    data-aos-delay={small__first.small__first.delay}
                                    className="small__first"
                                >
                                    <div className="small__first-categoryBox"></div>
                                    <div className="small__first-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[10].img} 
                                            alt={homeMainLicense.mainLicense_img[10].alt} 
                                            title="마카앤로니" 
                                        />
                                    </div>
                                    <div className="small__first-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[4]}</p>
                                        <p className="text__en">Animation</p>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={small__second.small__second.effect}
                                    data-aos-offSet={small__second.small__second.effectOffset}
                                    data-aos-delay={small__second.small__second.delay}
                                    className="small__second"
                                >
                                    <div className="small__second-categoryBox"></div>
                                    <div className="small__second-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[11].img} 
                                            alt={homeMainLicense.mainLicense_img[11].alt} 
                                            title="뿡뿡빵빵 부부맨" 
                                        />
                                    </div>
                                    <div className="small__second-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[5]}</p>
                                        <p className="text__en">Animation</p>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={small__third.small__third.effect}
                                    data-aos-offSet={small__third.small__third.effectOffset}
                                    data-aos-delay={small__third.small__third.delay}
                                    className="small__third"
                                >
                                    <div className="small__third-categoryBox"></div>
                                    <div className="small__third-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[12].img} 
                                            alt={homeMainLicense.mainLicense_img[12].alt} 
                                            title="무한의 계단" 
                                        />
                                    </div>
                                    <div className="small__third-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[6]}</p>
                                        <p className="text__en">Animation</p>
                                    </div>
                                </div>
                                <div
                                    tabIndex="0"
                                    data-aos={small__fourth.small__fourth.effect}
                                    data-aos-offSet={small__fourth.small__fourth.effectOffset}
                                    data-aos-delay={small__fourth.small__fourth.delay}
                                    className="small__fourth"
                                >
                                    <div className="small__fourth-categoryBox"></div>
                                    <div className="small__fourth-imgBox">
                                        <img 
                                            src={homeMainLicense.mainLicense_img[13].img} 
                                            alt={homeMainLicense.mainLicense_img[13].alt} 
                                            title="뱀파이어소녀 달자" 
                                        />
                                    </div>
                                    <div className="small__fourth-textBox">
                                        <p className="text__ko">{homeMainLicense.mainLicense_text.smallBox_text[7]}</p>
                                        <p className="text__en">Animation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            tabIndex="0"
                            data-aos={content__largeBottom.content__largeBottom.effect}
                            data-aos-offSet={content__largeBottom.content__largeBottom.effectOffset}
                            data-aos-delay={content__largeBottom.content__largeBottom.delay}
                            className="content__large"
                        >
                            <div className="content__large-categoryBox">
                                Animation
                            </div>
                            <div className="content__large-imgBox">
                                <img 
                                    src={homeMainLicense.mainLicense_img[5].img} 
                                    alt={homeMainLicense.mainLicense_img[5].alt} 
                                    className="contnet__right-img" 
                                />
                            </div>
                            <div className="content__large-hoverBox">
                                <div className="hoverTextBox">
                                    <div className="hoverTextBox__title">프로그램 정보</div>
                                    <div className="hoverTextBox__subtitle">
                                        <ul className="hoverTextBox__subtitle-parent">
                                            <li className="parent__list">장르</li>
                                            <li className="parent__list">방영기간</li>
                                            <li className="parent__list"><br /></li>
                                            <li className="parent__list">제작사</li>
                                        </ul>
                                        <ul className="hoverTextBox__subtitle-children">
                                            <li className="children__list">키즈</li>
                                            <li className="children__list">2023.03.20 2023.06.15</li>
                                            <li className="children__list">스튜디오 바주카</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeMainLicense;