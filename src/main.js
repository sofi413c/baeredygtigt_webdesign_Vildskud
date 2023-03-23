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

const open2 = document.querySelector(".open2");
const close2 = document.querySelector(".close2");
const singleview2 = document.querySelector("#singleview2");
const tid_sted = document.querySelector(".tid_sted");
const toggle_btn2 = document.querySelector(".toggle_btn2");


const close3 = document.querySelector(".close3");
const open3 = document.querySelector(".open3");
const singleview3 = document.querySelector("#singleview3");
const toggle_btn3 = document.querySelector(".toggle_btn3");
const medvirkende = document.querySelector(".medvirkende");

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
function toggle_knap2() {
  if (singleview2.classList.contains("dropdown")) {
    singleview2.classList.remove("dropdown");
    close2.style.display = "none";
    open2.style.display = "block";
  } else {
    console.log("yes");
    singleview2.classList.add("dropdown");
    close2.style.display = "block";
    open2.style.display = "none";
  }
}
function toggle_knap3() {
  if (singleview3.classList.contains("dropdown")) {
    singleview3.classList.remove("dropdown");
    close3.style.display = "none";
    open3.style.display = "block";
  } else {
    console.log("yes");
    singleview3.classList.add("dropdown");
    close3.style.display = "block";
    open3.style.display = "none";
  }
}

toggle_btn.addEventListener("click", toggle_knap);
toggle_btn2.addEventListener("click", toggle_knap2);
toggle_btn3.addEventListener("click", toggle_knap3);
