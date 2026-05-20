// app/layout.js
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import '@/app/globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Add suppressHydrationWarning here too to catch the body attribute injection */}
      <body className=" text-white antialiased" suppressHydrationWarning> 
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}