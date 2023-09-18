import React from "react";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <div>
      <motion.div className="absolute w-[100%] top-[458px] max-md:top-[540px]"
      initial={{opacity: 0, translateY: 50}}
      animate={{translateY: 0, opacity: 1}}
      transition={{
        type: "spring"
      }}
      >
        <div className="flex justify-end">
          <div className="h-auto flex-col  rounded-s-3xl w-[60%] max-md:w-[80%] flex justify-center bg-gradient-to-r from-[#2F69E6]  to-[#3B88FB] to-100%">
            <div className="p-11 px-24 max-md:px-12 overflow-hidden">
              <motion.h1 className="text-start text-xl text-white"
              initial={{translateX: 100}}
              animate={{translateX: 0}}
              transition={{
                type: "spring"
              }}
              >
                Choise Your Illustration Best And Top Illustration Making Your
                Ideas Test Text Here
              </motion.h1>
            </div>
            <img alt="img" src="/aset/Asset 2.png" className="rounded-s-3xl" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Layout;
