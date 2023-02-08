import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './cookieBanner';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <CookieBanner />
        <header className={styles.header}>
          <Link href="/">
            <Image src="/Coffix.png" alt="Brandlogo" width={150} height={100} />
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/coffee">Coffee</Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>copyright by cooffix 2023©</footer>
      </body>
    </html>
  );
}
