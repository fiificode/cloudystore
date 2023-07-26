"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { FilePlus2, FilesIcon, FolderUp, LayoutDashboard, StarIcon } from "lucide-react";
import { Button } from "../ui/button";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-orange-700",
  },
  {
    label: "My Files",
    icon: FilesIcon,
    href: "/my-files",
    color: "text-indigo-400",
  },
  {
    label: "Favorites",
    icon: StarIcon,
    href: "/starred",
    color: "text-sky-500",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src={"/logo.png"} />
          </div>
          <h1 className={cn("text-xl font-bold", montserrat.className)}>
            CloudyStore
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-orange-300/20 rounded-lg transition "
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-32 flex flex-col gap-3 w-full">
          <div className="createFloder">
            <Button variant={"folder"}>
              <FolderUp className="w-9 -h-9"/> Add Folder
            </Button>
          </div>
          <div className="addFile w-full">
            <Button variant={"file"}>
              <FilePlus2 className="w-9 -h-9"/> Add New File
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;