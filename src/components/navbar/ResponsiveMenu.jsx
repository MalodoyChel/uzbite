import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { COMPANY, NAV_LINKS } from "../../data/constants";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>{COMPANY.name}</h1>
            <h1 className="text-sm text-slate-500">Digital Solutions</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#home" className="mb-5 inline-block hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="mb-5 inline-block hover:text-primary transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="mb-5 inline-block hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href={`tel:${COMPANY.phone}`} className="mb-5 inline-block hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2026 {COMPANY.name} All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
