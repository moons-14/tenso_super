import { spaceStates } from "@/state/space";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { uploadFile } from "../lib";

export const useSpace = (spaceId: string) => {
  const [space, setSpace] = useRecoilState(spaceStates(spaceId));
  const addText = useCallback(
    (newText: string) => {
      if (space.text.includes(newText)) return;
      setSpace({ ...space, text: [...space.text, newText] });
    },
    [space, setSpace]
  );
  const deleteText = useCallback(
    (deleteText: string) => {
      setSpace({
        ...space,
        text: space.text.filter((text) => text !== deleteText),
      });
    },
    [space, setSpace]
  );
  const addFiles = useCallback(
    (files: File[]) => {
      void Promise.all(
        files
          .filter((file) => !space.files.some(({ name }) => file.name === name))
          .map((file) => uploadFile(file, spaceId))
      ).then((results) =>
        setSpace({
          ...space,
          files: [
            ...space.files,
            ...results.map(({ metadata }) => ({
              name: metadata.name,
              path: metadata.fullPath,
              type: metadata.contentType || "Unknown",
            })),
          ],
        })
      );
    },
    [space, setSpace, spaceId]
  );

  return { space, setSpace, addText, addFiles, deleteText };
};
