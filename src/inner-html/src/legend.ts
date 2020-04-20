export interface LegendInterface {
    name: string;
    nationality: string;
    position: string;
}

export class Legend implements LegendInterface {
    constructor(public name: string, public nationality: string, public position: string) {

    }
}