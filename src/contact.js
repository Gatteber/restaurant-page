import { pageLoad } from "./pageinit";


const renderContact = () => {
    pageLoad.makeElement(pageLoad.getContent, 'div', 'content-body', null);
    const getBody = document.querySelector('.content-body');
    pageLoad.makeElement(getBody, 'div', 'content-card', null);
    const getCard = document.querySelector('.content-card');
    pageLoad.makeElement(getCard, 'div', 'card-main', null);
    const getMain = document.querySelector('.card-main');
    pageLoad.makeElement(getMain, 'p', 'contact-header', "Contact Us");
    pageLoad.makeElement(getMain, 'ul', 'contact-list-head', null);
    const getList1 = document.querySelector('.contact-list-head');
    const contactArray = ["Hours", "Socials", "Location"];
    for (let i = 0; i < contactArray.length; i++) {
        pageLoad.makeElement(getList1, 'li', `list-item${[i]}`, contactArray[i]);
    }
    const hoursArray = [
        "Mon: Closed",
        "Tue: 17:00 ~ 22:30",
        "Wed: 12:00 ~ 22:30",
        "Thu: 12:00 ~ 22:30",
        "Fri: 12:00 ~ 22:30",
        "Sat: 12:00 ~ 22:30",
        "Sun: 12:00 ~ 22:30",]
    const getHours = document.querySelector('.list-item0');
    for (let i = 0; i < hoursArray.length; i++) {
        pageLoad.makeElement(getHours, 'li', 'list-small', hoursArray[i])
    }
    const getSocials = document.querySelector('.list-item1');
    pageLoad.makeElement(getSocials, 'li', 'list-small', "Twitter  Facebook  Instagram  Yelp");
    const getLocation = document.querySelector('.list-item2');
    pageLoad.makeElement(getLocation, 'li', 'list-small', "123 Lorem Ipsum St Denver, CO, 80255  Click for Map")


}

export { renderContact }