"use client";
import Image from "next/image";
import React from "react";

const SignUp = () => {
  return (
    <div className=" w-full h-full">
      <Image
        src="/citycenter.jpg"
        alt=""
        layout="fit"
        objectFit="cover"
        width={1200}
        height={1000}
      />
    </div>
  );
};

export default SignUp;
