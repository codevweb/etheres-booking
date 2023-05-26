import Head from "next/head";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, ...pageProps }) {
  return (
    <>
      <Head>
        <title>Rent App</title>
        <meta name="description" content="Generated by rent app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`bg-gray-50 text-gray-700 overflow-x-hidden ${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
