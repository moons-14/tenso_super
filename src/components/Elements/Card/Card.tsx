import clsx from "clsx";
import { shadows, variants } from "../styles";
import { BoxProps } from "../types";

export type CardProps = BoxProps;

export const Card: React.FC<CardProps> = ({
  children,
  className,
  shadow = "md",
  variant = "normal",
}) => {
  return (
    <div
      className={clsx(
        "card border-base-content border-2",
        shadows[shadow],
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
