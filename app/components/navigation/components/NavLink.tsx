import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  href: string
  title: string
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return <Link className='text-[16px] text-black font-bold' href={`#${href}`}>{title}</Link>
};

export default NavLink;