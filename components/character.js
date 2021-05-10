import "./character.css";
import { createElement } from "../utils/elements.js";

export function createSuperhero({ name, image, biography, appearance }) {
  return createElement("section", {
    className: "hero-details",
    children: [
      createElement("a", {
        href: `/details.html?name=${name}`,
        children: [createElement("h1", { innerText: name })],
      }),
      createElement("a", {
        href: `/details.html?name=${name}`,
        children: [createElement("img", { src: image.url })],
      }),
      createElement("p", { innerText: biography["full-name"] }),
      createElement("p", { innerText: appearance.race }),
    ],
  });
}
