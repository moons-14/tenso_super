import { storage } from "@/libs/firebase";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

export const uploadFile = (file: File, spaceId: string) => {
  const fileRef = storageRef(storage, `files/${spaceId}/${file.name}`);
  const promise = uploadBytes(fileRef, file);
  return toast.promise(promise, {
    pending: `Uploading ${file.name}...`,
    success: "Success　🍣",
    error: "Error occurred🤯",
  });
};
