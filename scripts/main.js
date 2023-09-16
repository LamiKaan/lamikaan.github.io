const image = document.querySelector("img");

image.onclick = () => {
    const imgsrc = image.getAttribute('src');
    if (imgsrc === 'images/icon.png') {
        image.setAttribute('src', 'images/icon_bw.png');
    } else {
        image.setAttribute('src', 'images/icon.png');
    }
};

let button = document.querySelector('button');
let heading = document.querySelector('h1');

button.onclick = () => {
    setUserName();
};

function setUserName() {
    const name = prompt("Enter your name");
    if (name === null || name === "") {
        setUserName();
    } else {
        localStorage.setItem("username", name);
        heading.textContent = `Please Sign In ${name}`;
    }
}

if (localStorage.getItem("username") === null) {
    setUserName();
} else {
    const storedName = localStorage.getItem("username");
    heading.textContent = `Please Sign in, ${storedName}`;
}