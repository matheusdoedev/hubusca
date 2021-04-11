import * as I from "./Input.styles";

import { InputData } from "./Input.interface";

export default function Input(props: InputData) {
  return (
    <I.InputBlock title={props.label}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {props.label && (
          <I.InputLabel htmlFor={props.name} title={props.label}>
            {props.label}
          </I.InputLabel>
        )}
        {props.info && (
          <I.InputInfo title={props.info}>{props.info}</I.InputInfo>
        )}
      </div>
      <I.InputField
        id={props.name}
        className={props.info ? "error" : ""}
        name={props.name}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.setValue(e.target.value)
        }
        title={props.label}
        {...props}
      />
    </I.InputBlock>
  );
}
