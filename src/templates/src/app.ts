import { LegendInterface } from "./legend.js";
import { Legends } from "./legends.js";

function createLegendList(legends: LegendInterface[]) {
  const ul = document.createElement("ul");
  const template = document.querySelector(
    "#legend-template"
  ) as HTMLTemplateElement;
  legends.forEach((legend) => {
    const legendCard = document.importNode(template.content, true);
    legendCard.querySelector(".name")!.textContent = legend.name;
    legendCard.querySelector(".nationality")!.textContent = legend.nationality;
    legendCard.querySelector(".position")!.textContent = legend.position;
    ul.appendChild(legendCard);
  });
  const legendPlaceholder = document.querySelector(".legend-list");
  legendPlaceholder!.replaceWith(ul);
}

createLegendList(Legends);
