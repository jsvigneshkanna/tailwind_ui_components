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
    console.log(data);
    const username = data.forEach((contributor) => {
      fetch(`https://api.github.com/${contributor}`)
        .then((res) => res.json())
        .then((res) => console.log(res));
    });

    if (document.getElementById("contributors").innerHTML == "") {
      data.forEach((contributor) => {
        // console.log(contributor);
        document.getElementById(
          "contributors",
        ).innerHTML += `<div class="flex items-center gap-4 p-4 md:border md:border-gray-200 md:flex md:p-3 md:w-48 md:m-4">
        <img class=" w-12 h-12 rounded-full md:w- md:h-" src="${contributor.avatar_url}"alt="contributor-logo"/> 
        <span class="flex text-xl font-bold text-white md:flex-col">
        <div class="">${contributor.login}</div>
        <a href=${contributor.url}> 
        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>                
        </a>
        <a href=${contributor.url}> 
        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
        </a>
        </span>
        </div>`;

        // `<a href="${contributor.url}" class="md:border md:border-gray-200 flex md:flex-col items-center  md:p-3 md:w-48 md:m-4 ">
        // <img class=" inline rounded-full" src="${contributor.avatar_url}"alt="contributor-logo"/>
        // <span class=" md:flex-col text-xl font-bold text-white">
        // <div class="flex-wrap w-full mt-2 ">${contributor.login}</div>
        // </span>
        // </a>`;
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
            className="overflow-y-auto relative max-w-sm mx-auto dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5 md:flex-col md:flex-wrap md:justify-evenly ">
            {/* 
            overflow-auto w-auto flex flex-wrap justify-evenly">
            className="overflow-auto whitespace-nowrap w-auto flex md:flex-col md:flex-wrap md:justify-evenly  border-white border-2 rounded"*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
