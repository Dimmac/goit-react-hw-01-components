// import Painting from './Painting';
import paintings from "../paintings.json";
import PaintingList from "../components/PaintingList";
import Section from "./Section";

export default function App() {
  // const isOnline = false;
  return (
    <div>
      <Section title="ТОП недели">
        <PaintingList items={paintings} />
      </Section>
      <Section />

      {/* {isOnline && 'Онлайн'} */}
      {/* {isOnline ? 'Онлайн' : 'ОFFFлайн'} */}
      {/* {[1, 2, 3, 4, 5].map((el) => (
        <div>{el}</div>
      ))} */}
      {/* {paintings.map((painting) => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          author={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))} */}
    </div>
  );
}
