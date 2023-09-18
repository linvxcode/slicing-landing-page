import { Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const FirstPage = () => {
  return (
    <AnimatePresence>
      <motion.div className="w-full flex relative h-screen bg-gradient-to-r from-indigo-500 from-5% via-[#3a3663] via-100% to-[#ffff] to-100%">
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <motion.div
            className="flex px-16 max-sm:px-5 flex-col sm:justify-center items-start max-md:mt-24"
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            <motion.h1 className="text-3xl font-bold text-white font-mons">
              Digital Ilustration
            </motion.h1>
            <motion.div className="flex">
              <h2 className="text-start mt-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. .
              </h2>
            </motion.div>
            <div className="md:mt-5 max-[350px]:mt-5 max-[320px]:top-[290px] max-md:absolute max-md:top-[260px]">
              <Button
                color="default"
                variant="bordered"
                className="border-white"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
          <motion.div className="max-[910px]:mt-[70px] overflow-hidden"
          initial={{opacity: 0 }}
          animate={{opacity :1 }}
          transition={{
            type: "spring"
          }}
          >
            <img alt="img" src="/aset/Asset 1.png" className="max-w-[90%] overflow-hidden" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FirstPage;
