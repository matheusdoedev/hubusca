import { IFooterNavData } from "./Footer.interface";

export default function withData(Component) {
  const navLinks: IFooterNavData[] = [
    { path: "/", label: "Inicio", active: false },
    { path: "/search-history", label: "Histórico", active: false },
  ];

  return ({ ...props }) => <Component navLinks={navLinks} {...props} />;
}
