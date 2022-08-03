import { themeState } from "@/state/theme";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Spinner } from "../Elements";

export const DefaultLayout = () => {
  const theme = useRecoilValue(themeState);
  return (
    <div
      className="bg-base-200 text-base-content min-h-screen"
      data-theme={theme}
    >
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
