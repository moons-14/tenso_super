export type File = {
  name: string;
  path: string;
  type: string;
};

export type Space = {
  files: File[];
  text: string[];
};
