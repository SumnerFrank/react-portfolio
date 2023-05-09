import React from 'react';
import forecastIcon from '../../assets/weather.icon.jpeg'
import fitfolioIcon from '../../assets/powerlifting.jpg'
import gistIcon from '../../assets/coding.jpeg'
import schedulerIcon from '../../assets/to-do-list.webp'


function Projects() {
    return (
<div>
    <div class="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
        <div class="bg-[#F4F5FA] p-10 rounded-xl">
            <div class="flex flex-col justify-center items-center text-center">
                <div class="max-w-sm font-bold font-sans">
                    Check out a few of my projects!
                </div>
            </div>
            <div
                class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-stretch mt-10">
                <div class="bg-[#FFFBEC] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto h-full">
                        <img src={fitfolioIcon} alt="photo of deadlift" class="w-20"/>
                        <div class="mt-3 font-semibold text-lg">FitFolio</div>
                        <div class="text-sm font-light">Social network and e-commerce store revolving around a fitness community</div>
                        <div class="my-4">
                            <span class="font-bold text-base">Project Manager, Full-Stack Engineer</span>
                            <br/>
                            <span class="font-light text-sm">MERN Stack Build, Javascript, TailwindCSS, Stripe E-Commerce</span>
                        </div>
                        <a href="https://fitfolio-v2.herokuapp.com/" target="_blank">
                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            View Site!
                        </button>
                        </a>
                        <a href="https://github.com/SumnerFrank/fitfolio-v2" target="_blank">
                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            GitHub
                        </button>
                        </a>
                    </div>
                </div>

                <div class="bg-[#F9ECFF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto h-full">
                        <img src={forecastIcon} class="w-20"/>
                        <div class="mt-3 font-semibold text-lg">Weather Forecast</div>
                        <div class="text-sm font-light w-60 md:w-auto">3 day weather forecast with saved search history</div>
                        <div class="my-4">
                            <span class="font-bold text-base">Full-Stack Engineer</span>
                            <br/>
                            <span class="font-light text-sm">3rd Party API, Bootstrap, Javascript</span>
                        </div>

                        <a href="" target="_blank">
                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            View Site!
                        </button>
                        </a>
                        <a href="" target="_blank">
                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            GitHub
                        </button>
                        </a>
                    </div>
                </div>


                <div class="bg-[#ECEEFF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto h-full">
                        <img src={gistIcon} class="w-20"/>
                        <div class="mt-3 font-semibold text-lg">RegEx Gist</div>
                        <div class="text-sm font-light w-60 md:w-auto">In-depth explanation of Javascript Regular Expressions</div>
                        <a href="" target="_blank">
                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            GitHub
                        </button>
                        </a>
                    </div>
                </div>

                <div class="bg-[#ECEEFF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto h-full">
                        <img src={schedulerIcon} class="w-20"/>
                        <div class="mt-3 font-semibold text-lg">Workday Scheduler</div>
                        <div class="text-sm font-light w-60 md:w-auto">Hourly schedule for daily task management</div>
                        <div class="my-4">
                            <span class="font-bold text-base">Full-Stack Engineer</span>
                            <br/>
                            <span class="font-light text-sm">Javascript</span>
                        </div>
                        <a href="" target="_blank">
                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            View Site!
                        </button>
                        </a>
                        <a href="" target="_blank">
                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            GitHub
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <a href="https://github.com/SumnerFrank" target="_blank">
                <button class="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">View All On GitHub</button>
                </a>
            </div>
        </div>
    </div>
    </div>
);
}

export default Projects

{/* <div className="projects " id='projects'>
    <div id="fitfolio" class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
        <ul class="flex flex-wrap">
            <li>
                <a href="https://github.com/SumnerFrank/fitfolio-v2" target="_blank">
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                        <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={fitfolioIcon} alt="photo of deadlift" />
                        <h1 class="text-lg text-gray-700"> FitFolio </h1>
                        <p class="text-xs text-gray-400 mt-4">Fitness based social network</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://gist.github.com/SumnerFrank/530435c2572464cbadd289c54724397a" target="_blank">
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                        <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={gistIcon} alt="photo of Frank Sumner" />
                        <h1 class="text-lg text-gray-700"> RegEx Gist </h1>
                        <p class="text-xs text-gray-400 mt-4">Gist of regular expressions in JavaScript</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://sumnerfrank.github.io/work-day-scheduler/" target="_blank">
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                        <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={schedulerIcon} alt="photo of Frank Sumner" />
                        <h1 class="text-lg text-gray-700"> Workday Scheduler </h1>
                        <p class="text-xs text-gray-400 mt-4">Daily checklist with time slots</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://sumnerfrank.github.io/weather-or-not/" target="_blank">
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                        <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={forecastIcon} alt="cloud icon" />
                        <h1 class="text-lg text-gray-700"> 3 Day Forecast </h1>
                        <p class="text-xs text-gray-400 mt-4">Third party API</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div> */}