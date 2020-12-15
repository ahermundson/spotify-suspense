import React from "react";
import { getTokenFromHash, getArtists } from "./utils";
// import { Card } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SongList = ({ onAlbumClick }) => {
  const [songs, setSongs] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const _token = getTokenFromHash();
    fetch(`http://localhost:8000?token=${_token}`)
      .then(r => r.json())
      .then(data => {
        console.log(data.body.items);
        setSongs(data.body.items);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return songs.map(song => (
    <div key={song.track.name}>
      <h1>{song.track.name}</h1>
      <p onClick={() => onAlbumClick(song.track.album.id)}>
        {song.track.album.name}
      </p>
      <p>{getArtists(song.track.artists)}</p>
    </div>
    // <Card
    //   title={song.track.name}
    //   key={song.track.name}
    //   style={{ width: 300, marginBottom: "25px" }}
    // >
    //   <p>{getArtists(song.track.artists)}</p>
    // </Card>
  ));
};

export default SongList;
