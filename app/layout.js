import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import '@/app/globals.css';
import { Poppins } from 'next/font/google';
import { CartProvider } from '@/context/CartContext'; // 👈 1. Import Add Karein

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body
        className={`${poppins.className} min-h-screen bg-[#050505] font-poppins text-white antialiased`}
        suppressHydrationWarning
      >
        <CartProvider>
          <Navbar />
          <main className="min-h-screen bg-[#050505]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}