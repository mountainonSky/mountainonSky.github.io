import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { commonfts } from './common';
import Cocktail from '../interface/Cocktail';

const GoToSub02 = () => {
    return (

        <div id="main-menu">
            <ul >
                <li><Link to="/">01. about cocktails</Link></li>
                <li><Link to="/sub02">02. kinds of cocktails</Link></li>
                <li><Link to="/">03. education</Link></li>
                <li><Link to="/">04 .reservation</Link></li>
            </ul>
        </div>
    );
}

const SubHeader = () => {
    useEffect(() => {
        document.body.style.overflow = "scroll";
    }, []);

    return (
        <header id="sub-header">
            <nav>
                <button id="trigger" onClick={commonfts.menuButton} >
                    <span></span>
                    <span></span>
                </button>
                <ul className="topmenu pc">
                    <li><button>로그인</button></li>
                    <li><button>회원가입</button></li>
                </ul>
                <ul className="topmenu mobile">
                    <li><button><i className="fas fa-sign-in-alt"></i></button></li>
                    <li><button><i className="fas fa-user"></i></button></li>
                </ul>
            </nav>
            <GoToSub02 />
            <div id="subBg">
                <ul className="sub-menu one">
                    <li><a href="sub01.html#about">칵테일이란</a></li>
                    <li><a href="sub01.html#history">칵테일의 기원</a></li>
                </ul>
                <ul className="sub-menu two">
                    <li><a href="sub02.html#kinds">칵테일의 종류</a></li>
                    <li><a href="sub02.html#make">칵테일의 제조법</a></li>
                </ul>
            </div>
            <div id="menuBg"><a href="#"></a></div>
        </header>
    );
}
const Kinds = () => {
    return (
        <>
            <div id="kinds" className="sub02-banner">
                <h3><span>kind of</span> cocktails</h3>
            </div>
            <div className="sub-box">
                <div className="sub-wrap">
                    <div className="sub-text">
                        <h3>kind of <span>cocktails</span></h3>
                        <h4>칵테일의 종류</h4>
                        <p>칵테일의 종류는 베이스로 어떤 술을 사용하느냐에
                            따라 구분합니다 . 칵테일에 사용되는 술로는 <span>Whiskey,
                                Tequila, Vodka, Gin, Rum, Liqueur</span> 등이 있습니다.</p>
                    </div>
                    <div className="sub-image"></div>
                </div>
            </div>
            <div className="clear"></div>
        </>
    );
}

const SelectCocktail = () => {
    const [data, setData] = useState<Cocktail[] | undefined>();

    useEffect(() => {
        fetch('/api/cocktail')
            .then(response => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }, [])


    return (
        <>
            {data && (
                data.map((item) => {
                    console.log(item)
                    return (
                        <li className={`${item.type} isotope-item`} key={item._id}>
                            <div className="card-wrap">
                                <img src={(item.imagePath)} alt="cardImg" className="cardImg"></img>

                            </div>
                            <div className="cardTitle">
                                <h3>{item.name}</h3>
                                <p>{item.type} 베이스</p>
                                <div className="botton up"><img src={require("../balgre/sub02/imgs/sub02-card-up.png")} alt="버튼"></img></div>
                            </div>
                            <div className="cardHide">
                                <h3><span>칵테일</span> 재료</h3>
                                <p>{item.ingredients} 장식 : {item.decoration}</p>
                            </div>
                        </li>
                    )
                }
                )
            )}

        </>
    );
}
const Fillter = () => {
    const [data, setData] = useState<Cocktail[] | undefined>();

    useEffect(() => {
        fetch('/api/cocktail')
            .then(response => response.json())
            .then((data) => {
                setData(data);
            })
            .catch(error => console.error(error));
    }, []);

    const [newComponent, setNewComponent] = useState<Cocktail[] | undefined>();

    const handleClick = (type: string) => {
        fetch(`/api/cocktail/${type}`)
            .then(response => response.json())
            .then((data) => {
                setNewComponent(data);
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <div id="filters">
                <ul className="filters-Btn">
                    <li><button onClick={() => setNewComponent(undefined)}>All</button></li>
                    <li><button onClick={() => handleClick("tequila")}>tequila</button></li>
                    <li><button onClick={() => handleClick("whiskey")}>whiskey</button></li>
                    <li><button onClick={() => handleClick("vodka")}>vodka</button></li>
                    <li><button onClick={() => handleClick("gin")}>gin</button></li>
                    <li><button onClick={() => handleClick("rum")}>rum</button></li>
                    <li><button onClick={() => handleClick("liqueur")}>liqueur</button></li>
                </ul>
            </div>
            <div className="card-area">
                <ul id="card-item">
                    <CardItems data={newComponent ?? data} />
                </ul>
            </div>
        </>
    );
}

const CardItems = ({ data }: { data: Cocktail[] | undefined }) => {

    return (
        <>
            {data && (
                data.map((item) => {
                    console.log(item)
                    return (
                        <li key={item._id}>
                            <div className="card-wrap">
                                <img src={(item.imagePath)} alt="cardImg" className="cardImg"></img>

                            </div>
                            <div className="cardTitle">
                                <h3>{item.name}</h3>
                                <p>{item.type.join(', ')} 베이스</p>
                                <div className="botton up"><img src={require("../balgre/sub02/imgs/sub02-card-up.png")} alt="버튼"></img></div>
                            </div>
                            <div className="cardHide">
                                <h3><span>칵테일</span> 재료</h3>
                                <p>{item.ingredients} 장식 : {item.decoration}</p>
                            </div>
                        </li>
                    )
                }
                )
            )}

        </>
    );
}
const GoToLearn = () => {
    return (
        <div className="eduGo">
            <a href="#">교육학습 이동</a>
        </div>
    );
}

const Footer: React.FC = () => {

    return (
        <footer>
            <div className="ft-wrap">
                <div className="ft-logo"><button><Link to="/"></Link><img src={require("../balgre/imgs/logo.png")} alt="logo"></img></button></div>
                <div className="ft-text">
                    <p>광주광역시 북구 경양로170 (중흥동) 한경빌딩(구 남양건설빌딩) 5층</p>
                    <p>TEL. 062-720-4800</p>
                </div>
                <div className="copy">
                    <p>Copyright&copy;  2021 BALGRE:) All Rights Reserved.</p>
                </div>
                <div className="sns">
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter-square"></i></a>
                </div>
            </div>
        </footer>
    );
}
export const subfts = {
    SubHeader,
    Kinds,
    Fillter,
    GoToLearn,
    Footer
};