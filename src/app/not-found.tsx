"use client";
import imgError from "@/assets/icons/error.png";
import Image from "next/image";

function NotFound(): JSX.Element {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-200 justify-center">
      <Image src={imgError} alt="error" className="w-56 mb-8" />
      <div className="px-9 py-14 shadow rounded">
        <h3 className=" text-3xl font-bold">
          404 | this page not found our website
        </h3>
      </div>
    </div>
  );
}

export default NotFound;
