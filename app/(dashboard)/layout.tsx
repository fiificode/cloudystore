import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative bg-orange-50">
      <div className="hidden h-full lg:flex lg:flex-col lg:fixed lg:w-64 lg:inset-y-0 z-[80] bg-black">
        <Sidebar />
      </div>
      <Navbar />
      <main className="lg:pl-64">{children}</main>
    </div>
  );
};

export default AppLayout;
