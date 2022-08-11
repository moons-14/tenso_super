import { storage } from "@/libs/firebase";
import { File as FileData } from "@/state/space";
import { getDownloadURL, ref } from "firebase/storage";
import type JSZip from "jszip";

const downloadFile = async ({ path, name }: FileData) => {
  const res = await getDownloadURL(ref(storage, path)).then(fetch);
  const type = res.headers.get("Content-Type") || undefined;
  const blob = await res.blob();
  const file = new File([blob], name, { type });
  return file;
};

const addFileToZip = (zip: JSZip, file: File) => zip.file(file.name, file);

const zipFiles = async (files: File[]): Promise<Blob> => {
  const { default: JSZip } = await import("jszip");
  const zip = files.reduce(addFileToZip, new JSZip());
  const content = await zip.generateAsync({ type: "blob" });
  return content;
};

export const downloadAll = async (fileDataList: FileData[]): Promise<Blob> => {
  const files = await Promise.all(fileDataList.map(downloadFile));
  const zipBlob = await zipFiles(files);
  return zipBlob;
};
