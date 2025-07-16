import { Manrope } from 'next/font/google';
import './globals.css';

const manRope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Dashdoc Delivery Checker',
  description: 'Your path to delivery success',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manRope.variable} antialiased`}>{children}</body>
    </html>
  );
}
