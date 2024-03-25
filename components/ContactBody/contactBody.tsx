import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ContactBody() {
  return (
    <main>
        <section className="text-center text-sky-100 mt-28">
            <h1 className="text-3xl font-sans font-semibold">CONTACT</h1>
            <h2 className="text-[50px] font-serif font-bold leading-none mt-14">Let's keep in touch</h2>
            <p className="text-[16px] font-serif">hellennapoleao@unifei.edu.br</p>
        
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/hellen-napoleão-a75261210/">
                <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10"/>
                </a>
                <a href="https://github.com/HellyNapaa">
                <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
                </a>
            </div>


        </section>
    </main>
  );
}