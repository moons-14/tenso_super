import { ReactNode } from "react";

export const Header: React.FC<{ name: string, onClick?: (e?: any) => void, onLeftIconClick?: (e?: any) => void, leftIcon: ReactNode }> = ({ name, onClick = () => { return void 0 }, onLeftIconClick = () => { return void 0 }, leftIcon }) => {
  return (
    <header className="bg-base-200 fixed top-0 left-0 z-20 flex h-20 w-full items-end border-b-2 p-4" onClick={onClick}>
      <div className="flex w-full items-center">
        <div className="mx-1.5 h-9 w-9 rounded-full bg-gray-300" onClick={onLeftIconClick}>
          {
            leftIcon ?
              <>{leftIcon}</>
              :
              <></>
          }
        </div>
        <div
          className="ml-1.5 mr-6 flex-1 select-none overflow-y-hidden overflow-x-scroll whitespace-nowrap py-0.5 text-center text-2xl"
        >
          {name}
        </div>
        <div className="mx-1.5 w-9"></div>
      </div>
    </header>
  );
};