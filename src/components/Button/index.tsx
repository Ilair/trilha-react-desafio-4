import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} onClick={!disabled ? onClick : undefined}>{title}</ButtonContainer>
  );
};

export default Button;
