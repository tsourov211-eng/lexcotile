import './globals.css';
import type { Metadata } from 'next';
import { Alice, Roboto, Montserrat } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';

const alice = Alice({
  subsets: ['latin'],
  variable: '--font-alice',
  weight: ['400'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'webnibo',
  description:
    'webnibo - Premier tile, stone, and architectural surfaces distributor.',
  icons: {
    icon: '/fabicon.png',
    shortcut: '/fabicon.png',
    apple: '/fabicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${alice.variable} ${roboto.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/fabicon.png" />
      </head>
      <body className="font-roboto bg-white text-[#333333] antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
