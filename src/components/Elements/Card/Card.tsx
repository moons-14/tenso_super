import clsx from "clsx";
import { shadows, variants } from "../styles";
import { BoxProps } from "../types";

export type CardProps = BoxProps & JSX.IntrinsicElements["div"];

export const Card: React.FC<Partial<CardProps>> = ({
  children,
  className,
  shadow = "md",
  variant = "normal",
  ...props
}) => {
  return (
    <div
      className={clsx(
        "card border-base-content border-2",
        shadows[shadow],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
