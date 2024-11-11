import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    } else {
      setIsOpen(true);
      setHeight("auto");
    }
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed z-[99] w-full bg-primary-blue md:flex md:justify-between">
      <div className="flex justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <img src="/img/logoWhite.svg" alt="Valorant Logo" />
          <span className="font-tungsten text-2xl uppercase tracking-wider text-white">
            Roster
          </span>
        </div>
        <button className="md:hidden" type="button" onClick={toggleMenu}>
          <img src="/img/menu.svg" alt="Menu icon" />
        </button>
      </div>
      <ul
        ref={ref}
        style={{ maxHeight: window.innerWidth < 768 ? height : "none" }}
        className="flex-col items-center overflow-hidden transition-[max-height] duration-300 ease-in-out md:flex md:max-h-full md:flex-row"
      >
        <li className="h-full w-full border-t border-light md:border-none">
          <Link
            to="/agents"
            className="block py-2 text-center font-tungsten text-lg uppercase tracking-wider text-white md:h-full md:px-4 md:py-0 md:leading-[63px]"
          >
            Agents
          </Link>
        </li>
        <li className="h-full w-full border-t border-light md:border-none">
          <a
            href="#"
            className="block py-2 text-center font-tungsten text-lg uppercase tracking-wider text-white md:h-full md:px-4 md:py-0 md:leading-[63px]"
          >
            Maps
          </a>
        </li>
        <li className="h-full w-full border-t border-light md:border-none">
          <a
            href="#"
            className="block py-2 text-center font-tungsten text-lg uppercase tracking-wider text-white md:h-full md:px-4 md:py-0 md:leading-[63px]"
          >
            Weapons
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
