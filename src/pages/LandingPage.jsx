import { FaCompass, FaGlobe } from "react-icons/fa";
import PageInfo from "../components/PageInfo";
import { FaGauge } from "react-icons/fa6";
import DiscoverSection from "../components/DiscoverSection";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import UserCards from "../components/UserCards";
import Form from "../components/Form";
import VideoUpload from "../components/Videoupload";

const LandingPage = () => {
  const props = [
    {
      isReversed: true,
      icon: <FaGauge color="#e6b9a6" className="scale-[1.6]" />,
      heading: "U&I Teach",
      description:
        "The U&I Teach program provides after-school tutoring to underprivileged children, helping them improve their academic performance in subjects such as English, Math, and Science. With over 2,000 children currently benefiting from this initiative, U&I operates 108 Learning Centers across 35 cities in India. The program boasts a favorable tutor-to-student ratio of 1:1, allowing for personalized attention that enhances learning outcomes. This approach is especially critical in a context where government schools often have a teacher-student ratio as high as 1:50",
      imgSrc: "/teach.png",
    },
    {
      isReversed: false,
      icon: <FaGlobe color="#939185" className="scale-[1.8]" />,
      heading: "Volunteer Engagement",
      description:
        "U&I Trust is powered by a strong volunteer base, with over 3,600 individuals engaged in various capacities, including tutoring and corporate volunteering initiatives. The organization emphasizes the importance of community involvement, believing that collective efforts can lead to significant social change. Volunteers not only contribute their time but also participate in training and development programs to enhance their impact.",
      imgSrc: "vol.png",
    },

    {
      isReversed: true,
      icon: <FaCompass color="#2f3645" className="scale-[1.6]" />,
      heading: "U&I Care",
      description:
        "U&I Care focuses on supporting individuals with special needs and abandoned children. The program operates in government-run homes and provides essential services, including rehabilitation, vocational training, and social interaction. U&I Care has impacted around 300 vulnerable individuals, offering them opportunities for personal growth and developmen",
      imgSrc: "care.png",
    },
    {
      isReversed: false,
      icon: <FaCompass color="#2f3645" className="scale-[1.6]" />,
      heading: "Achievements and Recognition",
      description:
        "U&I Trust has been recognized for its effective operations and transparency. It holds certifications from GuideStar India and is a member of various networks that promote accountability in the nonprofit sector. The organization has received support from numerous corporate partners, including Visa and Intel, which has further enabled its outreach and impact",
      imgSrc: "/logo.jpg",
    },
    {
      isReversed: true,
      icon: <FaCompass color="#2f3645" className="scale-[1.6]" />,
      heading: "Future Aspirations",
      description:
        "U&I Trust continues to expand its reach and improve its programs, aiming to create a sustainable model for social change. The organization believes in the potential of every child and individual it serves, striving to foster an environment where they can thrive and succeed",
      imgSrc: "/teach.png",
    },
  ];

  return (
    <>
      <div className="carousel-container">
        <Carousel />
      </div>
      <div>
        <PageInfo pageProps={props[0]} />
        <hr className="border-2 border-gray-200" />
        <PageInfo pageProps={props[1]} />
        <hr className="border-2 border-gray-200" />
        <PageInfo pageProps={props[2]} />
        <hr className="border-2 border-gray-200" />
        <PageInfo pageProps={props[3]} />
        <hr className="border-2 border-gray-200" />
        <PageInfo pageProps={props[4]} />
        <hr className="border-2 border-gray-200" />
        <UserCards />
        <DiscoverSection />
        <hr className="border-2 border-gray-200" />
        <Form />
        <Footer />
        <VideoUpload />
      </div>
    </>
  );
};

export default LandingPage;
