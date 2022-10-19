/* eslint-disable react-hooks/rules-of-hooks */
import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
} from "react-codepen-prefill-embed";

const Codepen = ({htmlText}) => {
  useCodePenEmbed();
  return (
    <div className="codepen_container">
      <PrefillEmbed
        className="codepen"
        penTitle="VKs tailwind components"
        embedHeight="500"
        themeId="1"
        editable
        description="Renders a tailwind UI components"
        tags={["tailwind", "html", "tailwindcss"]}
        htmlClasses={["loading"]}
        defaultTabs={["result", "html"]}
        head={
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        }
        scripts={["https://cdn.tailwindcss.com"]}>
        <PrefillLang lang="html">{htmlText}</PrefillLang>
      </PrefillEmbed>
    </div>
  );
};

export default Codepen;
