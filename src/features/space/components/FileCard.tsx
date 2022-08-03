import { Button, Card, ImageModal } from "@/components/Elements";
import { fileURLStates } from "@/state/space";
import { ArchiveIcon, TrashIcon } from "@heroicons/react/outline";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import { useSpace, useSpaceId } from "../hooks";

const FileImage: React.FC<{ path: string }> = ({ path }) => {
  const imageURL = useRecoilValue(fileURLStates(path));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ImageModal url={imageURL} open={isOpen} onChange={setIsOpen} />
      <img
        className="rounded-lg"
        src={imageURL}
        onClick={() => setIsOpen(true)}
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
    <Card className="flex h-56 flex-col p-2" shadow="sm">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {isImage ? (
          <Suspense>
            <FileImage path={file.path} />
          </Suspense>
        ) : (
          <ArchiveIcon className="w-3/5 opacity-50" />
        )}
      </div>

      <div className="z-10 flex-1 overflow-hidden text-sm font-bold">
        {file.name}
      </div>

      <div className="flex-1" />
      <div className="z-10 flex gap-2">
        <Suspense>
          <FileDownloadButton path={file.path} />
        </Suspense>
        <Button
          variant={deleting ? "error" : "normal"}
          onClick={() => deletePath && deletePath(file.path)}
        >
          <TrashIcon className="w-4" />
        </Button>
      </div>
    </Card>
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
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3">
      {space.files.map((file, i) => (
        <FileCard
          key={`${file.path}_${i}`}
          file={file}
          deleting={deleting === file.path}
          deletePath={tryDelete}
        />
      ))}
    </div>
  );
};
