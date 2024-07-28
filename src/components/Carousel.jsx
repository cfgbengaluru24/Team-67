import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-full h-[calc(60vh-80px)] flex items-center justify-center">
      <div className="hidden md:block w-1/6">
        <img
          src="/path/to/left-side-image.jpg"
          alt="Left side"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <Slider {...settings}>
          {[1, 2, 3, 11, 4, 5].map((num, index) => (
            <div key={index} className="w-full h-[calc(60vh-80px)]">
              <img
                src={`/pic1_files/${num}${
                  num === 3 || num === 4 || num === 11 ? "__1" : ""
                }.png`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:block w-1/6">
        <img
          src="/path/to/right-side-image.jpg"
          alt="Right side"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
