import { themeState } from "@/state/theme";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Header } from "./Header";

export const DefaultLayout = () => {
  const theme = useRecoilValue(themeState);
  return (
    <div
      className="bg-base-200 text-base-content min-h-screen"
      data-theme={theme}
    >
      <Header />
      <div className="flex h-full flex-col items-center py-24">
        <Outlet />
      </div>
    </div>
  );
};
