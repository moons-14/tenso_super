import { spaceStates } from "@/state/space";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useSpace = (spaceId: string) => {
  const [space, setSpace] = useRecoilState(spaceStates(spaceId));
  const addText = useCallback((newText: string) => {
    setSpace({ ...space, text: [...space.text, newText] });
  }, []);

  return { space, setSpace, addText };
};
