import SmoothSliderWrapper from "./SmoothSlider.style";

const SmoothSliderData = ({data}) => {
  return (
    <SmoothSliderWrapper>
      <div className="smooth-slider-container">
        {data?.map((item, i) => (
          <div key={i} className="slider-item mx-4 my-2">
            <img src={item.icon.src} alt="slider-img" />
          </div>
        ))}
      </div>
    </SmoothSliderWrapper>
  );
};

export default SmoothSliderData;
