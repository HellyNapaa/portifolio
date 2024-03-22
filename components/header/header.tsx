import Link from "next/link";
import React from "react";



// criar header com links para as páginas Home e About
export default function Header() {
  return (
    <header className="bg-black text-white pt-20 px-10 font-serif font-bold text-[20px] w-full max-w-7xl"> 
      <nav className="flex justify-between container">
            <Link href="/">
                 home
            </Link>
            <div className="flex space-x-4">
                <Link href="/about">about</Link>
                <Link href="/projects">projects</Link>
                <Link href="/contact">contact</Link>
            </div>
      </nav>
    </header>
  );
}
