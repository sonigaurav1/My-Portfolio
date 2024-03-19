"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./header.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function NavigationBar() {
  const pathname = usePathname();
  return (
    <nav>
      <h3>Gaurav.dev</h3>
      <ul>
        {navLinks.map(({ name, href }) => {
          const isActive = pathname.startsWith(href);
          return (
            <li onClick={() => scrollToSection(name)}>
              <Link href={href} key={name} className={isActive ? "active" : ""}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
