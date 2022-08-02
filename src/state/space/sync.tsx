import { db } from "@/libs/firebase";
import { useCallback } from "@storybook/addons";
import { doc, getDoc } from "firebase/firestore";
import { RecoilSync } from "recoil-sync";

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
  return (
    <RecoilSync storeKey="space_store" read={read}>
      {children}
    </RecoilSync>
  );
};
