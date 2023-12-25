"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bibado",
    description: "This website is related to baby products!",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://bibado.lt",
    previewUrl: "https://bibado.lt",
  },
  {
    id: 2,
    title: "Darturcrafts",
    description: "This website is related to activity board for children",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://darturcrafts.lv",
    previewUrl: "https://darturcrafts.lv",
  },
  {
    id: 3,
    title: "Tapeter",
    description: "This website is related to Wallpapers",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https:///tapeter.eu",
    previewUrl: "https://tapeter.eu",
  },
  
    {
      id: 4,
      title: "Gartsidestreetdental",
      description: "This website is about dentist",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://gartsidestreetdental.com/",      // Update with complete URL
      previewUrl: "https://gartsidestreetdental.com/",  // Update with complete URL
    },
    
  {
    id: 5,
    title: "My USA Business",
    description: "This website is about giving guidance to people",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://mub-new-website-gitmanager10.vercel.app/",
    previewUrl: "https://mub-new-website-gitmanager10.vercel.app/",
  },
  {
    id: 6,
    title: "M.IDEA Creative group",
    description: "This website is about digital solutions",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://midea-new-website-gitmanager10.vercel.app/",
    previewUrl: "https://midea-new-website-gitmanager10.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
