/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import {useRouter} from "next/router";
import Codepen from "../../components/codepen";
import badgeCollection from "../../tailwind_components/badges/collection";

const Badge = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI Badge Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favi-tailwind.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="codepen_page font-poppins">
        <p className="codepen_brief">
          How cool is to have coloured and meaningfull badges near your image/
          cards/ testimonials. Sounds interesting, then why waiting to check
          inside 😎
        </p>
        {badgeCollection.map((badge, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{badge.componentName}</h3>
              <Codepen htmlText={badge.component} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Badge;
