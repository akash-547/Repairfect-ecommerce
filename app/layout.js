import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import '@/app/globals.css'; 
// 1. Google Font se Poppins import karein
import { Poppins } from 'next/font/google';

// 2. Poppins ko configure karein (Weights and Subsets)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', // Custom Tailwind variable ke liye
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. className mein poppins.className ko inject kar dein */}
      <body className={`${poppins.className} text-white antialiased`} suppressHydrationWarning> 
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}