export type Option = {
  id: string;
  label: string;
  description: string;
  price: number;
};
export interface CoffeeOption {
  id: string;
  label: string;
  title: string;
  options: Option[];
}

const coffeeOptions: CoffeeOption[] = [
  {
    id: "01",
    label: "Preferences",
    title: "How do you drink your coffee?",
    options: [
      {
        id: "11",
        label: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
        price: 2,
      },
      {
        id: "12",
        label: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
        price: 4,
      },
      {
        id: "13",
        label: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
        price: 6,
      },
    ],
  },
  {
    id: "02",
    label: "Bean Type",
    title: "What type of coffee?",
    options: [
      {
        id: "21",
        label: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
        price: 0,
      },
      {
        id: "22",
        label: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
        price: 2,
      },
      {
        id: "23",
        label: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
        price: 6,
      },
    ],
  },
  {
    id: "03",
    label: "Quantity",
    title: "How much would you like?",
    options: [
      {
        id: "31",
        label: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
        price: 2,
      },
      {
        id: "32",
        label: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
        price: 4,
      },
      {
        id: "33",
        label: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
        price: 6,
      },
    ],
  },
  {
    id: "04",
    label: "Grind Option",
    title: "Want us to grind them?",
    options: [
      {
        id: "41",
        label: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
        price: 0,
      },
      {
        id: "42",
        label: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
        price: 3,
      },
      {
        id: "43",
        label: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
        price: 5,
      },
    ],
  },
  {
    id: "05",
    label: "Deliveries",
    title: "How often should we deliver?",
    options: [
      {
        id: "51",
        label: "Every week",
        description: "$7 per shipment. Includes free first-class shipping.",
        price: 7,
      },
      {
        id: "52",
        label: "Every 2 weeks",
        description: "$9 per shipment. Includes free priority shipping.",
        price: 9,
      },
      {
        id: "53",
        label: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
        price: 12,
      },
    ],
  },
];
export default coffeeOptions;
