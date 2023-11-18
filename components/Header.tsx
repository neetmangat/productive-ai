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
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
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
            className="object-contain mx-4 rounded"
          />
          <h1 className="font-extralight text-4xl tracking-widest text-[#2A3757]">
            Productive.AI
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="flex-1 outline-none p-2"
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
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <div className={`${!summary && "animate-pulse"} flex items-center`}>
            <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
            Your personal assistant is summarizing the tasks for today...
          </div>
        </p>
      </div>
    </header>
  );
}

export default Header;