import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <div className={"logo"}>
        <Image height={60} width={60} src={"/logo.png"} />
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
