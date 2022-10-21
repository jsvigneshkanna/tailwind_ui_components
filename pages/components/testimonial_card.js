/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import Footer from "../../components/footer";
import testimonialCardsCollections from "../../tailwind_components/testimonial_cards/collection";

const TestimonialCards = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favi-tailwind.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="codepen_page font-poppins">
        <p className="codepen_brief">
          Still Guessing how can you showcase your testimonials(You do have 🤪).
          Dont worry if don&apos;t have testimonials or have no idea how to
          design it, click this card
        </p>
        {testimonialCardsCollections.map((testimonialCard, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{testimonialCard.componentName}</h3>
              <Codepen htmlText={testimonialCard.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default TestimonialCards;
