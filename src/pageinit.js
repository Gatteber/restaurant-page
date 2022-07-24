import HeadImage from './header.jpg';


const pageLoad = (() => {
    const getContent = document.getElementById('content');
    const cHeader = document.createElement('div');
    cHeader.classList.add('content-header');
    getContent.appendChild(cHeader);
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('header-img-container');
    cHeader.appendChild(imgContainer);
    const headImg = new Image();
    headImg.classList.add('header-img');
    headImg.src = HeadImage;
    imgContainer.appendChild(headImg);
    const headTxt = document.createElement('div');
    headTxt.classList.add('header-text');
    headTxt.innerHTML = "Bellisimo";
    imgContainer.appendChild(headTxt);

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
    })



    return { makeElement, getContent, }

} 
)();


const renderBody = () => {
    pageLoad.makeElement(pageLoad.getContent, 'div', 'content-body', null);
    const getBody = document.querySelector('.content-body');
    pageLoad.makeElement(getBody, 'div', 'content-card', null);
    const getCard = document.querySelector('.content-card');
    pageLoad.makeElement(getCard, 'div', 'card-main', null);
    const getMain = document.querySelector('.card-main');
    pageLoad.makeElement(getMain, 'h1', 'card-about-header', "About Us");
    // getMain.innerHTML = "About Us"
    pageLoad.makeElement(getMain, 'p', 'card-about', null);
    const getAbout = document.querySelector('.card-about');
    getAbout.innerHTML = "A picture. That's where it all started for us. Here at Bellisimo, we want you to have a great experience, whether it's at our restaurant or in your life. We are dedicated to making it perfect. Our chefs and staff spend their time dreaming of a way to make every experience nothing short of our name: Bellisimo.";
    pageLoad.makeElement(getMain, 'h1', 'card-about-you', "About You");
    pageLoad.makeElement(getMain, 'p', 'card-about-you-inner', null);
    const getAboutYou = document.querySelector('.card-about-you-inner');
    getAboutYou.innerHTML = "Reservations are not accepted at Bellisimo. We pride ourselves in being available on a first-come, first-serve basis to create the aura and mystique of old restaurants. Our owner, who studied in Japan for 10 years, believes that this method allows everyone to have an equal opportunity to experience us.";
    pageLoad.makeElement(getMain, 'h1', 'card-about-owner', "About the Owner");
    pageLoad.makeElement(getMain, 'p', 'card-about-owner-inner', null);
    const getAboutOwner = document.querySelector('.card-about-owner-inner');
    getAboutOwner.innerHTML = "Clark Kent was born in Denver, Colorado and moved to Japan in March of 2003. There, he studied under the tutelage of Masayoshi Matsuhara, one of the famous sushi chefs of the Osaka area. Following that, he created his new concept, an italian fusion restaurant combining the fantastic flavors of Europe and Japan together to make a new, unique, and pleasant experience.";
}



export { pageLoad, renderBody, };