import Image from "next/image";

import logoHorizontalPurple from "@/assets/logo-horizontal-purple.svg";
import logoHorizontalYellow from "@/assets/logo-horizontal-yellow.svg";

export default function Navbar() {
  return (
    <div>
      <Image
        src={logoHorizontalPurple}
        alt="Logo Horizontal Purple"
        width={200}
        height={200}
        className="absolute left-0 top-0"
      />
    </div>
  );
}
