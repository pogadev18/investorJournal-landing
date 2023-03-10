import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

import { supabase } from "../supabase";

export const InvitationModal = ({ setIsOpen }) => {
  const [emailAddress, setEmailAddresds] = useState("");
  const [emailAlreadyRegistered, setEmailALreadyRegistered] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [successMesage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { data: emailFound, error: checkEmailError } = await supabase
      .from("emails")
      .select()
      .eq("email", emailAddress.toLowerCase());

    if (emailFound?.length >= 1) {
      setEmailALreadyRegistered(true);
      setIsLoading(false);
      return;
    }

    if (checkEmailError) {
      setServerError(true);
      setIsLoading(false);
      return;
    }

    const { status, error: saveEmailError } = await supabase
      .from("emails")
      .insert({ email: emailAddress.toLowerCase() });

    if (status === 201) {
      setSuccessMessage(true);
      setIsLoading(false);
    }

    if (saveEmailError) {
      setServerError(true);
      setIsLoading(false);
      return;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col relative md:flex-row">
              <div className="md:w-1/2 w-full lg:inline">
                <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
                  Subscribe Now
                </h2>

                <ul className="mb-2 md:mb-6 text-white mt-12">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>be the first to know about any updates</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>test the application when it comes out</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>first 50 users will have extra benefits</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-8 md:pt-24 sm:pt-0">
                <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                  <div className="text-white mr-2 text-8xl">
                    <TailcastLogo />
                  </div>
                  <div className="text-white font-['Inter'] font-bold text-2xl">
                    My Investor Journal Newsletter
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full sm:w-4/5 p-2 mx-auto">
                      {successMesage ? (
                        <div className="text-white">
                          <h4 className="font-bold text-xl mb-3">Thanks! </h4>
                          <p>
                            We appreciate that you have taken the time to
                            register. We will get back to you very soon.
                          </p>
                        </div>
                      ) : (
                        <>
                          <label
                            className="text-white mb-2 inline-block"
                            htmlFor="newsletterInput"
                          >
                            Enter your favorite email address
                          </label>
                          <input
                            value={emailAddress}
                            onChange={(e) => setEmailAddresds(e.target.value)}
                            required
                            className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                            id="newsletterInput"
                            type="email"
                            disabled={isLoading}
                          />
                          {isLoading ? (
                            <p className="text-white mt-2">submitting...</p>
                          ) : (
                            <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                              <button
                                className="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#7765e6] transition ease-in-out duration-200"
                                type="submit"
                              >
                                Join Now
                              </button>
                            </div>
                          )}
                        </>
                      )}

                      {emailAlreadyRegistered && !successMesage && (
                        <p className="text-red-400 mt-2 text-sm">
                          It looks like this email is already registerd for the
                          newsletter! Try again with a new one.
                        </p>
                      )}
                      {serverError && (
                        <p className="text-red-400 mt-2 text-sm">
                          Something went wrong with the server! Please try
                          again!
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="fixed top-4 right-4 z-50 w-4 h-4 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
