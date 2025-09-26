"use client";

import { motion } from "motion/react";
import Section from "./Section";
import Badge from "./ui/Badge";

export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend & APIs",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "PHP", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "RESTful APIs", level: 88 },
        { name: "Express.js", level: 82 },
      ],
    },
    {
      category: "CMS, Design & Tools",
      technologies: [
        { name: "WordPress", level: 90 },
        { name: "Storyblok", level: 80 },
        { name: "Webflow", level: 85 },
        { name: "Figma", level: 92 },
        { name: "Git", level: 95 },
      ],
    },
  ];

  const expertiseAreas = [
    "Responsive Web Design",
    "Single Page Applications",
    "RESTful & GraphQL APIs",
    "CMS Development",
    "User Experience & Accessibility",
    "Agile / Scrum Development",
    "Test-Driven Development",
    "Performance Optimisation & SEO",
    "Cross-browser Compatibility",
    "Mobile-first Development",
    "Version Control (Git)",
    "CI/CD Pipelines",
  ];

  return (
    <Section id="skills" className="bg-foreground">
      <div className="mb-14">
        <h2 className="text-5xl text-center">Skills & Expertise</h2>
        <img
          src={"/assets/line.svg"}
          className="w-[70%] md:w-[23%] mx-auto h-auto mt-4 mb-2"
          aria-hidden
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            viewport={{ once: true }}
            className="bg-off-white-color backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-black hover:shadow-xl hover:border-red-300 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center">
              {skillGroup.category}
            </h3>
            <div className="space-y-6">
              {skillGroup.technologies.map((tech, techIndex) => (
                <div key={techIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-secondary-shade-color">
                      {tech.name}
                    </span>
                    <span className="text-sm text-background">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-black rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-cyber h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold mt-12 mb-8">
          Areas of Expertise
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {expertiseAreas.map((label, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Badge className="px-4 py-2 text-sm font-medium bg-gradient-peach hover:bg-gradient-primary hover:text-white hover:scale-105 transition-all duration-300 cursor-default border-pink-200">
                {label}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
