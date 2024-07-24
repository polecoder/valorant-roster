function Navbar() {
  return (
    <nav className="flex w-full justify-between bg-primary-blue p-4">
      <div className="flex items-center gap-4">
        <img src="./img/logo.svg" alt="Valorant Logo" />
        <span className="font-tungsten text-2xl uppercase tracking-wider text-white">
          Roster
        </span>
      </div>
      <button type="button">
        <img src="./img/menu.svg" alt="" />
      </button>
    </nav>
  );
}

export default Navbar;
