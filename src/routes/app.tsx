import { lazyImport } from "@/utils";
import { Route, Routes } from "react-router-dom";

const { DefaultLayout } = lazyImport(
  () => import("@/components/Layout"),
  "DefaultLayout"
);
const { MiscLayout } = lazyImport(
  () => import("@/features/misc"),
  "MiscLayout"
);
const { SpaceLayout } = lazyImport(
  () => import("@/features/space"),
  "SpaceLayout"
);

const { Home } = lazyImport(() => import("@/features/misc"), "Home");
const { Space } = lazyImport(() => import("@/features/space"), "Space");

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<MiscLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="space" element={<SpaceLayout />}>
          <Route path=":id" element={<Space />} />
        </Route>
      </Route>
    </Routes>
  );
};
