/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import groupProfile from "../../tailwind_components/profile/collection";
import Footer from "../../components/footer";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI | Profiles</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="codepen_page font-poppins">
        <p className="codepen_brief bg-sky-200 text-blue-700 md:mx-44 mx-4 px-4 mb-12 text-center py-4 rounded-2xl">
          Alerts are used in website due user actions 💭
        </p>
        {groupProfile.map((profile, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{profile.componentName}</h3>
              <Codepen htmlText={profile.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
