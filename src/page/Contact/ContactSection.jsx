import { useEffect } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const imgList = {
  profile: "icon/profile.svg",
  email: "icon/qmsg.svg",
  call: "icon/call.svg",
  whatsapp: "icon/whatsapp-contact.svg",
  skype: "icon/skype-contact.svg",
  location: "icon/location.svg",
  message: "icon/msg.svg",
  arrow: "icon/slider-arrow-blue.svg",
  mumbai: "img/mumbai.svg",
  ind_flag: "img/ind-flag.svg",
  email_icon: "img/email-icon.svg",
  email_img: "img/email-img.png",
  skype_icon: "img/skype-icon.svg",
  skype_png: "img/skype.png",
};

function ContactSection() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Please enter your fullname."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email."),
    number_cc: Yup.string()
      .matches(/^\d+$/, "Must be a valid country code")
      .required("Country code is required."),
    number: Yup.string()
      .matches(/^\d+$/, "Must be a valid contact number")
      .required("Contact number is required."),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters.")
      .required("Please enter your message."),
  });

  const handleSubmit = async (values, { setValues, setTouched }) => {
    const response = await axios.post(
      "https://emailsender-9sdp.onrender.com/inquiry_message",
      values
    );

    // On success
    if (response.status === 200) {
      setValues({
        fullname: "",
        email: "",
        number_cc: "",
        number: "",
        whatsApp: "",
        skype: "",
        location: "",
        message: "",
      });
      setTouched();
      alert("Form submitted successfully!");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="sect-pad-tb contact-us pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 text-right mb-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-inline-flex">
                  <li className="breadcrumb-item">
                    <a className="c-blue" onClick={() => navigate("/")}>
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12 col-md-12 col-lg-12 text-center">
              <div className="row h-100 justify-content-between">
                <div className="col-12 col-md-12 col-lg-12">
                  <h1 className="main-title mb-3 mt-60 contact-title c-black">
                    Contact Us
                  </h1>
                  <p className="desc mb-0">
                    We would be happy to hear from you, please fill in the form
                    below or mail us your requirements on
                    <br />
                    <span className="c-pink">tcodegrid@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 get-qoute-sect align-self-center mt-4">
              <div className="card-box mt-0 bg-white p-4 p-md-5 p-lg-5">
                <Formik
                  initialValues={{
                    fullname: "",
                    email: "",
                    number_cc: "",
                    number: "",
                    whatsApp: "",
                    skype: "",
                    location: "",
                    // files_doc: null,
                    message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <div className="row">
                        {/* Name */}
                        <div className="col-12 col-md-6 col-lg-6">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend mt-3">
                              <img src={imgList.profile} alt="profile" />
                            </div>
                            <Field
                              type="text"
                              className="form-control"
                              name="fullname"
                              placeholder="Your Full Name*"
                            />
                          </div>
                          <ErrorMessage
                            name="fullname"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* Email */}
                        <div className="col-12 col-md-6 col-lg-6">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend mt-3">
                              <img src={imgList.email} alt="email" />
                            </div>
                            <Field
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email*"
                            />
                          </div>
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* Phone */}
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className="input-group mb-3 d-flex">
                            <div className="input-group-prepend mt-3">
                              <img src={imgList.call} alt="call" />
                            </div>
                            <span className="ml-2 mr-0 align-self-center">
                              +
                            </span>
                            <Field
                              type="text"
                              className="form-control c-code px-1"
                              name="number_cc"
                              placeholder="1"
                              maxLength="4"
                            />
                            <Field
                              type="text"
                              className="form-control"
                              name="number"
                              placeholder="Contact No.*"
                              maxLength="15"
                            />
                          </div>
                          <ErrorMessage
                            name="number_cc"
                            component="div"
                            className="text-danger"
                          />
                          <ErrorMessage
                            name="number"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* WhatsApp */}
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend mt-3">
                              <img src={imgList.whatsapp} alt="whatsapp" />
                            </div>
                            <Field
                              type="text"
                              className="form-control"
                              name="whatsApp"
                              placeholder="WhatsApp"
                            />
                          </div>
                        </div>

                        {/* Skype */}
                        <div className="col-12 col-md-12 col-lg-4">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend mt-3">
                              <img src={imgList.skype} alt="skype" />
                            </div>
                            <Field
                              type="text"
                              className="form-control"
                              name="skype"
                              placeholder="Skype"
                            />
                          </div>
                        </div>

                        {/* Location */}
                        <div className="col-12 col-md-12 col-lg-12">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend mt-3">
                              <img src={imgList.location} alt="location" />
                            </div>
                            <Field
                              type="text"
                              className="form-control"
                              name="location"
                              placeholder="Your address / location"
                            />
                          </div>
                        </div>

                        {/* File Upload */}
                        {/* <div className="col-12 col-md-12 col-lg-12">
                          <div className="input-group mb-3">
                            <input
                              type="file"
                              className="form-control"
                              onChange={(event) =>
                                setFieldValue(
                                  "files_doc",
                                  event.target.files[0]
                                )
                              }
                            />
                            <small>(Max Size 20MB)</small>
                          </div>
                        </div> */}

                        {/* Message */}
                        <div className="col-12 col-md-12 col-lg-12">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend mt-3 align-items-start pt-2">
                              <img src={imgList.message} alt="message" />
                            </div>
                            <Field
                              as="textarea"
                              className="form-control"
                              name="message"
                              placeholder="Your Message*"
                              rows="4"
                            />
                          </div>
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* NDA Note */}
                        <div className="col-12 col-md-12 col-lg-12">
                          <span className="cnt-bottom-title">
                            We sign NDA for all our projects.
                          </span>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 col-md-12 col-lg-12 text-end mt-3">
                          <div className="d-inline-flex">
                            <div className="slider-left-right-btn d-flex">
                              <button className="nxt text-center" type="submit">
                                Send <img src={imgList.arrow} alt />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sect-pad-tb locateus-sect">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h2 className="main-title mb-0 mt-60 title-locate-us2 c-black">
                Locate Us
              </h2>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="content-box text-center position-relative ind-office p-4 p-md-4 p-xl-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="card-box p-3 bg-white d-inline-block">
                    <img src={imgList.mumbai} alt="india Office" />
                  </div>
                  <h3 className="title mt-5 mb-3 d-flex w-100 justify-content-center">
                    <img
                      className="me-2 align-self-center"
                      src={imgList.ind_flag}
                      alt="india"
                    />{" "}
                    INDIA (HQ)
                  </h3>
                  <p className="desc mb-4">
                    Digital Valley (Mota-Varachha), Surat, Gujarat, 394101
                  </p>
                </div>
                <a href="tel:+917359787915">+91 7359787915</a>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-0 mt-md-0 mt-lg-5 mt-xl-5 d-flex flex-column justify-content-end">
              <div className="content-box text-center position-relative email-box pt-5 pt-md-3 pt-xl-5 px-5 px-md-3 px-lg-4">
                <div>
                  <div className="card-box p-3 bg-white d-inline-flex align-items-center">
                    <img src={imgList.email_icon} alt="email" />
                  </div>
                  <h3 className="title mt-5 mb-3">Email Us</h3>
                  <p className="desc mb-5">
                    <a href="mailto:tcodegrid@gmail.com">
                      tcodegrid@gmail.com
                    </a>
                  </p>
                </div>
                <img
                  className="img-fluid"
                  src={imgList.email_img}
                  alt="email img"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-0 mt-md-5 mt-lg-5 mt-xl-5 align-self-end">
              <div className="content-box text-center position-relative skype-box pt-5 pt-md-3 pt-xl-0 px-5 px-md-3 px-lg-4 mt-0 mt-md-0 mt-lg-5 mt-xl-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="card-box p-3 bg-white d-inline-flex align-items-center">
                    <img src={imgList.skype_icon} width="70" alt="skype" />
                  </div>
                  <h3 className="title mt-5 mb-3">Skype</h3>
                  <p className="desc mb-4">
                    <a href="Skype:CodeGrid Tech">CodeGrid Tech</a>
                  </p>
                </div>
                <img
                  className="img-fluid px-4 px-md-3 px-lg-5"
                  src={imgList.skype_png}
                  alt="skype"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
