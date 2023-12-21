import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HomeCards } from "./cards/cards";

export const HomeMain = () => {
  return (
    <main className="px-20">
      <section className="flex justify-between items-center my-20">
        <div className="w-5/12 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              Аналитическая лаборатория по охране окружающей среды
            </h1>
            <p className="dark:text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              minus, cumque repellat vel eos tempore? Officiis eos reiciendis
              dignissimos ut ad dolorum obcaecati velit quos molestiae, autem
              consequatur debitis minus voluptas aliquid nobis dolorem facere
              natus. Voluptatem unde consectetur nesciunt dolor architecto
              facere sequi eum numquam? Odio, sed. Alias, voluptatem deserunt
              tenetur nam iure minus laborum ipsam mollitia rerum earum nulla!
              Amet laboriosam provident eius recusandae, fugiat, ab corporis
              iure esse hic, nam molestiae! Sequi, sapiente? Eaque debitis,
              maxime distinctio illo velit voluptatem animi non? Molestias
              temporibus quo rerum maiores a doloribus placeat. Consequatur odio
              expedita magni quas fugit totam.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Позвонить</Button>
            <a href="/contacts" className="dark:text-white/80 text-sm">
              Подробнее...
            </a>
          </div>
        </div>
        <Image
          className="brightness-75 rounded"
          width={400}
          height={400}
          src="/img/group.png"
          alt="group"
        />
      </section>
      <HomeCards />
    </main>
  );
};
