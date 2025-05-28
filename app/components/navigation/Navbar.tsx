import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import NavLink from "./components/NavLink";

// ui
import Sheet from "./components/Sheet";

const Navbar = () => {
  return (
    <div
      id="nav"
      className="absolute right-0 mt-16 z-10 flex flex-row justify-between px-16 py-6 lg:py-0"
    >
      <div className="hidden lg:flex flex-row py-4 gap-[3.5rem]">
        <NavLink title="Accueil" href="home" />
        <NavLink title="Nos produits" href="products" />
        <div>
          <Link
            href="#contact"
            className="text-white bg-brand px-4 py-[10px] rounded-[8px] hover:bg-brand-darker duration-300"
          >
            Nous contacter
          </Link>
        </div>
      </div>
      <Sheet />
    </div>
  );
};

export default Navbar;
