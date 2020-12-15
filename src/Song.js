import React from "react";
import { getArtists } from "./utils";
import fetchAlbums from "./fetchAlbums";
// import Album from "./Album";
const Album = React.lazy(() => import("./Album"));

const Song = ({ song, token }) => {
  const [album, setAlbum] = React.useState();
  function onAlbumClick(id) {
    fetchAlbums(id, token)
      .then(res => res.json())
      .then(data => setAlbum(data));
  }
  return (
    <div style={{ display: "flex" }} key={song.name}>
      <div style={{ marginRight: "50px" }}>
        <h1>{song.name}</h1>
        <a>
          <p onClick={() => onAlbumClick(song.album.id)}>{song.album.name}</p>
        </a>
        <p>{getArtists(song.artists)}</p>
      </div>
      <React.Suspense fallback={"Loading Album Component"}>
        {album && <Album album={album.body} />}
      </React.Suspense>
    </div>
  );
};

export default Song;
