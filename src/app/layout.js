import { Inter } from "next/font/google";
import "./globals.css";
import 'react-multi-carousel/lib/styles.css';
import Header from "@/components/layout/Header";
import Providers from "./Providers";
const inter = Inter({ subsets: ["latin"] });

// export const metadata={
//   title:'Movies | Home',
//   description:'This is homepage of Movies.com',
//   keywords:'',
//   author:'',
//   viewport:''

// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Header />
          {children}
        {/* Footer */}
      </Providers>
      </body>
    </html>
  );
}
