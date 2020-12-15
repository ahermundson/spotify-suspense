import React from "react";
import { Input } from "antd";
const Songs = React.lazy(() => import("./Songs"));
// import Songs from "./Songs";
const { Search } = Input;

const SongSearch = ({ token }) => {
  const [songName, setSongName] = React.useState();
  return (
    <div>
      <Search
        style={{ width: "30%" }}
        placeholder="Search for a song"
        enterButton="Search"
        size="large"
        onSearch={value => {
          setSongName(value);
        }}
      />
      <React.Suspense fallback={<h1>Loading Songs component</h1>}>
        {songName && <Songs token={token} songName={songName} />}
      </React.Suspense>
    </div>
  );
};

export default SongSearch;
