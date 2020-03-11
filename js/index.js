// Your code goes here
//(1)colorful buttons on click
const button = document.querySelectorAll('.btn');
console.log(button);
function colorful(e) {
    var colorIt = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ')'; 
    e.target.style.backgroundColor = colorIt;
}
button.forEach(element => {
    element.addEventListener('click', colorful);
});

//(2)large blue home-link on mouseover
document.querySelector('.nav-link').addEventListener('mouseover', () => {
    document.querySelector('.nav-link').style.color = 'blue';
    document.querySelector('.nav-link').style.fontSize = '30px';
})

//(3)revert default changes on mouseout
document.querySelector('.nav-link').addEventListener('mouseout', () => {
    document.querySelector('.nav-link').style.color = 'black';
    document.querySelector('.nav-link').style.fontSize = '16px';
})
//(4)shrink on double click
document.querySelector('.nav-link:nth-of-type(2)').addEventListener('dblclick', ()=> {
    document.querySelector('.nav-link:nth-of-type(2)').style.fontSize = '10px'
})

//(5)color text on mousemove 
document.querySelector('p:nth-of-type(1)').addEventListener('mousemove', () => {
    document.querySelector('p:nth-of-type(1)').style.color = 'orange'
    document.querySelector('p:nth-of-type(1)').style.transform = 'unset'
})

//(6)flip text on mouseleave

document.querySelector('p:nth-of-type(1)').addEventListener('mouseleave', () => {
    document.querySelector('p:nth-of-type(1)').style.transform = 'rotate(180deg)'
    document.querySelector('p:nth-of-type(1)').style.fontFamily = 'serif'
    document.querySelector('p:nth-of-type(1)').style.color = 'purple'
    document.querySelector('p:nth-of-type(1)').style.fontSize = '20px'
});

//(7)vroom on keydown
let firstImage = document.querySelector('img:nth-of-type(1)')
console.log(firstImage);
window.addEventListener('keydown', (event) =>{
    if(event.keyCode === 39){
       firstImage.src = '//:0';
        firstImage.alt= 'VRRROOOMMM!!!';
        firstImage.style.fontSize = '10rem'
        firstImage.style.color = 'red'; 
    } else if (event.keyCode === 37) {
        firstImage.src = '//:0';
        firstImage.alt= 'No gas silly!';
        firstImage.style.fontSize = '10rem'
        firstImage.style.color = 'blue'; 
    } else if(event.keyCode === 38) {
        firstImage.src = 'https://twusa.org/wp-content/uploads/2018/04/Magic-School-Bus.jpg'
    }    else {
        firstImage.src = 'https://thirtyhertzrumble.com/wp-content/uploads/2012/05/Mystery-machine-cartoon-ver.png'
    }

});
//(8)fixed blue navbar on scroll
let navBar = document.querySelector('header.main-navigation');
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 100){
        navBar.style.backgroundColor = 'lightblue';
    } else {
        navBar.style.backgroundColor = 'white';
    }
    
});

//(9)spinning words with focus
document.querySelector('.nav-link:nth-of-type(3)').addEventListener('focus', (e)=> {
    e.target.style.backgroundColor = 'black'
    e.target.style.color = 'white'
    e.target.style.fontFamily = 'comic sans ms'
    e.target.style.fontSize = '40px'

//!!!STRETCH GOAL!!!
    gsap.to('.nav-link:nth-of-type(3)', {keyframes: [
        {x: 100, duration: 1},
        {y: 200, duration: 1, delay: 0.5}, //create a 0.5 second gap
        {rotation: 360, duration: 2, delay: -0.25} //overlap by 0.25 seconds
      ], ease: "power3.inOut"});
    
})

//(10)SAW quote on load
window.addEventListener('load', () => {
    return alert('Jigsaw: Would you like to play a game?')
})

//preventDefault() on 'a'
let aTags = Array.from(document.querySelectorAll('a'));
aTags.forEach(tag => {
    tag.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

//stopPropagation

const parent = document.querySelectorAll('.destination');

function colorful(e) {
    var colorIt = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ')'; 
    e.target.style.backgroundColor = colorIt;
}
parent.forEach(element => {
    element.addEventListener('click', colorful);
    element.addEventListener('click', (e) =>{
       e.target.style.transform = 'rotate(180deg)';
    })
    element.addEventListener('dblclick', (e) =>{
        e.target.style.transform = 'rotate(360deg)';
     })
     element.querySelector('.btn').style.width = '100%';
});

let childElement = Array.from(document.querySelectorAll('.destination .btn'));
childElement.forEach( e => {
    e.addEventListener('click', event => {
        event.stopPropagation();
    })
})

//!!!!STRETCH GOAL!!!!

let draggable1 = document.getElementById('dragPic1');
Draggable.create('#dragPic1');

let draggable2 = document.getElementById('dragPic2');
Draggable.create('#dragPic2');
