// Navbar

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




// Exercise slider

let i = 0; 			// Start Point
let images = [];	// Images Array
// Image List
images[0] = '../static/images/ex1_wo_bg.gif';
images[1] = '../static/images/ex2_wo_bg.gif';
images[2] = '../static/images/ex3_wo_bg.gif';

function exerciseChanger(){                                 // Change Image
	document.slide.src = images[i];
	if(i < images.length - 1){                              // Check If Index Is Under Max
	  i++; 	                                                // Add 1 to Index
	} else {                                                // Reset Back To O
		i = 0;
	}
	// Run function (change exercise) every x seconds
	setTimeout("exerciseChanger()", 10000);
}
// Run function when page loads
window.onload=exerciseChanger();









// Timer Countdown

let timerNumber_h1 = document.getElementById("timerNumber");    // 1. grabing h1 element using its id and storing it into variable timerNumber_h1
let workoutTime = [15, 14, 13, 12, 11, 30, 29, 28, 27, 26];     // 2. making list with workoutTime, we want to loop through (we can pass strings in [array])
let counter = 0;                                                // 3. making counter, it will count which position we are in the list
let workout_status = document.getElementById('workout_status');

function oneCircleTimer(){                                        // 4. Creating function which will be changing our workoutTime
    if(counter >= workoutTime.length){                          // when circle is over we need to reset counter back to counter = 0
        timerNumber_h1.style.color='rgb(220, 5, 2)';
        workout_status.innerHTML = 'Rest'
        counter = 0;
    }else if(counter >= 0 && counter < 5){                      // Choosing Rest time
        timerNumber_h1.style.color='rgb(220, 5, 2)';
        workout_status.innerHTML = 'Rest'
    }else{                                                      // Choosing Workout time
        timerNumber_h1.style.color='rgb(5, 118, 37)';
        workout_status.innerHTML = ''
    }
    timerNumber_h1.innerHTML = workoutTime[counter];            // 5. here we need to access properties of the пункт1 timerNumber_h1. 
    counter = counter + 1;

    // Run function (change circle) every x seconds
	// setTimeout("oneCircleTimer()", 10000 - указать время одного цикла);
};
window.onload=setInterval(oneCircleTimer, 1000);                  // 6. now need to set interval (1st arg - is a function we want to call, 2nd - how often we want to call it)














// Audio Player  https://www.youtube.com/watch?v=vtZCMTtP-0Y
function audioPlayer(){
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
       e.preventDefault(); 
       $("#audioPlayer")[0].src = this;
       $("#audioPlayer")[0].play();
       $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
    
    $("#audioPlayer")[0].addEventListener("ended", function(){
       currentSong++;
        if(currentSong == $("#playlist li a").length)
            currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}
window.onload=audioPlayer();


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
