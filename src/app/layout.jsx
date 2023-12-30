import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import BookingProvider from "@/context/BookingContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Brisphere Hotels",
  description: "A hotel booking chain in ladakh. Internshala's assignment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={roboto.className}>
        <BookingProvider>
            <Header />
            <main className='min-h-screen w-[90vw] mx-auto'>{children}</main>
            <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
