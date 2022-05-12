const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
}); 
window.onscroll = function() {
    scrollfunction();

}

function scrollfunction(){
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
         document.getElementById('navbar').style.padding = "10px 0px";
         document.getElementById('logo').style.fontSize = "25px";

      }else{
        document.getElementById('navbar').style.padding = "25px 0px";
        document.getElementById('logo').style.fontSize = "35px";
      }

}
const swiper = new swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disabeleOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });


