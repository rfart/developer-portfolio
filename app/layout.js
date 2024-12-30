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
    "This is the portfolio of Riyan. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Riyan Firdaus Amerta - Personal Portfolio</title>
        <meta
          name="google-site-verification"
          content="xKmmCsQthElZ38t6BbdP3SX1yZmNcQRETo-n1ZMTob4"
        />
        <meta
          name="description"
          content="Discover more about Riyan Firdaus Amerta, a Blockchain and JavaScript Developer."
        />
        <meta
          name="keywords"
          content="Riyan Firdaus, Riyan Firdaus Amerta, Blockchain Developer, JavaScript Developer, Solidity"
        />
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
