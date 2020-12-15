import React from "react";
import { createImageResouce, preloadImage } from "./utils";
import Image from "./Image";

const SuspenseList = () => {
  return (
    <div
      style={{
        minWidth: "100",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      {/* revealOrder
        -- nothing = shows suspending components as they load
        -- together = wont show any until all have loaded
        -- forwards = shows suspending components in order they appear in the tree
        -- backwards = shows supspended components in the opposite order they appear in the tree
     */}
      {/* tail 
        -- nothing = all fallbacks will show
        -- collapsed = only 1 fallback will show at a time
    */}
      <React.SuspenseList revealOrder="forwards" tail="collapsed">
        <div>
          <React.Suspense fallback={"Loading Bill 1"}>
            <Image
              height="300"
              width="200"
              resource={createImageResouce(() =>
                preloadImage("http://www.fillmurray.com/200/300", 500)
              )}
            />
          </React.Suspense>
        </div>
        <div>
          <React.Suspense fallback={"Loading Bill 2"}>
            <Image
              height="400"
              width="400"
              resource={createImageResouce(() =>
                preloadImage("http://www.fillmurray.com/400/400", 1600)
              )}
            />
          </React.Suspense>
        </div>
        <div>
          <React.Suspense fallback={"Loading Bill 3"}>
            <Image
              height="300"
              width="400"
              resource={createImageResouce(() =>
                preloadImage("http://www.fillmurray.com/400/300", 1200)
              )}
            />
          </React.Suspense>
        </div>
      </React.SuspenseList>
    </div>
  );
};

export default SuspenseList;
