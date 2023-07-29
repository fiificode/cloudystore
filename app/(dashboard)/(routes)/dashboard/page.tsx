import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Cross, Folder, ImageIcon, ImageMinus, PlayCircle } from "lucide-react";
import Categorycard from "@/components/categorycard/Categorycard";

const DashboardPage = () => {
  const folderSummary = [
    {
      id: 1,
      name: "Documents",
      color: "bg-[#7ba0ff]",
      icon: <Folder className="w-5 h-5" />,
      files: 123,
      value: 33,
      href: "/documents"
    },
    {
      id: 2,
      name: "Images",
      color: "bg-[#ff769b]",
      icon: <ImageIcon className="w-5 h-5" />,
      files: 223,
      background: "bg-[#ffe0e8]",
      value: 50,
      href:"/images"
    },
    {
      id: 3,
      name: "Audios",
      color: "bg-[#9b7cdf]",
      icon: <PlayCircle className="w-5 h-5" />,
      files: 423,
      background: "bg-[#e6dff7]",
      value: 85,
      href:"/media"
    },
  ];
  return (
    <>
      <div className="grid p-5 grid-cols-1 gap-5 md:grid-cols-3 md:h-screen w-full">
        <div className="col-span-2">
          <div className="top flex justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold">My Cloud</h2>
              <p className="text-sm text-gray-400">
                Hi Franklin, Welcome Back!
              </p>
            </div>
            <div>
              <Button variant={"add"} size={"sm"}>
                <div className="w-5 h-5 border flex items-center justify-center rounded-full border-white">
                  <Cross className="w-3 h-3 " />
                </div>
                <span className="ml-2 font-semibold">Add</span>
              </Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-2">
            {folderSummary.map((card, index) => {
              return (
                <div key={card.id}>
                  <Categorycard
                    name={card.name}
                    background={card.background}
                    value={card.value}
                    files={card.files}
                    color={card.color}
                    icon={card.icon}
                    href={card.href}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white h-full">storage</div>
      </div>
    </>
  );
};

export default DashboardPage;
