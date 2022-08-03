import { Button, Card } from "@/components/Elements";
import { fileURLStates } from "@/state/space";
import { ArchiveIcon } from "@heroicons/react/outline";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { useSpace, useSpaceId } from "../hooks";

const FileImage: React.FC<{ path: string }> = ({ path }) => {
  const imageURL = useRecoilValue(fileURLStates(path));
  return <img className="rounded-lg" src={imageURL} />;
};

const FileCard: React.FC<{
  file: { name: string; path: string; type: string };
}> = ({ file }) => {
  const isImage = file.type.includes("image");
  return (
    <Card className="flex flex-col gap-1 p-2" shadow="sm">
      <div className="text-sm font-bold">{file.name}</div>
      <div className="flex h-40 grow items-center justify-center overflow-hidden">
        {isImage ? (
          <Suspense>
            <FileImage path={file.path} />
          </Suspense>
        ) : (
          <ArchiveIcon className="w-3/5 opacity-50" />
        )}
      </div>
      <Button size="sm" variant="warn">
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
