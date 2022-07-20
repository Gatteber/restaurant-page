//import space

const pageLoad = (() => {
    const getContent = document.getElementById('content');
    const cHeader = document.createElement('div');
    cHeader.classList.add('content-header');
    getContent.appendChild(cHeader);

    //function for appending elements
    const makeElement = (parent, item, cli, html) => {
        const e = document.createElement(`${item}`);
        e.classList.add(`${cli}`);
        e.innerHTML = html;
        parent.appendChild(e);
    };

    makeElement(cHeader, 'div', 'navbar', null);
    const getNavbar = document.querySelector('.navbar');
    const headArray = ["Home", "Menu", "Contact"];
    for (let i=0; i < headArray.length; i++) {
        makeElement(getNavbar, 'div', 'navbar-link', headArray[i]);
    };

}
)();

export { pageLoad };