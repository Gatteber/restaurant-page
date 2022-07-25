import "./style.scss";
import { pageLoad, renderBody, } from "./pageinit";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
// import HeadImage from './header.jpg';
// import { render } from "sass";





function component () {
    //render "home" on pageload
    renderBody();


    const getHomeButton = document.getElementById("Home");
    const getMenuButton = document.getElementById("Menu");
    const getContactButton = document.getElementById("Contact");
    getHomeButton.classList.add('active');

    function buttonGetBody() {
        const bGetBody = document.querySelector('.content-body');
        return bGetBody;
    }

    getHomeButton.addEventListener("click", () => {
        // const buttonGetBody = document.querySelector('.content-body');
        const remove = buttonGetBody();
        remove.parentNode.removeChild(remove);
        getHomeButton.classList.add('active');
        getMenuButton.classList.remove('active');
        getContactButton.classList.remove('active');
        renderBody();
    })

    getMenuButton.addEventListener("click", () => {
        const remove = buttonGetBody();
        remove.parentNode.removeChild(remove);
        getMenuButton.classList.add('active');
        getHomeButton.classList.remove('active');
        getContactButton.classList.remove('active');
        renderMenu();
    })

    getContactButton.addEventListener("click", () => {
        const remove = buttonGetBody();
        remove.parentNode.removeChild(remove);
        getContactButton.classList.add('active');
        getHomeButton.classList.remove('active');
        getMenuButton.classList.remove('active');
        renderContact();
    })

}

component();