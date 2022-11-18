import { Button } from "@/components/Elements";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const Header: React.FC<{ name: string, fontSize?: "3xl" | "2xl" }> = ({ name, fontSize = "2xl" }) => {
  return (
    <header className="bg-base-200 fixed top-0 z-20 w-full border-b-2">
      <nav className="navbar mx-auto max-w-screen-lg justify-between gap-4 sm:px-4">
        <Link to="/" className="flex-1">
          <Button size="sm" rounded="md">
            <ChevronLeftIcon className="w-8" />
          </Button>
        </Link>
        <div className="flex-1 justify-center">
          <h1 className={clsx(fontSize == "3xl" ? "text-3xl" : fontSize == "2xl" ? "2xl" : "")}>{name}</h1>
        </div>
        <div className="flex-1" />
      </nav>
    </header>
  );
};