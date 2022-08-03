import { Card } from "@/components/Elements";
import { checkIsURL } from "@/utils";
import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { memo, useRef, useState } from "react";
import { useSpace, useSpaceId } from "../hooks";

const SpaceText: React.FC<{
  text: string;
  deleting?: boolean;
  deleteText?: (text: string) => void;
  // eslint-disable-next-line react/display-name
}> = memo(({ text, deleteText, deleting }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isURL = checkIsURL(text);
  const copy = () =>
    navigator.clipboard && void navigator.clipboard.writeText(text);

  return (
    <li className="group flex text-lg font-bold">
      {isURL ? (
        <a href={text} className="link flex-1 overflow-hidden">
          {text}
        </a>
      ) : (
        <button
          className="hover:bg-base-300 w-full rounded-lg p-0.5 text-start transition-all active:scale-95"
          onClick={copy}
        >
          {text}
        </button>
      )}

      <button
        className={clsx(
          "btn btn-sm btn-square btn-error transition-all",
          deleting || "btn-ghost text-error rotate-90"
        )}
        ref={buttonRef}
        onClick={() => deleteText && deleteText(text)}
      >
        <XIcon className="w-8" />
      </button>
    </li>
  );
});

// eslint-disable-next-line react/display-name
export const SpaceTextList = memo(() => {
  const [deleting, setDeleting] = useState("");
  const spaceId = useSpaceId();
  const { space, deleteText } = useSpace(spaceId);
  const tryDeleteText = (text: string) => {
    if (text !== deleting) return setDeleting(text);
    setDeleting("");
    void deleteText(text);
  };

  return (
    <Card className="p-4" shadow="sm">
      {space.text.length > 0 ? (
        space.text.map((text) => (
          <SpaceText
            key={text}
            text={text}
            deleting={deleting === text}
            deleteText={tryDeleteText}
          />
        ))
      ) : (
        <div className="text-center text-2xl font-bold">Empty</div>
      )}
    </Card>
  );
});
