import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ExamSlider = () => {

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
      <Slider {...settings}>
        <div>
          <img 
          src="https://images-na.ssl-images-amazon.comimagesSpv-target-images1f80e38df58b3fa185db0c0ee48b0d8dd5ba03c1773fefcd81859efb7a87cddc._RI_TTW_SX720_FMjpg_.jpg" alt="" />
        </div>
        <div>
          <img src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/mashle_magic_and_adventure_1679637857384_1679637866774_1679637866774.png" alt="" />
        </div>
        <div>
          <img src="https://staticg.sportskeeda.com/editor/2022/12/9b6ae-16713538062138-1920.jpg" alt="" />
        </div>
      </Slider>
    </>
  )
}
