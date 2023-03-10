import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full  mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">Investing is fun</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Your space with all the data that you need
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                <span className="font-bold text-yellow-500">
                  Everything that you need is in one place now
                </span>
                . With "My Investor Journal" you don't have to worry about
                organizing your investments in more than one place anymore.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>create potfolios and set allocations</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>view your investments in pie charts</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>
                    create &amp; update your IPS (Investor Policy Statement) and
                    many more
                  </span>
                </li>
              </ul>
              <a
                className="custom-button-colored w-80 sm:w-55 h-12 mr-0 sm:mb-0"
                href="#home"
                aria-label="Presentation Video"
              >
                watch the presentation video
              </a>
            </div>
          </div>
          {/* <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2}
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="sm:w-1/2 lg:mt-20 sm:pt-12 lg:pt-0 px-2 sm:inline-block block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature3}
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};
