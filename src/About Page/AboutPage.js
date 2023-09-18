import React from "react";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      <div className="h- flex justify-center bg-[#306AE7]">
        <div className="w-[100%] mt-16 mb-16">
          <motion.h1
            className="font-bold text-2xl text-white font-mons"
            initial={{ translateY: 100 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0 }}
            transition={{
              type: "spring",
            }}
          >
            About Me
          </motion.h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
