import "./style.css";

const url = "https://vildskudfestival-9579.restdb.io/rest/forestillinger";

const options = {
  headers: {
    "x-apikey": "64199fc322634c74fb00afb8",
  },
};

let data;
let forestillinger;
let filter = "alle";

/* Variabel "filterknapper" med værdien af alle punkter fra navigationen. Tilføjet klik element 
på alle knapper. Når der klikkes på kanppen hentes data. */
const filterKnapper = document.querySelectorAll(".nav2 li");
filterKnapper.forEach((knap) =>
  knap.addEventListener("click", filtrerKategorier)
);
hentData();

/* Funktionen "filterKategorier" gør at dataen bliver filtreret når der klikkes på en bestemt
kategori. */
function filtrerKategorier() {
  filter = this.dataset.type;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  vis(data);
  overskrift.textContent = this.textContent;
}

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
    if (filter == forestilling.datoer || filter == "alle") {
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
    }
  });
}

hentData();
