import {LegendInterface, LegendInterfaceKeys} from './legend.js';
import {Legends} from './legends.js';

function createLegendList(legends: LegendInterface[]) {
    const legendPlaceholder = document.querySelector('.legend-list');
    const ul = document.createElement('ul');
    legends.forEach(legend => {
        const li = document.createElement('li');
        const card = createDiv('card');
        li.appendChild(card);
        const cardContent = createDiv('card-content');
        card.appendChild(cardContent);
        const name = createDivWithContent('name', legend);
        cardContent.appendChild(name);
        const nationality = createDivWithContent('nationality', legend);
        cardContent.appendChild(nationality);
        const position = createDivWithContent('position', legend);
        cardContent.appendChild(position);
        ul.appendChild(li);
    });
    legendPlaceholder!.replaceWith(ul);
}

function createDiv(classLabel: string) {
    const element = document.createElement('div');
    element.classList.add(classLabel);
    return element;
}

function createDivWithContent(classLabel: LegendInterfaceKeys, legend: LegendInterface) {
    const element = createDiv(classLabel);
    element.textContent = legend[classLabel];
    return element;
}

createLegendList(Legends);