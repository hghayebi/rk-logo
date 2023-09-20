"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const navItems: Array<{ pageName: string; path: string }> = [
    {
      pageName: "Home",
      path: "/",
    },

    {
      pageName: "Create Album",
      path: "/album/create",
    },
  ];

  const renderedNav = navItems.map((navItem) => {
    const isActive = pathname === navItem.path;

    return (
      <Link
        key={navItem.pageName}
        href={navItem.path}
        className={` p-2 border-b-2 ${
          isActive ? "text-sky-500 border-sky-500 " : "border-white"
        }`}
      >
        {navItem.pageName}
      </Link>
    );
  });
  return (
    <div className="flex items-center gap-2 border-b mb-5">{renderedNav}</div>
  );
}
