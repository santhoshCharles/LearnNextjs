import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <nav>
        <Link prefetch={false} href="/">
          <a>Home</a>
        </Link>
        <Link href={{
            pathname: '/about'
          }}>
          <a>About</a>
        </Link>
        <Link href="/SubFolder" >
          <a>Api call</a>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
