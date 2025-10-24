"use client";

import * as React from "react";
import Link from "next/link";
import Hamburger from "./icons/Hamburger";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { links } from "./Nav";
import { ClickAwayListener } from "./ClickAwayListener";
import Backdrop from "./Backdrop";
import { cn } from "@/lib/utils";

export default function MobileNavbar() {
  const [open, setOpen] = React.useState(false);

  const height = open ? links.length * 60 : 0;

  function close() {
    setOpen(false);
  }

  return (
    <>
      {/* Backdrop mounted to body via portal. z-40 inside backdrop; nav has z-50 */}
      <Backdrop open={open} onClose={close} />

      <nav className={cn("xl:hidden px-4 py-3 relative z-50", open && "bg-white")}>
        <ClickAwayListener onClickAway={close}>
          <div className="flex items-center justify-between py-3 w-full">
            <Logo />
            <Button
              onClick={() => setOpen(prev => !prev)}
              variant="ghost"
              className="w-fit p-2"
              size="icon"
            >
              <Hamburger />
            </Button>
          </div>

          <div
            className={cn(
              `flex-1 justify-self-center pb-3 mt-2 overflow-hidden w-full absolute top-[90%] left-0`,
              open && "bg-white"
            )}
            style={{ height, transition: "height linear 500ms" }}
          >
            <ul className="space-y-8 overflow-hidden" style={{ height }}>
              {links.map((item, idx) => (
                <li key={idx} className="">
                  <Link href={item.href} className="text-center block hover:text-yellow" onClick={close}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ClickAwayListener>
      </nav>
    </>
  );
}
