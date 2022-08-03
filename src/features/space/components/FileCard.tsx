import { Button, Card, ImageModal } from "@/components/Elements";
import { fileURLStates } from "@/state/space";
import { ArchiveIcon } from "@heroicons/react/outline";
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

const FileCard: React.FC<{
  file: { name: string; path: string; type: string };
}> = ({ file }) => {
  const isImage = file.type.includes("image");
  return (
    <Card className="flex h-48 flex-col p-2" shadow="sm">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {isImage ? (
          <Suspense>
            <FileImage path={file.path} />
          </Suspense>
        ) : (
          <ArchiveIcon className="w-3/5 opacity-50" />
        )}
      </div>
      <div className="z-10 text-sm font-bold">{file.name}</div>
      <div className="flex-1" />
      <Button size="sm" variant="warn" className="z-10">
        Download
      </Button>
    </Card>
  );
};

export const FileCardList = () => {
  const spaceId = useSpaceId();
  const { space } = useSpace(spaceId);
  return (
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3">
      {space.files.map((file, i) => (
        <FileCard key={`${file.path}_${i}`} file={file} />
      ))}
    </div>
  );
};
