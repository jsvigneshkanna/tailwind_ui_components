import {useState, useEffect} from "react";

const Contributors = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 600);
  }, []);

  (async () => {
    const contributors = await fetch(
      "https://api.github.com/repos/jsvigneshkanna/tailwind_ui_components/contributors",
    );
    const data = await contributors.json();

    if (document.getElementById("contributors").innerHTML == "") {
      data.forEach((contributor) => {
        // console.log(contributor);
        document.getElementById(
          "contributors",
        ).innerHTML += `<a href="${contributor.url}" class="border border-gray-200 flex flex-col items-center break-words p-3 w-48 m-4 ">
        <img class=" inline rounded-full" src="${contributor.avatar_url}"alt="contributor-logo"/> 
        <span class=" flex-col text-xl font-bold text-white">
        <div class="flex-wrap w-full mt-2 ">${contributor.login}</div>
        </span>
        </a>`;
      });
    }
  })();

  return (
    <div className="banner">
      <div className="banner_container">
        <div>
          <p className=" mt-8  text-xl text-white font-bold">
            Our contributors:
          </p>
          <div className="p-6 px-5"></div>
          <div
            id="contributors"
            className="overflow-auto w-auto flex flex-wrap justify-evenly">
            {/* className="overflow-auto whitespace-nowrap w-auto flex flex-col flex-wrap justify-evenly  border-white border-2 rounded"*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
