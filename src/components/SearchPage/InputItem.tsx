import Image from "next/image";
import React from "react";

interface InputItemProps {
  type: "source" | "destination";
}

const InputItem: React.FC<InputItemProps> = ({ type }) => {
  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
      <Image
        src={type == "source" ? "/source.png" : "/destination.png "}
        alt="source"
        width={20}
        height={20}
      />
      <input
        type="text"
        placeholder={type == "source" ? "Pickup Location" : "DropOff Location"}
        className="bg-transparent w-full outline-none"
      />
    </div>
  );
};

export default InputItem;
