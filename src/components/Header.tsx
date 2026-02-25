import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/Header.module.css';

export default function Header() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🦞</span>
          <span>Get Claw Help</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={isActive('/') ? styles.active : ''}>
            Home
          </Link>
          <Link href="/consult/" className={isActive('/consult') ? styles.active : ''}>
            Custom Solutions
          </Link>
          <Link href="/blog/" className={router.pathname.startsWith('/blog') ? styles.active : ''}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
