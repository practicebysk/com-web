function ClientSection() {
  const imgList = {
    experience: "src/img/ux.png",
    mobileApp: "src/img/dating-app.png",
    website: "src/img/data.png",
    milliApp: "src/img/app-development-ab.png",
    webDesiDev: "src/img/web-development-2.png",
  };
  return (
    <section className="states-sect about-sect">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 pe-3 pe-md-4 pe-xl-5 align-self-center mb-0 mb-md-4 mb-lg-4">
            <h2 className="comp-nam mb-3">
              <span>CodeGrid</span> <span>Tech</span>
            </h2>
            <p className="desc mb-0">
              Because we deliver the best & we are unbeatable.
            </p>
            <p className="desc mt-4 mb-0 text-justify">
              CodeGrid Tech is a renowned{" "}
              <b>
                web development company & the best IT Software Solutions
                provider based in India, established in 2023.
              </b>
              <br />
              <br />
              <b>CodeGrid Tech</b> is well known to craft the most innovative &
              eye catchy mobile apps & websites. We offer a wide range of
              customized services in Mobile Apps, Website Development, and much
              more. Our skilled team & our products are engineered to bring
              growth to your business. We believe in delivering the services
              without compromising on time and quality.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <div className="row mob-row flex-nowrap flex-sm-nowrap flex-xl-wrap">
              <div className="col-9 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card-box text-center m-auto bg-white">
                  <img src={imgList.experience} alt="experience" />
                  <h3 className="pb-1 my-3">
                    <span>2+</span>
                  </h3>
                  <p className="desc mb-0">
                    Years Experience in Mobile App Design and Development
                  </p>
                </div>
              </div>
              <div className="col-9 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-35">
                <div className="card-box text-center m-auto bg-white">
                  <img src={imgList.mobileApp} alt="mobile app development" />
                  <h3 className="pb-1 my-3">
                    <span>25+</span>
                  </h3>
                  <p className="desc mb-0">
                    Mobile Apps
                    <br />
                    Developed
                  </p>
                </div>
              </div>
              <div className="col-9 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card-box text-center m-auto bg-white">
                  <img src={imgList.website} alt="web development" />
                  <h3 className="pb-1 my-3">
                    <span>35+</span>
                  </h3>
                  <p className="desc mb-0">
                    Websites
                    <br />
                    Developed
                  </p>
                </div>
              </div>

              {/* <div className="col-9 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="card-box text-center m-auto bg-white">
                    <img src={imgList.milliApp} alt="app downloads" />
                    <h3 className="pb-1 my-3">
                      <span>50</span>
                    </h3>
                    <p className="desc mb-0">
                      Million App Downloads on App Stores (iOS + Android)
                    </p>
                  </div>
                </div> */}
              <div className="col-9 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-35">
                <div className="card-box text-center m-auto bg-white">
                  <img src={imgList.webDesiDev} alt="team strength" />
                  <h3 className="pb-1 my-3">
                    <span>30+</span>
                  </h3>
                  <p className="desc mb-0">Dedicated Developers & Designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
