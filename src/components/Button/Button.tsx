import clsx from "clsx";

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

const buttonVariants = {
  normal: "bg-base-100 text-base-content",
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  info: "bg-info text-info-content",
  warn: "bg-warning text-warning-content",
  error: "bg-error text-error-content",
};

const buttonShadows = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
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
        buttonVariants[variant],
        buttonShadows[shadow]
      )}
    >
      {children}
    </button>
  );
};
