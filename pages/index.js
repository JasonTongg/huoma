import React, { useEffect, useState } from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Tag from "../public/tag.svg";
import Telegram from "../public/telegram.svg";
import Twitter from "../public/twitter.svg";
import Dextools from "../public/dextools.svg";
import { MdOutlineContentCopy } from "react-icons/md";
import MeiMei from "../public/meimei.png";
import PeiPei from "../public/peipei.png";
import House from "../public/house.svg";
import CoinLeft from "../public/CoinLeft.png";
import CoinRight from "../public/CoinRight.png";
import Letter from "../public/letter.png";

export default function Index() {
  // const [topPosition1, setTopPosition1] = useState(0);
  // const [rightPosition1, setRightPosition1] = useState(0);
  // const [topPosition2, setTopPosition2] = useState(0);
  // const [rightPosition2, setRightPosition2] = useState(0);
  // setTopPosition1(scrollAmount);
  // setRightPosition1(scrollAmount);
  // setTopPosition2(scrollAmount);
  // setRightPosition2(scrollAmount);
  const [coinLeft, setCoinLeft] = useState(10);
  const [meiTop, setMeiTop] = useState(23);
  const [peiTop, setPeiTop] = useState(19);
  const [peiLeft, setPeiLeft] = useState(30);
  const [coinLeftTop, setCoinLeftTop] = useState(20);
  const [coinRightTop, setCoinRightTop] = useState(20);
  const [meipeimin, setMeiPeiMin] = useState(25);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && window.scrollY < 1400) {
        let meipeispeed = 20;
        if (window.innerWidth < 1500) {
          meipeispeed = 18;
        }
        if (window.innerWidth < 1024) {
          meipeispeed = 15.5;
        }
        setMeiTop(meiTop + window.scrollY / meipeispeed - meipeimin);
        setPeiTop(peiTop + window.scrollY / meipeispeed - meipeimin);
        setPeiLeft(peiLeft - window.scrollY / 60 + 6);
        setCoinLeft(coinLeft - window.scrollY / 60 + 6);
      }
    };

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-[#F20C00] min-h-screen flex flex-col items-center justify-start gap-2">
      <div className="flex items-center justify-center gap-2 gang-of-three sticky top-0 left-0 w-[103vw] z-[10] -translate-x-1 md:-translate-x-4 bg-[#FBD406] text-center p-2">
        0x0000000000000000000000000000000000000000{" "}
        <MdOutlineContentCopy
          className="cursor-pointer"
          onClick={() =>
            copyToClipboard("0x0000000000000000000000000000000000000000")
          }
        ></MdOutlineContentCopy>
      </div>
      <nav className="flex gap-2 items-center justify-between w-[100%] lg:w-[80%] px-2 md:px-8 2xl:mb-[2rem] mb-[100px]">
        <Link href="#">
          <Image src={Logo} className="w-[80px]" />
        </Link>
        <div className="hidden sm:flex items-center justify-center gap-6 gang-of-three text-[1.2rem] text-[#DCB633]">
          <Link href="">ABOUT</Link>
          <Link href="">TOKENOMICS</Link>
          <Link href="">ROADMAP</Link>
        </div>
        <div className="flex  items-center justify-center gap-4">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]">
            <Image src={Twitter} className="w-[20px]" />
          </div>
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]">
            <Image src={Dextools} className="w-[20px]" />
          </div>
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]">
            <Image src={Telegram} className="w-[20px]" />
          </div>
          <button className="from-[#DCB633] to-[#FCF78A] bg-gradient-to-r text-[#660000] gang-of-three py-[0.3rem] px-[1rem] rounded-[100px]">
            BuyNow
          </button>
        </div>
      </nav>
      <main className="flex items-center justify-center gap-2 flex-col w-full relative overflow-hidden">
        <div className="w-full scrollContainer bg-house h-[1150px] [&>*]:absolute">
          <Image
            src={MeiMei}
            className="w-[150px] lg:w-[200px] 2xl:w-[280px] z-[4]"
            style={{ top: `${meiTop}%`, right: `${peiLeft}%` }}
          />
          <Image
            src={PeiPei}
            className="w-[170px] lg:w-[220px] 2xl:w-[300px] z-[4]"
            style={{ top: `${peiTop}%`, left: `${peiLeft}%` }}
          />
          <Image
            src={CoinLeft}
            className={`w-[150px] z-[3]`}
            style={{ top: `${coinLeftTop}%`, left: `${coinLeft}%` }}
          />
          <Image
            src={CoinRight}
            className={`w-[120px] z-[3]`}
            style={{ top: `${coinRightTop}%`, right: `${coinLeft}%` }}
          />
        </div>
        <div className="w-full h-[50vw] bg-letter mt-[3rem]"></div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
