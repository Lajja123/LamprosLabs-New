import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../assets/fixed-ratio1.jpg";
import instaImage1 from "../assets/images/Mission.jpg";

function SEO(props) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />

        <meta property="og:url" content={props.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />

        <meta
          property="og:image"
          content={
            "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
          }
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="3c73-2401-4900-1c80-d148-7494-e474-ab00-66c.ngrok-free.app"
        />
        <meta property="twitter:url" content={props.url} />
        <meta name="twitter:title" content="profilePage" />
        <meta name="twitter:description" content={props.description} />

        <meta
          name="twitter:image"
          content="https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
        />
      </Helmet>
    </>
  );
}

export default SEO;
