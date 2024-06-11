import GoogleMapSection from "@/components/SearchPage/GoogleMapSection";
import SearchSection from "@/components/SearchPage/SearchSection";
import Image from "next/image";
import React, { useState } from "react";
import { SourceContext } from "../../context/Sourcecontext";
import { DestinationContext } from "../../context/destinationContext";

export default function Home() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);

  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ source, setSource }}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <SearchSection />
          </div>
          <div className="col-span-2">
            <GoogleMapSection />
          </div>
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
