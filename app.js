const menu = document.querySelector('#mobil-menu');
const menulinks = document.querySelector('.navbar__menu');

const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};
menu.addEventListener('click', mobilemenu);




const navtit = document.querySelectorAll(".nav_b");
for ( let i = 0 ; i< navtit.length; i++){
const navtouch = () => {
    navtit[i].classList.add('touched');
};
navtit[i].addEventListener('click', navtouch);
}

const alll = document.querySelector("body");
for ( let i = 0 ; i< navtit.length; i++){
const navtouchb = () => {
    navtit[i].classList.remove('touched');
};
alll.addEventListener('click', navtouchb);
}

const citycard = document.querySelectorAll(".city_card");
for ( let i = 0 ; i< citycard.length; i++){
const citycardtouch = () => {
    citycard[i].classList.add('touched');
};
citycard[i].addEventListener('click', citycardtouch);
}

for ( let i = 0 ; i< citycard.length; i++){
const citycardtouchb = () => {
    citycard[i].classList.remove('touched');
};
alll.addEventListener('click', citycardtouchb);
}



// const partenairecard = document.querySelectorAll(".partenaire_card_contaner");
// for ( let i = 0 ; i< partenairecard.length; i++){
// const partenairecardtouch = () => {
//     partenairecard[i].classList.add('touched');
// };
// partenairecard[i].addEventListener('click', partenairecardtouch);
// }

// for ( let i = 0 ; i< partenairecard.length; i++){
// const partenairecardtouchb = () => {
//     partenairecard[i].classList.remove('touched');
// };
// alll.addEventListener('click', partenairecardtouchb);
// }




const btnscrolltotop = document.querySelector("#btnscrolltotop");
    btnscrolltotop.addEventListener("click" , function()
    {
        window.scrollTo({top :0,left :0, behavior:"smooth"});
    });




    
const tit1 = document.querySelector(".titre_1");
const tit2 = document.querySelector(".titre_2");
const tit3 = document.querySelector(".titre_3");
const tit4 = document.querySelector(".titre_4_titel");
const tit5 = document.querySelector(".titre_5_titel");
const tit6 = document.querySelector(".titre_6_titel");
const tit7 = document.querySelector(".partenaires_titel");
    
function findPosx(obj){
        var curtop = 0;
        if (obj.offsetParent) {
            
            curtop = obj.offsetTop
            while (obj = obj.offsetParent) {
               
                curtop += obj.offsetTop
            }
        }
        return curtop;
    }   
function findPosy(obj){
        var curleft = 0;
        if (obj.offsetParent) {
            
            curleft = obj.offsetLeft
            while (obj = obj.offsetParent) {
               
                curleft += obj.offsetLeft
            }
        }
        return curleft;
    }   


const ntba = document.querySelector("#ntb_1");
    ntba.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit1),left :0, behavior:"smooth"});
    });

// const ntbb = document.querySelector("#ntb_2");
//     ntbb.addEventListener("click" , function()
//     {
//         window.scrollTo({top :findPosx(tit2)-20,left :0, behavior:"smooth"});
//     });

 const ntbc = document.querySelector("#ntb_3");
    ntbc.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit3)-30,left :0, behavior:"smooth"});
    });

const ntbd = document.querySelector("#ntb_4");
    ntbd.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit4)-300,left :0, behavior:"smooth"});
    });

const ntbe = document.querySelector("#ntb_5");
    ntbe.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit5)-100,left :0, behavior:"smooth"});
    });
      
const ntbf = document.querySelector("#ntb_6");
    ntbf.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit6)-100,left :0, behavior:"smooth"});
    });
     
const ntbg = document.querySelector("#ntb_7");
    ntbg.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit7)-100,left :0, behavior:"smooth"});
    }); 







const ntbaa = document.querySelector("#lmb_1");
    ntbaa.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit1),left :0, behavior:"smooth"});
    });

// const ntbbb = document.querySelector("#lmb_2");
//     ntbbb.addEventListener("click" , function()
//     {
//         window.scrollTo({top :findPosx(tit2)-20,left :0, behavior:"smooth"});
//     });
const ntbcc = document.querySelector("#lmb_3");
    ntbcc.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit3)-30,left :0, behavior:"smooth"});
    });
const ntbdd = document.querySelector("#lmb_4");
    ntbdd.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit4)-300,left :0, behavior:"smooth"});
    });
const ntbee = document.querySelector("#lmb_5");
    ntbee.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit5)-100,left :0, behavior:"smooth"});
    });
const ntbff = document.querySelector("#lmb_6");
    ntbff.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit6)-100,left :0, behavior:"smooth"});
    });
const ntbgg = document.querySelector("#lmb_7");
    ntbgg.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(tit7)-100,left :0, behavior:"smooth"});
    });






    const footerr = document.querySelector(".footer");
    const contact_btn = document.querySelector("#contact_btn");
    contact_btn.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(footerr)-100,left :0, behavior:"smooth"});
    });





    const site_box = document.querySelector(".site_box_container");
    const scrolldiscover = document.querySelector("#lp_btn_disc");
    scrolldiscover.addEventListener("click" , function()
    {
        window.scrollTo({top :findPosx(site_box)-30,left :0, behavior:"smooth"});
    });



   
// let illus = document.getElementById('illustr');
// let vivo = document.getElementById('l_p_d_cont');



// window.addEventListener('scroll',function(){
//     let value = window.scrollY;
//     illus.style.right = value * 1.25 + 'px';
//     vivo.style.left = value *1.25 + 'px';

// })




const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e){

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        
        ripples.classList.add('bubble_btn');
        
        
        ripples.style.left = 50 + 'px';
        ripples.style.top = 10 + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()},600);
    })
})



function creatSquare(){
    const section = document.querySelector('.welcome__design__container');
    const squar = document.createElement('span');
    squar.classList.add('squar');

    var size = Math.random() * 20;

    squar.style.width = 10 + size + 'px';
    squar.style.height = 10 + size + 'px';
    
    squar.style.top = Math.random() * innerHeight + 'px';
    squar.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(squar);

    setTimeout(() =>{
        squar.remove()
    }, 12000)

}

setInterval(creatSquare,600)



// timer code //






const textdays = document.querySelector('#daystext');
const texthours = document.querySelector('#hourstext');
const textminutes = document.querySelector('#minutestext');
const textseconds = document.querySelector('#secondstext');
function getChrono(){

    const now = new Date().getTime();
    const countdownDate = new Date(' December 2, 2021').getTime();


    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 *24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60) / 1000));
    textdays.innerText = `${days}`;
    texthours.innerText = `${hours}`;
    textminutes.innerText = `${minutes}`;
    textseconds.innerText = `${seconds}`;
}

const countdownInterval = setInterval(() => {

    getChrono()
    
}, 1000);



const lalalolo = document.querySelectorAll("#slogant_welcom_anim_svg path");

for ( let i = 0 ; i< lalalolo.length; i++) {
    console.log(`letter ${i} is ${lalalolo[i].getTotalLength()}`);
}