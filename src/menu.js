import { pageLoad } from "./pageinit";

const menuLoad = (() => {

    console.log("hi");

})();

const renderMenu = () => {
    pageLoad.makeElement(pageLoad.getContent, 'div', 'content-body', null);
    const getBody = document.querySelector('.content-body');
    pageLoad.makeElement(getBody, 'div', 'content-card', null);
    const getCard = document.querySelector('.content-card');
    pageLoad.makeElement(getCard, 'div', 'card-main', "ipsum");

}

export { renderMenu }