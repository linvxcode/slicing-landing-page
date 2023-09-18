import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#403CB6]">
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-md:gap-12 max-sm:grid-cols-1 max-md:place-items-center p-12">
          <div className="flex justify-center flex-col">
            <motion.h1
              className="text-xl text-start font-bold font-mons text-white max-md:text-center"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              DIGITAL ILLUSTRATION
            </motion.h1>
            <motion.h2
              className="text-start text-sm text-white max-md:text-center"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.3,
              }}
            >
              Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
              ditempatkan untuk mendemostrasikan elemen grafis atau presentasi
              visual seperti font,
            </motion.h2>
          </div>
          <div className="flex place-items-start max-md:place-items-center md:mx-24 justify-end flex-col ">
            <motion.h1
              className="text-sm text-start font-bold font-mons text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              Explore
            </motion.h1>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.4,
              }}
            >
              Guitar
            </motion.h2>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.5,
              }}
            >
              Biola
            </motion.h2>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.6,
              }}
            >
              Piano
            </motion.h2>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.7,
              }}
            >
              Dj Music
            </motion.h2>
          </div>
          <div className="flex place-items-start max-md:place-items-center justify-end flex-col">
            <motion.h1
              className="text-sm text-start font-bold font-mons text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              Explore
            </motion.h1>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.4,
              }}
            >
              Guitar
            </motion.h2>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.5,
              }}
            >
              Biola
            </motion.h2>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.6,
              }}
            >
              Piano
            </motion.h2>
            <motion.h2
              className="text-start text-sm text-white"
              initial={{ translateX: 30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.7,
              }}
            >
              Dj Music
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
