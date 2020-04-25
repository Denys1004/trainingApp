
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // to add animation what we build in css (@keyframes navLinkFade), we grabing individual links (.nav-links li)
    const navLinks = document.querySelectorAll('nav .nav-links li');

    burger.addEventListener('click', ()=>{ 
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 10}s`;
            }
        });

        // Burger Animation (to make it cross)
        burger.classList.toggle('toggle');

    });
}
navSlide();




// SPORT_image slider
let i = 0; 			// Start Point
let images = [];	// Images Array
// let time = 2000;	// Time Between Switch
// Image List
images[0] = '../static/images/ex1_wo_bg.gif';
images[1] = '../static/images/ex2_wo_bg.gif';
images[2] = '../static/images/ex3_wo_bg.gif';
// Change Image
function changeImg(){
	document.slide.src = images[i];
	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}
	// Run function every x seconds
	setTimeout("changeImg()", 10000);
}
// Run function when page loads
window.onload=changeImg();









//Countdown
// 1. grabing h1 element using its id and storing it into variable numberChanger
let numberChanger = document.getElementById("timer_workout");
// 2. making list with numbers, we want to loop through (we can pass strings in [array])
let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 
// 3. making counter, it will count which position we are in the list
let counter = 0;

let colorChanger = document.getElementsByClassName("timer");

let counterbg = document.getElementById('timer_div');
// counterbg.style.backgroundColor = 'green';

let rest = document.getElementById('rest');

// 4. Creating function which will be changing our numbers
function changeNumber(){
    // 7. when circle is over we need to reset counter back to 0
    if(counter >= numbers.length){
        counterbg.style.backgroundColor = 'green';
        rest.innerHTML = 'Rest'
        counter = 0;
    }else if(counter === 0 || counter === 1 || counter === 2){
        counterbg.style.backgroundColor = 'green';
        rest.innerHTML = 'Rest'
    }else{
        counterbg.style.backgroundColor = 'red';
        rest.innerHTML = ''
    }
    // 5. here we need to access properties of the пункт1 numberChanger. 
    numberChanger.innerHTML = numbers[counter];
    counter = counter + 1;
};
// 6. now need to set interval (1st arg - is a function we want to call, 2nd - how often we want to call it)
window.onload=setInterval(changeNumber, 1000);







// scroll to top
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#scroll-arrow:hidden').stop(true, true).fadeIn();
    } else {
        $('#scroll-arrow').stop(true, true).fadeOut();
    }
});
