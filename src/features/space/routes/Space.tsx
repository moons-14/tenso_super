import { Button, Input } from "@/components/Elements";
import { ChangeEvent, useState } from "react";
import { FileCardList, SpaceTextList } from "../components";
import { useSpace, useSpaceId } from "../hooks";

export const Space = () => {
  const spaceId = useSpaceId();
  const { addText, addFiles } = useSpace(spaceId);
  const [text, setText] = useState("");

  const submitText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    addText(text);
    setText("");
  };

  const handleFiles = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    addFiles(Array.from(files || []));
  };

  return (
    <div className="flex flex-col gap-4">
      <form className="flex gap-4" onSubmit={submitText}>
        <Input
          className="w-full px-4 text-xl"
          placeholder="HelloWorld"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="info" size="lg">
          Submit
        </Button>
      </form>
      <div className="card border-base-content relative flex h-24 w-full items-center justify-center border-4 border-dashed">
        <Button shadow="none">Drop file or click to choose file</Button>
        <input
          type="file"
          multiple
          className="absolute inset-0 opacity-0"
          onChange={(e) => void handleFiles(e)}
        />
      </div>
      <SpaceTextList />
      <FileCardList />
    </div>
  );
};
