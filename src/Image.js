import React from "react";

const Image = ({ resource, ...rest }) => (
  <img {...rest} alt="fill-murray" src={resource.read()} />
);

export default Image;
