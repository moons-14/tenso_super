import { Button } from "@/components/Elements";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Link, Outlet } from "react-router-dom";
import { DownloadAllButton } from "../components";
import { useSpaceId } from "../hooks";

const Header = () => {
  const spaceId = useSpaceId();
  return (
    <header className="fixed top-0 z-20 w-full">
      <nav className="navbar mx-auto max-w-screen-lg justify-between gap-4 sm:px-4">
        <Link to="/" className="flex-1">
          <Button size="sm" rounded="md">
            <ChevronLeftIcon className="w-8" />
          </Button>
        </Link>
        <div className="flex-1 justify-center">
          <h1 className="text-3xl font-bold">{spaceId}</h1>
        </div>
        <div className="flex-1" />
      </nav>
    </header>
  );
};

export const SpaceLayout = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto max-w-xl px-2 pt-24">
        <Outlet />
      </div>

      <div className="fixed bottom-0 z-20 flex w-full justify-center">
        <div className="flex w-full max-w-screen-lg justify-start p-4">
          <DownloadAllButton />
        </div>
      </div>
    </>
  );
};
