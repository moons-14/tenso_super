import { Button } from "@/components/Elements";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Menu: React.FC<{
  open: boolean;
  onChange: (isOpen: boolean) => void;
}> = ({ open, onChange }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Transition
      show={open}
      as="div"
      className="bg-primary text-primary-content fixed inset-0 z-10 flex flex-col px-4 py-2"
      enter="transition-all duration-150 "
      enterFrom="translate-x-full rounded-bl-full rounded-tl-full"
      enterTo="translate-x-0 rounded-none"
      leave="transition-all duration-150"
      leaveFrom="translate-x-0 rounded-none"
      leaveTo="translate-x-full rounded-bl-full rounded-tl-full"
    ></Transition>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full">
      <nav className="navbar mx-auto max-w-screen-lg justify-between gap-4 sm:px-4">
        <Link to="/" className="btn btn-ghost text-2xl normal-case">
          すーぱー転送君
        </Link>
        <Menu open={isOpen} onChange={setIsOpen} />
        <Button
          size="sm"
          rounded="md"
          className="z-20 mr-2 block"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon className="w-8" /> : <MenuIcon className="w-8" />}
        </Button>
      </nav>
    </header>
  );
};

export const MiscLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center pt-24">
        <Outlet />
      </div>
    </>
  );
};
