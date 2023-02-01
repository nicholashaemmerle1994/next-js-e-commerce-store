import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <header className={styles.header}>
          <nav>
            <Image src="/Coffix.png" alt="Brandlogo" width={200} height={150} />
            <Link href="/">Home</Link>
            <Link href="/coffee">Coffee</Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>copyright by cooffix 2023©</footer>
      </body>
    </html>
  );
}
