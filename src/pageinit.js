//import space

const pageLoad = (() => {
    const getContent = document.getElementById('content');
    // const test = document.createElement('div');
    // test.classList.add('hellotest');
    // test.innerHTML = "Hello, World!";
    // getContent.appendChild(test);

    // const getDiv = document.querySelector('.hellotest');
    // const newChild = document.createElement('div');
    // newChild.innerHTML = ("I'm a new div!!");
    // getDiv.appendChild(newChild);
    const cHeader = document.createElement('div');
    cHeader.classList.add('content-header');
    cHeader.innerHTML = "Hello World";
    getContent.appendChild(cHeader);

    

}
)();

export { pageLoad };