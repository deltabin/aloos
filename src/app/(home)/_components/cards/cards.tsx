import { CardsData } from "./cards.data";

// background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
// url("/vosm.png");

export const HomeCards = () => {
  return (
    <section className="flex justify-between">
      {CardsData.map((value, id) => (
        <div
          key={id}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${value.image})`,
          }}
          className="w-[250px] h-[400px] bg-no-repeat bg-cover text-white flex justify-center items-center rounded hover:scale-105 transition delay-100"
        >
          {value.name}
        </div>
      ))}
    </section>
  );
};
