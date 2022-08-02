import clsx from "clsx";
import { shadows, variants } from "../styles";
import { BoxProps } from "../types";

export type InputProps = BoxProps & JSX.IntrinsicElements["input"];

export const Input: React.FC<Partial<InputProps>> = ({
  className,
  shadow = "sm",
  variant = "normal",
  ...props
}) => {
  return (
    <input
      className={clsx(
        "border-base-content rounded-full border-2 px-2 outline-none",
        shadows[shadow],
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
