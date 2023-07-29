"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  FilePlus2,
  FilesIcon,
  Folder,
  FolderUp,
  ImageIcon,
  LayoutDashboard,
  PlayCircleIcon,
  StarIcon,
} from "lucide-react";
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
    label: "My Folders",
    icon: FolderUp,
    href: "/my-folders",
    color: "text-sky-400",
  },
  {
    label: "Documents",
    icon: Folder,
    href: "/documents",
    color: "text-orange-400",
  },
  {
    label: "Images",
    icon: ImageIcon,
    href: "/images",
    color: "text-[#ffe0e8]",
  },
  {
    label: "Media",
    icon: PlayCircleIcon,
    href: "/media",
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
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" sizes="8" src={"/logo.png"} />
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
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-orange-300/20 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-orange-300/20"
                  : "text-white"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-32 flex p-3 flex-col gap-3 w-full">
          <div className="createFloder">
            <Button variant={"folder"}>
              <FolderUp className="w-9 -h-9" /> Add a Folder
            </Button>
          </div>
          <div className="addFile w-full">
            <Button variant={"file"}>
              <FilePlus2 className="w-9 -h-9" /> Add New File
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
