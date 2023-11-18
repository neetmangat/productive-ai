"use client";

import { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  const [search, setSearch] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted! " + search);
  };

  return (
    <header className="">
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 dark:bg-slate-100/20 rounded-b-2xl md:rounded-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#0055D1] to-[#DC5CF9] rounded-md filter blur-3xl opacity-50 -z-50" />
        {/* Logo */}
        {/* <Image
          // src={logo}
          src={"https://links.papareact.com/c2cdd5"}
          alt="logo"
          width={300}
          height={100}
          // className="object-contain mx-4 rounded"
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        /> */}

        <div className="flex items-center pb-10 md:pb-0 object-contain">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="object-contain mx-4 rounded border border-[#B423F8]/50 dark:border-none"
          />
          <h1 className="font-extralight text-4xl tracking-widest text-[#2A3757] dark:text-white">
            Productive.AI
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-5 bg-white dark:bg-slate-900/70 rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="flex-1 outline-none p-2 dark:bg-slate-900/0"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Neet Mangat" size="50" round color="#B423F8" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <div className="flex items-center p-5 bg-white dark:bg-slate-900/70 rounded-xl shadow-xl w-fit max-w-3xl">
          <div
            className={`${
              !summary && "animate-pulse"
            } flex items-center text-[#0055D1] dark:text-white`}
          >
            <UserCircleIcon className="inline-block h-10 w-10  mr-1" />
            <p className="font-light italic ">
              Your personal assistant is summarizing the tasks for today...
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
