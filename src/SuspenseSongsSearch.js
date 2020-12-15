import React from "react";
import { Input } from "antd";
import { createResource } from "./utils";
import ErrorBoundary from "./ErrorBoundary";
import fetchSongs from "./fetchSongs";
const Songs = React.lazy(() => import("./SuspenseSongList"));

const { Search } = Input;

const SongSearch = ({ token }) => {
  const [resource, setResource] = React.useState();
  return (
    <div>
      <Search
        style={{ width: "30%" }}
        placeholder="Search for a song"
        enterButton="Search"
        size="large"
        onSearch={value => {
          setResource(createResource(() => fetchSongs(value, token)));
        }}
      />
      {resource && (
        <ErrorBoundary>
          <React.Suspense fallback={<h1>Loading Songs component</h1>}>
            <Songs resource={resource} token={token} />}
          </React.Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default SongSearch;
