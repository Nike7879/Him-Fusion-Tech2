'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Him Fushion Tech</span>
          </Link>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="./our_services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/our_clients" className={styles.navLink}>
                Clients
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/our_team" className={styles.navLink}>
                Team
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about_us" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button className={styles.mobileMenuButton} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;