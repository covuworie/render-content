export interface LegendInterface {
  name: string;
  nationality: string;
  position: string;
}

export type LegendInterfaceKeys = keyof LegendInterface;

export class Legend implements LegendInterface {
  constructor(
    public name: string,
    public nationality: string,
    public position: string
  ) {}
}
