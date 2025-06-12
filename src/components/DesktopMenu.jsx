import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  const [isHovering, setIsHovering] = useState(false);
  const hasSubMenu = menu?.subMenu?.length;

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.li
      className="relative list-none"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {hasSubMenu ? (
        <div className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded hover:bg-white/10 text-white">
          {menu.name}
          <ChevronDown
            className={`transition-transform duration-300 ${
              isHovering ? "rotate-180" : ""
            }`}
          />
        </div>
      ) : (
        <Link
          to={menu.to}
          className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/10 text-white"
        >
          {menu.name}
        </Link>
      )}

      {hasSubMenu && (
        <motion.div
          className="absolute left-0 top-full mt-2 bg-gray-900 text-white rounded-lg p-4 shadow-lg z-50 min-w-[220px] space-y-3"
          initial="exit"
          animate={isHovering ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {menu.subMenu.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="block hover:bg-white/10 p-2 rounded transition"
            >
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.li>
  );
}
