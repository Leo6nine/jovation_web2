// const navbar = document.querySelector('.navbar');
// window.onscroll = () => {
//     if (window.scrollY > 300) {
//         navbar.classList.add('nav-active');
//     } else {
//         navbar.classList.remove('nav-active');
//     }
// };

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const mobileList = document.querySelectorAll(".mobile-list");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
mobileList.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (mobile_menu.classList.contains("is-active")) {
      mobile_menu.classList.remove("is-active");
      menu_btn.classList.toggle("is-active");
    } else {
    }
  });
});

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  let slideLeft = document.querySelectorAll(".slideLeft");
  let slideRight = document.querySelectorAll(".slideRight");

  // for (let i = 0; i < reveals.length; i++) {
  //   let windowHeight = window.innerHeight;
  //   let elementTop = reveals[i].getBoundingClientRect().top;
  //   let elementVisible = 150;

  //   if (elementTop <= windowHeight - elementVisible) {
  //     reveals[i].classList.add("active");
  //   } else {
  //     reveals[i].classList.remove("active");
  //   }
  // }

  for (let i = 0; i < slideLeft.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideLeft[i].getBoundingClientRect().top;
    let elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      slideLeft[i].classList.add("active");
    } else {
      slideLeft[i].classList.remove("active");
    }
  }

  for (let i = 0; i < slideRight.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideRight[i].getBoundingClientRect().top;
    let elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      slideRight[i].classList.add("active");
    } else {
      slideRight[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

(function () {
  const pictures = ["1", "2", "3", "4"];

  const buttons = document.querySelectorAll(".slide");
  const imgSlide = document.querySelector(".corner-img");

  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("slide-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        imgSlide.style.background = `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url('./img/${pictures[counter]}.jpg')`;
      }
      if (button.classList.contains("slide-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        imgSlide.style.background = `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url('./img/${pictures[counter]}.jpg')`;
      }
    });
  });
})();

let images = ["1", "2", "3", "4"];

let img = document.querySelector(".corner-img");
let index = 0;
let iterations = 0;

let updateImage = function () {
  /* reset index to zero if current index is greater than number of images.
   * increment iterations variable since it means we've done one whole loop.
   */
  if (index >= images.length) {
    index = 1;
  }

  // set the background image
  img.style.background = `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url('./img/${images[index]}.jpg')`;

  index++;
};

// update first image
updateImage();

// initiate timer
let interval = setInterval(updateImage, 5000);

function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length < 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 10) {
    text = "Please Enter More Than 10 Characters";
    error_message.innerHTML = text;
    return false;
  }
  return true;
}