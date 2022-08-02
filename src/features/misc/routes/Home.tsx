import { Button, Input } from "@/components/Elements";

export const Home = () => {
  return (
    <>
      <h1 className="text-center text-3xl">
        使いやすいかもしれない
        <br className="sm:hidden" />
        多目的共有サービス
      </h1>
      <div className="flex flex-col items-center gap-2 px-6 pt-12">
        <div className="flex w-full items-center gap-4">
          <Input
            shadow="sm"
            className="max-w-sm flex-1 px-2 text-lg"
            placeholder="Type Space Name"
          />
          <Button variant="warn">Join</Button>
        </div>
        <div className="font-bold">または</div>
        <Button variant="info">Create New Space</Button>
      </div>
    </>
  );
};
