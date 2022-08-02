import { Button } from "@/components/Elements";
import { ChevronLeftIcon } from "@heroicons/react/outline";

export const SpaceHeader = () => {
  return (
    <>
      <div className="navbar">
        <Button size="sm" rounded="md">
          <ChevronLeftIcon className="w-8" />
        </Button>
      </div>
    </>
  );
};
