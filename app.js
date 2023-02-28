const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobileList = document.querySelectorAll('.mobile-list')

menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    
});
mobileList.forEach((btn)=>{

    btn.addEventListener('click',function(){
        if(mobile_menu.classList.contains("is-active")){
            mobile_menu.classList.remove('is-active')
            menu_btn.classList.toggle('is-active')
        }else{
            
        }
    })
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);