import React from "react";
import Song from "./SuspenseSong";

const Songs = ({ resource, token }) => {
  const songs = resource.read();

  return songs.body.tracks.items.map(song => (
    <Song key={song.id} song={song} token={token} />
  ));
};

export default Songs;
