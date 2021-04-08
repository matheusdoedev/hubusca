import { InputHTMLAttributes } from "react";

export interface InputData extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  setValue?: any;
  info?: string;
}
