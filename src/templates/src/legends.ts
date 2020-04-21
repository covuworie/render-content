import { Legend } from "./legend.js";

const pele = new Legend("Pelé", "Brazil", "Deep-lying forward");
const maradona = new Legend(
  "Diego Maradona",
  "Argentina",
  "Attacking midfielder"
);
const beckenbauer = new Legend("Franz Beckenbauer", "Germany", "Libero");
const yashin = new Legend("Lev Yashin", "Goalkeeper", "Soviet Union");
const charlton = new Legend(
  "Bobby Charlton",
  "Attacking midfielder",
  "England"
);
const eusebio = new Legend("Eusebio", "Advanced forward", "Portugal");
const zidane = new Legend("Zinedine Zidane", "France", "Attacking midfielder");
const ronaldo = new Legend("Ronaldo", "Brazil", "Complete forward");
const cruyff = new Legend("Johan Cruyff", "Netherlands", "Total Footballer");
const moore = new Legend("Bobby Moore", "England", "Center Back");
const best = new Legend("George Best", "Northern Ireland", "Winger");
const garrincha = new Legend("Garrincha", "Brazil", "Winger");
const rijkaard = new Legend(
  "Frank Rijkaard",
  "Netherlands",
  "Defensive Midfielder"
);
const matthaeus = new Legend(
  "Lothar Matthaeus",
  "Germany",
  "Box-to-box midfielder"
);
const carlos = new Legend("Roberto Carlos", "Brazil", "Attacking wing-back");
const cafu = new Legend("Cafu", "Brazil", "Complete full-back");
const banks = new Legend("Gordon Banks", "England", "Goalkeeper");
const messi = new Legend("Lionel Messi", "Argentina", "Forward");
const cristiano = new Legend("Cristiano Ronaldo", "Portugal", "Inside Forward");
const muller = new Legend("Gerd Muller", "Germany", "Poacher");
const baresi = new Legend("Franco Baresi", "Italy", "Sweeper");
const maldini = new Legend("Paulo Maldini", "Italy", "Defender");

export let Legends = [
  pele,
  maradona,
  beckenbauer,
  yashin,
  charlton,
  eusebio,
  zidane,
  ronaldo,
  cruyff,
  moore,
  best,
  garrincha,
  rijkaard,
  matthaeus,
  carlos,
  cafu,
  banks,
  messi,
  cristiano,
  muller,
  baresi,
  maldini,
];
Legends = Legends.sort(() => Math.random() - Math.random()).slice(0, 4);
