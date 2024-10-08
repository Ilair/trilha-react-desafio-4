import { ReactNode } from "react";

export interface IButtonProps {
    title: ReactNode;
    disabled: boolean;
    onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
}