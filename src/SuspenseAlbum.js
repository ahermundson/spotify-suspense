import React from "react";

const SuspenseAlbum = ({ resource }) => {
  const album = resource.album.read();
  return (
    <div>
      <h1>Label: {album.body.label}</h1>
      <img alt="album" src={resource.image.read()} />;
    </div>
  );
};

export default SuspenseAlbum;
