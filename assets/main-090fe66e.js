(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function q(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=q(e);fetch(e.href,o)}})();const s=document.querySelector("#hammenu");document.querySelector(".menuItem");const L=document.querySelector(".hamburger"),d=document.querySelector(".closeIcon"),u=document.querySelector(".menuIcon");function S(){console.log("not"),s.classList.contains("showMenu")?(s.classList.remove("showMenu"),d.style.display="none",u.style.display="block"):(console.log("yes"),s.classList.add("showMenu"),d.style.display="block",u.style.display="none")}L.addEventListener("click",S);const l=document.querySelector("#singleview");document.querySelector(".beskrivelse");const b=document.querySelector(".toggle_btn"),y=document.querySelector(".open"),a=document.querySelector(".close"),m=document.querySelector(".open2"),p=document.querySelector(".close2"),c=document.querySelector("#singleview2");document.querySelector(".tid_sted");const w=document.querySelector(".toggle_btn2"),g=document.querySelector(".close3"),f=document.querySelector(".open3"),r=document.querySelector("#singleview3"),v=document.querySelector(".toggle_btn3");document.querySelector(".medvirkende");function k(){console.log("not"),l.classList.contains("dropdown")?(l.classList.remove("dropdown"),a.style.display="none",y.style.display="block"):(console.log("yes"),l.classList.add("dropdown"),a.style.display="block",y.style.display="none")}function h(){c.classList.contains("dropdown")?(c.classList.remove("dropdown"),p.style.display="none",m.style.display="block"):(console.log("yes"),c.classList.add("dropdown"),p.style.display="block",m.style.display="none")}function _(){r.classList.contains("dropdown")?(r.classList.remove("dropdown"),g.style.display="none",f.style.display="block"):(console.log("yes"),r.classList.add("dropdown"),g.style.display="block",f.style.display="none")}b.addEventListener("click",k);w.addEventListener("click",h);v.addEventListener("click",_);
