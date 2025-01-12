import { Swiper, SwiperSlide } from "swiper/react";

function FeaturesSection() {
  const features = [
    {
      imgSrc: "src/img/okf-client-centric-development.svg",
      alt: "client centric development",
      title: "Client Centric Development",
      description:
        "We craft the client's needs on web and mobile to tailor the solutions and enhance growth of the businesses.",
    },
    {
      imgSrc: "src/img/okf-agile.svg",
      alt: "agile development",
      title: "Agile Development",
      description:
        "We follow the Agile Development process that helps us to deliver the project with utmost quality and solid product for reliable and scalable business.",
    },
    {
      imgSrc: "src/img/okf-dedicated-development-team.svg",
      alt: "dedicated development team",
      title: "Dedicated Development Team",
      description:
        "Our skilled team leverage projects to provide best results. The team dedicates their every effort and does not look back until it's accomplished.",
    },
    {
      imgSrc: "src/img/okf-excellent-support.svg",
      alt: "excellent support",
      title: "Excellent Support",
      description:
        "We are always there to assist our clients in every possible way to meet client's expectations and end needs.",
    },
    {
      imgSrc: "src/img/okf-data-backups.svg",
      alt: "data backups",
      title: "Data Backups",
      description:
        "The backups are the best options and we carefully maintain our clients project backups to deal with misfortunes in the best manner.",
    },
    {
      imgSrc: "src/img/okf-data-security.svg",
      alt: "data protection",
      title: "Data Protection",
      description:
        "By signing an NDA, our company ensures the utmost safety of all your private data. We deliver best-rated products to maintain confidentiality.",
    },
    {
      imgSrc: "src/img/okf-qa.svg",
      alt: "quality deliverance",
      title: "Quality Deliverance",
      description:
        "We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.",
    },
    {
      imgSrc: "src/img/okf-growth.svg",
      alt: "enhancement",
      title: "Enhancement",
      description:
        "During Discovery, Designing and Development phases, our technical team is always there to provide suggestions and edits to improvise their product in the best possible manner.",
    },
  ];

  return (
    <section
      className="sect-pad-tb position-relative blue-grad"
      id="our-key-features"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2 className="main-title mb-3 mt-60 title-key-features c-white">
              Our Key Features
            </h2>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
            <p className="c-white">
              Services That We Deliver Makes Us Dignified As One of The Top App
              Development Companies.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-12">
          <div className="mt-40 swiper-container our-key-features ps-3 pe-3">
            <div className="swiper-wrapper">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                navigation={false}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                }}
              >
                {features.map((feature, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div
                        className={`card-box card-box-img-${index + 1} c-white`}
                      >
                        <div className="content d-flex flex-column">
                          <div className="align-self-start">
                            <img
                              width="50px"
                              height="50px"
                              src={feature.imgSrc}
                              alt={feature.alt}
                            />
                            <h3 className="my-3">
                              {feature.title.split("\n").map((line, idx) => (
                                <div key={idx}>
                                  {line}
                                  <br />
                                </div>
                              ))}
                            </h3>
                          </div>
                          <p className="desc mb-0 c-white">
                            {feature.description}
                          </p>
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
}

export default FeaturesSection;
