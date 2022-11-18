import { storage } from "@/libs/firebase";
import { array, object, string } from "@recoiljs/refine";
import { getDownloadURL, ref } from "firebase/storage";
import { atom, atomFamily } from "recoil";
import { syncEffect } from "recoil-sync";
import { Space } from "./types";

export const fileURLStates = atomFamily<string, string>({
  key: "fileURLStates",
  default: (path) => getDownloadURL(ref(storage, path)),
});

export const spaceStates = atomFamily<Space, string>({
  key: "spaceStates",
  effects: (spaceId) => [
    syncEffect({
      storeKey: "space_store",
      refine: object({
        files: array(
          object({
            name: string(),
            path: string(),
            type: string(),
          })
        ),
        text: array(string()),
      }),
      read: ({ read }) => read(spaceId),
      write: ({ write }, newValue) => write(spaceId, newValue),
    }),
  ],
});

export const isShowImageDetails = atom({
  key: "isShowImageDetails",
  default: false,
});
