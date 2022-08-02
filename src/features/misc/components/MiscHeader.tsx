import { Button } from "@/components/Elements";
import { MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export const MiscHeader = () => {
  return (
    <header className="fixed top-0 w-full">
      <nav className="navbar mx-auto max-w-screen-lg justify-between gap-4 sm:px-4">
        <Link to="/" className="btn btn-ghost text-2xl normal-case">
          すーぱー転送君
        </Link>
        <Button size="sm" rounded="md" className="mr-2 block">
          <MenuIcon className="w-8" />
        </Button>
      </nav>
    </header>
  );
};
