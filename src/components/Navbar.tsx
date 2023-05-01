import Link from "next/link";
import LoginModal from "./LoginModal";

function Navbar(): JSX.Element {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link
        href="/dashboard"
        className="font-bold uppercase text-gray-700 text-2xl"
      >
        hum
      </Link>
      <div>
        <div className="flex">
          <LoginModal isSignIn={true} />
          <LoginModal isSignIn={false} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
