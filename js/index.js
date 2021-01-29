//Event 1 and 2 - The text of the navigation will be resized to 1.5 scale when the mouse is over the nav on mouse enter and back to normal when the mouse leaves.

const resize = document.querySelectorAll('a');
resize.forEach(element => {element.addEventListener('mouseenter', () => {
    element.style.transform = "scale(1.5)";
    element.style.transform = "all 0.3s";
})})

const exit = document.querySelectorAll('a');
exit.forEach(element => {element.addEventListener('mouseleave', () => {
    element.style.transform = "scale(1)";
    element.style.transform = "all 0.3s";
})})

