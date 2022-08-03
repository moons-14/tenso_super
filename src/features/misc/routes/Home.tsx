import { Button, Input } from "@/components/Elements";
import { nanoid } from "nanoid";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [spaceId, setSpaceId] = useState("");
  const joinSpace = (e: FormEvent) => {
    e.preventDefault();
    spaceId && void navigate(`/space/${spaceId}`);
  };
  const joinRandom = () => {
    void navigate(`/space/${nanoid().slice(0, 10)}`);
  };

  return (
    <>
      <h1 className="text-center text-3xl">
        使いやすいかもしれない
        <br className="sm:hidden" />
        多目的共有サービス
      </h1>
      <div className="mx-6 flex flex-col items-center gap-2 pt-12">
        <form className="flex items-center gap-4" onSubmit={joinSpace}>
          <Input
            shadow="sm"
            className="max-w-sm flex-1 px-4 py-1"
            placeholder="Type Space Name"
            value={spaceId}
            onChange={(e) => setSpaceId(e.target.value)}
          />
          <Button type="submit" variant="warn" onClick={joinSpace}>
            Join
          </Button>
        </form>
        <div className="font-bold">または</div>
        <Button variant="info" onClick={joinRandom}>
          Create New Space
        </Button>
      </div>
    </>
  );
};
