import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Team = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(/images/bio1.JPG)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Our Team
          </h1>
        </div>
      </section>

      {/* Section Team */}
      <section className="section kf-team section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Experience Team Member
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Meet Our Professional Team
            </h3>
          </div>
          <div className="kf-team-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Kennedy Ouma</h5>
                  <div className="subname">Founder </div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/founder.jpg" alt="image" />
                  <div className="info">
                    <div className="label">  moomoredairyfarmlimited@gmail.com</div>
                    <div className="label">0720346021</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Susan Njuguna</h5>
                  <div className="subname">Founder</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/susan.jpg" alt="image" />
                  <div className="info">
                    <div className="label">  moomoredairyfarmlimited@gmail.com</div>
                    <div className="label">+254 711320959</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Collins Korir</h5>
                  <div className="subname">Manager</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/feeding2.JPG" alt="image" />
                  <div className="info">
                    {/* <div className="label">collinskorir@gmail.com</div>
                    <div className="label">+254 712 688460</div> */}
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Bernard Okumi</h5>
                  <div className="subname">Staff</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/okumu.jpg" alt="image" />
                  <div className="info">
                    {/* <div className="label">smithkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div> */}
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Rashid khaukwa</h5>
                  <div className="subname">Staff</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team5.jpg" alt="image" />
                  <div className="info">
                    {/* <div className="label">whitekf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div> */}
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Edwin mukanzi</h5>
                  <div className="subname">  farm hand</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team6.jpg" alt="image" />
                  <div className="info">
                    {/* <div className="label">sewardkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div> */}
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Daudi</h5>
                  <div className="subname">  farm hand</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team6.jpg" alt="image" />
                  <div className="info">
                    {/* <div className="label">sewardkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div> */}
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Lucy Njeri</h5>
                  <div className="subname">Breeding Officer</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team7.jpg" alt="image" />
                  <div className="info">
                    <div className="label">williamskf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Christopher Kiptoo</h5>
                  <div className="subname">Milking</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team8.jpg" alt="image" />
                  <div className="info">
                    <div className="label">dixonkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(/images/hero3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a free Visit?
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking a visit For You &amp; Team Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking a visit</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section Brands */}
      {/* <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layouts>
  );
};
export default Team;
