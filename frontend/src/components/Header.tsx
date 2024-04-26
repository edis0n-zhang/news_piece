"use client";
import Link from "next/link";
import { LightSwitch } from "./LightSwitch";
import { Newspaper } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const day = String(yesterday.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <header className="flex items-center justify-between px-2 pt-4 md:px-32">
      <div className="flex items-center">
        <Newspaper />
        <Link
          href={`/${formattedDate}`}
          className="ml-2 mr-3 text-sm font-bold md:ml-4 md:mr-8 md:text-xl"
          prefetch={true}
        >
          News Piece
        </Link>
      </div>

      {/* Navigation */}
      <div className="text-s mr-auto block items-center text-xs md:text-base">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "mr-4 underline decoration-blue-400 decoration-2 underline-offset-4 hover:opacity-80 dark:decoration-blue-600"
              : "mr-4 hover:opacity-80"
          }
        >
          Home
        </Link>
        <Link
          href="/entertainment"
          className={
            pathname === "/entertainment"
              ? "mr-4 underline decoration-blue-400 decoration-2 underline-offset-4 hover:opacity-80 dark:decoration-blue-600"
              : "mr-4 hover:opacity-80"
          }
        >
          Entertainment
        </Link>
        <Link
          href="/sports"
          className={
            pathname === "/sports"
              ? "mr-4 underline decoration-blue-400 decoration-2 underline-offset-4 hover:opacity-80 dark:decoration-blue-600"
              : "mr-4 hover:opacity-80"
          }
        >
          Sports
        </Link>
        <Link
          href="/science"
          className={
            pathname === "/science"
              ? "mr-4 underline decoration-blue-400 decoration-2 underline-offset-4 hover:opacity-80 dark:decoration-blue-600"
              : "mr-4 hover:opacity-80"
          }
        >
          Science
        </Link>
      </div>

      <LightSwitch />
    </header>
  );
};

export default Header;
