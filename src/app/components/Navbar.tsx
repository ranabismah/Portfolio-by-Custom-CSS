"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navbar.module.css"; // Import CSS module for Navbar

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu visibility on mobile

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu open/close on mobile
  };

  return (
    // In your Navbar component

<div className={styles.navbar}>
  {/* Logo */}
  <div className={styles.logo}>
    <h2>My Portfolio</h2>
  </div>

  {/* Hamburger Icon */}
  <div className={styles.hamburger} onClick={toggleMenu}>
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
  </div>

  {/* Navigation Links */}
  <div className={`${styles.navLinks} ${isMenuOpen ? styles.activeMenu : ""}`}>
    {links.map((link, index) => (
      <Link
        href={link.path}
        key={index}
        className={`${styles.navItem} ${link.path === pathname ? styles.active : ""} ${link.name === 'Contact' ? styles.contactButton : ''}`}
      >
        {link.name}
      </Link>
    ))}
  </div>
</div>

  );
};

export default Navbar;

