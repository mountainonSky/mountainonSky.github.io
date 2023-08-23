import React from 'react';

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

export const commonfts = {
    menuButton,
    FocusSubMenu
};