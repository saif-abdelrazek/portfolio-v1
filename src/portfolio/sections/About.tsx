import aboutImg from "../assets/Saif_Abdelrazek_About.jpg";
import { ABOUT_TEXT } from "../../constants/index";
import { motion } from "framer-motion";
import Technologies from "./Technologies";

function About() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 sm:text-justify">
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 1 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <p className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
      <Technologies />
    </>
  );
}

export default About;
