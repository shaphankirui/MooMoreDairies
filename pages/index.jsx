import VideoPlayer from "@/src/components/VideoPlayer";
import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index2 = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <section className="section kf-started-slider">
        <Swiper
          {...sliderProps.mainSliderSelector}
          className="swiper-container"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="kf-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(/images/cows1.webp)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the MOO AND MORE DAIRY FARM LIMITED</div>
                    <h2 className="name text-anim-1" data-splitting="chars" style={{color: "white"}}>
                    Explore our farm-fresh  <br />
                    Dairy products for a taste of pure goodness!
                    </h2>
                    <div className="kf-bts">
                      <Link href="services" className="kf-btn">
                        <span>explore more</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                      <Link href="reservation" className="kf-btn dark-btn">
                        <span>About Us</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="kf-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(/images/calfs1.webp)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the MOO AND MORE DAIRY FARM LIMITED</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                    Moo-velous Moments, Dairy Dreams <br />
                    Welcome to Moo and More! 
                    </h2>
                    <div className="kf-bts">
                      <Link href="services" className="kf-btn">
                        <span>explore more</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                      <Link href="reservation" className="kf-btn dark-btn">
                        <span>About Us</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="kf-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(/images/cows8.webp)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the MOO AND MORE DAIRY FARM LIMITED</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                    Milking Memories, Crafting Quality<br />
                    Moo and More, Your Dairy Oasis! 
                    </h2>
                    <div className="kf-bts">
                      <Link href="services" className="kf-btn">
                        <span>explore more</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                      <Link href="reservation" className="kf-btn dark-btn">
                        <span>About Us</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </Swiper>
      </section>
      {/* Section Category */}
      <section
        className="section kf-category"
        style={{ backgroundImage: "url(/images/bg.jpeg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-category-items element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="services">
                      <img src="/images/cows7.webp" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">FRIESIAN</h5>
                  </div>
                </div>
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="services">
                      <img src="/images/cows8.webp" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Barns and Shelters</h5>
                  </div>
                </div>
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="services">
                      <img src="/images/blog7.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Milking Parlor </h5>
                  </div>
                </div>
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="services">
                      <img src="/images/calfs2.webp" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Calf Rearing Area</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active" style={{color: "white"}}
                >
                  Services
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active" style={{color: "black"}}
                >
                  Our  <br />
                  Barns and Shelters
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p style={{color: "#FFFFFF", font:"bold"}}> 
                Well-designed barns provide comfortable housing for the dairy cattle, with proper 
                ventilation and natural lighting.
                 The barns are equipped with state-of-the-art technology for climate control.
                </p>
              </div>
              <Link
                href="services"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more Services</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Menu */}
      {/* <section className="section kf-menu-classic section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
              style={{color: "#FFFFFF"}}
            >
              Choose our products
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
              style={{color: "black"}}
            >
              Moo and More  Products
            </h3>
          </div>
          <div
            className="kf-menu-items"
            style={{ backgroundImage: "url(/images/milkp.png)" }}
          >
            <div className="row">
              
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div style={{color: "black"}}>
                    <h5 className="name">Fresh Milk</h5>
                    <div className="subname">Per 1 litre</div>
                    <div className="price">
                      <span>Ksh.50</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Natural Mursik</h5>
                    <div className="subname">
                      1 litre
                    </div>
                    <div className="price">Ksh.70</div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Yorguart</h5>
                    <div className="subname">500 ml</div>
                    <div className="price">
                      <span>Ksh.100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Cheese</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>Ksh.120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Mala </h5>
                    <div className="subname">1 litres</div>
                    <div className="price">
                      <span>Ksh.70</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Fresh Pasterilized Milk</h5>
                    <div className="subname">
                      1 litre
                    </div>
                    <div className="price">Ksh.70</div>
                  </div>
                </div>
              </div>
             
              
              
              
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Milk Cream</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">Ksh.70</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <h5 className="name" style={{ color: "black" }}>Majuma</h5>
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
      
      {/* Section About-2 */}
      <section
        className="section kf-about-2"
        style={{ backgroundImage: "url(/images/bg.jpeg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                  style={{ color: "black" }}
                >
                  About Moo and More Dairies
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                 See More About Us &amp; We Hope <br />
                  You will like what You see
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                Our mission is to provide wholesome, farm-fresh dairy 
                products while upholding values of sustainability, animal welfare,
                 and community support.
                </p>
              </div>
              {/* <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="/images/dairy_icon.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">100% Certified Dairy Farm</h5>
                      <div className="subname">
                       We are a certified dairy farm and Legit to do any Business With You
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more us</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1 align-self-center">
              <div className="kf-services-items-2 row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                    <i class="las la-cheese"></i>  
                                      </div>
                    <div className="desc">
                      <h5 className="name">Dairy Produces</h5>
                      <div className="subname">We produce over 100 litres of milk each day</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                    <i class="las la-chess"></i>
                    </div>
                    <div className="desc">
                      <h5 className="name">Breeding</h5>
                      <div className="subname">Artificial Inseminations</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                    <i class="las la-user-friends"></i>           
                             </div>
                    <div className="desc">
                      <h5 className="name">Proffesional Team</h5>
                      <div className="subname">Well Trained Team Members </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                    <i class="las la-tractor"></i>
                    </div>
                    <div className="desc">
                      <h5 className="name">Local Farmers Training</h5>
                      <div className="subname">We do train Local Farmers more on dairy farming</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section Video */}
      {/* <div className="section kf-video kf-video-full">
        <VideoPlayer
          videoBg={"/images/video_bg.jpg"}
          extraClass={"kf-parallax"}
        />
      </div> */}
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
      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Get Every Single Update
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="/images/blog1.avif" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                     The Journey from Pasture to Pour: A Day in the Life of a Dairy Farmer
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="/images/blog2.avif" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                  Sustainable Farming Practices: Nurturing the Land and Caring for Cows
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="/images/blog3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                  Crafting Artisanal Cheese: A Behind-the-Scenes Look at Our Cheese-Making Process                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center">
            <Link
              href="blog-grid"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel */}
      {/* <InstaCarousel /> */}
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
export default Index2;
