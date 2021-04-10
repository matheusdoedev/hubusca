import { InputHTMLAttributes, Dispatch, SetStateAction } from "react";

export interface InputData extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  info?: string;
}
