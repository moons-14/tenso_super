import { themeState } from "@/state/theme";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const DefaultLayout = () => {
  const theme = useRecoilValue(themeState);
  return (
    <div
      className="bg-base-200 text-base-content min-h-screen"
      data-theme={theme}
    >
      <Outlet />
    </div>
  );
};
