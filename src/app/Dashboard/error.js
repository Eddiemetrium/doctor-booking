// app/error.js
"use client"; // This is a client component
import error from "../../../components/Error/Error";


export default function Error({ error, reset }) {
  return (
    <>
      <div className="pt-40 flex flex-col  items-center mt-15 font-extrabold text-xl">
        <p className="font-extrabold text-[2.5rem]">Something went wrong!</p>
        <p className="font-extrabold text-[1.5rem] pt-8 pb-8 text-center px-4">{error.message}</p>
        <button
          className="border border-black font-extrabold text-[1rem] px-4 py-2 "
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </>
  );
}
