"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navBarItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <nav className="flex items-center justify-center gap-4">
        {navBarItems.map((item) => (
          <Link
            key={item.href}
            className="text-[0.8rem] md:text-[1rem] lg:text-[1rem] tracking-widest py-1 px-2 border border-transparent rounded-sm hover:border-white"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div>
            <Image
              className="rounded-full filter grayscale-[70%] contrast-200 transition duration-300 hover:filter-none"
              src="/Sameer_DP.jpg"
              alt="Sameer Kamran Photo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.5rem] md:text-[3rem] lg:text-[4rem]  tracking-wider">
              Sameer Kamran
            </h1>

            <div className="flex gap-4 items-start md:items-center lg:items-center">
              <div className="flex gap-2">
                <Code size={20} />
                <p className="text-[0.9rem] md:text-[0.9rem] ld:text-[1.1rem] tracking-widest">
                  Software Engineer
                </p>
              </div>
              <div className="flex gap-2">
                <BrainCircuit size={20} />
                <p className="text-[0.9rem] md:text-[0.9rem] ld:text-[1.1rem] tracking-widest">
                  Learner
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            className=""
            href="https://www.linkedin.com/in/sameer-kamran-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              className="invert"
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={25}
              height={25}
            />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            className=""
            href="https://x.com/smrkamran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              className="invert"
              src="/x.svg"
              alt="X icon"
              width={25}
              height={25}
            />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            className=""
            href="https://github.com/smrkamran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              className="invert"
              src="/github.svg"
              alt="Github icon"
              width={25}
              height={25}
            />
          </a>
        </motion.div>
      </footer>
    </div>
  );
}
