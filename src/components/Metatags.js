// MetaTags.js

import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({ title, type, url, imageUrl }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://lampros-labs-new.vercel.app/" />
      <meta name="twitter:title" content="HOME Page" />
      <meta
        name="twitter:description"
        content="Lampros Programmes. WHAT WE OFFER. Preschool is the foundation upon which kids build up in their lives. We nurture and cultivate the potential of kids which ...
"
      />
      <meta
        name="twitter:image"
        content="https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
      />
    </Helmet>
  );
};

export default MetaTags;
