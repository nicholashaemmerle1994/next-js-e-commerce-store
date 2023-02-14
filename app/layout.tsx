import './global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './cookieBanner';
import styles from './layout.module.scss';

type MetaData = {
  title: {
    default: string;
  };
  icons: {
    shortcut: string;
  };
};

export const metadata: MetaData = {
  title: {
    default: 'Coffix',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};
type CartCookieParsed = {
  id: number;
  amount: number;
}[];

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  const cartCookie = cookies().get('cart');
  const cartCookieParsed: CartCookieParsed = cartCookie
    ? JSON.parse(cartCookie.value)
    : [];

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
        {props.children}
        <footer className={styles.footer}>copyright by cooffix 2023©</footer>
      </body>
    </html>
  );
}
