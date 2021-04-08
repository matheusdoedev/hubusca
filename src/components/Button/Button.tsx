import * as B from "./Button.styles";

import { IButtonData } from "./Button.interface";

const Button: React.FC<IButtonData> = ({ content }) => {
  return <B.ButtonBlock title={content}>{content}</B.ButtonBlock>;
};

export default Button;
