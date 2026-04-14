import "./globals.css";
import NavBar from "@/components/NavBar";

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
      </body>
    </html>
  );
}