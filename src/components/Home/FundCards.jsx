import FundCard from "./FundCard";
import {
  funds_1,
  funds_2,
  funds_3,
  funds_4,
  funds_5,
  funds_6,
  funds_7,
  funds_8,
} from "../../assets/home";

const cards = [
  {
    id: 1,
    price: "234,378,123",
    date: "14.05.24",
    topic: "Botting - Long weekends and living the boat life.",
    image: funds_1,
    circleText: "Discover your match",
  },
  {
    id: 2,
    price: "103,000",
    date: "14.05.24",
    topic:
      "Camping - Welcome to the camp, Camp is my second home ",
    image: funds_2,
    circleText: "LOGIN TO MATCH",
  },
  {
    id: 3,
    price: "25,000,000",
    date: "14.05.24",
    topic:
      "Hills - It is easier to go down a hill than up, but the view is from the top",
    image: funds_3,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  },
  {
    id: 4,
    price: "3,120,000",
    date: "14.05.24",
    topic: "Program life us expanding its offers for call for proposals",
    image: funds_4,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  },
  {
    id: 5,
    price: "234,378,123",
    date: "14.05.24",
    topic: "Tracking - Trekking means a traveling experience with a thrilling excitemen",
    image: funds_5,
    circleText: "85% match",
  },
  {
    id: 6,
    price: "103,000",
    date: "14.05.24",
    topic: "Rivers -  Take me to the river, drop me in the water",
    image: funds_6,
    circleText: "95% match",
  },
  {
    id: 7,
    price: "25,000,000",
    date: "14.05.24",
    topic:
      "Nature - Everything in nature invites us constantly to be what we are.",
    image: funds_7,
    circleText: "91% match",
  },
  {
    id: 8,
    price: "3,120,000",
    date: "14.05.24",
    topic: "Kashmir - The true beauty of Kashmir lies in the simplicity of its people.",
    image: funds_8,
    circleText: "90% match",
  },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <FundCard key={card.id} card={card} />
      ))}
    </article>
  );
}
