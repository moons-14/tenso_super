import { Button, ImageModal, Spinner } from "@/components/Elements";
import { } from "@/components/Elements/Spinner";
import { fileURLStates } from "@/state/space";
import { ArchiveIcon } from "@heroicons/react/outline";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import { useSpace, useSpaceId } from "../hooks";
import styles from "./../../../styles/fileCard.module.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FileImage: React.FC<{ path: string }> = ({ path }) => {
  const imageURL = useRecoilValue(fileURLStates(path));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ImageModal url={imageURL} open={isOpen} onChange={setIsOpen} />
      <LazyLoadImage
        src={imageURL}
        onClick={() => setIsOpen(true)}
        effect="opacity"
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
          <FileImage path={file.path} />
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
  return (
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
  );
};
