import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Local Market",
  description: "Local market app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {/* <ThemeContext.Provider valcue={theme}> */}
        {children}
        {/* </ThemeContext.Provider> */}
        <Footer />
      </body>
    </html>
  );
}
