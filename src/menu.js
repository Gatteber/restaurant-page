import { pageLoad } from "./pageinit";

const menuLoad = (() => {

    console.log("hi");

})();

const renderMenu = () => {
    pageLoad.makeElement(pageLoad.getContent, 'div', 'content-body', null);
    const getBody = document.querySelector('.content-body');
    pageLoad.makeElement(getBody, 'div', 'content-card', null);
    const getCard = document.querySelector('.content-card');
    pageLoad.makeElement(getCard, 'div', 'card-main', "Menu");
    const menuArray = [
        "Appetizers",
        "Main",
        "Dessert",
    ]
    const getMenu = document.querySelector('.card-main');
    pageLoad.makeElement(getMenu, 'ul', 'menu-list', null);
    const getMenuList = document.querySelector('.menu-list');
    menuArray.map(element => {
        pageLoad.makeElement(getMenuList, 'li', `menu-list-${[element]}`, element);
    })
    const appArray = [
        "Risotto - 9",
        "Scallop - 11",
        "Tortellini - 9",
        "Cheese Platter - 22"
    ];
    const mainArray = [
        "Salmon - 23",
        "Beef Wellington - 35",
        "Swordfish - Market Price",
        "Chicken - 18"
    ];
    const desArray = [
        "Chocolate Cake - 6",
        "Ice Cream - 4"
    ];
    const mapApp = document.querySelector('.menu-list-Appetizers');
    const mapMain = document.querySelector('.menu-list-Main');
    const mapDes = document.querySelector('.menu-list-Dessert');
    appArray.map(e => {
        pageLoad.makeElement(mapApp, 'li', 'list-small', e);
    });
    mainArray.map (e => {
        pageLoad.makeElement(mapMain, 'li', 'list-small', e);
    });
    desArray.map (e => {
        pageLoad.makeElement(mapDes, 'li', 'list-small', e);
    })
}

export { renderMenu }