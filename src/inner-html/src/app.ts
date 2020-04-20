import {LegendInterface} from './legend.js';
import {Legends} from './legends.js';

function createLegendList(legends: LegendInterface[]) {
    const rows = legends.map(legend => {
        return `<li>
            <div class="card">
                <div class="card-content">
                    <div class="name">${legend.name}</div>
                    <div class="country">${legend.nationality}</div>
                    <div class="position">${legend.position}</div>
                </div>
            </div>
        </li>`          
    });
    const html = `<ul>${rows.join('')}</ul>`;
    const legendPlaceholder = document.querySelector('.legend-list') as HTMLDivElement;
    legendPlaceholder.innerHTML = html;
}

createLegendList(Legends);