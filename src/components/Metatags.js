// MetaTags.js

import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({ title, type, url, imageUrl }) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type || "article"} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
    </Helmet>
  );
};

export default MetaTags;
