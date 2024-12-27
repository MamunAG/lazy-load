import React, { Suspense } from "react";

// Lazy-load the component
const LazyComponent = React.lazy(() => import("../LazyComponent"));
const HeavyComponent = React.lazy(() => import("../HeavyComponent"));

const LazyPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center my-8 text-2xl">Scroll to Load Components</h1>
      <div style={{ height: "100vh" }} className="bg-gray-100">
        <p className="text-center mt-16">Scroll down to load the content!</p>
      </div>
      <Suspense fallback={<p>loading..</p>}>
        <LazyComponent>
          <h2 className="text-center">Component 1</h2>
          <HeavyComponent />
        </LazyComponent>
      </Suspense>
      <Suspense fallback={<p>loading..</p>}>
        <LazyComponent>
          <h2 className="text-center text-green-300">Component 2</h2>
          {/* <HeavyComponent /> */}
        </LazyComponent>
      </Suspense>
      <Suspense fallback={<p>loading..</p>}>
        <LazyComponent>
          <h2 className="text-center">Component 3</h2>
          {/* <HeavyComponent /> */}
        </LazyComponent>
      </Suspense>
    </div>
  );
};

export default LazyPage;
