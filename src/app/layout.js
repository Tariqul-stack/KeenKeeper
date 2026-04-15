import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "KeenKeeper",
  description: "Keep your friendships alive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <NavBar />
        {children}
          <Toaster position="top-center" richColors />
           <Footer />
      </body>
    </html>
  );
}