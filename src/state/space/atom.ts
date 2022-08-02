import { array, object, string } from "@recoiljs/refine";
import { atomFamily } from "recoil";
import { syncEffect } from "recoil-sync";
import { Space } from "./types";

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
    }),
  ],
});
