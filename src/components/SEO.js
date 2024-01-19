import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../assets/fixed-ratio1.jpg";
import instaImage1 from "../assets/images/Mission.jpg";

function SEO(props) {
  return (
    <>
      <Helmet>
        <title>{props.title ? props.title : null}</title>
        <meta
          name="description"
          content={props.description ? props.description : null}
        />

        <meta
          property="og:url"
          content="https://3c73-2401-4900-1c80-d148-7494-e474-ab00-66c.ngrok-free.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title ? props.title : null} />
        <meta
          property="og:description"
          content={props.description ? props.description : null}
        />

        <meta property="og:image" content={instaImage1} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="3c73-2401-4900-1c80-d148-7494-e474-ab00-66c.ngrok-free.app"
        />
        <meta
          property="twitter:url"
          content="https://3c73-2401-4900-1c80-d148-7494-e474-ab00-66c.ngrok-free.app/"
        />
        <meta name="twitter:title" content="profilePage" />
        <meta
          name="twitter:description"
          content={props.description ? props.description : null}
        />

        <meta
          name="twitter:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/3c73-2401-4900-1c80-d148-7494-e474-ab00-66c.ngrok-free.app/Get%20On%20Board%20Meta%20Ads%20Campaigns/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Fdbdbf888-ffcf-466b-9962-25ba1c90e1b3.jpg%3Ftoken%3DfWPkrh2hyxNbhyebJH1WkpgKT7UUoC5y4HA-IKiTON4%26height%3D800%26width%3D1200%26expires%3D33241662014/og.png"
        />
      </Helmet>
    </>
  );
}

export default SEO;
