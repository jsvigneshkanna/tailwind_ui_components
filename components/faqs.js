/* eslint-disable @next/next/no-img-element */
import {useEffect} from "react";
import "font-awesome/css/font-awesome.min.css";

const FAQs = () => {
  useEffect(() => {
    setTimeout(() => {
      const data = {
        q1: {
          qes: "What is Tailwind Bootstrap ?",
          ans: "Tailwind css is an emerging CSS framework which makes our website / app unique without styling compared to other market bootstraps.",
        },
        q2: {
          qes: "Who drives this website ?",
          ans: 'Our Contributers Drive the website (around 50+ open source contributors - and growing in 🚀 pace), for more visit <a href="/aboutUs" target="_blank" rel="noreferrer" class="text-fuchsia-500 underline">Here.</a>',
        },
        q3: {
          qes: "What all components are there in this website ?",
          ans: 'There are lots of components such as Button, Form, Feature Card etc. Which can save lot of time for a Frontv End Dev. You can access them from <a href="/components" target="_blank" rel="noreferrer" class="text-fuchsia-500 underline">Here.</a>',
        },
        q4: {
          qes: "Can we play around with tailwindcss codes ?",
          ans: "Yes, You can. We actually have embeded codepen in each component section. You can modify the code / styles and rerun the codepen to get required design. ⚡",
        },
        q5: {
          qes: "Is there any pricing or subscription ?",
          ans: 'Nooooo 🙅, It is free of cost. We will atmost thrive to keep this website open sourced and free of cost to users. If you like our product very much and wish to contribute us some money which we use to enhance further, you can reach us at <a href="https://www.buymeacoffee.com/jsvigneshkanna" target="_blank" rel="noreferrer" class="text-fuchsia-500 underline">Here.</a>',
        },
        q6: {
          qes: "How can we use these UI components and where can we find documents ?",
          ans: 'You can actually play around with existing component codes in each component section, copy them and use them in your codebase. For more information check <a href="/documentation" target="_blank" rel="noreferrer" class="text-fuchsia-500 underline">Docs.</a>',
        },
        q7: {
          qes: "I would like to contribute to this website, how can I proceed ?",
          ans: 'Hurray 🕺💃, You can contribute from <a href="https://github.com/jsvigneshkanna/tailwind_ui_components" class="text-fuchsia-500 underline">Here.</a> We are so happy, that you checked our product and like to contribute !!!',
        },
      };
      if (document.getElementById("faqs").innerHTML == "") {
        for (const q in data) {
          document.getElementById("faqs").innerHTML += `
          <div class="wrapper bg-white mb-5 py-4 px-8 rounded-md shadow-wrap">
            <button class="toggle w-full text-xl bg-transparent flex justify-between items-center font-semibold border-none outline-none cursor-pointer py-4 px-0 focus:outline-none text-amber-500 ">
                ${data[q].qes}
                <i class="fa fa-plus icon p-2"></i>
            </button>
            <div class="content relative md:text-xl font-medium text-blue-800 text-justify max-h-0 leading-7 md:leading-8 overflow-hidden transition-mh ease-in-out duration-300 before:content-[''] before:absolute before:h-90 before:w-2 before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-faq1 bg-sky-50">
                <p class="p-4">${data[q].ans}</p>
            </div>
        </div>
                                    `;
        }
      }
      let toggles = document.getElementsByClassName("toggle");
      let contentDiv = document.getElementsByClassName("content");
      let icons = document.getElementsByClassName("icon");

      for (let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener("click", () => {
          if (
            parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight
          ) {
            toggles[i].style.color = "rgb(217 70 239)";
            icons[i].classList.remove("fa-plus");
            icons[i].classList.add("fa-minus");
            contentDiv[i].classList.add("max-h-80");
            contentDiv[i].classList.remove("max-h-0");
          } else {
            contentDiv[i].classList.remove("max-h-80");
            toggles[i].style.color = "rgb(245 158 11)";
            icons[i].classList.remove("fa-minus");
            icons[i].classList.add("fa-plus");
            contentDiv[i].classList.add("max-h-0");
          }
          for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
              contentDiv[j].classList.add("max-h-0");
              toggles[j].style.color = "rgb(245 158 11)";
              icons[j].classList.remove("fa-minus");
              icons[j].classList.add("fa-plus");
              contentDiv[j].classList.remove("max-h-80");
            }
          }
        });
      }
    }, 10);
  }, []);

  return (
    <div>
      <div className="banner bannerfaq">
        <div className="pb-6 text-white">
          <h1 className="px-3 mt-8 text-center font-semibold text-lg md:text-2xl underline underline-offset-8 font-sans">
            Frequently Asked Questions ?
          </h1>
          <div
            id="faqs"
            className="text-black m-auto mx-6 mt-9 md9:mx-20 xl:!mx-36 lg:!mx-32 px-3 md:px-8 py-10 max-w-96 font-sans"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
