// src/components/seo.js
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, image, url }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  return (
    <Helmet>
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      <meta
        property="og:image"
        content={
          image ||
          `${siteMetadata.siteUrl}/https://www.kasandbox.org/programming-images/avatars/old-spice-man.png`
        }
      />
      <meta property="og:url" content={url || siteMetadata.siteUrl} />
      {/* Other Open Graph meta tags */}
    </Helmet>
  );
};

export default Seo;
