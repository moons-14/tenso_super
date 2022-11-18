import { Header } from "../../../features/space/components";


import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";

export const ImageModal: React.FC<{
  url: string;
  name: string;
  open: boolean;
  onChange: (isOpen: boolean) => void;
}> = ({ url, open, name, onChange }) => {
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const handleOutsideClick = () => {
    onChange(false);
  };
  return (
    <div
      className={clsx("modal h-full w-full", open && "modal-open", "z-40 block justify-start")}
      onClick={handleOutsideClick}
    >
      <Header name={name} onClick={handleImageClick} onLeftIconClick={handleOutsideClick} leftIcon={<XIcon className="m-1 h-7 w-7" />} />
      <div className="bg-base-300 h-full w-full pt-20" onClick={handleImageClick}>
        <img src={url} className="mx-auto my-0.5 max-h-[50%] max-w-full object-contain text-center" onClick={handleImageClick} />
        <div className="border-base-content border-t-1">aaaa</div>
      </div>
    </div>
  );
};
