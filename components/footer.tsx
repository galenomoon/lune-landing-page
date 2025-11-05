import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

//images
import logoHorizontal from "@/assets/logo-horizontal-yellow.svg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/utils/openWhatsApp";
import { SOCIAL_MEDIA } from "@/constants/social-media";

const footerLinks = [
  {
    title: "Início",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral">
      <div className="max-w-7xl mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            {/* Logo */}
            <Image src={logoHorizontal} alt="Lune Escola de Dança - Logo horizontal da escola de dança" width={200} height={200} />

            {/* <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="text-white">
                    {title}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Subscribe Newsletter */}
        </div>
        <Separator className="opacity-20" />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-white">
            &copy; {new Date().getFullYear()} Lune Studio de Dança. Todos os
            direitos reservados.
          </span>

          <div className="flex items-center gap-5 text-white">
            <Link
              href={`https://www.instagram.com/${SOCIAL_MEDIA.INSTAGRAM}`}
              target="_blank"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              href={`https://wa.me/${SOCIAL_MEDIA.WHATSAPP}?text=Olá, vim pelo site e gostaria de saber mais sobre as aulas de dança.`}
              target="_blank"
              className="cursor-pointer"
            >
              <FaWhatsapp className="h-6 w-6" />
            </Link>
            <Link href={`https://www.facebook.com/${SOCIAL_MEDIA.FACEBOOK}`} target="_blank">
              <FaFacebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
