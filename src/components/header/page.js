"use client";
import Link from "next/link";
import "./header.css";
import { useEffect, useState } from "react";

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
  function handleMenuOpen() {
    const menu = document.querySelector(".mobile-nav");
    menu.classList.remove("closed-menu");
    menu.classList.add("open-menu");
  }
  function handleMenuClose() {
    const menu = document.querySelector(".mobile-nav");
    menu.classList.add("closed-menu");
    menu.classList.remove("open-menu");
  }
  return (
    <>
      <nav>
        <h3 className="logo">Gaurav.dev</h3>
        <ul>
          {navLinks.map(({ name, href }) => {
            return (
              <li onClick={() => scrollToSection(name)} key={name}>
                <Link href={href} key={name}>
                  {name}
                </Link>
              </li>
            );
          })}
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mobile-menu"
              onClick={handleMenuOpen}
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </li>
        </ul>
      </nav>
      <div className="mobile-nav closed-menu">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleMenuClose}
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <ul>
          <li>
            <a onClick={() => handleMenuClose()} href="#home">Home</a>
          </li>
          <li>
            <a onClick={() => handleMenuClose()} href="#about">About</a>
          </li>
          <li>
            <a onClick={() => handleMenuClose()} href="#projects">Projects</a>
          </li>
          <li>
            <a onClick={() => handleMenuClose()} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
