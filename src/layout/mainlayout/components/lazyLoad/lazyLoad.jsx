import React, { lazy, Suspense } from "react";
import Loading from "./loading/Loading";

const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 3000);
    });
  });
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default lazyLoad;
