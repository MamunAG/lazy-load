import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

const LazyComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  console.log("ren");
  return (
    <>
      <div ref={ref} className="h-64 border">
        {inView && (
          <Suspense
            fallback={
              <div className="h-64 flex items-center justify-center">
                Loading...
              </div>
            }
          >
            {children}
          </Suspense>
        )}
      </div>
    </>
  );
};

export default LazyComponent;
