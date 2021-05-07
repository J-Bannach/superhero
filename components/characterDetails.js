// import styles from "./characterDetails.module.css";
import { createElement } from "../utils/elements.js";

export function createSuperheroDetails({ name, image, biography, appearance }) {
  return createElement("section", {
    className: "hero-profile",
    children: [
      createElement("h1", { innerText: name }),
      createElement("img", { src: image }),
      createElement("p", { innerText: biography.full - name }),
      // createElement("p", { innerText: biography.place - of - birth }),
      createElement("p", { innerText: appearance }),
    ],
  });
}
