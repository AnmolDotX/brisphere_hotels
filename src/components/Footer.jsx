import { Button } from ".";

const Footer = () => {
    return (
        <footer id="about-us" className="min-h-[40vh] w-full px-[5vw] bg-slate-200 p-10 flex flex-col items-start gap-3">
            <h3 className="font-bold tracking-wide text-3xl">Brisphere</h3>
            <p className="text-sm flex flex-col items-start gap-2">
                <span>Spituk, Ladak,</span>
                <span>India, 194101,</span>
                <span>+91 - 7764997033</span>
                <span>amit.jha6700@gmail.com</span>
            </p>
            <Button text={"Location"}/>
        </footer>
    );
}

export default Footer;