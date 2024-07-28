import { FaGlobe } from "react-icons/fa";

const AboutUs = ({ pageProps }) => {
  return (
    <>
      <div
        className={`flex ${
          pageProps.isReversed && "flex-row-reverse"
        } justify-around items-center px-[8vw] py-10`}
      >
        <div className="flex flex-col gap-4 w-[600px]">
          <div className="flex gap-6 items-center border-b-2 border-gray-400 pb-3">
            {pageProps.icon}
            <h1 className="text-4xl font-semibold text-gray-800">
              {pageProps.heading}
            </h1>
          </div>
          <p className="leading-6 text-gray-800 font-medium tracking-[1px]">
            {pageProps.description}
          </p>
        </div>
        <div>
          <img
            className="rounded-xl shadow-md hover:scale-105 transition-all"
            width={460}
            src={pageProps.imgSrc}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

AboutUs.defaultProps = {
  isReversed: false,
  icon: <FaGlobe color="#939185" className="scale-[1.6]" />,
  heading: "About us",
  description: "U&I Trust",
  imgSrc:
    "https://img.freepik.com/premium-photo/college-students-talking-campus_1029469-68153.jpg",
};

export default AboutUs;
