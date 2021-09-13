import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.container}>
      <img
        src="/Logo-blue.svg"
        width={500}
        height={50}
        className={styles.logo}
      />
      <img
        src="/Logo.svg"
        width={250}
        height={25}
        className={styles.whiteLogo}
      />
      <img
        src="/bars-solid.svg"
        className={styles.bars}
        width={20}
        height={20}
      />
      <div className={styles.navbar}>
        <Link href="/about">Abotu Us</Link>
        <Link href="/about">Creators</Link>
        <Link href="/about">How It Works</Link>
        <Link href="/about">Learn More</Link>
        <Link href="/about">Login</Link>
        <button className={styles.button}>Start Learning today</button>
      </div>
    </nav>
  );
}

export default Navbar;
