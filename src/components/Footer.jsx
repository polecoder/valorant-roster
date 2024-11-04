function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-primary-blue bg-light p-4 text-primary-blue">
      <p className="text-sm">
        Created with{" "}
        <a
          href="https://valorant-api.com/"
          target="_blank"
          className="text-primary-red hover:underline"
        >
          Valorant API
          <svg
            className="mb-[2px] inline-block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#0F1923"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </a>
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/polecoder"
          target="_blank"
          className="group w-fit"
        >
          <img
            src="/img/githubLogo.svg"
            alt="Github logo"
            className="w-7 transition-transform duration-300 group-hover:scale-110"
          />
        </a>
        <a
          href="https://playvalorant.com/"
          target="_blank"
          className="group w-fit"
        >
          <img
            src="/img/logoBlue.svg"
            alt="Valorant logo"
            className="w-7 transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
