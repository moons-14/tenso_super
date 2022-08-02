import { Button } from "@/components/Elements";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <nav className="navbar mx-auto max-w-screen-lg justify-between gap-4 sm:px-4">
        <Link to="/">
          <Button size="sm" rounded="md">
            <ChevronLeftIcon className="w-8" />
          </Button>
        </Link>
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
