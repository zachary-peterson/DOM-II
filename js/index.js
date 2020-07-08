// Your code goes here

// Selectors

const allLinks = document.querySelectorAll('a');
const destBackCol = document.querySelector('.content-destination');
const keyDownShift = document.querySelector('h2');
const signUps = document.querySelectorAll('.btn');
const zoomedOn = document.querySelector('section');
const destMove = document.querySelectorAll('.img-content');
const bodyColor = document.querySelector('body');
const dblClickFun = document.querySelector('.logo-heading')
const nestingOne = document.querySelector('.destination h4');
const nestingTwo = document.querySelector('.destination p');
const mainNesting = document.querySelector('.destination');

// --------------------------------------------------------------------------------------
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


// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// TEN EVENTS
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// * [ ] `mouseover`

destBackCol.addEventListener('mouseover',() => {
    destBackCol.style.background = "green";
});

// --------------------------------------------------------------------------------------
// * [ ] `keydown`

document.addEventListener('keydown', function (event) {
    if(event.keyCode === 16){
        keyDownShift.style.textTransform = 'uppercase';
        console.log('You shifted');
    }
});

// --------------------------------------------------------------------------------------
// * [ ] `wheel`


zoomedOn.addEventListener('wheel', function() {
    zoomedOn.style.background = "purple";
});


// --------------------------------------------------------------------------------------
// * [ ] `drag / drop`

var dragged;

document.addEventListener('drag', function(event){
  console.log('You are dragging something')
}, false);

document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
  }, false);
  
  document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  }, false);
  
  /* events fired on the drop targets */
  document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  
  document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.visibility = "hidden";
    }
  
  }, false);
  
  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  
  }, false);
  
  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);

// --------------------------------------------------------------------------------------
  // * [ ] `load`

window.addEventListener('load', () => {
    console.log('The page loaded correctly');
});

// --------------------------------------------------------------------------------------
// * [ ] `focus`

document.addEventListener('focus', function(event){
    console.log('You selected something.')
});

// --------------------------------------------------------------------------------------
// * [ ] `resize`

window.addEventListener('resize', function(event){
  if(bodyColor.style.background !== "green"){
    bodyColor.style.background = "green";
  }else{
    bodyColor.style.background = "blue";
  }
});

console.log(bodyColor);

// --------------------------------------------------------------------------------------
// * [ ] `scroll`

window.addEventListener('scroll', function(event){
  console.log('You are scrolling!');
});

// --------------------------------------------------------------------------------------
// * [ ] `select`

//document.addEventListener('select', () => {});

// document.addEventListener('select', function(event){
//   event.target.style.background = "pink";
// });

// --------------------------------------------------------------------------------------
// * [ ] `dblclick`

dblClickFun.addEventListener('dblclick', function(event){
  dblClickFun.textContent = "You Double Clicked";
});

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// Nesting Elements

nestingOne.addEventListener('dblclick', function(event){
  nestingOne.textContent = "yellow";
  event.stopPropagation();
})

nestingTwo.addEventListener('dblclick', function(event){
  nestingTwo.textContent = "orange";
  event.stopPropagation();
})

mainNesting.addEventListener('dblclick', function(event){
  mainNesting.textContent = "brown";
  event.stopPropagation();
})

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