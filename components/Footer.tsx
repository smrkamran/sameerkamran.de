"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
