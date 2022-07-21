import "./style.scss";
import { pageLoad, renderBody, } from "./pageinit";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
// import HeadImage from './header.jpg';
// import { render } from "sass";





function component () {
    //render "home on pageload"
    renderBody();


    const getHomeButton = document.getElementById("Home");
    const getMenuButton = document.getElementById("Menu");
    const getContactButton = document.getElementById("Contact");

    function buttonGetBody() {
        const bGetBody = document.querySelector('.content-body');
        return bGetBody;
    }

    getHomeButton.addEventListener("click", () => {
        // const buttonGetBody = document.querySelector('.content-body');
        const remove = buttonGetBody();
        remove.parentNode.removeChild(remove);
        renderBody();
    })

    getMenuButton.addEventListener("click", () => {
        const remove = buttonGetBody();
        remove.parentNode.removeChild(remove);
        renderMenu();
    })

    getContactButton.addEventListener("click", () => {
        const remove = buttonGetBody();
        remove.parentNode.removeChild(remove);
        renderContact();
    })

}

component();