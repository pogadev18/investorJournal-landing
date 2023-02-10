import { useState } from "react";
import { motion } from "framer-motion";

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <FAQBox
                title="What is My Investor Journal?"
                content="My Investor Journal provides you with a set of tools and an interface where you can journal your activity
                as a long-term investor. This is your space where you can add your personal notes for an investment and where you
                can create & modify your IPS based on the current stage of your life. This is the place the people who are dear to you and for which you will leave your portfolio
                as a legacy will have access so they can understand your mindset and continue to grow
                your portfolio. This is the space that will help you to stay disciplined."
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title="What not to expect from My Investor Journal?"
                content="We do not predict if your investments will go up or down if you buy 'X' or you buy 'Y'. We are not telling you how your investments are performing.
                We do not track your portfolio wealth: how much money you made in the last 30 days, or in the last 6 months, or what is your overall profit. You can't buy stocks or
                any other form of investment from My Investor Journal."
              />
            </div>
          </div>
          <div className="flex justify-center">
            <a
              className="custom-button-colored w-80 sm:w-55 h-12 mr-0 sm:mb-0"
              href="#home"
              aria-label="Presentation Video"
            >
              watch the presentation video
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
