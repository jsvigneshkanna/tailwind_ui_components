import { stripIndent } from "react-codepen-prefill-embed";

const hover_navbar = stripIndent`
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        #navlinks {
            animation: translate .5s;
        }

        @keyframes translate {
            0% {
                transform: translateY(-100%);
            }

            100% {
                transform: translateY(0);
            }
        }

        .athover {
            display: inline-block;
            backface-visibility: hidden;
            vertical-align: middle;
            position: relative;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            tranform: translateZ(0);
            transition-duration: .3s;
            transition-property: transform;
        }

        .athover:before {
            position: absolute;
            pointer-events: none;
            z-index: -1;
            content: '';
            top: 100%;
            left: -15%;
            margin-top: 15px;
            height: 12px;
            width: 130%;
            opacity: 0;
            background: -webkit-radial-gradient(center, ellipse, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
            background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
            /* W3C */
            transition-duration: 0.3s;
            transition-property: transform, opacity;
        }

        .athover:hover,
        .athover:active,
        .athover:focus {
            transform: translateY(-5px);
        }

        .athover:hover:before,
        .athover:active:before,
        .athover:focus:before {
            opacity: 1;
            transform: translateY(-5px);
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    keyframes: {
                        sbounce: {
                            "16.65%": { transform: 'translateY(8px)', },
                            "33.3%": { transform: 'translateY(-6px)', },
                            "49.95%": { transform: 'translateY(4px)', },
                            "66.6%": { transform: 'translateY(-2px)', },
                            "83.25%": { transform: 'translateY(1px)', },
                            "100%": { transform: 'translateY(0)', },
                        }
                    },
                    animation: {
                        'Nbounce': 'sbounce 2s linear',
                    },
                }
            }
        }
    </script>
</head>

<body bgcolor="black">
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0">
        <div class="container flex flex-wrap md:justify-center items-center mx-auto justify-end">
            <div class="flex items-center w-screen justify-end">
                <button type="button" id="hamburger"
                    class="relative w-10 h-10 md:hidden">
                    <div role="hidden" id="line"
                        class="inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300"></div>
                    <div role="hidden" id="line2"
                        class="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300">
                    </div>
                    <div role="hidden" id="line3"
                        class="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300">
                    </div>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full md:flex md:w-auto" id="navbar-sticky"">
                <ul
                    class=" flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-24 md:mt-0 md:text-sm
                md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black items-center">
                <li>
                    <a href="https://tailwindcsscomponents.vercel.app/components/navbars"
                    target="_blank"
                    rel="noreferrer"
                    class="nav py-2 pr-4 pl-3 m-1 text-gray-700 md:p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700 uppercase athover"
                    aria-current="page">Home</a>
                </li>
                <li>
                    <a href="https://tailwindcsscomponents.vercel.app/components/navbars"
                    target="_blank"
                    rel="noreferrer"
                    class="nav py-2 pr-4 pl-3 m-1 text-gray-700 md:p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700 uppercase athover"
                    aria-current="page">About</a>
                </li>
                <li>
                    <a href="https://tailwindcsscomponents.vercel.app/components/navbars"
                    target="_blank"
                    rel="noreferrer"
                    class="nav py-2 pr-4 pl-3 m-1 text-gray-700 md:p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700 uppercase athover"
                    aria-current="page">Portfolio</a>
                </li>
                <li>
                    <a href="https://tailwindcsscomponents.vercel.app/components/navbars"
                    target="_blank"
                    rel="noreferrer"
                    class="nav py-2 pr-4 pl-3 m-1 text-gray-700 md:p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700 uppercase athover"
                    aria-current="page">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    <div>
        <div class="text-center mt-20">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl pt-2">
                <span class="block xl:inline font-medium text-3xl text-white">Simple Navigation</span>
            </h1>
            <p
                class="mt-3 text-base mx-auto text-white !sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl max-w-xs">
                Based on Hover.css, the goal of this pen is to create a simple navigation bar
                that can be easily reused in both mobile and native displays. Mouse over the nav text for animation!</p>
        </div>
        <script>
            function onLoadBounce () {
                function toggleActive (element, index, maxIndex) {
                    setTimeout(function () {
                        element.classList.add('animate-Nbounce');
                        setInterval(function () {
                            if (index > maxIndex) {
                                return;
                            }
                            element.classList.remove('animate-Nbounce');
                        }, 500);
                    }, 500 * index);
                }

                function runLoop () {
                    var allItems = document.getElementsByClassName('nav');
                    for (var index = 0; index < allItems.length; index++) {
                        var element = allItems[index];
                        toggleActive(element, index, allItems.length);
                    }
                }
                runLoop();
            }
            window.addEventListener('load', onLoadBounce);
            let hamburger = document.querySelector('#hamburger')
            let navlinks = document.querySelector('#navbar-sticky')

            let line = hamburger.querySelector('#line')
            let line2 = hamburger.querySelector('#line2')
            let line3 = hamburger.querySelector('#line3')

            hamburger.addEventListener('click', function () {
                if (navlinks.classList.contains('hidden')) {
                    navlinks.classList.remove('hidden')
                    line.classList.add('rotate-45', 'absolute')
                    line2.classList.add('-rotate-45', 'absolute')
                    line2.classList.remove('mt-1.5')
                    line3.classList.add('hidden')
                    line3.classList.add('rotate-90', 'absolute')
                } else {
                    navlinks.classList.add('hidden')
                    line.classList.remove('rotate-45', 'absolute')
                    line2.classList.remove('-rotate-45', 'absolute')
                    line2.classList.add('mt-1.5')
                    line3.classList.remove('hidden')
                    line3.classList.remove('rotate-90', 'absolute')
                }
            })
        </script>
</body>`;
export default hover_navbar;
