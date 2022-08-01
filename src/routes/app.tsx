import { DefaultLayout } from "@/components/Layout";
import { lazyImport } from "@/utils";
import { Route, Routes } from "react-router-dom";

const { Home } = lazyImport(() => import("@/features/misc"), "Home");

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
