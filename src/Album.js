import React from "react"; 

const Album = ({ album }) => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h1>Label: {album.label}</h1>
    <img
      alt="album"
      src={album.images.find(image => image.height === 64).url}
    />
  </div>
);

export default Album;
