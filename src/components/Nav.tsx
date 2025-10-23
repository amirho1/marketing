import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { trans } from "@/lib/utils";
import Telephone from "./Telephone";

export const links = [
  {
    name: "Marketing Solutions",
    href: "#solutions",
    "aria-description": "Link to Solutions section",
  },
  {
    name: "Who We Help",
    href: "#Who_We_Help",
    "aria-description": "Link to Who We Help",
  },
  {
    name: "Resources",
    href: "#Resources",
  },
  {
    name: "About Us",
    href: "#about_us",
    "aria-description": "Link to about us section",
  },
];

export default function Nav() {
  const linksEl = links.map(({ name, href, ...rest }) => (
    <li key={name}>
      <Link href={href} {...rest}>
        {name}
      </Link>
    </li>
  ));

  return (
    <header className="sticky z-50 bg-white/70  backdrop-blur-md border-b max-xl:hidden">
      <nav className="container mx-auto  py-3 flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center space-x-8">{linksEl}</ul>

        <div className="flex gap-3">
          <Telephone />

          <Link href="/get-start" target="_blank">
            <Button variant="outline">{trans("getStarted")}</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
