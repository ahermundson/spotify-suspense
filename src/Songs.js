import React from "react";
import fetchSongs from "./fetchSongs";
import Song from "./Song";

const Songs = ({ songName, token }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    fetchSongs(songName, token)
      .then(res => res.json())
      .then(data => {
        setSongs(data.body.tracks.items);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [songName, token]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error searching for {songName}</h1>;
  }

  return songs.map(song => <Song song={song} token={token} />);
};

export default Songs;
