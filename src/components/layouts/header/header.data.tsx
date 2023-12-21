interface INavLinks {
  name: string;
  href: string;
}

export const NavLinks: INavLinks[] = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
  {
    name: "Альбом",
    href: "/album",
  },
  {
    name: "Помощь",
    href: "/support",
  },
];
