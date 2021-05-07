import "./character.css";
import { createElement } from "../utils/elements.js";

export function createSuperhero({ name, image, biography, appearance }) {
  return createElement("section", {
    className: "hero-details",
    children: [
      createElement("h1", { innerText: name }),
      createElement("img", { src: image }),
      createElement("p", { innerText: biography }),
      createElement("p", { innerText: appearance }),
    ],
  });
}
