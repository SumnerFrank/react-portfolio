import React from 'react';
import mainPhoto from './assets/IMG_2378.jpg'

function About() {
    return (
<div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={mainPhoto} alt="photo of Frank Sumner" />
     <h1 class="text-lg text-gray-700"> Frank Sumner </h1>
     <h3 class="text-sm text-gray-400 "> Full Stack Web Developer </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
   </div>
 </div>
    )
}

export default About