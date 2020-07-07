// Your code goes here

// Selectors

const allLinks = document.querySelectorAll('a');
const destBackCol = document.querySelector('.content-destination');
const keyDownShift = document.querySelector('h2');
const signUps = document.querySelectorAll('.btn');
const zoomedOn = document.querySelector('section');

// Disabling links

// allLinks[0].addEventListener('click', (event) => {
//     event.preventDefault();
// });

// allLinks[1].addEventListener('click', (event) => {
//     event.preventDefault();
// });

// allLinks[2].addEventListener('click', (event) => {
//     event.preventDefault();
// });

// allLinks[3].addEventListener('click', (event) => {
//     event.preventDefault();
// });

document.querySelectorAll('a').forEach(prevDef);

// TEN EVENTS
// * [ ] `mouseover`

destBackCol.addEventListener('mouseover',() => {
    destBackCol.style.background = "green";
});

// * [ ] `keydown`

document.addEventListener('keydown', function (event) {
    if(event.keyCode === 16){
        keyDownShift.style.textTransform = 'uppercase';
        console.log('You shifted');
    }
});

// * [ ] `wheel`

zoomedOn.addEventListener('wheel', function() {
    zoomedOn.style.background = "purple";
});


// * [ ] `drag / drop`

//document.addEventListener('drag', );

// * [ ] `load`

window.addEventListener('load', () => {
    console.log('The page loaded correctly');
});

// * [ ] `focus`

//document.addEventListener('focus', );

// * [ ] `resize`

//document.addEventListener('resize', );

// * [ ] `scroll`

//document.addEventListener('scroll', );

// * [ ] `select`

//document.addEventListener('select', () => {});

// * [ ] `dblclick`

//document.addEventListener('dblclick', );

// CallBack Playground

let scale = 1;

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }

  function prevDef (elem) {
    elem.addEventListener('click', event => event.preventDefault());
  }