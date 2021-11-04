import Navbar from "../components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="border-2 shadow-xl p-2">
 <div className="w-8/12 mx-auto mt-20">
 <p className=" w-full font-normal text-lg text-gray-600 tracking-wide text-center">
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
        {/* <Image
          src="/images/about.jpg"
          alt="boundary"
          width="1500"
          height="700"
        ></Image> */}
        <div className="w-8/12 mx-auto flex justify-around mt-32">
          <div className="text-center">
            <Image
              src="/images/easytouse.png"
              alt="easy to use logo"
              width="200"
              height="150"
            ></Image>
            <br />
            <p>easy to use</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/premium.png"
              alt="premium template logo"
              width="200"
              height="150"
            ></Image>
            <br />
            <p>premium templates</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/draganddrop.png"
              alt="drag and drop logo"
              width="200"
              height="150"
            ></Image>
            <br />
            <p>drag and drop</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
