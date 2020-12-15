import React from "react";
// import { Card } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const AlbumList = ({ token, albumId }) => {
  const [album, setAlbum] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/album?token=${token}&albumId=${albumId}`)
      .then(res => res.json())
      .then(data => setAlbum(data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [token, albumId]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <h1>{album.body.name}</h1>
      <img
        alt="album"
        src={`${album.body.images.find(image => image.height === 300).url}`}
      />
    </div>
  );
};

export default AlbumList;
