/* eslint-disable react-hooks/rules-of-hooks */
import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent,
} from "react-codepen-prefill-embed";

const Codepen = ({htmlText}) => {
  useCodePenEmbed();
  return (
    <PrefillEmbed
      className="codepen"
      penTitle="My sweet demo"
      embedHeight="400"
      themeId="319"
      editable
      description="Renders a barebones React component"
      tags={["tailwind", "html", "tailwindcss"]}
      htmlClasses={["loading", "no-js"]}
      preview
      defaultTabs={["result", "HTML"]}
      head={
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      }
      scripts={["https://cdn.tailwindcss.com"]}
      stylesheets={["https://cdn.tailwindcss.com"]}>
      <PrefillLang lang="html">{htmlText}</PrefillLang>
    </PrefillEmbed>
  );
};

export default Codepen;
