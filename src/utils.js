export function getTokenFromHash() {
  // Get the hash of the url
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  // Set token
  let _token = hash.access_token;

  const authEndpoint = "https://accounts.spotify.com/authorize";

  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = "ee78d0e96ed244a7931ff5436f995f17";
  const redirectUri = "http://localhost:3000";
  const scopes = [
    "user-read-email",
    "user-read-private",
    "user-library-read"
    //   "playlist-read-private"
  ];

  // If there is no token, redirect to Spotify authorization
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token`;
  } else {
    return _token;
  }
}

export function getArtists(artists) {
  return artists.map(artist => artist.name).join(", ");
}

export function createResource(asyncFn) {
  let status = "pending";
  let result;
  let promise = asyncFn()
    .then(res => res.json())
    .then(data => {
      status = "success";
      result = data;
    })
    .catch(err => {
      status = "error";
      result = err;
    });
  return {
    read() {
      if (status === "pending") throw promise;
      if (status === "error") throw result;
      if (status === "success") return result;
      throw new Error("This should be impossible");
    }
  };
}

export function createImageResouce(asyncFn) {
  let status = "pending";
  let result;
  let promise = asyncFn()
    .then(data => {
      status = "success";
      result = data;
    })
    .catch(err => {
      status = "error";
      result = err;
    });
  return {
    read() {
      if (status === "pending") throw promise;
      if (status === "error") throw result;
      if (status === "success") return result;
      throw new Error("This should be impossible");
    }
  };
}

export function preloadImage(src, timeout) {
  return new Promise(resolve => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      if (timeout) {
        setTimeout(() => {
          resolve(src);
        }, timeout);
      } else {
        resolve(src);
      }
    };
  });
}
