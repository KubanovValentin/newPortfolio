'use strict';
// --------------------------------1 first-page анимация
const container = document.querySelector('.container');
for (var i = 0; i<= 50; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}

function animateBlocks() {
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-800, 800);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        scaleX: function(){
            return anime.random(-2, 2);
        },
        scaleY: function(){
            return anime.random(-2, 2);
        },

        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(20),
        complete: animateBlocks,
    });
}

animateBlocks();








// // -----------------------кнопка перехода на другой экран
function hideshow() {
    document.getElementById("first").style = "display:none";
    document.getElementById("second").style = "display:block";
}

function hideShow() {
    document.getElementById("second").style = "display:none";
    document.getElementById("common").style = "display:block";
}


// ----------------
// second page 


	const text = document.querySelector('.fifth-screen__textAct');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    const animation = anime.timeline({
        targets : '.fifth-screen__textAct span',
        easing : 'easeInOutExpo',
        loop : true,
    });

    animation
    .add({
        rotate :0,
        translateX : 0,
        translateY : 0,
        duration: 1000,
        delay: anime.stagger(20),
    })
    .add({
        rotate : function(){
            return anime.random(-360, 360);
        },
        translateX : function(){
            return anime.random(-100, 100);
        },
        translateY : function(){
            return anime.random(-100, 100);
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


// function clickBtn(){
//     document.querySelector('.fifth-screen__overlay').style.display='block'; 
//     document.querySelector('.fifth-screen__btnOpen').style.display='none'; 
//     document.querySelector('.fifth-screen__btnHide').style.display='block';
//     document.querySelector('body').style.overflow= 'hidden';
// }
// function closeBtn(){
//     document.querySelector('.fifth-screen__overlay').style.display='none';
//     document.querySelector('.fifth-screen__btnHide').style.display='none';
//     document.querySelector('.fifth-screen__btnOpen').style.display='block';
//     document.querySelector('body').style.overflow= 'scroll';
// }

// const btnOpen1 = document.getElementById('btnOpen1');
// btnOpen1.addEventListener('click', (e) => {
//     document.querySelector('.fifth-screen__overlay').style.display='block'; 
//     document.querySelector('.fifth-screen__btnOpen').style.display='none'; 
//     document.querySelector('.fifth-screen__btnHide').style.display='block';
//     document.querySelector('body').style.overflow= 'hidden';
// });

// const btnOpen2 = document.getElementById('btnOpen2');
// btnOpen2.addEventListener('click', (e) => {
//     document.querySelector('.fifth-screen__overlay').style.display='block'; 
//     document.querySelector('.fifth-screen__btnOpen').style.display='none'; 
//     document.querySelector('.fifth-screen__btnHide').style.display='block';
//     document.querySelector('body').style.overflow= 'hidden';
// });

// const deliteElement = (event) =>  {
//     console.log(event.target);
//     // console.log(event.currentTarget);
//     console.log(event.type);
//     event.target.style.display = 'flex';
// };

const btn = document.querySelector('.fifth-screen__btnOpen');
    btn.addEventListener('click', () => {
    document.querySelector('.fifth-screen__overlay').style.display='block'; 
    
    });

const closeBtn = document.querySelector('.fifth-screen__btnHide');
closeBtn.addEventListener('click', () => {
    document.querySelector('.fifth-screen__overlay').style.display='none';

});

// btn.forEach(item => {
//     item.addEventListener('click');
//     // btn.addEventListener('click', deliteElement, {once:true}); это что бы клик один раз
// });

VanillaTilt.init(document.querySelectorAll(".sixth-screen__slip"),{
    max: 20,
    speed: 100,
    glare:true,
});


// часы 

setInterval(() => {
    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    let day = new Date();
    let hh = day.getHours(17) * 30;
    let mm = day.getMinutes(32) * deg;
    let ss = day.getSeconds(47) * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});


// ------------------------------------------
// таймер обратного отсчета 
const deadline = '2021-09-1';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), 
            days = Math.floor((t / (1000 * 60 *60 *24))),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 /60) % 60),
            seconds = Math.floor((t / 1000 ) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }; 
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function  setClock(selector, endtime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }       

    }

    setClock('.timer', deadline);
