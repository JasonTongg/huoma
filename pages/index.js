import React from "react";
import Logo from "../public/logo.png";
import Image from "next/image";

export default function index() {
  return (
    <div className="background-china w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image src={Logo} className="w-[400px]"></Image>
      <h1 className="text-white text-5xl font-bold gang-of-three tracking-widest">
        Meimei Token is Launching Soon!
      </h1>
    </div>
  );
}
