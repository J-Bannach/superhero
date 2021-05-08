import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { createSuperhero } from "./components/character";
import { getSuperheroes } from "./utils/api";
import { debounce } from "./utils/timer";

const superheroSection = createElement("section", {
  className: "search-results",
});

getSuperheroes().then((characters) => {
  const characterElements = characters.map(createSuperhero);
  superheroSection.append(...characterElements);
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", { innerText: "Find Your Superhero" }),
        createElement("input", {
          className: "input",
          placeholder: "Enter superhero here",
          autofocus: true,
          oninput: debounce((event) => {
            removeAllChildren(superheroSection);

            const search = event.target.value;
            getSuperheroes(search).then((superheroes) => {
              console.log(superheroes);
              const superheroElements = superheroes.map(createSuperhero);
              superheroSection.append(...superheroElements);
            });
          }, 300),
        }),
      ],
    }),
    superheroSection,

    createElement("footer", {
      className: "footer",
      innerText: "All superheroes in one place!",
    }),
  ],
});

fetch(
  `https://cors.machens.koeln/https://superheroapi.com/api/10157586572816260/1`
)
  .then((response) => response.json())
  .then((data) => console.log(data));

document.querySelector("#app").append(mainElement);
