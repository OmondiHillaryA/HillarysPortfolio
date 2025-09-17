import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}