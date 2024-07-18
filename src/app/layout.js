import '../app/globals.css';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer'; // We'll create this in the next step

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
