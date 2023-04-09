import React from 'react';
import forecastIcon from '../../assets/weather.icon.jpeg'
import fitfolioIcon from '../../assets/powerlifting.jpg'
import gistIcon from '../../assets/coding.jpeg'
import schedulerIcon from '../../assets/to-do-list.webp'


function Projects() {
    return (
<div className="projects" id='projects'>
    <div id="fitfolio" class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
    <a href="https://fitfolio.herokuapp.com/" target="_blank">
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={fitfolioIcon} alt="photo of deadlift" />
            <h1 class="text-lg text-gray-700"> FitFolio </h1>
            <p class="text-xs text-gray-400 mt-4">Fitness based social network</p>
        </div>
        </a>
        <a href="https://gist.github.com/SumnerFrank/530435c2572464cbadd289c54724397a" target="_blank">
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={gistIcon} alt="photo of Frank Sumner" />
            <h1 class="text-lg text-gray-700"> RegEx Gist </h1>
            <p class="text-xs text-gray-400 mt-4">Gist of regular expressions in JavaScript</p>
        </div>
        </a>
        <a href="https://sumnerfrank.github.io/work-day-scheduler/" target="_blank">
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={schedulerIcon} alt="photo of Frank Sumner" />
            <h1 class="text-lg text-gray-700"> Workday Scheduler </h1>
            <p class="text-xs text-gray-400 mt-4">Daily checklist with time slots</p>
        </div>
        </a>
        <a href="https://sumnerfrank.github.io/weather-or-not/" target="_blank">
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={forecastIcon} alt="cloud icon" />
            <h1 class="text-lg text-gray-700"> 3 Day Forecast </h1>
            <p class="text-xs text-gray-400 mt-4">Third party API</p>
        </div>
        </a>
    </div>
</div>
    )
}

export default Projects