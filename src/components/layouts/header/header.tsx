import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./header.data";

export const HeaderLayout = () => {
  return (
    <header className="px-20 py-6 border-b flex justify-between items-center">
      <Image src="/logo.svg" alt="logo" width={44} height={44} />
      <nav className="flex gap-14">
        {NavLinks.map((links) => (
          <Link
            key={links.href}
            className="relative cursor-pointer hover:after:w-full after:content after:bg-primary after:h-[3px] after:w-[0%] after:duration-500 after:absolute after:left-0 after:-bottom-[5px] after:rounded-xl"
            href={links.href}
          >
            {links.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col">
          <a href="tel:+77122459361">+7 (712) 245 93 61</a>
          <a href="https://go.2gis.com/luwwr" target="_blank">
            Южн Промзона, стр.22
          </a>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};
