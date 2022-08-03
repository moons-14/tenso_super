import { spaceStates } from "@/state/space";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

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

  return { space, setSpace, addText, deleteText };
};
