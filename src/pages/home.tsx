import React, { Suspense } from "react";
import HeavyComponent from "./../HeavyComponent";

// const LazyHeavyComponent = React.lazy(() => import("./../HeavyComponent"));
export default function Home() {
  return (
    <div className="App">
      <h1>React TypeScript Lazy Loading</h1>
      {/* Suspense is used to show a fallback while the component is loading */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* <LazyHeavyComponent /> */}
      <HeavyComponent />
      {/* </Suspense> */}
    </div>
  );
}
