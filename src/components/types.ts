import { shadows, variants } from "./styles";

export type BoxProps = {
  children: React.ReactNode;
  className: string;
  shadow: keyof typeof shadows;
  variant: keyof typeof variants;
};
