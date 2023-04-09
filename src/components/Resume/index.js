import React from 'react';
import resumeIcon from '../../assets/resumeIcon.png';
import resume from '../../assets/resume.pdf';

function Resume() {
    return (
<div id='resume' class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <a href={resume} target="_blank" download><img class="mb-3 w-32 h-32 shadow-lg mx-auto" src={resumeIcon} alt="photo of deadlift" /></a>
        <h1 class="text-lg text-gray-700"> Resume </h1>
        <h3 class="text-sm text-gray-400">Click To Download</h3>

    </div>
</div>
    )
}

export default Resume
