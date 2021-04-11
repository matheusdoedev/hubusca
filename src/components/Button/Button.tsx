import * as B from "./Button.styles";

import { IButtonData } from "./Button.interface";

export default function Button(props: IButtonData) {
  return (
    <B.ButtonBlock title={props.content} {...props}>
      {props.content}
    </B.ButtonBlock>
  );
}
