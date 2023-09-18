import React from "react";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <div>
      <div className="h-screen flex bg-[#306AE7]">
        <div className="border-t-2 mx-9 ">
          <div className="px-36 max-md:px-12">
            <motion.h1
              className="mt-12 text-2xl max-md:text-xl font-bold text-white flex justify-center font-mons"
              initial={{ translateY: 100 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0 }}
              transition={{
                type: "spring",
              }}
            >
              Choise Your Illustration Best And Top Illustration Making Your
              Ideas Test Text Here
            </motion.h1>
          </div>
          <div className="border-b-2 pb-8 w-[100%] place-content-center place-items-center grid grid-cols-2 max-md:grid-cols-1 mt-24 max-md:mt-12">
            <motion.div
              className="w-[70%] flex justify-center max-md:w-[40%] max-md:mb-5"
              initial={{ translateX: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0 , opacity: 1}}
              transition={{
                type: "spring",
              }}
            >
              <img alt="img" src="/aset/las img.png" />
            </motion.div>
            <div className="">
              <div className="overflow-hidden">

              <motion.h1
                className="text-start max-md:text-center text-white z-[999] relative text-3xl font-bold  font-mons"
                initial={{ translateX: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                }}
                >
                Visual Design Powerful
              </motion.h1>
                </div>
              <div className="">
                <motion.h2
                  className="text-start text-white mt-5"
                  initial={{ translateY: 100, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ translateY: 0 , opacity: 1}}
                  transition={{
                    type: "spring",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
