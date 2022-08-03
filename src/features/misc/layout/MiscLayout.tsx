import { Button, Card } from "@/components/Elements";
import { themeList } from "@/constants/themeList";
import { themeState } from "@/state/theme";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";

const Menu: React.FC<{
  open: boolean;
}> = ({ open }) => {
  const [currentTheme, setTheme] = useRecoilState(themeState);

  return (
    <Transition
      show={open}
      as="div"
      className="bg-primary text-primary-content fixed inset-0 z-10 flex flex-col px-4 py-24 transition-all"
      enter="transition-all duration-150 "
      enterFrom="translate-x-full rounded-bl-full rounded-tl-full"
      enterTo="translate-x-0 rounded-none"
      leave="transition-all duration-150"
      leaveFrom="translate-x-0 rounded-none"
      leaveTo="translate-x-full rounded-bl-full rounded-tl-full"
    >
      <Card className="bg-base-300 grid w-full max-w-lg grid-cols-2 gap-2 overflow-y-auto p-4 transition-all">
        <div className="sticky top-0 text-3xl font-bold">Theme</div>
        {themeList.map((theme) => (
          <div
            key={theme}
            className={clsx(
              "bg-base-100 text-base-content flex cursor-pointer rounded-lg p-2",
              currentTheme === theme && "ring-neutral ring-2"
            )}
            onClick={() => setTheme(theme)}
            data-theme={theme}
          >
            <div className="flex-1 py-1 text-sm font-bold">{theme}</div>
            <div className="flex gap-1">
              <div className="bg-info h-full w-2 rounded-lg" />
              <div className="bg-warning h-full w-2 rounded-lg" />
              <div className="bg-error h-full w-2 rounded-lg" />
            </div>
          </div>
        ))}
      </Card>
    </Transition>
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
        <Menu open={isOpen} />
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
