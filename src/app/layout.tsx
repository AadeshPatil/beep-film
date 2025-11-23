import type { Metadata } from "next";
import { Inter, Koulen } from "next/font/google";
import MuiThemeProvider from "@/common/styles/mui-theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const koulen = Koulen({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-koulen" 
});

export const metadata: Metadata = {
  title: "Video Portfolio - Brand x Love",
  description: "Premium video production and creative content portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${koulen.variable}`}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
