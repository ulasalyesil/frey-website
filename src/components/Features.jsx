// packages
import { Component1Icon, Component1Icon as Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

// components
import Button from "./Button";

// assets
import globalConsts from "../globalConsts.json";
import img1 from "../assets/images/feature_illustration_1.svg";
// import img3 from "../assets/images/feature_illustration_3.svg";

const content = {
  "item-1": {
    title: "Unified Dashboard",
    description:
      "Frey provides a unified dashboard displaying all bank accounts, and credit cards. This enables you to have a comprehensive overview of your finances without having to switch between accounts.",
  },
  "item-2": {
    title: "Transaction History",
    description:
      "You can view your transaction history across all accounts in one place, making it easier to track your spending and identify areas where you can save money.",
  },
  "item-3": {
    title: "Security",
    description:
      "Frey uses strong encryption and other security measures to protect users' financial data.",
  },
};

const formURL = globalConsts.urls.waitlistForm;

// const images = [img1, img3];

const itemStyle =
  "flex flex-col bg-neutral-100 rounded-xl hover:bg-neutral-200 overflow-hidden first:mt-0";
const triggerStyle = "p-4 w-full flex gap-2 items-center font-mediums";
const contentStyle =
  "text-sm text-neutral-500 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp";

const gridCardStyle = "bg-zinc-100 rounded-xl p-4";

export default function Features() {
  return (
    <motion.div
      className="flex flex-col gap-8 sm:gap-14 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-0 items-center">
        <h2 className="font-semibold text-2xl text-black">
          Essential Perfection.
        </h2>
        <h2 className="font-semibold text-2xl text-neutral-400">Elevated.</h2>
      </div>

      <div className="grid grid-rows-6 grid-cols-8 gap-6 w-screen max-w-[720px] h-screen max-h-[608px]">
        <div
          className={`${gridCardStyle} col-start-1 col-end-6 row-start-1 row-end-5 w-full flex flex-col gap-3 justify-between`}
        >
          <div className="flex gap-3">
            <Icon width={32} height={32} />
            <h3 className="text-3xl font-bold">Unified Dashboard</h3>
          </div>
          <div className="bg-white pt-4 rounded-xl">
            <svg
              width="373"
              height="114"
              viewBox="0 0 373 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M371.106 112.783L368.425 96.3642C365.742 79.9455 360.379 47.108 355.015 46.7818C349.651 46.4556 344.287 78.6408 338.924 84.803C333.56 90.9652 328.196 71.1042 322.832 50.1419C317.469 29.1798 312.105 7.11638 306.741 10.0452C301.378 12.974 296.014 40.8951 290.65 60.3693C285.285 79.8436 279.923 90.8711 274.558 97.5399C269.194 104.209 263.831 106.519 258.467 101.372C253.103 96.2252 247.739 83.6212 242.376 68.2358C237.012 52.8505 231.648 34.6836 226.284 31.2157C220.921 27.7478 215.557 38.9785 210.193 52.1322C204.83 65.2859 199.466 80.3623 194.102 88.7109C188.738 97.0596 183.375 98.6803 178.011 104.295C172.646 109.91 167.282 119.519 161.919 105.31C156.555 91.1006 151.191 53.0728 145.828 28.4022C140.464 3.73189 135.1 -7.58127 129.736 9.28682C124.373 26.1547 119.009 71.2036 113.645 83.811C108.281 96.4184 102.918 76.5843 97.5538 73.5925C92.19 70.6007 86.8263 84.4512 81.4625 95.4966C76.0987 106.542 70.7349 114.782 65.3712 110.91C60.0074 107.037 54.6436 91.0517 49.2798 83.1169C43.9161 75.1819 38.5523 75.2974 33.1886 71.0725C27.8247 66.8478 22.461 58.2827 17.0972 58.5138C11.7334 58.7449 6.36961 67.7725 3.68779 72.2862L1.00586 76.7999"
                stroke="#E0EAF3"
                stroke-width="2"
              />
            </svg>
          </div>
          <p className="text-zinc-400">
            Frey offers a single dashboard for all your bank accounts and credit
            cards, providing a convenient way to view your finances without
            switching between accounts.
          </p>
        </div>
        <div
          className={`${gridCardStyle} col-start-6 col-end-9 row-start-1 row-end-4 w-full`}
        >
          Dashboard
        </div>
        <div
          className={`${gridCardStyle} col-start-6 col-end-9 row-start-4 row-end-5 w-full`}
        >
          Dashboard
        </div>
        <div
          className={`${gridCardStyle} col-start-1 col-end-5 row-start-5 row-end-7 w-full`}
        >
          Dashboard
        </div>
        <div
          className={`${gridCardStyle} col-start-5 col-end-9 row-start-5 row-end-7 w-full`}
        >
          Dashboard
        </div>
      </div>

      <div className="w-[348px] flex justify-center shrink-1 relative bg-neutral-100 rounded-3xl overflow-hidden shadow-xl shadow-black/10">
        <div className="absolute bottom-4 right-4 z-50">
          <a href={formURL} target="_blank" rel="noreferrer">
            <Button label={"Learn More"} buttonStyle={"primarySmall"} />
          </a>
        </div>
        <img src={img1} alt="feature shot" className="w-64 absolute top-10" />
      </div>
      {/* </div> */}
    </motion.div>
  );
}
