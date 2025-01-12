function ServiceSection() {
  const imgList = {
    mobile: "img/mobile-icon.svg",
    flutterflow: "img/flutterflow.png",
    flutter: "img/flutter.svg",
    react_native: "img/react-native.svg",
    android: "img/android.svg",
    apple: "img/apple-icon.svg",
    kotlin: "img/kotlin.svg",
    web_dev: "img/web-development.svg",
    php: "img/php.svg",
    laravel: "img/laravel.svg",
    wordpress: "img/wordpress.svg",
    ecommerce: "img/ecommerce-development.svg",
    magento: "img/magento.svg",
    bigcommerce: "img/bigcommerce.svg",
    ubercart: "img/ubercart.svg",
    virtuemart: "img/virtuemart.svg",
    prestashop: "img/prestashop.svg",
    react_js: "img/react-js.png",
    angular: "img/angular.png",
    node_js: "img/node_js.png",
  };
  return (
    <section className="sect-pad-tb services-we-offer d-none d-sm-none d-md-none d-lg-none d-xl-block">
      <div className="text-center">
        <h4 className="main-title mb-0 mt-60 title-services c-black">
          Services We Offer
        </h4>
      </div>
      <div className="container mt-4">
        <div className="row content-box h-100">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
            <div className="content-right h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={imgList.mobile}
                    alt="mobile app development"
                  />
                  <h4 className="m-0">
                    App
                    <br />
                    Development
                  </h4>
                </div>
                <ul className="list-unstyled mt-30">
                  <li>
                    <img
                      src={imgList.flutterflow}
                      className="me-3"
                      width="23px"
                      height="23px"
                      alt="flutter-flow"
                    />
                    Flutter Flow
                  </li>
                  <li>
                    <img
                      src={imgList.flutter}
                      className="me-3"
                      width="23px"
                      height="23px"
                      alt="flutter"
                    />
                    Flutter
                  </li>
                  <li>
                    <img
                      src={imgList.react_native}
                      className="me-3"
                      width="23px"
                      height="23px"
                      alt="react-native"
                    />
                    React Native
                  </li>
                  <li>
                    <img
                      src={imgList.android}
                      className="me-3"
                      width="23px"
                      height="23px"
                      alt="android"
                    />
                    Android App
                  </li>
                  <li>
                    <img
                      src={imgList.apple}
                      className="me-3"
                      width="23px"
                      height="23px"
                      alt="ios"
                    />
                    iPhone App
                  </li>
                  <li>
                    <img
                      src={imgList.kotlin}
                      className="me-3"
                      width="23px"
                      height="23px"
                      alt="kotlin"
                    />
                    Kotlin
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
            <div className="content-right h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={imgList.web_dev}
                    alt="web development"
                  />
                  <h4 className="m-0">
                    Web
                    <br />
                    Development
                  </h4>
                </div>
                <ul className="list-unstyled mt-30">
                <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.react_js}
                      alt="react_js"
                    />
                    React Js
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.angular}
                      alt="angular"
                    />
                    Angular
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.node_js}
                      alt="node_js"
                    />
                    Node Js
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.php}
                      alt="php"
                    />
                    PHP
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.laravel}
                      alt="laravel"
                    />
                    Laravel
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.wordpress}
                      alt="wordpress"
                    />
                    WordPress
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
            <div className="content-right h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={imgList.ecommerce}
                    alt="ecommerce development"
                  />
                  <h4 className="m-0">
                    Ecommerce
                    <br />
                    Development
                  </h4>
                </div>
                <ul className="list-unstyled mt-30">
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.magento}
                      alt="magento"
                    />
                    Magento
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.bigcommerce}
                      alt="bigcommerce"
                    />
                    Bigcommerce
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.ubercart}
                      alt="ubercart"
                    />
                    Ubercart
                    <li></li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.prestashop}
                      alt="prestashop"
                    />
                    Prestashop
                  </li>
                  <li>
                    <img
                      className="me-3"
                      width="23px"
                      height="23px"
                      src={imgList.virtuemart}
                      alt="virtuemart"
                    />
                    Virtuemart
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
