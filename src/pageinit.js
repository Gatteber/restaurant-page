import HeadImage from './header.jpg';


const pageLoad = (() => {
    const getContent = document.getElementById('content');
    const cHeader = document.createElement('div');
    cHeader.classList.add('content-header');
    getContent.appendChild(cHeader);
    const headImg = new Image();
    headImg.classList.add('header-img');
    headImg.src = HeadImage;
    cHeader.appendChild(headImg);

    //function for appending elements
    const makeElement = (parent, item, cli, html) => {
        const e = document.createElement(`${item}`);
        e.classList.add(`${cli}`);
        e.innerHTML = html;
        parent.appendChild(e);
    };

    //nav
    makeElement(cHeader, 'div', 'navbar', null);
    const getNavbar = document.querySelector('.navbar');
    const headArray = ["Home", "Menu", "Contact"];
    for (let i=0; i < headArray.length; i++) {
        makeElement(getNavbar, 'div', 'navbar-link', headArray[i]);
    };

    const getNavElement = document.querySelectorAll('.navbar-link');
    getNavElement.forEach(element => {
        element.setAttribute("id", `${element.innerHTML}`)
        element.addEventListener('click', () => {
            console.log("It worked!");
        })
    })

    //body
    makeElement(getContent, 'div', 'content-body', null);
    const getBody = document.querySelector('.content-body');
    makeElement(getBody, 'div', 'content-card', null);
    const getCard = document.querySelector('.content-card');
    makeElement(getCard, 'div', 'card-main', "lorem");


} 
)();

export { pageLoad };