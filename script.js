const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.infom');

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})












// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const header = document.querySelector('.informations-mb');
//     function toogleBurger() {
//     if(!burger){
//                 burger.classList.add('informations-mb');
//                 burger = true;}
                
//                 else {
//                     burger.classList.remove('informations-mb');
//                 }

//             }
// navSlide();















// select DOM items
// const burger = document.querySelector('.burger');
// const informationsMb = document.querySelector('.informations-mb');
// const infom = document.querySelectorAll ('.infom');

// set initial state of burger
// let showBurger = false;

// burger.addEventListener('click' , function(){
//     burger.classList.toggle('informations-mb')
// })
// ;


















// function toogleBurger() {
//     if(!showBurger){
//         burger.classList.add('close');
//         informationsMb.classList.add('show');
//        infom.forEach(infom => infom.classList.add('show'));

       //set burger state
    //    showBurger = true;
    // }else{
    //     burger.classList.remove('close');
    //     informationsMb.classList.remove('show');
    //     infom.forEach(infom => infom.classList.remove('show'));
 
        //set burger state
//         showBurger = false;
//     }
// }