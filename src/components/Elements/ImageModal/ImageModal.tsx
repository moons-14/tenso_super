import clsx from "clsx";

export const ImageModal: React.FC<{
  url: string;
  open: boolean;
  onChange: (isOpen: boolean) => void;
}> = ({ url, open, onChange }) => {
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const handleOutsideClick = () => {
    onChange(false);
  };
  return (
    <div
      className={clsx("modal", open && "modal-open")}
      onClick={handleOutsideClick}
    >
      <img src={url} className="modal-box p-0" onClick={handleImageClick} />
    </div>
  );
};
