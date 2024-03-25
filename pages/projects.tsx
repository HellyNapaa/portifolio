import Header from "../components/header/header";
import ProjectsBody from "@/components/ProjectsBody/projectsBody"; 
import React from 'react';

export default function Projects() {
  return (
    
    <div  className="w-full h-full min-h-screen bg-[url('/bg.svg')] flex flex-col items-center before:content-[''] before:absolute before:inset-0 before:bg-black before:-z-10">
      <Header />
        <ProjectsBody />
    </div>
  );
}
