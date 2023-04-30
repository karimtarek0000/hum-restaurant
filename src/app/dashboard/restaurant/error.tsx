"use client";
import imgError from "@/assets/icons/error.png";
import Image from "next/image";

function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): JSX.Element {
  console.log(error);

  return (
    <div className="h-screen flex flex-col items-center bg-gray-200 justify-center">
      <Image src={imgError} alt="error" className="w-56 mb-8" />
      <div className="px-9 py-14 shadow rounded">
        <h3 className=" text-3xl font-bold">Oops!, This is embarrassing</h3>
        <p className="text-reg font-bold text-center mt-4">An Error Occurred</p>
        <p className="text-reg font-bold text-center mt-5">Error code: 404</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}

export default Error;
