import GoogleMapSection from "@/components/SearchPage/GoogleMapSection";
import SearchSection from "@/components/SearchPage/SearchSection";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <SearchSection />
      </div>
      <div className="col-span-2">
        <GoogleMapSection />
      </div>
    </div>
  );
}
