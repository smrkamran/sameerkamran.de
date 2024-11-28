"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-full flex gap-16 justify-center">
      <div className="px-8 py-8 max-w-[40rem] glassmorphism max-h-max">
        <h1 className="text-4xl font-extrabold tracking-widest mb-2 ">
          Sameer Kamran
        </h1>
        <p className="text-lg tracking-wide leading-8">
          Sameer Kamran is a software engineer from India, currently living in
          the United States. He is passionate about building innovative and
          scalable solutions for various industries. He has a strong background
          in computer science and has recently joined the team at a renowned
          tech company.
        </p>
      </div>
      <div className="w-[20rem] rounded-2xl overflow-hidden relative">
        <Image
          className="w-auto object-contain"
          src={"/frankfurt.jpg"}
          alt="Frankfurt"
          width={0}
          height={0}
        />
        <div className="flex gap-2 px-2 py-1 absolute top-2 right-2 z-10 glassmorphism">
          <MapPin size={20} />
          <span className="font-semibold text-sm ">Frankfurt, Germany</span>
        </div>
      </div>
    </div>
  );
};

export default About;
