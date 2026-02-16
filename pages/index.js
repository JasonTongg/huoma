import React, { useEffect, useState } from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Telegram from "../public/telegram.svg";
import Twitter from "../public/twitter.svg";
import Dextools from "../public/dextools.svg";
import { MdOutlineContentCopy, MdMenu } from "react-icons/md";
import MeiMei from "../public/meimei.png";
import PeiPei from "../public/peipei.png";
import CoinLeft from "../public/CoinLeft.png";
import CoinRight from "../public/CoinRight.png";
import Gold1 from "../public/gold1.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Ring from "../public/ring.png";
import Meimei2 from "../public/meimei2.png";
import Coin1 from "../public/Coin1.png";
import DragonBoat from "../public/DragonBoats.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AudioPlayer from "../components/player";
import DragonScroll from "../public/Dragon_scroll.png";
import Tokenomics from "../public/Tokenomics.png";

const style = {
  width: "100%",
  bgcolor: "#A60800",
  color: "#FBD406",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  outline: "none",
  border: "2px solid #FBD406",
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#A60800",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  outline: "none",
  borderRadius: "10px",
  "@media (max-width: 640px)": {
    width: "100%", // Width when screen is less than 640px
  },
};

export default function Index() {
  const [coinLeft, setCoinLeft] = useState(10);
  const [meiTop, setMeiTop] = useState(10);
  const [peiTop, setPeiTop] = useState(9);
  const [peiLeft, setPeiLeft] = useState(30);
  const [coinLeftTop, setCoinLeftTop] = useState(10);
  const [coinRightTop, setCoinRightTop] = useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [address, setAddress] = useState(
    "0x9562cbdb907ff5f2e2f7edc21bb8bc6315a18046"
  );
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open2, setOpen2] = React.useState(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [topScroll, setTopScroll] = useState(-21);

  useEffect(() => {
    let min = 600;
    if (window.innerWidth < 1400) {
      min = 400;
    }
    const handleScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY > min && window.scrollY < 1400) {
        let meipeispeed = document.body.scrollHeight / 185;
        let meipeimin = 21;
        let minpeileftspeed = 60;
        if (window.innerWidth < 1400) {
          meipeimin = 15;
          meipeispeed = document.body.scrollHeight / 150;
        }
        if (window.innerWidth < 1200) {
          meipeimin = 12;
          meipeispeed = document.body.scrollHeight / 125;
        }

        setMeiTop(meiTop + window.scrollY / meipeispeed - meipeimin);
        setPeiTop(peiTop + window.scrollY / meipeispeed - meipeimin);
        setPeiLeft(peiLeft - window.scrollY / minpeileftspeed + 1);
        setCoinLeft(coinLeft - window.scrollY / minpeileftspeed + 5);
      }
    };

    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1024 && window.scrollY < 1200) {
        handleScroll();
      }
      console.log("scrollY" + window.scrollY);
      console.log("scoll height" + document.body.scrollHeight);
      setTopScroll((window.scrollY / document.body.scrollHeight) * 115.9);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const [play, setPlay] = useState(false);

  return (
    <div className="bg-[#F20C00] min-h-screen flex flex-col items-center justify-start gap-2">
      <Image
        src={DragonScroll}
        alt="Image"
        className="fixed right-0 w-[50px] z-[30]"
        style={{ top: `${topScroll}%` }}
      ></Image>
      {play && <AudioPlayer audioSrc="./audio.mp3" />}
      <Modal
        open={open2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h3"
              component="h2"
              className="gang-of-three"
            >
              $HUOMA
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              className="gang-of-three mb-[2rem]"
            >
              火马
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h2"
              className="gang-of-three"
            >
              The Fire Horse is back. <br /> Every 60 years, momentum resets.<br /> Enter before it runs.
            </Typography>
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={() => {
                  handleClose2();
                  setPlay(true);
                }}
                className="gang-of-three text-[#FBD406] text-2xl bg-[#F20C00] mt-[2rem] rounded-[10px]"
              >
                Join
              </Button>
              {/* <Button
                onClick={() => {
                  handleClose2();
                  setPlay(true);
                }}
                className="gang-of-three text-[#FBD406] text-[1.35rem] mt-[2rem] rounded-[10px]"
              >
                18岁以下
              </Button> */}
            </div>
          </Box>
        </Box>
      </Modal>
      <div className="flex text-xs md:text-2xl items-center justify-center gap-2 break-all gang-of-three sticky top-0 left-0 w-[102.1vw] z-[10] -translate-x-1 md:-translate-x-4 bg-[#FBD406] text-center p-2 px-4">
        {address}
        <MdOutlineContentCopy
          className="cursor-pointer"
          onClick={() => copyToClipboard(address)}
        ></MdOutlineContentCopy>
      </div>
      <nav className="bg-[#f20c008f] sticky top-[48px] z-[10] left-0 hidden lg:grid gap-2 content-center justify-items-center grid-cols-3 items-center justify-between w-[100%] lg:w-[80%] px-2 md:px-2 2xl:mb-[2rem] mb-[0[x]]">
        <Link href="#">
          <Image src={Logo} className="w-[80px]" alt="image" />
        </Link>
        <div className="hidden sm:flex items-center justify-center gap-6 gang-of-three text-[1.2rem] text-[#DCB633]">
          <Link href="#about">ABOUT</Link>
          <Link href="#token">TOKENOMICS</Link>
        </div>
        <div className="flex  items-center justify-center gap-4">
          <Link
            href="https://x.com/huomatokeneth"
            target="_blank"
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
          >
            <Image src={Twitter} className="w-[20px]" alt="image" />
          </Link>
          <Link
            href={`https://www.dextools.io/app/en/ether/pair-explorer/${address}?t=1718115514717`}
            target="_blank"
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
          >
            <Image src={Dextools} className="w-[20px]" alt="image" />
          </Link>
          <Link
            href="https://t.me/HuoMaTokenOnETH"
            target="_blank"
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
          >
            <Image src={Telegram} className="w-[20px]" alt="image" />
          </Link>
          <Link
            target="_blank"
            href={`https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=${address}`}
            className="from-[#DCB633] to-[#FCF78A] bg-gradient-to-r text-[#660000] gang-of-three py-[0.3rem] px-[1rem] rounded-[100px]"
          >
            Buy Now
          </Link>
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
        </Menu>
      </nav>
      <main className="flex items-center justify-center gap-2 flex-col w-full relative overflow-hidden">
        <div className="lg:block hidden w-full scrollContainer bg-house h-[500px] sm:h-[700px] md:h-[1150px] [&>*]:absolute">
          <Image
            src={MeiMei}
            className="w-[130px] sm:w-[160px] md:w-[200px] lg:w-[250px] 2xl:w-[400px] z-[4]"
            style={{ top: `${meiTop}%`, right: `${peiLeft}%` }}
            alt="image"
          />
          <Image
            src={PeiPei}
            className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[270px] 2xl:w-[450px] z-[4]"
            style={{ top: `${peiTop}%`, left: `${peiLeft}%` }}
            alt="image"
          />
          <Image
            src={CoinLeft}
            className={`w-[60px] sm:w-[120px] md:w-[150px] z-[3] animate-bounce`}
            style={{ top: `${coinLeftTop}%`, left: `${coinLeft}%` }}
            alt="image"
          />
          <Image
            src={CoinRight}
            className={`w-[60px] sm:w-[120px] md:w-[120px] z-[3] animate-bounce`}
            style={{ top: `${coinRightTop}%`, right: `${coinLeft}%` }}
            alt="image"
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] z-[3] animate-spin`}
            style={{ top: `${coinRightTop + 2}%`, left: `${coinLeft}%` }}
            alt="image"
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] z-[3] animate-spin`}
            style={{ top: `${coinRightTop + 2}%`, right: `${coinLeft}%` }}
            alt="image"
          />
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center gap-8 relative bg-house w-full pb-[150px]">
          <Image src={Logo} className="w-[100px]" alt="image" />
          <div className="flex  items-center justify-center gap-4">
            <Link
              href="https://x.com/huomatokeneth"
              target="_blank"
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
            >
              <Image src={Twitter} className="w-[20px]" alt="image" />
            </Link>
            <Link
              href={`https://www.dextools.io/app/en/ether/pair-explorer/${address}?t=1718115514717`}
              target="_blank"
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
            >
              <Image src={Dextools} className="w-[20px]" alt="image" />
            </Link>
            <Link
              href="https://t.me/HuoMaTokenOnETH"
              target="_blank"
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#A60800]"
            >
              <Image src={Telegram} className="w-[20px]" alt="image" />
            </Link>
          </div>
          <Link
            target="_blank"
            href={`https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=${address}`}
            className="from-[#DCB633] to-[#FCF78A] bg-gradient-to-r text-[#660000] gang-of-three py-[0.3rem] px-[1rem] rounded-[100px]"
          >
            Buy Now!
          </Link>
          <Image
            src={MeiMei}
            alt="image"
            className="w-[110px] sm:w-[110px] md:w-[130px] z-[4] bottom-0 right-0 sm:right-[60px] absolute"
          />
          <Image
            src={PeiPei}
            alt="image"
            className="w-[130px] sm:w-[130px] md:w-[150px] z-[4] left-0 sm:left-[60px] bottom-[-25px] absolute"
          />
        </div>
        <div className="lg:hidden flex w-full items-center justify-between p-4">
          <Image
            src={Coin1}
            className={`w-[40px] sm:w-[80px] md:w-[80px] animate-bounce`}
            alt="image"
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] animate-spin`}
            alt="image"
          />
          <Image
            src={Coin1}
            alt="image"
            className={`w-[40px] sm:w-[80px] md:w-[80px] animate-bounce`}
          />
          <Image
            src={Gold1}
            className={`w-[60px] sm:w-[120px] md:w-[120px] animate-spin`}
            alt="image"
          />
          <Image
            src={Coin1}
            className={`w-[40px] sm:w-[80px] md:w-[80px] animate-bounce`}
            alt="image"
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
              <Image src={Ring} className="animate-spin-slow" alt="image" />
              {/* <Image
                src="../../../LottieFiles - free animation files built for Lottie_files"
                className="absolute top-1/2 left-1/2 translate-center w-[87%]"
                alt="image"
                width={300}
                height={300}
              ></Image> */}
              <div className="absolute top-1/2 left-1/2 translate-x-[-48%] translate-y-[-50%] w-[95%]">
                <Image src={Tokenomics} alt="image" />
              </div>

              {/* <LottieAnimation /> */}
            </div>
            <div className="flex w-full flex-col justify-center items-center md:items-start gap-7">
              <div className="flex flex-col md:justify-start justify-center gap-3">
                <h3 className="gang-of-three text-2xl md:text-4xl md:text-start text-center">
                  Token Supply
                </h3>
                <h2 className="hashiba text-4xl md:text-6xl text-[#DCB633] md:text-start text-center">
                  50.000.000.000
                </h2>
              </div>
              <div className="flex flex-col gap-3 md:justify-start justify-center">
                <h3 className="gang-of-three text-3xl md:text-4xl md:text-start text-center">
                  Zero tax. Pure momentum
                </h3>
                <h2 className="hashiba text-4xl md:text-6xl text-[#DCB633] md:text-start text-center">
                  0% Buy & 0% Sell
                </h2>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse items-center justify-center p-4 gap-4 md:gap-16 w-full mt-[8rem]">
            <iframe
              src={`https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=${address}`}
              width="100%"
              theme="light"
              style={{
                border: "0",
                margin: "0",
                display: "block",
                borderRadius: "10px",
                height: "600px",
                maxWidth: "600px",
              }}
            />
            <Image src={Meimei2} className="w-[50%] md:w-[350px]" alt="image" />
          </div>
        </div>
        <div className="w-full mt-[8rem]">
          <Image src={DragonBoat} className="w-full" alt="image" />
        </div>
      </main>
      <footer className="w-full flex items-center justify-center flex-col gap-4 bg-[#A60800] p-4 mt-[8rem]">
        <Image src={Logo} className="w-[150px]" alt="image" />
        <p className="text-2xl font-bold">&copy; huomatoken 2026</p>
      </footer>
    </div>
  );
}
