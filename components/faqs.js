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
          ans: 'Our Contributers Drive the website (around 50+ open source contributors - and growing in 🚀 pace), for more visit <a href="/aboutUs" target="_blank" rel="noreferrer" class="text-[#ed670b]">Here.</a>',
        },
        q3: {
          qes: "What all components are there in this website ?",
          ans: 'There are lots of components such as Button, Form, Feature Card etc. Which can save lot of time for a Frontv End Dev. You can access them from <a href="/components" target="_blank" rel="noreferrer" class="text-[#ed670b]">Here.</a>',
        },
        q4: {
          qes: "Can we play around with tailwindcss codes ?",
          ans: "Yes, You can. We actually have embeded codepen in each component section. You can modify the code / styles and rerun the codepen to get required design. ⚡",
        },
        q5: {
          qes: "Is there any pricing or subscription ?",
          ans: 'Nooooo 🙅, It is free of cost. We will atmost thrive to keep this website open sourced and free of cost to users. If you like our product very much and wish to contribute us some money which we use to enhance further, you can reach us at <a href="https://www.buymeacoffee.com/jsvigneshkanna" target="_blank" rel="noreferrer" class="text-[#ed670b]">Here.</a>',
        },
        q6: {
          qes: "How can we use these UI components and where can we find documents ?",
          ans: 'You can actually play around with existing component codes in each component section, copy them and use them in your codebase. For more information check <a href="/documentation" target="_blank" rel="noreferrer" class="text-[#ed670b]">Docs.</a>',
        },
        q7: {
          qes: "I would like to contribute to this website, how can I proceed ?",
          ans: 'Hurray 🕺💃, You can contribute from <a href="https://github.com/jsvigneshkanna/tailwind_ui_components" class="text-[#ed670b]">Here.</a> We are so happy, that you checked our product and like to contribute !!!',
        },
      };
      if (document.getElementById("faqs").innerHTML == "") {
        for (const q in data) {
          document.getElementById("faqs").innerHTML += `
          <div class="wrapper bg-slate-100 mb-5 py-4 px-8 rounded-md shadow-wrap">
            <button class="toggle w-full md:text-2xl lineh bg-transparent flex justify-between items-center font-semibold border-none outline-none cursor-pointer py-4 px-0 focus:outline-none text-[#ed670b] transition-all duration-500 text-base leading-7" open="false">
                ${data[q].qes}
                <i class="fa fa-plus icon p-2 transition-all duration-500 ease-in-out"></i>
            </button>
            <div class="content relative md:text-xl font-medium text-[#310635] text-justify max-h-0 leading-6 md:leading-8 overflow-hidden transition-mh ease-in duration-500 before:content-[''] before:absolute before:h-90 before:w-2 before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-[#ed670b] text-sm">
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
       const open = toggles[i].getAttribute("open");
        toggles[i].addEventListener("click", () => {
          if (open == "false") {
            toggles[i].style.color = "#200a59";
            icons[i].classList.add("rotate-45");
            contentDiv[i].classList.add("max-h-80");
            contentDiv[i].classList.remove("max-h-0");
            open = "true";
          } else {
            contentDiv[i].classList.remove("max-h-80");
            toggles[i].style.color = "rgb(237,103,11)";
            icons[i].classList.remove("rotate-45");
            contentDiv[i].classList.add("max-h-0");
            open = "false";
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
