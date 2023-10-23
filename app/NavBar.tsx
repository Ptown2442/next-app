import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex space-x-3 bg-slate-200 p-5">
      <Link className="mr-5" href="/">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Sign In With Google</Link>
    </div>
  );
};

export default NavBar;
