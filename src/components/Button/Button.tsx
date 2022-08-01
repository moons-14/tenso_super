import clsx from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  color: "normal" | "primary" | "secondary" | "info" | "warn" | "error";
};
const buttonSizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-normal",
  lg: "px-6 py-3 text-xl",
};

const buttonColors = {
  normal: "bg-base-100 text-base-content",
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  info: "bg-info text-info-content",
  warn: "bg-warning text-warning-content",
  error: "bg-error text-error-content",
};

export const Button: React.FC<Partial<ButtonProps>> = ({
  children,
  size = "md",
  color = "normal",
}) => {
  return (
    <button
      className={clsx(
        "border-base-content rounded-full border-2 font-bold",
        buttonSizes[size],
        buttonColors[color]
      )}
    >
      {children}
    </button>
  );
};
