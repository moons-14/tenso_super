import { Header } from "../../../features/space/components";

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
      <Header name={name} fontSize="2xl" />
      <img src={url} className="h-[50%] max-w-full object-contain" onClick={handleImageClick} />
    </div>
  );
};
