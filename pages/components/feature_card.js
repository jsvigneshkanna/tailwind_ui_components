/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
// import test from "../tailwind_components/buttons/test_file.jsx";
import featureCardColletion from "../../tailwind_components/feature_cards/collection";

const FeatureCards = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI Feature Card Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favi-tailwind.png" type="image/png" />
      </Head>
      <Navbar />

      <div className="codepen_page font-poppins">
        <p className="codepen_brief">
          In late 90s, we do have visiting cards to showcase our portfolio. But
          now, we are in 20th century where 240px X 240px of div is enough for
          showcasing our portfolio 💳
        </p>
        {featureCardColletion.map((featureCard, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">
                {index + 1}. {featureCard.componentName}
              </h3>
              <Codepen htmlText={featureCard.component} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FeatureCards;
