import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Outlet } from "react-router-dom";
import { DownloadAllButton, Header } from "../components";
import { useSpaceId } from "../hooks";
export const SpaceLayout = () => {
  const spaceId = useSpaceId();
  return (
    <>
      <Header name={spaceId} leftIcon={<ChevronLeftIcon className="m-1 h-7 w-7" />}  />

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
