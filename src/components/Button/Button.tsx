import clsx from "clsx";
import { shadows, variants } from "../styles";

export type ButtonProps = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  shadow: "none" | "sm" | "md" | "lg";
  variant: "normal" | "primary" | "secondary" | "info" | "warn" | "error";
};
const buttonSizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-normal",
  lg: "px-6 py-3 text-xl",
};

export const Button: React.FC<Partial<ButtonProps>> = ({
  children,
  shadow = "sm",
  size = "md",
  variant = "normal",
}) => {
  return (
    <button
      className={clsx(
        "border-base-content rounded-full border-2 font-bold active:shadow-none",
        buttonSizes[size],
        variants[variant],
        shadows[shadow]
      )}
    >
      {children}
    </button>
  );
};
