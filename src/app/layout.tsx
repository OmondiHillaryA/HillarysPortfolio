import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hillary's Portfolio",
  description: 'Full-stack developer specializing in React, TypeScript, and modern web technologies',
  keywords: ['developer', 'portfolio', 'React', 'TypeScript', 'Next.js'],
  authors: [{ name: 'Hillary' }],
  openGraph: {
    title: "Hillary's Portfolio",
    description: 'Full-stack developer portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center min-h-screen`}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}