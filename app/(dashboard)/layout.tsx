import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative bg-slate-50">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-black">
        <Sidebar />
      </div>
      <Navbar />
      <main className="md:pl-72">{children}</main>
    </div>
  );
};

export default AppLayout;
