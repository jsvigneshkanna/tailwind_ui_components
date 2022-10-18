/* eslint-disable react-hooks/rules-of-hooks */
import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
} from "react-codepen-prefill-embed";

const Codepen = ({htmlText}) => {
  useCodePenEmbed();
  return (
    <PrefillEmbed
      className="codepen"
      penTitle="My sweet demo"
      embedHeight="500"
      themeId="1"
      editable
      description="Renders a tailwind"
      tags={["tailwind", "html", "tailwindcss"]}
      htmlClasses={["loading"]}
      defaultTabs={["result", "html"]}
      head={
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      }
      scripts={["https://cdn.tailwindcss.com"]}>
      <PrefillLang lang="html">{htmlText}</PrefillLang>
    </PrefillEmbed>
  );
};

export default Codepen;
