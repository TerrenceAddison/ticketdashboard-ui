import React from "react";
import { NextComponentType } from "next";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
// import { useMoralis } from "react-moralis";

const Header: NextComponentType = () => {
  // const { isWeb3Enabled } = useMoralis();

  return (
    <nav className="p-5 border-b2 flex flex-row justify-between items-center">
      <h1 className="py-4 px-4 font-bold text-3xl">Ticket Dashboard</h1>
      <div className="flex flex-row items-center">
        <Link href="/">
          <a className="mr-4 p-6">Home</a>
        </Link>

        <Link href="/events">
          <a className="mr-4 p-6">Events</a>
        </Link>
        <Link href="/create-event">
          <a className="mr-4 p-6">Create Event</a>
        </Link>
        <Link href="/my-events">
          <a className="mr-4 p-6">My Events</a>
        </Link>
        {/* <ConnectWallet accentColor="#f213a4" colorMode="light" /> */}
      </div>
    </nav>
  );
};

export default Header;
