"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function SearchBar(): JSX.Element {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    return () => setSearch("");
  }, []);

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link
        href={`/dashboard/search?city=${search}`}
        className={`rounded bg-red-600 px-9 py-2 text-white ${
          !search && "pointer-events-none"
        }`}
      >
        Let's go
      </Link>
    </div>
  );
}

export default SearchBar;
