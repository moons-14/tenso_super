import { Button, ImageModal, Spinner } from "@/components/Elements";
import { } from "@/components/Elements/Spinner";
import { fileURLStates, modalImgData, modalOpen } from "@/state/space";
import { ArchiveIcon } from "@heroicons/react/outline";
import { Suspense, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRecoilState, useRecoilValue } from "recoil";
import { useSpace, useSpaceId } from "../hooks";
import styles from "./../../../styles/fileCard.module.css";

const FileImage: React.FC<{ path: string; name: string; type: string }> = ({ path, name, type }) => {
  const imageURL = useRecoilValue(fileURLStates(path));
  const [modalData, setModalData] = useRecoilState(modalImgData);
  const [isOpen, setIsOpen] = useRecoilState(modalOpen);
  return (
    <>
      <LazyLoadImage
        src={imageURL}
        onClick={() => { setModalData({ path: path, name: name, type: type }); setIsOpen(true); }}
        effect="opacity"
        className={styles.squareImages}
      />
    </>
  );
};

const FileDownloadButton: React.FC<{ path: string }> = ({ path }) => {
  const fileURL = useRecoilValue(fileURLStates(path));
  return (
    <a href={fileURL} download>
      <Button size="sm" variant="warn">
        Download
      </Button>
    </a>
  );
};

const FileCard: React.FC<{
  file: { name: string; path: string; type: string };
  deleting?: boolean;
  deletePath?: (path: string) => void;
}> = ({ file, deleting, deletePath }) => {
  const isImage = file.type.includes("image");
  return (
    <div className={styles.squareImage}>
      {isImage ? (
        <Suspense fallback={<Spinner />}>
          <FileImage path={file.path} name={file.name} type={file.type} />
        </Suspense>
      ) : (
        <ArchiveIcon className="w-3/5 opacity-50" />
      )}
    </div>
  );
};

export const FileCardList = () => {
  const spaceId = useSpaceId();
  const { space, removeFile } = useSpace(spaceId);
  const [deleting, setDeleting] = useState("");
  const tryDelete = (path: string) => {
    if (deleting !== path) return setDeleting(path);
    setDeleting("");
    removeFile(path);
  };

  const modalData = useRecoilValue(modalImgData);
  const [isOpen, setIsOpen] = useRecoilState(modalOpen);
  return (
    <>
      <div className="grid w-full grid-cols-2">
        {space.files.map((_, i, a) => (
          <FileCard
            key={`${a[a.length - 1 - i].path}_${i}`}
            file={a[a.length - 1 - i]}
            deleting={deleting === a[a.length - 1 - i].path}
            deletePath={tryDelete}
          />
        ))}
      </div>
      {
        modalData ?
          <ImageModal url={modalData.path} open={isOpen} name={modalData.name} onChange={setIsOpen} />
          : <></>
      }
    </>
  );
};
