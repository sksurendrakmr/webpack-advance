import newYork from './newyork.jpg';

function addImage() { 
    const img = document.createElement('img');
    img.alt = "newyork"
    img.width=300;
    img.src = newYork
    const body = document.querySelector('body')
    body.appendChild(img);
}

export default addImage;