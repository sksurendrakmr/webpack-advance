import newYork from './newyork.jpg';
import altText from './altText.txt';

function addImage() { 
    console.log("Add image");
    const img = document.createElement('img');
    img.alt = altText
    img.width=300;
    img.src = newYork
    const body = document.querySelector('body')
    body.appendChild(img);
}

export default addImage;