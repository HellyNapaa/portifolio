import React from "react";

export default function AboutBody() {
  return (
    <main>
        <section className="text-center text-sky-100 mt-28">
            <h1 className="text-3xl font-sans font-semibold">ABOUT</h1>
            <h2 className="text-[50px] font-serif font-bold leading-none mt-14 max-w-7xl">
I love diving into data and exploring AI, always up for a challenge. When I'm not doing that, I'm a big fan of gaming, diving into virtual worlds for some relaxation and fun.</h2>
            <div className ="grid grid-cols-2">
            <div>
            <p className="text-[16px] font-serif max-w-xl mt-10 text-left"> 
Based in Maria da Fé, MG, Brazil, I'm currently completing my degree in Information Systems at the Federal University of Itajubá. Proficient in Python, Power BI, React, SQL Server, and PostgreSQL, I'm also pursuing Azure certifications in AI. Additionally, I hold an Oracle Cloud Infrastructure 2023 Certified Architect Associate and Oracle Foundation certification. </p>
            </div>
            <div>
            <p className="text-[16px] font-serif max-w-xl mt-10 text-left">I'm a data scientist and AI enthusiast, always looking for new ways to solve problems and improve the world around me. I have a background in computer science and a passion for learning new things. I'm always up for a challenge and love diving into complex problems to find creative solutions.</p>
            </div>
            </div>
        </section>
    </main>
  );
}