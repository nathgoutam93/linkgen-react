import React from "react";

function Header() {
  return (
    <header className="sticky top-0 w-full p-4 flex justify-between items-center bg-primary border-b border-secondary z-10">
      <h1 className="text-2xl font-nunito flex font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-blue-400">
        Link.gen
      </h1>
      <a
        rel="noreferrer"
        href="https://linkpile-bffd7.web.app/"
        target="_blank"
        className="px-4 py-2 text-white font-nunito font-bold rounded-3xl bg-primary-accent hover:bg-secondary-accent"
      >
        Try Linkpile
      </a>
    </header>
  );
}

export default Header;
