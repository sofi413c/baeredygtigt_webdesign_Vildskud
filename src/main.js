import "./style.css";

const menu = document.querySelector("#hammenu");
const menuItem = document.querySelector(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  console.log("not");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    console.log("yes");
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


//SINGLEVIEW TOGGLE BTN//

const singleview = document.querySelector("#singleview");
const beskrivelse = document.querySelector(".beskrivelse");
const toggle_btn = document.querySelector(".toggle_btn");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

function toggle_knap() {
  console.log("not");
  if (singleview.classList.contains("dropdown")) {
    singleview.classList.remove("dropdown");
    close.style.display = "none";
    open.style.display = "block";
  } else {
    console.log("yes");
    singleview.classList.add("dropdown");
    close.style.display = "block";
    open.style.display = "none";
  }
}

toggle_btn.addEventListener("click", toggle_knap);


