import React, { FC } from "react";
import clsx from "clsx";

export enum buttonSize {
  MD = "px-3 py-2 text-sm shadow-sm font-semibold",
}

export enum buttonColor {
  CYAN = "bg-[#7dd3fc] hover:bg-[#3a7e9e] text-white focus-visible:outline-[#3a7e9e]",
}

export interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: buttonSize;
  color?: buttonColor;
}

const Button: FC<IProps> = ({
  size = buttonSize.MD,
  color = buttonColor.CYAN,
  type = "button",
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        size,
        color,
        otherProps.className,
      )}
      {...otherProps}
    >
      {otherProps.children}
    </button>
  );
};

export default Button;
