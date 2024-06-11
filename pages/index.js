import React, { useEffect, useState } from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Tag from "../public/tag.svg";
import Telegram from "../public/telegram.svg";
import Twitter from "../public/twitter.svg";
import Dextools from "../public/dextools.svg";
import { MdOutlineContentCopy, MdMenu } from "react-icons/md";
import MeiMei from "../public/meimei.png";
import PeiPei from "../public/peipei.png";
import House from "../public/house.svg";
import CoinLeft from "../public/CoinLeft.png";
import CoinRight from "../public/CoinRight.png";
import Letter from "../public/letter.png";
import Gold1 from "../public/gold1.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Ring from "../public/ring.png";
import Girl1 from "../public/girl1.png";
import Meimei2 from "../public/meimei2.png";
import Coin1 from "../public/Coin1.png";
import Coin2 from "../public/coin2.png";

export default function Index() {
  const [coinLeft, setCoinLeft] = useState(10);
  const [meiTop, setMeiTop] = useState(18);
  const [peiTop, setPeiTop] = useState(15);
  const [peiLeft, setPeiLeft] = useState(30);
  const [coinLeftTop, setCoinLeftTop] = useState(20);
  const [coinRightTop, setCoinRightTop] = useState(20);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [address, setAddress] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    let min = 600;
    if (window.innerWidth < 1400) {
      min = 400;
    }
    const handleScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY > min && window.scrollY < 1400) {
        console.log(document.body.scrollHeight / 122.313131313131);
        let meipeispeed = document.body.scrollHeight / 140;
        let meipeimin = 25;
        let minpeileftspeed = 60;
        if (window.innerWidth < 1400) {
          meipeimin = 400 / 20;
          meipeispeed = document.body.scrollHeight / 122.31818181;
        }
        if (window.innerWidth < 1200) {
          meipeispeed = document.body.scrollHeight / 122;
        }

        setMeiTop(meiTop + window.scrollY / meipeispeed - meipeimin);
        setPeiTop(peiTop + window.scrollY / meipeispeed - meipeimin);
        setPeiLeft(peiLeft - window.scrollY / minpeileftspeed + 6);
        setCoinLeft(coinLeft - window.scrollY / minpeileftspeed + 6);
      }
    };

    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1024 && window.scrollY < 1200) {
        handleScroll();
      }
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
      <div className="flex text-xs md:text-2xl items-center justify-center gap-2 break-all gang-of-three sticky top-0 left-0 w-[103vw] z-[10] -translate-x-1 md:-translate-x-4 bg-[#FBD406] text-center p-2 px-4">
        {address}
        <MdOutlineContentCopy
          className="cursor-pointer"
          onClick={() => copyToClipboard(address)}
        ></MdOutlineContentCopy>
      </div>
      <nav className="hidden lg:flex gap-2 items-center justify-between w-[100%] lg:w-[80%] px-2 md:px-8 2xl:mb-[2rem] mb-[0[x]]">
        <Link href="#">
          <Image src={Logo} className="w-[80px]" />
        </Link>
        <div className="hidden sm:flex items-center justify-center gap-6 gang-of-three text-[1.2rem] text-[#DCB633]">
          <Link href="#about">ABOUT</Link>
          <Link href="#token">TOKENOMICS</Link>
          <Link href="#roadmap">ROADMAP</Link>
        </div>
        <div className="flex  items-center justify-center gap-4">
          <Link
            href="https://x.com/meimeitoken?t=puvooEXOQyORXkkQmj-KIQ&s=09"
            target="_blank"
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
          >
            <Image src={Twitter} className="w-[20px]" />
          </Link>
          <Link
            href={`https://www.dextools.io/app/en/ether/pair-explorer/${address}`}
            target="_blank"
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
          >
            <Image src={Dextools} className="w-[20px]" />
          </Link>
          <Link
            href="https://t.me/meimeitokenETH"
            target="_blank"
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
          >
            <Image src={Telegram} className="w-[20px]" />
          </Link>
          <button className="from-[#DCB633] to-[#FCF78A] bg-gradient-to-r text-[#660000] gang-of-three py-[0.3rem] px-[1rem] rounded-[100px]">
            BuyNow
          </button>
        </div>
      </nav>
      <nav className="lg:hidden flex w-full items-center justify-end p-4">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MdMenu className="text-4xl text-[#DCB633]"></MdMenu>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            sx: {
              bgcolor: "#A60800",
              color: "#DCB633",
            },
          }}
        >
          <Link href="#about" onClick={handleClose}>
            <MenuItem className="gang-of-three">About</MenuItem>
          </Link>
          <Link href="#token" onClick={handleClose}>
            <MenuItem className="gang-of-three">Tokenomics</MenuItem>
          </Link>
          <Link href="#roadmap" onClick={handleClose}>
            <MenuItem className="gang-of-three">Roadmap</MenuItem>
          </Link>
        </Menu>
      </nav>
      <main className="flex items-center justify-center gap-2 flex-col w-full relative overflow-hidden">
        <div className="lg:block hidden w-full scrollContainer bg-house h-[500px] sm:h-[700px] md:h-[1150px] [&>*]:absolute">
          <Image
            src={MeiMei}
            className="w-[80px] sm:w-[110px] md:w-[150px] lg:w-[200px] 2xl:w-[280px] z-[4]"
            style={{ top: `${meiTop}%`, right: `${peiLeft}%` }}
          />
          <Image
            src={PeiPei}
            className="w-[90px] sm:w-[130px] md:w-[170px] lg:w-[220px] 2xl:w-[300px] z-[4]"
            style={{ top: `${peiTop}%`, left: `${peiLeft}%` }}
          />
          <Image
            src={CoinLeft}
            className={`w-[60px] sm:w-[120px] md:w-[150px] z-[3] animate-bounce`}
            style={{ top: `${coinLeftTop}%`, left: `${coinLeft}%` }}
          />
          <Image
            src={CoinRight}
            className={`w-[60px] sm:w-[120px] md:w-[120px] z-[3] animate-bounce`}
            style={{ top: `${coinRightTop}%`, right: `${coinLeft}%` }}
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] z-[3] animate-spin`}
            style={{ top: `${coinRightTop + 7}%`, left: `${coinLeft}%` }}
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] z-[3] animate-spin`}
            style={{ top: `${coinRightTop + 7}%`, right: `${coinLeft}%` }}
          />
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center gap-8 relative bg-house w-full pb-[150px]">
          <Image src={Logo} className="w-[100px]"></Image>
          <div className="flex  items-center justify-center gap-4">
            <Link
              href="https://x.com/meimeitoken?t=puvooEXOQyORXkkQmj-KIQ&s=09"
              target="_blank"
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
            >
              <Image src={Twitter} className="w-[20px]" />
            </Link>
            <Link
              href={`https://www.dextools.io/app/en/ether/pair-explorer/${address}`}
              target="_blank"
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
            >
              <Image src={Dextools} className="w-[20px]" />
            </Link>
            <Link
              href="https://t.me/meimeitokenETH"
              target="_blank"
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
            >
              <Image src={Telegram} className="w-[20px]" />
            </Link>
          </div>
          <button className="from-[#DCB633] to-[#FCF78A] bg-gradient-to-r text-[#660000] gang-of-three py-[0.3rem] px-[1rem] rounded-[100px]">
            BuyNow
          </button>
          <Image
            src={MeiMei}
            className="w-[110px] sm:w-[110px] md:w-[130px] z-[4] bottom-0 right-0 absolute"
          />
          <Image
            src={PeiPei}
            className="w-[130px] sm:w-[130px] md:w-[150px] z-[4] left-0 bottom-[-25px] absolute"
          />
        </div>
        <div className="lg:hidden flex w-full items-center justify-between p-4">
          <Image
            src={Coin1}
            className={`w-[40px] sm:w-[80px] md:w-[80px] animate-bounce`}
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] animate-spin`}
          />
          <Image
            src={Coin1}
            className={`w-[40px] sm:w-[80px] md:w-[80px] animate-bounce`}
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] animate-spin`}
          />
          <Image
            src={Coin1}
            className={`w-[40px] sm:w-[80px] md:w-[80px] animate-bounce`}
          />
        </div>
        <div
          id="about"
          className="w-full h-[100vw] lg:h-[50vw] bg-letter mt-[3rem] flex items-center justify-around"
        ></div>
        <div
          id="token"
          className="w-full flex flex-col items-center justify-center gap-4 bg-mountain mt-[6rem]"
        >
          <h2 className="gang-of-three text-5xl md:text-8xl text-[#660000]">
            Tokenomics
          </h2>
          <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-12 p-4 md:justify-items-start justify-items-center">
            <div className="relative w-[50%] md:w-full h-fit">
              <Image src={Ring} className="animate-spin-slow"></Image>
              <Image
                src={Girl1}
                className="absolute top-1/2 left-1/2 translate-center w-[87%]"
              ></Image>
            </div>
            <div className="flex w-full flex-col justify-center items-center md:items-start gap-7">
              <div className="flex flex-col md:justify-start justify-center gap-3">
                <h3 className="gang-of-three text-2xl md:text-4xl md:text-start text-center">
                  Token Supply
                </h3>
                <h2 className="hashiba text-4xl md:text-6xl text-[#DCB633] md:text-start text-center">
                  1.000.000.000
                </h2>
              </div>
              <div className="flex flex-col gap-3 md:justify-start justify-center">
                <h3 className="gang-of-three text-3xl md:text-4xl md:text-start text-center">
                  No Taxes, No Bullshit. It’s that simple.
                </h3>
                <h2 className="hashiba text-4xl md:text-6xl text-[#DCB633] md:text-start text-center">
                  0% Buy & 0% Sell
                </h2>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse items-center justify-center p-4 gap-4 md:gap-16 w-full mt-[8rem]">
            <iframe
              src={`https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=${address}`}
              width="100%"
              theme="light"
              style={{
                border: "0",
                margin: "0",
                display: "block",
                borderRadius: "10px",
                height: "600px",
              }}
            />
            <Image src={Meimei2} className="w-[50%] md:w-[350px]"></Image>
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
