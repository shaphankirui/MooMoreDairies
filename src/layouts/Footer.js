const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img src="/images/logo1.jpg" alt="image" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Working Hours</h5>
              <ul>
                <li>
                  Sunday - Thursday
                  <em>08:00 am - 09:00pm</em>
                </li>
                <li>
                  Only Friday
                  <em>03:00 pm - 09:00pm</em>
                </li>
                <li>
                  <strong>Saturday Close</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>
                Dadira,7km off bumala centre on Kisumu-Busia highway.
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                  info@moomore.co.ke
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Phone Number :</em>
                  +254 711 320959
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="/images/cows1.webp"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/cows1.webp" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/cows3.webp"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/cows3.webp" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/calfs1.webp"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/calfs1.webp" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/calfs2.webp"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/calfs2.webp" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/cows7.webp"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/cows7.webp" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/cows8.webp"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/cows5.webp" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2022 Moo and More Dairy farm. All Rights Reserved : Developed By Shaphan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
