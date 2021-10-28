import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="mt-2 flex justify-between">
        <div>
          <Link href="/">
            <img src="images/logo.png" alt="Logo" className="w-40 ml-10" />
          </Link>
        </div>
        <div className="w-8/12 mt-3">
          <ul className="flex float-right mx-20 w-6/12 justify-between font-normal tracking-wider">
            <Link href="/login">
              <li className="cursor-pointer ">Login</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer ">About</li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer ">Contact</li>
            </Link>
            <Link href="/">
              <li className="p-1 w-40 text-center text-white  cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full">
                Back to home
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
