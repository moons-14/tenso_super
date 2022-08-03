import { storage } from "@/libs/firebase";
import { deleteObject, ref as storageRef } from "firebase/storage";
import { toast } from "react-toastify";
export const deleteFile = (path: string) => {
  const fileRef = storageRef(storage, path);
  const promise = deleteObject(fileRef);
  return toast.promise(promise, {
    pending: `Deleting file....`,
    success: "Success　🍣",
    error: "Error occurred🤯",
  });
};
