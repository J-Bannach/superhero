import styles from "./details.module.css";
import "./style.css";
import { createElement } from "./utils/elements";
import { getSuperheroes } from "./utils/api";
import { createSuperheroDetails } from "./components/characterDetails";

const params = new URLSearchParams(location.search);
const superheroId = params.get("id");

getSuperheroes(superheroId).then((response) => {
  const superheroDetailsElement = createSuperheroDetails(response);
  mainElement.append(superheroDetailsElement);
});

const mainElement = createElement("main", {
  className: styles.main,
  innerText: "Here are all the details you were looking for:",
});

document.querySelector("#app").append(mainElement);
