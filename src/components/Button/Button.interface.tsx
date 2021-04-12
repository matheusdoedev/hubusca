import { ButtonHTMLAttributes } from "react";

export interface IButtonData extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  href?: string;
  buttonType?: "Button" | "Link";
}
