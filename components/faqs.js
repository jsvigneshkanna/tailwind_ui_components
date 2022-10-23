/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import Link from "next/link";

const FAQs = () => {
      const [loading, setloading] = useState(true);
      useEffect(() => {
            setTimeout(() => {
                  setloading(false);
            }, 600);
      }, []);
      setTimeout(() => {
            const data = {
                  q1: {
                        qus: "What is Tailwind Bootstrap",
                        ans: "tailwind css is an emerging CSS framework which makes our website/ app unique without styling compared to other market bootstraps."
                  },
                  q2: {
                        qus: 'Who drives this website',
                        ans: 'Our Contributers Drive the website for more visit <a href="/aboutUs" class="text-blue-700">Here</a>'
                  },
                  q3: {
                        qus: 'What all components are there in this website',
                        ans: 'There is a lot of components on this website you can acess them from <a href="/components" class="text-blue-700">Here</a>'
                  },
                  q4: {
                        qus: 'Can we play around with tailwindcss codes',
                        ans: 'Yes,You can'
                  },
                  q5: {
                        qus: 'Is there any pricing or subscription',
                        ans: 'No,It is free of cost'
                  },
                  q6: {
                        qus: 'How can we use these ui components and where can we find docs',
                        ans: 'you can use them easily'
                  },
                  q7: {
                        qus: 'I would like to contribute to this website, how can I proceed',
                        ans: 'You can contribute from <a href="https://github.com/jsvigneshkanna/tailwind_ui_components" class="text-blue-700">Here</a>'
                  },
            }
            for (const q in data) {
                  document.getElementById('faqs').innerHTML += `<div class="border-b font-medium border-black my-2 overflow-hidden">
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
                                                </div>`
            }
            Array.from(document.getElementsByClassName('answer_btn')).forEach((e) => {
                  e.addEventListener('click', (ee) => {
                        let ele = e.parentElement.parentElement.children[2];
                        let ele1 = e.parentElement.children[0];
                        let flag = false;
                        Array.from(ele.classList).forEach((classes) => {
                              if (classes == 'hidden') flag = true;
                        })
                        if (flag) {
                              ele.classList.remove('hidden');
                              e.classList.add('origin-center');
                              e.classList.add('rotate-180');
                              e.classList.add('bg-blue-500');
                              e.classList.remove('border');
                              e.classList.add('text-white');
                              ele1.classList.add('text-blue-500');
                        }
                        else {
                              ele.classList.add('hidden');
                              e.classList.remove('origin-center');
                              e.classList.remove('rotate-180');
                              e.classList.remove('bg-blue-500');
                              e.classList.add('border')
                              e.classList.remove('text-white');
                              ele1.classList.remove('text-blue-500');
                        }
                  })
            })
      }, 100);
      return (
            <div>
                  {loading ? (
                        <div
                              style={{
                                    height: "100vh",
                                    backgroundColor: "rgba(0,0,0,0.99)",
                                    display: "flex",
                                    justifyContent: "center",
                              }}
                              className="banner">
                              <BallTriangle
                                    height="100"
                                    width="100"
                                    color="#e39a09"
                                    ariaLabel="loading"
                              />
                        </div>
                  ) : (
                        <div className="banner">
                              <div class="pb-6 text-white">
                                    <h1 class="p-3">Frequently Asked Questions</h1>
                                    <hr />
                                    <div id="faqs" class="text-black bg-white border w-3/5 m-auto mt-9 px-5 rounded-2xl border-black"></div>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default FAQs;
