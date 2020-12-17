import React from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { getTokenFromHash } from "./utils";
import SongSearch from "./SongSearch";
import SuspenseSongSearch from "./SuspenseSongsSearch";
import SuspenseList from "./SuspenseList";
const { TabPane } = Tabs;

function App() {
  const [token, setToken] = React.useState();

  // React.useEffect(() => {
  //   const _token = getTokenFromHash();
  //   setToken(_token);
  // }, []);

  return (
    <div style={{ margin: "0 25px" }}>
      <Tabs defaultActiveKey="0">
        {/* <TabPane key="0" tab="Current">
          <SongSearch token={token} />
        </TabPane>
        <TabPane tab="Future" key="2">
          <SuspenseSongSearch token={token} />
        </TabPane> */}
        <TabPane tab="Suspense list" key="3">
          <SuspenseList />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
