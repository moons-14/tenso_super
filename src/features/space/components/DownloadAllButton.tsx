import { Button, Spinner } from "@/components/Elements";
import { spaceStates } from "@/state/space";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { useSpaceId } from "../hooks";
import { downloadAll, saveFile } from "../lib";

export const DownloadAllButton = () => {
  const spaceId = useSpaceId();
  const [isDownloading, setIsDownloading] = useState(false);
  const { files } = useRecoilValue(spaceStates(spaceId));

  const handleButton = async () => {
    try {
      setIsDownloading(true);
      const zipBlob = await toast.promise(downloadAll(files), {
        pending: "Downloading",
        error: "Some error happen!!!",
        success: "Download Complete",
      });
      saveFile(zipBlob, `${spaceId}.zip`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      size="lg"
      variant="primary"
      disabled={isDownloading}
      onClick={() => void handleButton()}
    >
      {isDownloading ? <Spinner /> : "Download All"}
    </Button>
  );
};
