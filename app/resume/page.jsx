"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

// about data
const about = {
  title: "About Me",
  description: "I’m Syed Jahanzaib, a Front-end Developer with 3+ years of experience in building responsive and user-friendly web applications. Currently focusing on advancing my skills in Next.js, I’m available for freelance work.",
  Info: [
    { fieldName: "Name", fieldValue: "Syed Jahanzaib" },
    { fieldName: "Phone", fieldValue: "(+92) 315 214 7596" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Zoom", fieldValue: "Syed Jahanzaib" },
    { fieldName: "Nationality", fieldValue: "Pakistan" },
    { fieldName: "Email", fieldValue: "Imranjahanzaib96@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Urdu" },
  ],
};

// experience data
const experience = {
  icon: "/Assets/CV/Badge.png",
  title: "My Experience",
  description: "As a Front-end Developer and Web Application Developer with expertise in Affiliate Marketing, I specialize in crafting seamless digital solutions using React.js. I'm constantly refining my skills, particularly in building advanced web applications with Next.js. My work consistently focuses on creating user-centric, engaging experiences that drive meaningful results. Passionate about innovation, I thrive on transforming ideas into dynamic web solutions that make an impact.",
  items: [
    { company: "Blankon Technology Solution", Position: "Affiliate Marketing Specialist", duration: "2024 - Present" },
    { company: "Quantumverse", Position: "Front End Developer", duration: "2022 - Present" },
    { company: "W Digital", Position: "Digital Marketing Officer", duration: "Summer 2021" },
    { company: "Freelancer.com", Position: "Wordpress Developer", duration: "2018 - 2019" },
    { company: "Amazon Affiliate Freelance", Position: "Amazon Affiliate Marketing", duration: "2017 - 2018" },
    { company: "Content Writer Freelance", Position: "Professional | Content Writer", duration: "2012 - 2016" },
  ],
};

// education data
const education = {
  icon: "/Assets/CV/Badge.png",
  title: "My Education",
  description: "I have pursued various courses to enhance my skills in web development, database management, AI, and design. In 2023, I completed an Advanced React.js course on Coursera, deepening my expertise in dynamic user interfaces. In 2022, I learned Oracle SQL and Python for Machine Learning through Great Learning, improving my database management and AI application skills. Additionally, I studied the Applications of AI during that year. My journey began with a Graphic Design course on YouTube from 2020 to 2021, which introduced me to design principles and creativity.",
  items: [
    { institution: "Coursera", degree: "Advanced ReactJs", duration: "2023" },
    { institution: "Great Learning", degree: "Oracle SQL", duration: "2022" },
    { institution: "Great Learning", degree: "Python for machine learning", duration: "2022" },
    { institution: "Great Learning", degree: "Applications of AI", duration: "2021 - 2022" },
    { institution: "Youtube Course", degree: "Graphic Design", duration: "2020 - 2021" },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "I have experience in both front-end and back-end development using modern technologies. I build structured web pages with HTML5 and create responsive designs using CSS3. With JavaScript, I add dynamic features to websites, and I specialize in React.js for building component-based UIs. I use Next.js for server-side rendering and performance optimization. For styling, I rely on Tailwind CSS and for backend development, I use Node.js to create scalable APIs. I also design and prototype interfaces in Figma, ensuring a smooth design-to-development process.",
  skillList: [
    { icon: <FaHtml5 />, name: "html5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
  ],
};

// Resume component

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          {/* Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                {/* Grid for Info */}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.Info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-between xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;