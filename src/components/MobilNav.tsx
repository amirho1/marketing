"use client";

import * as React from "react";
import Link from "next/link";
import Hamburger from "./icons/Hamburger";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { links } from "./Nav";

export default function MobileNavbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className=" xl:hidden px-4 py-3">
      <div className="flex items-center justify-between py-3 w-full">
        <Logo />
        <Button onClick={() => setOpen(!open)} variant="ghost" className="w-fit p-2" size="icon">
          <Hamburger />
        </Button>
      </div>

      <div className={`flex-1 justify-self-center pb-3 mt-8  ${open ? "block" : "hidden"}`}>
        <ul className="space-y-8">
          {links.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="text-center">
                <div>{item.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
