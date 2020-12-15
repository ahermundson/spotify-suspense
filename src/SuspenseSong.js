import React from "react";
import {
  getArtists,
  createResource,
  preloadImage,
  createImageResouce
} from "./utils";
import fetchAlbums from "./fetchAlbums";
import ErrorBoundary from "./ErrorBoundary";

const SuspenseAlbum = React.lazy(() => import("./SuspenseAlbum"));

function createAlbumResource(song, token) {
  const album = createResource(() => fetchAlbums(song.album.id, token));
  const image = createImageResouce(() =>
    preloadImage(song.album.images.find(image => image.height === 64).url)
  );
  return { album, image };
}

const Song = ({ song, token }) => {
  const [resource, setResource] = React.useState();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "50px" }} key={song.name}>
        <h1>{song.name}</h1>
        <a>
          <p
            onClick={() => {
              setResource(createAlbumResource(song, token));
            }}
          >
            {song.album.name}
          </p>
        </a>
        <p>{getArtists(song.artists)}</p>
      </div>
      {resource && (
        <ErrorBoundary>
          <React.Suspense fallback={<h1>Loading album...</h1>}>
            <SuspenseAlbum resource={resource} />
          </React.Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default Song;
