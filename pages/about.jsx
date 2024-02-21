import VideoPlayer from "@/src/components/VideoPlayer";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const About = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(/images/cows4.webp)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About Us
          </h1>
        </div>
      </section>
      {/* Section About-2 */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                  style={{ color: "black" }}
                >
                  About Moo and More Dairy Farm
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                                  >
                  Established in 2023, Moo and More Dairy Farm began with a passion 
                  for sustainable farming and a commitment to delivering high quality dairy products. 
               </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
                style={{ color: "black" }}
              >
                <p>
                Learn more about Moo and More Dairy Farm, a family-owned business dedicated to providing 
                the finest dairy products since 2023.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="/images/training.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name"     style={{ color: "black" }}>Training Local Farmer and Comunity</h5>
                      <div className="subname"     style={{ color: "#FFFFFF" }}>
                      We organize farm tours, workshops, 
                      and demonstrations to share their knowledge and promote best practices in dairy farming.                      </div>
                    </div>
                  </li>
                  {/* <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="/images/dairy_icon.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name"     style={{ color: "black" }}>100%  Certified Dairy Farm</h5>
                      <div className="subname"     style={{ color: "FFFFFF" }}>
                        We are certified and Recongnised Dairy Farm in the Region
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
              <Link
                href="services"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
                style={{ color: "black" }}
              >
                <span>More About Us</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="/images/cows11.JPG" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Numbers-2 */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-piggy-bank"></i>
                </div>
                <div className="num">40+</div>
                <div className="desc">
                  <h5 className="name">Animals</h5>
                  <div style={{color:'black'}} className="subname">Dairy Animals</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-user-tie" />
                </div>
                <div className="num">16+</div>
                <div className="desc">
                  <h5 className="name">Professional Workers</h5>
                  <div style={{color:'black'}} className="subname">Well Trained and Professional</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-users"></i>
                </div>
                <div className="num">3+</div>
                <div className="desc">
                  <h5 className="name">Investors</h5>
                  <div style={{color:'black'}} className="subname">Working with us for Local Training program</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="lab la-product-hunt"></i>
                </div>
                <div className="num">100+</div>
                <div className="desc">
                  <h5 className="name">Litres produced Per day</h5>
                  <div style={{color:'black'}} className="subname">Serves the community and Outiside Market</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Video */}
      {/* <section className="section kf-video">
        <div className="container">
          <VideoPlayer
            videoBg={"/images/video_bg.jpg"}
            extraClass={"kf-image-hover"}
          />
        </div>
      </section> */}
      
      {/* Section Team */}
      <section className="section kf-team kf-section-transparent">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
              style={{color: "#FFFFFF"}}
            >
              Experience Team Members
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
              style={{color: "black"}}
            >
              Meet Our Team Members
            </h3>
          </div>
          <div className="kf-team-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundColor: "skyblue" }}
              >
                <div className="desc">
                  <h5 className="name" style={{ color: "black" }}>Susan Njuguna</h5>
                  <div className="subname" style={{ color: "#FFFFFF" }}> Founder</div>
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
                style={{ backgroundColor: "skyblue" }}
              >
                <div className="desc">
                  <h5 className="name" style={{ color: "black" }}> Kennedy Ouma</h5>
                  <div className="subname" style={{ color: "#FFFFFF" }}> Founder</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/founder.jpg" alt="image" />
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
                style={{ backgroundColor: "skyblue" }}
              >
                <div className="desc">
                  <h5 className="name" style={{ color: "black" }}>Collins Korir</h5>
                  <div className="subname" style={{ color: "#FFFFFF" }}>Manager</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/feeding2.JPG" alt="image" />
                  <div className="info">
                    {/* <div className="label">collinkorir@gmail.com</div>
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
                style={{ backgroundColor: "skyblue" }}
              >
                <div className="desc">
                  <h5 className="name" style={{ color: "black" }}>Okumu</h5>
                  <div className="subname" style={{ color: "#FFFFFF" }}>  farm hand</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/okumu.jpg" alt="image" />
                  <div className="info">
                    <div className="label"></div>
                    <div className="label"></div>
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
                style={{ backgroundColor: "skyblue" }}
              >
                <div className="desc">
                  <h5 className="name" style={{ color: "black" }}>Edwin</h5>
                  <div className="subname" style={{ color: "#FFFFFF" }}>  farm hand</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team1.jpg" alt="image" />
                  <div className="info">
                    <div className="label"></div>
                    <div className="label"></div>
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
                style={{ backgroundColor: "skyblue" }}
              >
                <div className="desc">
                  <h5 className="name" style={{ color: "black" }}>Rashid</h5>
                  <div className="subname" style={{ color: "#FFFFFF" }}>  farm hand</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team1.jpg" alt="image" />
                  <div className="info">
                    <div className="label"></div>
                    <div className="label"></div>
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
                style={{ backgroundColor: "skyblue" }}
              >
                <div className="desc">
                  <h5 className="name" style={{ color: "black" }}>Daudi</h5>
                  <div className="subname" style={{ color: "#FFFFFF" }}>  farm hand</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="/images/team1.jpg" alt="image" />
                  <div className="info">
                    <div className="label"></div>
                    <div className="label"></div>
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
          </div>
        </div>
      </section>
      {/* Section Brands */}
      {/* <section className="section kf-brands">
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
      </section> */}
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(/images/cow2.webp)" }}
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
    </Layouts>
  );
};
export default About;
