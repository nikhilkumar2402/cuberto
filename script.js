var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  window.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        x: dets.clientX,
        y: dets.clientY
    })
})

let btn = document.querySelectorAll('button');
btn.forEach(function(elem, target){
  elem.addEventListener('mousemove', function(dets){
    gsap.to(btn[target], {
      backgroundColor : "red",
    })
  })
  elem.addEventListener('mouseleave', function(dets){
    gsap.to(btn[target], {
      backgroundColor : "blue"
    })
  })
})


 let statictxt = document.querySelectorAll(".statictxt");
 let animtxt = document.querySelectorAll(".animtxt");
 statictxt.forEach(function(elem, target){
  elem.addEventListener('mousemove', function(dets){
    gsap.to(animtxt[target], {
      // height: "100%",
      scaleY: 1, 
      ease: Expo,
      duration: 0.3
    })
   })
  elem.addEventListener('mouseleave', function(dets){
    gsap.to(animtxt[target], {
      // height: "0%",
      scaleY:0,
      ease: Expo,
      duration: 0.3
    })
   })
 })


 function btnfunction(){
  let btnbox = document.querySelector(".btnbox");
 btnbox.addEventListener("mousemove", function(){
  gsap.to(".btn h3", {
    transform : 'translateY(-100%)',
    duration: 0.5,
    color : "white"
   })
  gsap.to(".blackbox", {
    transform : 'translateY(0%)',
    duration: 0.4,
    ease: Power2
   })
 })
 btnbox.addEventListener("mouseleave", function(){
  gsap.to(".btn h3", {
    transform : 'translateY(0%)',
    duration: 0.5,
    color : "black"
   })
   gsap.to(".blackbox", {
    transform : 'translateY(100%)',
    duration: 0.4,
    ease: Power2
   })
 })
 }
 btnfunction()


 gsap.to(".h1box h1, .h1box video", {
  transform : 'translate(0%)',
  duration : 0.7
 })

 document.querySelector("#nav h1").addEventListener("mousemove", function(){
  gsap.to("#cursor", {
    scale : 4,
    backgroundColor : 'transparent',
    border : '0.5px solid #161616',
  })
 })
 document.querySelector("#nav h1").addEventListener("mouseleave", function(){
  gsap.to("#cursor", {
    scale : 1,
    backgroundColor : "#161616",
    border: 'none'
  })
 })


gsap.from(".card", {
  transform : 'translateY(30%)',
  stagger : 0.5,
  opacity : 0,
  scrollTrigger : {
    trigger : ".card",
    scroller: "body",
    start: "top 70%",
    end: "top -100%",
    // markers : true
  }
})