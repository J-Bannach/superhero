import styles from "./characterDetails.module.css";
import { createElement } from "../utils/elements.js";

export function createSuperheroDetails({ name, image, biography, appearance }) {
  return createElement("section", {
    className: styles.superheroProfile,
    children: [
      createElement("h1", { innerText: name }),
      createElement("img", { src: image }),
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

      createElement("p", { innerText: appearance }),
    ],
  });
}
