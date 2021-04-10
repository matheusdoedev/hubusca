import * as I from "./Input.styles";

import { InputData } from "./Input.interface";

const Input: React.FC<InputData> = ({
  name,
  label,
  value,
  setValue,
  info,
  ...props
}) => {
  return (
    <I.InputBlock title={label}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {label && (
          <I.InputLabel htmlFor={name} title={label}>
            {label}
          </I.InputLabel>
        )}
        {info && <I.InputInfo title={info}>{info}</I.InputInfo>}
      </div>
      <I.InputField
        id={name}
        className={info ? "error" : ""}
        name={name}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        title={label}
        {...props}
      />
    </I.InputBlock>
  );
};

export default Input;
