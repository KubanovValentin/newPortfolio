'use strict';
// --------------------------------1 first-page анимация
const container = document.querySelector('.container');
for (var i = 0; i<= 300; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}

function animateBlocks() {
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        scaleX: function(){
            return anime.random(-1.5, 1.5);
        },
        scaleY: function(){
            return anime.random(-1.5, 1.5);
        },

        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks,
    });
}

animateBlocks();

// -----------------------кнопка перехода на другой экран
function hideshow() {
    document.getElementById("first").style = "display:none";
    document.getElementById("second").style = "display:block";
}


// ----------------
// setInterval(function(), 1000);
// second page 
window.addEventListener("load", function() {

	const text = document.querySelector('.third-screen__text');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    const animation = anime.timeline({
        targets : '.third-screen__text span',
        easing : 'easeInOutExpo',
        loop : true,
    });

    animation
    .add({
        rotate :0,
        translateX : 0,
        translateY : 0,
        duration: 1000,
        delay: anime.stagger(10),
    })
    .add({
        rotate : function(){
            return anime.random(-360, 360);
        },
        translateX : function(){
            return anime.random(-500, 500);
        },
        translateY : function(){
            return anime.random(-500, 500);
        },
        duration: 5000,
        delay: anime.stagger(20),
    })

    .add({
        rotate :0,
        translateX : 0,
        translateY : 0,
        duration: 5000,
        delay: anime.stagger(20),
    });
});

