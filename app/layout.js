import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Riyan - Software Engineer",
  description:
    "Discover more about Riyan Firdaus Amerta, a Blockchain and JavaScript Developer.",
  keywords:
    "Riyan Firdaus, Riyan Firdaus Amerta, Blockchain Developer, JavaScript Developer, Solidity",
  verification: { google: "xKmmCsQthElZ38t6BbdP3SX1yZmNcQRETo-n1ZMTob4" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Riyan Firdaus Amerta",
              url: "https://riyan-firdaus-amertagilt-pi.vercel.app/",
              description: "Blockchain and JavaScript Developer.",
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
