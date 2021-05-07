import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { createSuperhero } from "./components/character";
import { getCharacters } from "./utils/api";
import { debounce } from "./utils/timer";

const superheroSection = createElement("section", {
  className: "search-results",
});

// getCharacters().then((characters) => {
//   const characterElements = characters.map(createCharacter);
//   characterSection.append(...characterElements);
// });

const mainElement = createElement("main", {
  className: "main-page",
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", { innerText: "Your Superhero API" }),
        createElement("input", {
          className: "input",
          placeholder: "Enter superhero here",
          autofocus: true,
          oninput: debounce((event) => {
            removeAllChildren(superheroSection);

            const search = event.target.value;
            getCharacters(search).then((superheroes) => {
              const superheroElements = superheroes.map(createSuperhero);
              superheroSection.append(...superheroElements);
            });
          }, 300),
        }),
      ],
    }),
    superheroSection,
    // createElement("section", {
    //   className: "search-results",
    // }),
    createElement("footer", {
      innerText: "All superheroes in one place!",
    }),
  ],
});

document.querySelector("#app").append(mainElement);
