import { INavLinkData } from "./Navbar.interface";

export default function withData(Component) {
  const navLinks: INavLinkData[] = [
    { path: "/", label: "Inicio", active: false },
    { path: "/search-history", label: "Histórico", active: false },
  ];

  return ({ ...props }) => <Component navLinks={navLinks} {...props} />;
}
