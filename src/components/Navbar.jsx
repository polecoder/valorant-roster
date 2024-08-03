import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(isOpen ? ref.current.scrollHeight : 0);
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed z-[99] w-full bg-primary-blue">
      <div className="flex justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <img src="./img/logoWhite.svg" alt="Valorant Logo" />
          <span className="font-tungsten text-2xl uppercase tracking-wider text-white">
            Roster
          </span>
        </div>
        <button type="button" onClick={toggleMenu}>
          <img src="./img/menu.svg" alt="" />
        </button>
      </div>
      <ul
        ref={ref}
        style={{ maxHeight: `${height}px` }}
        className="flex-col items-center overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <li className="h-full w-full border-t border-light py-2">
          <a
            href="#"
            className="block text-center font-tungsten text-lg uppercase tracking-wider text-white"
          >
            Agents
          </a>
        </li>
        <li className="h-full w-full border-t border-light py-2">
          <a
            href="#"
            className="block text-center font-tungsten text-lg uppercase tracking-wider text-white"
          >
            Maps
          </a>
        </li>
        <li className="h-full w-full border-t border-light py-2">
          <a
            href="#"
            className="block text-center font-tungsten text-lg uppercase tracking-wider text-white"
          >
            Weapons
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
