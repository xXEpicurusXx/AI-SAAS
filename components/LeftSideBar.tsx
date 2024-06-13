"use client";

import Link from "next/link";
import Image from "next/image";

import React from "react";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className={cn("left_sidebar h-[calc(100vh-5px)]")}>
      {" "}
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src="/icons/TAIOP_logo.png"
            alt="logo"
            width={23}
            height={27}
            className="rounded-full"
          />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
          TAIOP PodPilot
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                {
                  "bg-nav-focus border-r-4 rounded-md border-rose-500":
                    isActive,
                }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSideBar;
