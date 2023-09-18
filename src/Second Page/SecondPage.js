import React from "react";
import { motion } from "framer-motion";

const SecondPage = () => {
  return (
    <div>
      <div className="w-[100%]  h-screen flex flex-col justify-start  bg-gradient-to-b from-[#4039B3]  to-[#306AE7] ">
        <div className="p-11 mt-[180px] max-sm:mt-[250px] overflow-hidden">
          <motion.h1
            className="text-start  text-white z-[999] relative text-3xl font-bold  font-mons"
            initial={{ translateX: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            Visual Design Powerful
          </motion.h1>
          <div className="pr-[30rem] max-md:pr-[5rem] ">
            <motion.h2
              className="text-start text-base text-white z-[999] relative mt-5"
              initial={{ translateX: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
