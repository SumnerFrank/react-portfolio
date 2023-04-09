import React from 'react';
import aboutImage from "../../assets/IMG_2378.jpg";

function About() {
    return (
<div id='about' class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={aboutImage} alt="photo of Frank Sumner" />
     <h1 class="text-lg text-gray-700"> Frank Sumner </h1>
     <h3 class="text-sm text-gray-400 "> Full Stack Web Developer </h3>
     <p class="text-xs text-gray-400 mt-4">
     Hello and welcome to my portfolio! My name is Frank Sumner and I recently completed the Full Stack Web Development Bootcamp through the University of Central Florida. During my coding bootcamp, I learned various programming languages including JavaScript, HTML, and CSS. I also gained experience with various front-end frameworks such as React and Bootstrap. Additionally, I have experience with back-end frameworks such as Node.js and Express. I am proficient in Git and I have experience with database management using MongoDB. Furthermore, I am familiar with agile methodologies and test-driven development practices. 
     </p>
   </div>
 </div>
    )
}

export default About

