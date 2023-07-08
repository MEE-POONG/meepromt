import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NewsSlider = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings} className="w-screen">
        <div className="w-full h-80 object-cover">
          <img src="images/banner2.jpg" alt="" />
        </div>
        <div>
          <img src="images/banner2.jpg" alt="" />

        </div>
        <div>
          <img src="images/banner2.jpg" alt="" />

        </div>
      </Slider>
    </>
  )
}
