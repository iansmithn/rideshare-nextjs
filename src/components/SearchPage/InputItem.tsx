"use client";
import Image from "next/image";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface InputItemProps {
  type: "source" | "destination";
}

interface Location {
  label: string;
  value: {
    description: string;
    place_id: string;
  };
}

const InputItem: React.FC<InputItemProps> = ({ type }) => {
  const [value, setValue] = useState<Location | null>(null);
  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
      <Image
        src={type == "source" ? "/source.png" : "/destination.png "}
        alt="source"
        width={20}
        height={20}
      />
      {/* <input
        type="text"
        placeholder={type == "source" ? "Pickup Location" : "DropOff Location"}
        className="bg-transparent w-full outline-none"
      /> */}
      <GooglePlacesAutocomplete
        apiKey={process.env.GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
};

export default InputItem;
