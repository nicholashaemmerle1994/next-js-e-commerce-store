import './global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './cookieBanner';
import styles from './layout.module.scss';

export const dynamic = 'force-dynamic';

type MetaData = {
  title: {
    default: string;
    template: string;
  };
  icons: {
    shortcut: string;
  };
};

export const metadata: MetaData = {
  title: {
    default: 'Coffix',
    template: '%s | Coffix, we the best coffee',
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
            <Image
              src="/Coffix.png"
              alt="Brandlogo"
              width={150}
              height={100}
              className={styles.img}
            />
          </Link>
          <nav>
            <Link href="/products" data-test-id="products-link">
              Products
            </Link>
            <Link href="/coffee">Coffee</Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/cart" className={styles.cart}>
              <Image src="/cart.png" alt="Cart" width={25} height={25} />
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
