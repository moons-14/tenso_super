import { themeState } from "@/state/theme";
import { Suspense } from "react";
import { SiGithub, SiNiconico, SiTwitter } from "react-icons/si";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Spinner } from "../Elements";

export const DefaultLayout = () => {
  const theme = useRecoilValue(themeState);
  return (
    <div
      className="bg-base-200 text-base-content flex min-h-screen flex-col"
      data-theme={theme}
    >
      <div className="flex-1">
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="https://www.as-faucet.xyz/" target="_blank" rel="noreferrer">
            CFaucet
          </a>
          <a className="link link-hover" href="https://zenn.dev/inaridiy" target="_blank" rel="noreferrer">
            Blog
          </a>
          <a
            className="link link-hover"
            href="https://profile.codersrank.io/user/inaridiy/"
            target="_blank" rel="noreferrer"
          >
            CoderRank
          </a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/inaridiy" target="_blank" rel="noreferrer">
              <SiTwitter className="h-6 w-6" />
            </a>
            <a href="https://github.com/inaridiy" target="_blank" rel="noreferrer">
              <SiGithub className="h-6 w-6" />
            </a>
            <a href="https://www.nicovideo.jp/user/89789738" target="_blank" rel="noreferrer">
              <SiNiconico className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright &copy; 2022 Inaridiy</p>
        </div>
      </footer>
    </div>
  );
};
