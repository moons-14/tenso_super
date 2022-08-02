import { db } from "@/libs/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useCallback } from "react";
import { RecoilSync, WriteInterface } from "recoil-sync";

export const SyncSpace: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const read = useCallback((spaceId: string) => {
    const ref = doc(db, "space", spaceId);
    return getDoc(ref).then((snap) =>
      snap.exists()
        ? snap.data()
        : {
            files: [],
            text: [],
          }
    );
  }, []);

  const write = useCallback(({ diff }: WriteInterface) => {
    for (const [key, value] of diff) {
      const ref = doc(db, "space", key);
      void setDoc(ref, value);
    }
  }, []);

  return (
    <RecoilSync storeKey="space_store" read={read} write={write}>
      {children}
    </RecoilSync>
  );
};
