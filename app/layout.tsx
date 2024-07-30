import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Hub Buildkit | Open-source Kit to Build your own AI Hub',
  description: 'Open-source Kit to Build your own AI Hub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <GoogleAnalytics /> */}
        {/* Other head elements */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
