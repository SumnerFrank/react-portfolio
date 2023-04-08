import React from 'react';
import forecastIcon from '../../assets/weather.icon.jpeg'
import fitfolioIcon from '../../assets/powerlifting.jpg'
import gistIcon from '../../assets/coding.jpeg'
import schedulerIcon from '../../assets/to-do-list.webp'


function Projects() {
    return (
<div className="projects" id='projects'>
    <div id="fitfolio" class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={fitfolioIcon} alt="photo of deadlift" />
            <h1 class="text-lg text-gray-700"> FitFolio </h1>
            <h3 class="text-sm text-gray-400 "> Handlebars,  </h3>
            <p class="text-xs text-gray-400 mt-4">FitFolio is a app</p>
        </div>
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={gistIcon} alt="photo of Frank Sumner" />
            <h1 class="text-lg text-gray-700"> RegEx Gist </h1>
            <h3 class="text-sm text-gray-400 "> Full Stack Web Developer </h3>
            <p class="text-xs text-gray-400 mt-4">FitFolio is a app</p>
        </div>
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={schedulerIcon} alt="photo of Frank Sumner" />
            <h1 class="text-lg text-gray-700"> Workday Scheduler </h1>
            <h3 class="text-sm text-gray-400 "> Full Stack Web Developer </h3>
            <p class="text-xs text-gray-400 mt-4">FitFolio is a app</p>
        </div>
            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={forecastIcon} alt="cloud icon" />
            <h1 class="text-lg text-gray-700"> 3 Day Forecast </h1>
            <h3 class="text-sm text-gray-400 "> Full Stack Web Developer </h3>
            <p class="text-xs text-gray-400 mt-4">FitFolio is a app</p>
        </div>
    </div>
</div>
    )
}

export default Projects