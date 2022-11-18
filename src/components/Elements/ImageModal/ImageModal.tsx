import { Header } from "../../../features/space/components";


import { isShowImageDetails } from "@/state/space/atom";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { memo } from "react";
import { useRecoilState } from "recoil";

export const ImageModal: React.FC<{
  url: string;
  name: string;
  open: boolean;
  onChange: (isOpen: boolean) => void;
  // eslint-disable-next-line react/display-name
}> = memo(({ url, open, name, onChange }) => {
  const [isShowDetails, setIsShowDetails] = useRecoilState(isShowImageDetails);
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
        {
          isShowDetails != null ?
            <>
              <img src={url} className="mx-auto my-0.5 max-h-[50%] max-w-full object-contain text-center" onClick={handleImageClick} />
              <div className="border-base-content border-t-1">
                <div className="bg-base-100 flex h-12">
                  <div className="ml-2 flex-1 py-2 text-xl">ファイルの詳細</div>
                  <div className="py-2 px-3" onClick={() => { setIsShowDetails(null) }}><XIcon className="h-8 w-8" /></div>
                </div>
                <div className="tabs tabs-boxed w-full">
                  <a className={clsx("tab w-1/3", isShowDetails == "basic" ? "tab-active" : "")} onClick={() => { setIsShowDetails("basic") }}>基本</a>
                  <a className={clsx("tab w-1/3", isShowDetails == "ai" ? "tab-active" : "")} onClick={() => { setIsShowDetails("ai") }}>AI</a>
                  <a className={clsx("tab w-1/3", isShowDetails == "share" ? "tab-active" : "")} onClick={() => { setIsShowDetails("share") }}>シェア</a>
                </div>
                {
                  isShowDetails == "basic" ?
                    <>basic</>
                    : isShowDetails == "ai" ?
                      <>ai</>
                      : isShowDetails == "share" ?
                        <>share</>
                        : <></>
                }
              </div>
            </>
            : <>
              <img src={url} className="mx-auto my-0.5 h-full w-full object-contain text-center" onClick={handleImageClick} />
            </>
        }
      </div>
      {
        isShowDetails ?
          <></>
          : <>
            <div className="bg-info fixed bottom-8 right-8 rounded-full" onClick={(e) => { handleImageClick(e); setIsShowDetails("basic") }}><PlusIcon className="m-2 h-10 w-10" /></div>
          </>
      }
    </div>
  );
});
