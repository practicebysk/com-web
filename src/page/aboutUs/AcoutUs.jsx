import { useNavigate } from "react-router-dom";

function AcoutUs() {
  const navigate = useNavigate();
  const imgList = {
    facebook: "img/fb-icon.svg",
    twitter: "img/twitter.svg",
    instagram: "img/insta-icon.svg",
    linkdin: "img/in-icon.svg",
    skype: "img/skype.svg",
    arrow_right: "img/arrow-right-white.svg",
    mumbai: "img/mumbai.svg",
    ind_flag: "img/ind-flag.svg",
  };
  return (
    <footer>
      <section className="sect-pad-tb social-media">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
              <h5 className="main-title mb-3 title-social-media c-black">
                Social Media
              </h5>
              <p className="desc mb-0">
                Don’t Miss To Follow Us On Our Social
                <br />
                Networks Accounts.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-self-center mt-3 mt-md-3 mt-lg-0">
              <ul className="list-unstyled footer-social-media d-flex mb-0 justify-content-center flex-wrap flex-md-nowrap justify-content-lg-end">
                <li className="mb-3 mb-md-0">
                  <a
                    className="d-inline-flex"
                    target="_blank"
                    href="https://www.facebook.com/people/CodeGrid-Tech/61571535736092"
                  >
                    <img src={imgList.facebook} alt="facebook" />
                  </a>
                </li>
                <li className="mb-3 mb-md-0">
                  <a
                    className="d-inline-flex"
                    target="_blank"
                    href="https://x.com/CodeGridT"
                  >
                    <img src={imgList.twitter} alt="twitter" />
                  </a>
                </li>
                <li className="mb-3 mb-md-0">
                  <a
                    className="d-inline-flex"
                    target="_blank"
                    href="https://www.instagram.com/codegridt/"
                  >
                    <img src={imgList.instagram} alt="instagram" />
                  </a>
                </li>
                <li className="mb-3 mb-md-0">
                  <a
                    className="d-inline-flex"
                    target="_blank"
                    href="https://www.linkedin.com/in/codegridtech/"
                  >
                    <img src={imgList.linkdin} alt="linkedin" />
                  </a>
                </li>
                <li className="mb-3 mb-md-0">
                  <a
                    className="d-inline-flex"
                    target="_blank"
                    href="https://join.skype.com/invite/qisnmfs9Lhvt"
                  >
                    <img src={imgList.skype} alt="skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="get-a-quote">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
              <div className="content-box text-center c-white">
                <h5 className="mb-3 footer-title">
                  Let’s Create Big Stories Together
                </h5>
                <p className="mb-0 c-white">
                  Mobile is in our nerves. We don’t just build apps, we create
                  brand.
                  <br />
                  Choosing us will be your best decision.
                </p>
                <div className="mt-35 text-center">
                  <label
                    className="mb-0 d-inline-flex align-items-center read-more-btn"
                    style={{ background: "#DC2E3D" }}
                  >
                    <a
                      onClick={() => navigate("/contact")}
                      className="ml-3"
                      title
                    >
                      Get A Quote{" "}
                      <img className="ml-3" src={imgList.arrow_right} alt />
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sect">
        <div className="container">
          <div className="row locations">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3 mb-md-3">
              <h5 className="main-title mt-3 mb-0 mb-md-3 mt-md-5 w-100 title-locate-us c-white">
                Locate Us
              </h5>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-3 mb-md-3">
              <div className="d-flex">
                <img
                  className="align-self-center"
                  src={imgList.mumbai}
                  alt="india"
                />
                <div className="content-box c-white ms-3">
                  <h6 className="text-capitalize d-flex w-100">
                    <img
                      className="ml-0 me-2 align-self-center"
                      width="22px"
                      src={imgList.ind_flag}
                      alt="india"
                    />{" "}
                    INDIA (HQ)
                  </h6>
                  <p className="mb-0">
                    Digital Valley (Mota-Varachha), Surat, Gujarat, 394101
                  </p>
                  <span>
                    tcodegrid@gmail.com
                    <br />
                    +91 7359787915
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom text-center mt-40 c-white">
            <p className="mb-0">
              © 2025{" "}
              <a className="c-white">
                <b>CodeGrid Tech</b>
              </a>{" "}
              | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AcoutUs;
