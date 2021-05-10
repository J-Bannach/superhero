import styles from "./details.module.css";
import "./style.css";
import { createElement } from "./utils/elements";
import { getSuperheroes } from "./utils/api";
import { createSuperheroDetails } from "./components/characterDetails";

const params = new URLSearchParams(location.search);
const superheroId = params.get("name");

getSuperheroes(superheroId).then((response) => {
  const superheroDetailsElement = createSuperheroDetails(response[0]);
  mainElement.append(superheroDetailsElement);
});

const mainElement = createElement("main", {
  className: styles.main,
  innerText: "Here is the information you were looking for:",
});

document.querySelector("#app").append(mainElement);
