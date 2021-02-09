import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div className={"logo"}>
        <h1> Ninjas List </h1>
      </div>
      <div className={"links"}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninjas List</a>
        </Link>
      </div>
    </nav>
  );
};
