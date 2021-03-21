export interface Starship {
  name: string;
  enableHyperjump: boolean;
}

export type AddStarship = Required<Starship>;
export const addStarship = (starship: AddStarship) => {};
addStarship({ name: "Powerman 5000", enableHyperjump: true });

export type UpdateStarship = Partial<Starship>;
export const updateStarship = (id: number, starship: UpdateStarship) => {};
updateStarship(1, { name: "Explorer" });

export type ReadStarship = Readonly<Starship>;
export const readStarship = (id: number): ReadStarship => {
  return { name: "Powerman 5000", enableHyperjump: true };
};
const starship: Array<Record<string, ReadStarship>> = [
  {
    explorer: readStarship(1),
  },
];
console.log("🚀 ~ file: utility-type.tsx ~ line 18 ~ starship", starship);

export type StarshipNameOnly = Pick<Starship, "name">;
export type StarshipWithoutName = Omit<Starship, "name">;

type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";
let JohnsDrink: AvailableDrinks;
JohnsDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JanesDrink = "Tea";

type DrinksJamesLike = "Tea" | "Lemonade" | "Mohito";
let JamesDrink: Extract<AvailableDrinks, DrinksJamesLike>;
JamesDrink = "Lemonade";
