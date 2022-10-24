/* eslint-disable @next/next/no-img-element */
import {useEffect} from "react";
import Link from "next/link";

const FAQs = () => {
  useEffect(() => {
    setTimeout(() => {
      const data = {
        q1: {
          qus: "What is Tailwind Bootstrap",
          ans: "Tailwind css is an emerging CSS framework which makes our website/ app unique without styling compared to other market bootstraps.",
        },
        q2: {
          qus: "Who drives this website",
          ans: 'Our Contributers Drive the website (around 50+ open source contributors - and growing in 🚀 pace), for more visit <a href="/aboutUs" target="_blank" rel="noreferrer" class="text-blue-700">Here</a>',
        },
        q3: {
          qus: "What all components are there in this website",
          ans: 'There are a lot of components on this website, you can access them from <a href="/components" target="_blank" rel="noreferrer" class="text-blue-700">Here</a>',
        },
        q4: {
          qus: "Can we play around with tailwindcss codes",
          ans: "Yes,You can. We actually have embeded codepen in each component section. You can modify the code/ styles and rerun the codepen to get required design ⚡",
        },
        q5: {
          qus: "Is there any pricing or subscription",
          ans: 'Nooooo 🙅,It is free of cost. We will atmost thrive to keep this website open sourced and free of cost to users. If you like our product very much and wish to contribute us some money which we use to enhance further, you can reach us at <a href="https://www.buymeacoffee.com/jsvigneshkanna" target="_blank" rel="noreferrer" class="text-blue-700">Here</a>',
        },
        q6: {
          qus: "How can we use these UI components and where can we find documents",
          ans: 'You can actually play around with existing component codes in each component section, copy them and use them in your codebase. For more information check <a href="/documentation" target="_blank" rel="noreferrer" class="text-blue-700">Docs</a>',
        },
        q7: {
          qus: "I would like to contribute to this website, how can I proceed?",
          ans: 'Hurray 🕺💃, You can contribute from <a href="https://github.com/jsvigneshkanna/tailwind_ui_components" class="text-blue-700">Here</a>. We are so happy, that you checked our product and like to contribute !',
        },
      };
      if (document.getElementById("faqs").innerHTML == "") {
        for (const q in data) {
          document.getElementById(
            "faqs",
          ).innerHTML += `<div class="border-b font-medium border-black my-2 overflow-hidden">
                                    <div class="flex justify-between p-3 items-center ">
                                          <p>${data[q].qus}</p>
                                          <p class="ml-2 border border-black rounded-full  answer_btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg></p>
                                                </div>
                                                <hr>
                                                <p class="hidden p-3">${data[q].ans}</p>
                                                </div>`;
        }
      }
      Array.from(document.getElementsByClassName("answer_btn")).forEach((e) => {
        e.addEventListener("click", (ee) => {
          let ele = e.parentElement.parentElement.children[2];
          let ele1 = e.parentElement.children[0];
          let flag = false;
          Array.from(ele.classList).forEach((classes) => {
            if (classes == "hidden") flag = true;
          });
          if (flag) {
            ele.classList.remove("hidden");
            e.classList.add("origin-center");
            e.classList.add("rotate-180");
            e.classList.add("bg-blue-500");
            e.classList.remove("border");
            e.classList.add("text-white");
            ele1.classList.add("text-blue-500");
          } else {
            ele.classList.add("hidden");
            e.classList.remove("origin-center");
            e.classList.remove("rotate-180");
            e.classList.remove("bg-blue-500");
            e.classList.add("border");
            e.classList.remove("text-white");
            ele1.classList.remove("text-blue-500");
          }
        });
      });
    }, 100);
  }, []);

  return (
    <div>
      <div className="banner">
        <div class="pb-6 text-white">
          <h1 class="p-3 text-center font-semibold text-lg md:text-2xl underline underline-offset-8">
            Frequently Asked Questions
          </h1>
          <div
            id="faqs"
            class="text-black bg-stone-300 border m-auto mt-9 mx-4 md:mx-40 px-3 md:px-8 py-12 rounded-2xl border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
