import Link from "next/link";

function ResturanNavbar(): JSX.Element {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/dashboard/resturant/d" className="mr-7">
        Overview
      </Link>
      <Link href="/dashboard/resturant/d/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}

export default ResturanNavbar;
