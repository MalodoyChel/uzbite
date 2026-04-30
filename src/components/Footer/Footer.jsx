import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTelegram,
} from "react-icons/fa";
import { COMPANY, FOOTER_LINKS } from "../../data/constants";

const Footer = () => {
  // const [email, setEmail] = useState("");

  // const handleSubscribe = (e) => {
  //   e.preventDefault();
  //   // Handle newsletter subscription
  //   if (email) {
  //     alert(`Thank you for subscribing with ${email}!`);
  //     setEmail("");
  //   }
  // };

  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="#home" className="">
                Uz
                <span className="inline-block font-bold text-primary">Bite</span>
              </a>
            </h1>
            <p className="">
              {COMPANY.description}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>{COMPANY.address}</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>{COMPANY.phone}</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FOOTER_LINKS.important.map((link, index) => (
                    <li key={index} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      <a href={link.href} className="hover:text-primary">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {FOOTER_LINKS.resources.map((link, index) => (
                    <li key={index} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      <a href={link.href} className="hover:text-primary">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Creators
                </h1>
                <ul className="flex flex-col gap-3">
                  {FOOTER_LINKS.creators.map((link, index) => (
                    <li key={index} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      <a href={link.href} className="hover:text-primary">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  {/* <h1>Subscribe to our newsletter</h1>
                  <form onSubmit={handleSubscribe}>
                    <input
                      className="w-full rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit"
                      className="mt-2 w-full rounded-full bg-primary px-3 py-1 text-white hover:bg-primary/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form> */}
                  <div className="mt-6 flex items-center gap-3">
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105">
                      <FaTelegram className="text-3xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2026 {COMPANY.name} || All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
