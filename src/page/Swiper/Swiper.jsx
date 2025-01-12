import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Swiper, SwiperSlide } from "swiper/react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useNavigate } from "react-router-dom";

const SliderSection = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  const slidesData = [
    {
      bannerClass: "mobile-banner-images",
      title: [
        { text: "Mobile App", className: "text-skyblue fst d-block" },
        { text: "Development Company", className: "scd d-block" },
      ],
      ctaLink: "#",
      ctaText: "Get A Quote",
      ctaIcon: "src/img/arrow-right-white.svg",
      ctaAlt: "right arrow",
      imageSrc: "src/img/mobile-app-development.png",
      imageAlt: "Mobile App Development",
    },
    {
      bannerClass: "website-banner-images",
      title: [
        { text: "Web", className: "text-pinkorange fst d-block" },
        { text: "Development Company", className: "scd d-block" },
      ],
      ctaLink: "#",
      ctaText: "Get A Quote",
      ctaIcon: "src/img/arrow-right-white.svg",
      ctaAlt: "right arrow",
      imageSrc: "src/img/web-development.png",
      imageAlt: "Web Development",
    },
  ];
  const navigate = useNavigate();

  return (
    <section className="slider-sect position-relative">
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen:{
           "enable":false
          },
          particles: {
            number: {
              value: 120,
              density: { enable: true, value_area: 900 },
            },
            color: { value: "#00c9ff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#92fe9d" },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false },
            },
            size: {
              value: 5,
              random: true,
              anim: { enable: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#aaa",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="container-fluid mb-5 px-0 pt-5 pt-sm-5 pt-md-0">
        <div className="row no-gutters">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="swiper-container main-slider">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                loop={true}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide overflow-hidden">
                      <div
                        className={`d-flex align-items-center ${slide.bannerClass}`}
                      >
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 left-content align-self-xl-center align-self-start align-self-sm-start align-self-md-start align-self-lg-start">
                              <h1>
                                {slide.title.map((line, i) => (
                                  <span key={i} className={line.className}>
                                    {line.text}
                                  </span>
                                ))}
                              </h1>
                              <label className="mb-0 d-flex align-items-center read-more-btn mt-4">
                                <a onClick={()=>navigate("/contact")} className="ml-3" title>
                                  Get A Quote{" "}
                                  <img
                                    className="ml-3"
                                    src={slide.ctaIcon}
                                    alt="right arrow"
                                  />
                                </a>
                              </label>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                              <img
                                className="img-fluid"
                                src={slide.imageSrc}
                                alt={slide.imageAlt}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
