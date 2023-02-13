import './global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
// import { Amount } from './CartAmount';
import CookieBanner from './cookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Coffix',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const cartCookie = cookies().get('cart');
  const cartCookieParsed = cartCookie ? JSON.parse(cartCookie.value) : [];

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
            {/* <Link href="/">Home</Link> */}
            <Link href="/products">Products</Link>
            <Link href="/coffee" data-test-id="products-link">
              Coffee
            </Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/cart" className={styles.cart}>
              Cart
              <div>
                {cartCookieParsed.reduce(
                  (previousValue, { amount }) => previousValue + amount,
                  0,
                )}
              </div>
            </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>copyright by cooffix 2023©</footer>
      </body>
    </html>
  );
}
