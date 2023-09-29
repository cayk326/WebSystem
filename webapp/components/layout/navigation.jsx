import Link from "next/link";

export default function Navigation() {
  return (
    <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
      <Link href="/">
        <p className="text-4xl font-bold text-red-300">どくしょのきろく</p>
      </Link>
      <nav className="ml-auto flex items-center">
        <Link href="/create">
          <p className="mr-5">きろく</p>
        </Link>
        <Link href="/about">
          <p className="mr-5">About</p>
        </Link>
        <Link href="/login">
          <p className="mr-5">ろぐいん</p>
        </Link>
      </nav>
    </header>
  );
}