import Link from "next/link";

const Header = () => {
    return (
        <header className="max-w-[90vw] mx-auto flex items-center justify-between h-12 md:h-20">
            <div id="logo">
                <Link href="/" className="font-bold text-xl tracking-wide hover:text-sky-500 active:text-sky-600 transition-all duration-200">Brisphere</Link>
            </div>
            <nav className="flex items-center justify-center md:justify-normal gap-10 md:font-light md:text-lg md:static fixed bottom-2 bg-sky-600 md:bg-transparent w-[90vw] md:w-fit py-3 md:py-0 px-4 text-white md:text-black font-bold md:px-0 z-20 text-sm rounded-full">
                <Link href="#discover" scroll className="hover:text-sky-600 transition-all active:text-sky-700 cursor-pointer duration-200">Discover</Link>
                <Link href="#services" className="hover:text-sky-600 transition-all active:text-sky-700 cursor-pointer duration-200">Services</Link>
                <Link href="#about-us" className="hover:text-sky-600 transition-all active:text-sky-700 cursor-pointer duration-200">About Us</Link>
            </nav>
        </header>
    );
}

export default Header;