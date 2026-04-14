"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Clock3, ChartNoAxesColumn } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      id: 1,
      name: "Home",
      href: "/",
      icon: House,
    },
    {
      id: 2,
      name: "Timeline",
      href: "/timeline",
      icon: Clock3,
    },
    {
      id: 3,
      name: "Stats",
      href: "/stats",
      icon: ChartNoAxesColumn,
    },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="text-slate-900">Keen</span>
          <span className="text-[#1F5C4A]">Keeper</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#1F5C4A] text-white"
                    : "text-slate-500 hover:bg-gray-100 hover:text-slate-800"
                }`}
              >
                <Icon size={22} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
