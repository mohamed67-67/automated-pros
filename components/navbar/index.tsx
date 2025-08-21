import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="sticky top-0 bg-black py-3 px-20 text-white flex items-center z-[500] justify-between">
      <Image
        alt="Automated pros"
        className="object-contain"
        src="/favIcon.svg"
        width={60}
        height={40}
        quality={100}
        priority
      />
      <div className="flex gap-3">
        <Link href="/" passHref>
          <nav className="text-white font-semibold">Home</nav>
        </Link>
        <Link href="/favourite" passHref>
          <nav className="text-white font-semibold">favourites</nav>
        </Link>
      </div>
    </div>
  );
}
