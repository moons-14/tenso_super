import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

export const ErrorFallBack = () => {
  const theme = useRecoilValue(themeState);
  return (
    <div
      className="bg-base-200 flex min-h-screen items-center justify-center"
      data-theme={theme}
    >
      <h2>Some Error Happen!!!</h2>
    </div>
  );
};

export const LoadingFallBack = () => {
  const theme = useRecoilValue(themeState);
  return (
    <div
      className="bg-base-200 flex min-h-screen items-center justify-center"
      data-theme={theme}
    >
      <div>Loading....</div>
    </div>
  );
};
