function fetchSongs(songName, token) {
  return fetch(
    `http://localhost:8000/songs?songName=${songName}&token=${token}`
  );
}
export default fetchSongs;
