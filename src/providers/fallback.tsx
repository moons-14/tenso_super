import { Spinner } from "@/components/Elements";
import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

export const ErrorFallBack = (e: any) => {
  console.log(e)
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
      <Spinner />
    </div>
  );
};
