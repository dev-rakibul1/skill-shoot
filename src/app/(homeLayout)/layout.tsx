// app/dashboard/layout.tsx
import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
