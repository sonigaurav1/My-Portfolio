import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaurav Soni | Front-end Developer",
  description:
    "Welcome to my developer portfolio! Explore a collection of my projects and web applications showcasing my expertise in building dynamic and interactive user interfaces. With a passion for clean code and innovative solutions, I strive to create seamless user experiences that blend functionality with stunning designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to my developer portfolio! Explore a collection of my projects and web applications showcasing my expertise in building dynamic and interactive user interfaces. With a passion for clean code and innovative solutions, I strive to create seamless user experiences that blend functionality with stunning designs."
        />
        <meta
          name="My personal portfolio."
          content="Front-end developer portfolio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500&amp;display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Check out Gaurav Soni's portfolio featuring various web development projects."
          key="desc"
        />

        <meta
          property="og:title"
          content="Gaurav Soni - Portfolio - Web Developer"
        />

        <meta
          property="og:description"
          content="Explore Gaurav Soni's portfolio, showcasing a variety of web development projects and expertise."
        />

        <meta
          property="og:image"
          content="https://gauravsoni.com/images/portfolio-preview.jpg"
        />
      </Head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
