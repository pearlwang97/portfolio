import React from "react";
import ProjectOverview from "components/shared/ProjectOverview/ProjectOverview";

const VisualDesignPage = () => {
    const projects = [
        {
            imageSrc: "/images/design-3.png",
            altText: "",
            linkTo: "/project-3",
            title: "2D Realistic Radio Vector Art",
            goal: "The objective of this project was to showcase advanced proficiency in Adobe Illustrator by creating a realistic 2d radio vector design that emulates 3d object for the Illustration class (MDIA2166). It aims to demonstrate the student’s expertise as a digital designer, particularly in mastering the fundamental tools for shaping objects and intricacies of crafting vector designs.",
            role: "Graphic Designer",
            tools: [
                { title: "Adobe Illustrator", iconSrc: "/images/ai-logo.svg", altText: "AI" },
            ],
            horizontalAlign: "right",
        },
        {
            imageSrc: "/images/design-4.png",
            altText: "bloomBlox photo",
            linkTo: "/project-4",
            title: "BloomBox Logo Design",
            goal: "The aim of this assignment is to develop multiple logo variations for a product or service. This project highlights the student's skill in combining creativity with strategic branding, showcasing proficiency in visual design, brand consistency, and technical skills in Adobe Illustrator.",
            role: "Graphic Designer",
            tools: [
                { title: "Adobe Illustrator", iconSrc: "/images/ai-logo.svg", altText: "AI" },
                { title: "Adobe Photoshop", iconSrc: "/images/ps-logo.svg", altText: "PS" },
            ],
            horizontalAlign: "left",
        },
        {
            imageSrc: "/images/design-5.jpg",
            altText: "",
            linkTo: "/project-5",
            title: "Papercut Illustrations: Chinese Zodiac Collection",
            goal: "The aim of this project is to celebrate and promote Chinese cultural heritage through the fusion of traditional art and modern design by reimagining the Chinese zodiacs through the traditional art of papercutting.",
            role: "Graphic Designer",
            tools: [
                { title: "Adobe Illustrator", iconSrc: "/images/ai-logo.svg", altText: "AI" },
                { title: "Adobe Photoshop", iconSrc: "/images/ps-logo.svg", altText: "PS" },
            ],
            horizontalAlign: "right",
        },
        {
            imageSrc: "/images/cyber-era-1.jpg",
            altText: "bloomBlox photo",
            linkTo: "/project-6",
            title: "Cyber Era Poster Design",
            goal: "The 'Cyber Era' poster was created to deliver a compelling visual narrative for a digital audience, blending photography with original vector illustrations in a non-destructive manner to demonstrate the application of design principles and technical skill.",
            role: "Graphic Designer",
            tools: [
                { title: "Adobe Illustrator", iconSrc: "/images/ai-logo.svg", altText: "AI" },
                { title: "Adobe Photoshop", iconSrc: "/images/ps-logo.svg", altText: "PS" },
            ],
            horizontalAlign: "left",
        },
    ];
	return (
		<div>
			{/* <DesignSection /> */}
			{projects.map((section, index) => (
				<ProjectOverview key={index} {...section} index={index} />
			))}
		</div>
	);
}

export default VisualDesignPage;