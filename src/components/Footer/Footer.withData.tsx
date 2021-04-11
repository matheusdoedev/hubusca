import { IFooterNavData } from "./Footer.interface";

export default function withData(Component) {
  const navLinks: IFooterNavData[] = [
    { path: "/", label: "Inicio" },
    { path: "/search-history", label: "Histórico" },
  ];

  return ({ ...props }) => <Component navLinks={navLinks} {...props} />;
}
