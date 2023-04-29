import Link from "next/link";

function ResturanNavbar({slug}: {slug:string}): JSX.Element {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/dashboard/restaurant/${slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/dashboard/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
}

export default ResturanNavbar;
