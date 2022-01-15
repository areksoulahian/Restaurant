// import your function
import myRestaurant from '../src/myRestaurant';
import './style.css';
import pic from './Plate.jpg';

let name = 'Brewery Winery Restaurant';
let $ = require('jquery');
const element = document.createElement('div.content');

function component() {
    //creating element
    const element = document.createElement('div.content');
    
    // use your function!
    element.innerHTML = myRestaurant(name);
    
    //add image
    element.classList.add('footer-footer');
    
    const myImage = new Image();
    
    myImage.src = pic;
    
    //element.appendChild('myImage');
    $(element).append('<h1>'+name+'</h1>');
    
    $('body').after('<h1>'+'From The Odin Project Curriculum'+'</h1>');
    
    return element;
}

//appending the component function
document.body.appendChild(component());