function fetchAlbums(albumId, token) {
  return fetch(`http://localhost:8000/album?albumId=${albumId}&token=${token}`);
}
export default fetchAlbums;
