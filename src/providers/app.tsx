import { SyncSpace } from "@/state/space";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ErrorFallBack, LoadingFallBack } from "./fallback";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingFallBack />}>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <SyncSpace>
            <BrowserRouter>{children}</BrowserRouter>
          </SyncSpace>
        </ErrorBoundary>
      </Suspense>
    </RecoilRoot>
  );
};
