"use client"
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent
} from "@/app/components/ui/sheet"
import Link from "next/link"
import { AlignJustify, X } from 'lucide-react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Sheet open={isOpen}>
      <button onClick={() => setIsOpen(true)} className="block lg:hidden ml-auto">
        <AlignJustify className="text-brand" />
      </button>
      <SheetContent className='opacity-[80%] rounded-l-[20px] py-0 w-[50%] bg-gradient-to-t from-black to to-brand border-0'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-8 mt-10 text-white'>
            <button className='absolute right-5 top-5' onClick={() => setIsOpen(false)}>
              <X />
            </button>
            <Link onClick={() => setIsOpen(false)} className='text-md' href="#home">Accueil</Link>
            <Link onClick={() => setIsOpen(false)} className='text-md' href="#products">Nos produits</Link>
            <Link onClick={() => setIsOpen(false)} className='text-md' href="#contact">Nous contacter</Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;