const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const buttonTop = document.querySelector(".back-top");

window.addEventListener("scroll", function () {
  buttonTop.classList.toggle("stick", window.scrollY > 900);
});

const sectionAll = document.querySelectorAll("section");
const activeId = document.querySelectorAll(".navbar li");

window.addEventListener("scroll", () => {
  let current = "";
  sectionAll.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  activeId.forEach((li) => {
    li.classList.remove("light");
    if (li.classList.contains(current)) {
      li.classList.add("light");
    }
  });
});

// for multiple page main active nav

// const activeId = document.querySelector(".navbar").querySelectorAll("a");
// console.log(activeId);

// activeId.forEach((element) => {
//   element.addEventListener("click", function () {
//     activeId.forEach((nav) => nav.classList.remove("light"));

//     this.classList.add("light");
//   });
// });
