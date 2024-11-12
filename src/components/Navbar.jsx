import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

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
          <span className="font-tungsten text-2xl uppercase text-white">
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
          <NavLink
            to="/agents"
            className="block py-2 text-center font-tungsten uppercase text-white md:mx-2 md:flex md:h-full md:items-center md:px-2 md:py-0"
          >
            {({ isActive }) => (
              <span
                className={`text-lg md:rounded-md md:px-2 md:py-1 md:text-xl md:transition-all md:duration-300 md:hover:bg-light md:hover:bg-opacity-25 md:hover:text-primary-red ${
                  isActive ? "active-link" : ""
                }`}
              >
                Agents
              </span>
            )}
          </NavLink>
        </li>
        <li className="h-full w-full border-t border-light md:border-none">
          <NavLink
            to="/"
            className="block py-2 text-center font-tungsten uppercase text-white md:mx-2 md:flex md:h-full md:items-center md:px-2 md:py-0"
          >
            {({ isActive }) => (
              <span
                className={`text-lg md:rounded-md md:px-2 md:py-1 md:text-xl md:transition-all md:duration-300 md:hover:bg-light md:hover:bg-opacity-25 md:hover:text-primary-red ${
                  isActive ? "active-link" : ""
                }`}
              >
                Maps
              </span>
            )}
          </NavLink>
        </li>
        <li className="h-full w-full border-t border-light md:border-none">
          <NavLink
            to="/"
            className="block py-2 text-center font-tungsten uppercase text-white md:mx-2 md:flex md:h-full md:items-center md:px-2 md:py-0"
          >
            {({ isActive }) => (
              <span
                className={`text-lg md:rounded-md md:px-2 md:py-1 md:text-xl md:transition-all md:duration-300 md:hover:bg-light md:hover:bg-opacity-25 md:hover:text-primary-red ${
                  isActive ? "active-link" : ""
                }`}
              >
                Weapons
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
