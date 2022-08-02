import { Button } from "@/components/Elements";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <nav className="navbar mx-auto max-w-screen-lg justify-between gap-4 sm:px-4">
        <Button size="sm" rounded="md">
          <ChevronLeftIcon className="w-8" />
        </Button>
      </nav>
    </header>
  );
};

export const SpaceLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
};
