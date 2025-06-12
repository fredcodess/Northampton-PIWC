import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClickedIndex(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    },
  };

  return (
    <div className="lg:hidden anton">
      <button className="z-[999] relative text-white" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg- backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ul>
          {Menus.map(({ name, to, subMenu }, i) => {
            const isClicked = clickedIndex === i;
            const hasSubMenu = Array.isArray(subMenu) && subMenu.length;

            return (
              <li key={name}>
                {hasSubMenu ? (
                  <span
                    className="flex justify-between items-center p-4 hover:bg-white/10 rounded-md cursor-pointer"
                    onClick={() => setClickedIndex(isClicked ? null : i)}
                  >
                    {name}
                    <ChevronDown
                      className={`transition-transform ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="block p-4 hover:bg-white/10 rounded-md cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                )}

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5 pl-2 border-l border-white/20 space-y-2"
                  >
                    {subMenu.map(({ name: subName, to: subTo, desc }, j) => (
                      <li key={`${subName}-${j}`}>
                        <Link
                          to={subTo}
                          className="block p-2 hover:bg-white/5 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          <h4 className="font-medium">{subName}</h4>
                          {desc && (
                            <p className="text-xs text-white/60 leading-tight">
                              {desc}
                            </p>
                          )}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
