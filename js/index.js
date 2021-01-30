//Event 1 and 2 - The text of the navigation will be resized to 1.5 scale when the mouse is over the nav on mouse enter and back to normal when the mouse leaves.

const resize = document.querySelectorAll('a');
resize.forEach(element => {
    element.addEventListener('mouseenter', () => {
    element.style.transform = "scale(1.5)";
    element.style.transform = "all 0.3s";
})})

const exit = document.querySelectorAll('a');
exit.forEach(element => {
    element.addEventListener('mouseleave', () => {
    element.style.transform = "scale(1)";
    element.style.transform = "all 0.3s";
})})

//Unique Event Listener 3: Changing Image to a new image
const busImage = document.querySelector('.bus-img');
busImage.addEventListener('dblclick', () => {
busImage.src = "img/bus.gif";
})

 //Unique Event Listern 4: Click Event, changes background of Footer
const colorChange = document.querySelector("footer");
colorChange.addEventListener('click', () => {
colorChange.style.backgroundColor = "dodgerblue";
})



//Unique Event Listern 5: Scroll Event- when scrolling to the bottom it will alert with message
 
window.addEventListener("scroll", () => {
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;
if (scrolled === scrollable) {
    alert ('You have reached the bottom!')
}
})
 

//Unique Event Listern 6: focus will turn input field blue
const focus = document.querySelector("input");
focus.addEventListener('focus', (event) => {
 event.target.style.background= "dodgerblue";
})


//Unique Event Listern 7: Wheel scroll over the Lets go H4 tag causes it to grow
const wheelEvent = document.querySelectorAll(".lets-go");
wheelEvent.forEach(element => {element.addEventListener('wheel', () => {
element.style.transform = "scale(1.5)";
element.style.transition = "all 0.3s";
}) });

 

//Unique Event Listern 8:  Mousing over home container turns background blue
 const mouseOver = document.querySelector(".home .intro");
 mouseOver.addEventListener('mouseover', (event) => {
    event.target.style.background= "dodgerblue";
 });

 //Unique Event Listern 9:  Mouse Leave
const mouseLeave = document.querySelector(".home .intro"); 
mouseLeave.addEventListener('mouseleave', (event) => {
   event.target.style.background= "";
});
 
//Unique Event Listern 10:  resizing the window displayed

window.addEventListener("resize", () => {
  const heightOutput = document.querySelector('#height');
  const widthOutput = document.querySelector('#width');
  function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }
  window.onresize = reportWindowSize;
  })