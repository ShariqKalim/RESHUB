import Navbar from "../components/Navbar";

const about = () => {
  return (
    <>
      <Navbar />

      <div>
        <img
          src="images/about.jpg"
          alt="boundary"
          className="w-screen h-screen"
        />
        <div className="w-8/12 mx-auto flex justify-around -mt-96">
          <div className="text-center">
            <img
              src="images/easytouse.png"
              alt="easy to use logo"
              className="w-40"
            />
            <br />
            <p>easy to use</p>
          </div>
          <div className="text-center">
            <img
              src="images/premium.png"
              alt="premium template logo"
              className="w-40"
            />
            <br />
            <p>premium templates</p>
          </div>
          <div className="text-center">
            <img
              src="images/draganddrop.png"
              alt="drag and drop logo"
              className="w-40"
            />
            <br />
            <p>drag and drop</p>
          </div>
        </div>

        <p className="w-8/12 mx-auto font-normal text-lg tracking-wide text-gray-600 -mt-96">
          Reshub is an online resume builder website which provides you with top
          quality premium resume templates.At Reshub you not only get premium
          templates but also cool easy to use drag and drop functionality which
          will not only save your precious time but also gives you the joy to
          create your dream resumes with Reshub.We started with an motive to
          provide this cool software to each and every needy who is wanting to
          create his/her dream resume whether it's for job application,for any
          other professional work or to keep it in the docs file to use later on
          in future or just to show it to friends, it will help you in all
          cases.
        </p>
      </div>
    </>
  );
};

export default about;
