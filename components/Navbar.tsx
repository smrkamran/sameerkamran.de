"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { MessageCircleCode } from "lucide-react";
import { motion } from "framer-motion";

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

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-center items-center w-full">
      <div className="flex  items-center gap-4 flex-1 justify-center">
        {navBarItems.map((item) => (
          <Link
            key={item.href}
            className={cn(
              "text-[0.8rem] md:text-[1rem] lg:text-[1rem] tracking-widest py-1 px-2 border border-transparent rounded-sm hover:border-primary-light hover:text-primary-light",
              pathName === item.href ? "border-primary-light text-primary-light" : ""
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Button className="bg-primary" variant="default" size={"lg"}>
          <MessageCircleCode />
          Say Hi! 
        </Button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
