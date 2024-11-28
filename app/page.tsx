"use client";

import { BrainCircuit, Code } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 justify-center items-center sm:items-start">
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
  );
}
