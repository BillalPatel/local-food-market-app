import Image from "next/image";
import LogoImage from "../../logo.svg";

export const Footer = () => {
  return (
    // <footer className="footer flex h-96 w-full bg-slate-600">
    <footer className="footer flex h-screen bg-slate-600 items-start justify-center">
      <Image src={LogoImage} alt="Logo" className="mt-10 w-3/5" />
    </footer>
  );
};

export default Footer;
