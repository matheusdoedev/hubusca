import * as B from "./Button.styles";

import { IButtonData } from "./Button.interface";

const Button: React.FC<IButtonData> = ({ content, ...props }) => {
  return (
    <B.ButtonBlock title={content} {...props}>
      {content}
    </B.ButtonBlock>
  );
};

export default Button;
