import { colors } from "../settings/colors";

export const hover = {
  button: `
    transition: 0.3s;

    &:hover {
      background: ${colors.support};
      transition: 0.3s;
    } 
    `,

  card: `
    transition: 0.3s;

    &:hover {
      border: 1px solid ${colors.primary};
      cursor: pointer;
      transition: 0.3s;
    }
    `,

  link: `
    transition: 0.3s;

    &:hover {
      color: ${colors.primary};
      transition: 0.3s;
    }
  `,
};
