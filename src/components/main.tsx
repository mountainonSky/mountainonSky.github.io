import React from 'react';

const MainHeader = () => {

    // const navigate = useNavigate();

    // const moveToPage = () => {
    //     navigate("/sub02/");
    // }

    const menuButton = () => {
        const trigger = document.getElementById("trigger")
        const mainMenu = document.getElementById("main-menu")
        const subBg = document.getElementById("subBg")
        const mainBg = document.getElementById("menuBg")

        if (trigger) {
            trigger.classList.toggle("active");
        }
        if (mainMenu) {
            mainMenu.classList.toggle("active");
        }
        if (subBg) {
            subBg.classList.toggle("active");
        }
        if (mainBg) {
            mainBg.classList.toggle("active");
        }
    };

    const FocusSubMenu = (event: React.MouseEvent<HTMLLIElement>) => {
        if (event) {
            event.preventDefault(); // 이벤트 기본 동작 막기
            console.log("subMenu =" + event);
            const focus = event.currentTarget;
            console.log("id : " + focus.id);
            const id = focus.id;
            console.log("id : " + id)
            const match = id.match(/\d+$/);
            console.log("match : " + match)
            const number = match ? parseInt(match[0]) : null;
            console.log("number : " + number)
            const subMenuList = "subMenu-list" + number;

            const subMenu = document.getElementById("subBg") as HTMLDivElement;
            const subMenuFocuced = document.getElementById(subMenuList) as HTMLDivElement;

            if (subMenuFocuced) {
                for (let i = 0; i < subMenu.children.length; i++) {
                    const child = subMenu.children[i];
                    if (child.classList.contains("sub-menu")) {
                        child.classList.remove("on");
                    }
                }

                subMenuFocuced.classList.add("on");
            }
        }
    }



    return (
        <header id="main-header">
            <nav>
                <button id="trigger" onClick={menuButton} >
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
            <div id="main-menu">
                <ul>
                    <li onMouseOver={FocusSubMenu} id="sub01">
                        <a href="sub01.html">01. about cocktails</a></li>
                    <li onMouseOver={FocusSubMenu} id="sub02">
                        <a href="sub02.html">02. kinds of cocktails
                            {/* <Link to="/sub02/"></Link> */}
                        </a>
                    </li>
                    <li onMouseOver={FocusSubMenu} id="sub03">
                        <a href="sub03.html">03. education</a></li>
                    <li onMouseOver={FocusSubMenu} id="sub04">
                        <a href='javascript:void(0)'>04 .reservation</a></li>
                </ul>
            </div>
            <div id="subBg">
                <ul className="sub-menu" id="subMenu-list1">
                    <li><a href="sub01.html#about">칵테일이란</a></li>
                    <li><a href="sub01.html#history">칵테일의 기원</a></li>
                </ul>
                <ul className="sub-menu" id="subMenu-list2" >
                    <li><a href="sub02.html#kinds">칵테일의 종류</a></li>
                    <li><a href="sub02.html#make">칵테일의 제조법</a></li>
                </ul>
            </div>
            <div id="menuBg"><a href='javascript:void(0)'></a></div>
        </header>
    );

}
export const mainfts = {
    MainHeader
};