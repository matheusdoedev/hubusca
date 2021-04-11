import { INavLinkData } from "./Navbar.interface";

export default function withData(Component) {
  const navLinks: INavLinkData[] = [
    { path: "/", label: "Inicio" },
    { path: "/search-history", label: "Histórico" },
  ];

  return ({ ...props }) => <Component navLinks={navLinks} {...props} />;
}
