import "./style.css";

const url = "https://vildskudfestival-9579.restdb.io/rest/forestillinger";

const options = {
  headers: {
    "x-apikey": "64199fc322634c74fb00afb8",
  },
};

let data;
let forestillinger;

async function hentData() {
  const response = await fetch(url, options);
  const json = await response.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((forestilling) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".billedeurl").src =
      "billeder/" + forestilling.billedetekst + ".webp";
    klon.querySelector(".titel").textContent = forestilling.titel;
    klon.querySelector(".datoer").textContent = forestilling.datoer;
    klon.querySelector(".lokation").textContent = forestilling.lokation;
    klon.querySelector("article").addEventListener("click", () => {
      window.location.href = "singleview.html";
    });

    main.appendChild(klon);
  });
}

hentData();

const datoFilterBtn = document.getElementById("datoFilter");
const lokationFilterBtn = document.getElementById("lokationFilter");

datoFilterBtn.addEventListener("click", () => {
  // Hent input fra brugeren
  const input = prompt("Indtast dato i formatet dd/mm/yyyy");

  // Fjern tidligere filtrering
  main.innerHTML = "";

  // Filtrer forestillinger
  forestillinger
    .filter((forestilling) => {
      return forestilling.datoer.includes(input);
    })
    .forEach((forestilling) => {
      // Opret elementer for hver forestilling og vis dem i HTML
      const klon = template.cloneNode(true);
      klon.querySelector(".billedeurl").src =
        "billeder/" + forestilling.billedetekst + ".webp";
      klon.querySelector(".titel").textContent = forestilling.titel;
      klon.querySelector(".datoer").textContent = forestilling.datoer;
      klon.querySelector(".lokation").textContent = forestilling.lokation;
      klon.querySelector("article").addEventListener("click", () => {
        window.location.href = "singleview.html";
      });
      main.appendChild(klon);
    });
});

lokationFilterBtn.addEventListener("click", () => {
  // Hent input fra brugeren
  const input = prompt("Indtast lokation");

  // Fjern tidligere filtrering
  main.innerHTML = "";

  // Filtrer forestillinger
  forestillinger
    .filter((forestilling) => {
      return forestilling.lokation.toLowerCase().includes(input.toLowerCase());
    })
    .forEach((forestilling) => {
      // Opret elementer for hver forestilling og vis dem i HTML
      const klon = template.cloneNode(true);
      klon.querySelector(".billedeurl").src =
        "billeder/" + forestilling.billedetekst + ".webp";
      klon.querySelector(".titel").textContent = forestilling.titel;
      klon.querySelector(".datoer").textContent = forestilling.datoer;
      klon.querySelector(".lokation").textContent = forestilling.lokation;
      klon.querySelector("article").addEventListener("click", () => {
        window.location.href = "singleview.html";
      });
      main.appendChild(klon);
    });
});
