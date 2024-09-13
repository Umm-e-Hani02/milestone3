"use strict";
// // Listing elements
var _a;
// document.getElementById("resume-form")?.addEventListener("submit", function(event){
//     event.preventDefault();
//     // type assertion
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const degreeElement = document.getElementById("degree") as HTMLInputElement;
//     const institutionElement = document.getElementById("institution") as HTMLInputElement;
//     const graduationYearElement = document.getElementById("graduationYear") as HTMLInputElement;
//     const skillsElement = document.getElementById("skills") as HTMLInputElement;
//     const workExperienceElement = document.getElementById("workExperience") as HTMLInputElement;
//     if(nameElement && emailElement && degreeElement && institutionElement && graduationYearElement && skillsElement && workExperienceElement){
//         const name = nameElement.value
//         const email = emailElement.value
//         const degree = degreeElement.value
//         const institution = institutionElement.value
//         const graduationYear = graduationYearElement.value
//         const skills = skillsElement.value
//         const workExperience = workExperienceElement.value
//             // create resume output
//             const resumeOutput = `
//             <h2>Personal Information</h2>
//             <p><strong>Name:</strong> ${name} </p>
//             <p><strong>Email:</strong> ${email} </p>
//             <h2>Education</h2>
//             <p><strong>Degree:</strong> ${degree} </p>
//             <p><strong>Institution:</strong> ${institution} </p>
//             <p><strong>Graduation Year:</strong> ${graduationYear} </p>
//             <h2>Skills</h2>
//             <p><strong>Skills:</strong> ${skills} </p>
//             <h2>Work Experience</h2>
//             <p><strong>Work Experience:</strong> ${workExperience} </p>`
//             const resumeOutputElement = document.getElementById(resumeOutput)
//             if(resumeOutputElement){
//                 resumeOutputElement.innerHTML = resumeOutput
//             } else {
//                 console.error("The resume output elements are missing")
//             }
//     }
// })
// document.getElementById("resume-form")?.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // Type assertions to make sure we are selecting the right elements
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const degreeElement = document.getElementById("degree") as HTMLInputElement;
//     const institutionElement = document.getElementById("institution") as HTMLInputElement;
//     const graduationYearElement = document.getElementById("graduationYear") as HTMLInputElement;
//     const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
//     const workExperienceElement = document.getElementById("workExperience") as HTMLTextAreaElement;
//     if (nameElement && emailElement && degreeElement && institutionElement && graduationYearElement && skillsElement && workExperienceElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const degree = degreeElement.value;
//         const institution = institutionElement.value;
//         const graduationYear = graduationYearElement.value;
//         const skills = skillsElement.value;
//         const workExperience = workExperienceElement.value;
//         // Create resume output as HTML string
//         const resumeOutput = `
//             <h2>Personal Information</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <h2>Education</h2>
//             <p><strong>Degree:</strong> ${degree}</p>
//             <p><strong>Institution:</strong> ${institution}</p>
//             <p><strong>Graduation Year:</strong> ${graduationYear}</p>
//             <h2>Skills</h2>
//             <p><strong>Skills:</strong> ${skills}</p>
//             <h2>Work Experience</h2>
//             <p><strong>Work Experience:</strong> ${workExperience}</p>`;
//         // Display the resume in the output div
//         const resumeOutputElement = document.getElementById("resume-output");
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error("The resume output element is missing");
//         }
//     } else {
//         console.error("One or more form elements are missing");
//     }
// });
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertions to make sure we are selecting the right elements
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const degreeElement = document.getElementById("degree");
    const institutionElement = document.getElementById("institution");
    const graduationYearElement = document.getElementById("graduationYear");
    const skillsElement = document.getElementById("skills");
    const workExperienceElement = document.getElementById("workExperience");
    if (nameElement && emailElement && degreeElement && institutionElement && graduationYearElement && skillsElement && workExperienceElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const degree = degreeElement.value;
        const institution = institutionElement.value;
        const graduationYear = graduationYearElement.value;
        const skills = skillsElement.value;
        const workExperience = workExperienceElement.value;
        // Create resume output as HTML string
        const resumeOutput = `
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        
            <h2>Education</h2>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institution:</strong> ${institution}</p>
            <p><strong>Graduation Year:</strong> ${graduationYear}</p>
        
            <h2>Skills</h2>
            <p><strong>Skills:</strong> ${skills}</p>
        
            <h2>Work Experience</h2>
            <p><strong>Work Experience:</strong> ${workExperience}</p>`;
        // Display the resume in the output div
        const resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
