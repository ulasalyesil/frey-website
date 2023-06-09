import product_image from "../assets/images/frey_overview.png";
import logo from "../assets/images/logo.svg";

import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";
import Button from "./Button";
import globalConsts from '../globalConsts.json';
import Balancer from 'react-wrap-balancer';


export default function Hero() {
  const footnote = "Get notified when FREY▲ is available on";
  const formURL = globalConsts.urls.waitlistFormTally;

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-11 mt-12 max-w-[720px]">
      <div className="flex flex-col items-center gap-2 sm:gap-6">
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="font-semibold text-neutral-400 text-sm sm:text-base"
        >
          COMING SOON
        </motion.h5>
        <div className="flex-col items-center inline-flex">
          <div className="inline-flex">
            <motion.img
              src={logo}
              className="self-center h-9 md:h-16"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 50,
              }}
            />
            <HeroTitle text={" is all your"} />
          </div>
          <HeroTitle text={"accounts in one app."} />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-neutral-400 px-4 text-center w-full"
        >
          <Balancer>
            We're working hard to bring you the best banking experience. Join the
            waitlist to be the first to know when we launch.
          </Balancer>
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="flex flex-col gap-4 items-center mb-8"
      >
        <a href={formURL} target="_blank" rel="noreferrer">
          <Button label={"Join the waitlist"} buttonStyle={'primaryLong'} type={'button'} />
        </a>
        <p className="text-neutral-400 text-center text-sm max-w-[256px]">
          {footnote}
          <span className="font-semibold"> Test Flight</span>
        </p>
      </motion.div>
      <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.25 }}>
        <motion.img
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="sm:w-96 p-8 sm:p-0"
          src={product_image}
          alt="frey product"
        />
      </motion.span>
    </div>
  );
}
