import React from "react";
import { Link } from "react-router-dom";
import Menus from "../utils";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-primary shadow-lg">
      <nav className="px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/media/logo.JPG"
              alt="Church Logo"
              className="h-12 w-12 rounded-full shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">
                Northampton PIWC
              </h1>
              <p className="text-sm text-white/80">
                Pentecost International Worship Centre
              </p>
            </div>
          </Link>

          <ul className="hidden lg:flex gap-4 items-center">
            {Menus.map((menu) => (
              <DesktopMenu key={menu.name} menu={menu} />
            ))}
            <li>
              <SocialLinks />
            </li>
          </ul>

          <MobMenu Menus={Menus} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
