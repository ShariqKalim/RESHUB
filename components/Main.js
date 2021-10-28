import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between">
        <div className="w-7/12 mt-14">
          <img src="images/front.png" alt="front image" />
        </div>
        <div className="my-28">
          <h1 className="text-6xl font-bold">India's No. 1 Resume Site</h1>
          <p className="my-10 text-2xl font-normal">
            "Reshub Provides You Best Resume Templates and Premium Drag and Drop
            Feature"
          </p>
          <Link href="/login">
            <button className="w-72 p-3 font-normal text-white tracking-wide  text-xl rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 shadow">
              Create my Resume
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
