import styles from "./characterDetails.module.css";
import { createElement } from "../utils/elements.js";

export function createSuperheroDetails({
  name,
  image,
  biography,
  appearance,
  powerstats,
  work,
  connections,
}) {
  return createElement("section", {
    className: styles.main,
    children: [
      createElement("h1", { innerText: name }),
      createElement("img", { src: image.url }),
      createElement("p", {
        className: "biography",
        innerText: biography["full-name"],
      }),
      createElement("p", {
        className: "biography",
        innerText: biography["alter-egos"],
      }),
      createElement("p", {
        className: "biography",
        innerText: biography["place-of-birth"],
      }),
      createElement("p", {
        className: "biography",
        innerText: biography["first-appearance"],
      }),

      createElement("p", { innerText: appearance.gender }),
      createElement("p", { innerText: appearance.race }),
      createElement("p", { innerText: appearance["weight"] }),
      createElement("p", { innerText: appearance["eye - color"] }),
      createElement("p", { innerText: appearance["hair - color"] }),

      createElement("p", {
        innerText: "Intelligence: " + powerstats.intelligence,
      }),
      createElement("p", { innerText: "Strength: " + powerstats.strength }),
      createElement("p", { innerText: "Speed: " + powerstats.speed }),
      createElement("p", { innerText: "Durability: " + powerstats.durability }),
      createElement("p", { innerText: "Power: " + powerstats.power }),
      createElement("p", { innerText: "Combat: " + powerstats.combat }),

      createElement("p", { innerText: "Occupation: " + work.occupation }),
      createElement("p", { innerText: "Base: " + work.base }),

      createElement("p", {
        innerText: "Affiliation: " + connections["group - affiliation"],
      }),
      createElement("p", { innerText: "Relatives: " + connections.relatives }),
    ],
  });
}
