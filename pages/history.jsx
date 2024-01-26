import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const History = () => {
  useEffect(() => {
    const bullets = document.querySelectorAll(
      ".kf-history-carousel .swiper-pagination-bullet"
    );
    const sliders = document.querySelectorAll(
      ".kf-history-carousel .swiper-slide"
    );
    bullets.forEach((bullet, bulletIndex) => {
      sliders.forEach((slider, sliderIndex) => {
        if (bulletIndex == sliderIndex) {
          bullet.innerHTML =
            slider.getElementsByClassName("date-value")[0].innerHTML;
        }
      });
    });
  }, []);

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(/images/cows7.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Our History
          </h1>
        </div>
      </section>
      {/* Section Quote */}
      <section className="section kf-quote">
        <div className="container">
          <div className="kf-parallax-icon pi-4" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(/images/quote_line_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-5" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(/images/quote_line_icon2.png)" }}
            />
          </div>
          <div
            className="kf-quote-box element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div style={{color: "black"}} className="text">
            Moo & More Dairy Farm Limited boasts a rich history as a thriving cattle dairy farm nestled in
             the picturesque setting of Bumala town, Dadira Village, situated approximately 7 kilometers off the 
             bustling Kisumu-Busia highway. The farm has undergone remarkable growth and development since its inception, this cattle dairy farm has not only expanded its herd but has diversified its operations, incorporating
             various sustainable practices to create a holistic and environmentally conscious farming environment.
             As Moo & More Dairy Farm Limited continues to evolve, it remains deeply rooted in its 
             commitment to sustainable and environmentally conscious farming practices. The combination of a 
             growing cattle herd, a commercial biogas system, focused calf rearing, and advanced feeds 
             management showcases Moo & More's dedication to holistic and forward-thinking agriculture. 
             The farm envisions a future where responsible farming practices not only support the local
              community but also contribute to a greener and more sustainable planet.

            </div>
            <div className="info">
              <div className="img">
                <img src="/images/quote_img2.jpg" alt="image" />
              </div>
              <h5 className="name">Suzan Njuguna</h5>
              <div className="subname">CEO &amp; Founder</div>
            </div>
          </div>
        </div>
      </section>
      {/* Section History */}
      <section className="section kf-history section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
              style={{color: "#FFFFFF"}}

            >
              Our farm History
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
              style={{color: "black"}}
            >
              Something Know About Our History
            </h3>
          </div>
          <div className="kf-history-carousel">
            <Swiper {...sliderProps.kfHistory} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="/images/history1.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">
                        Moo and More Dairy farm was founded
                      </div>
                      <h5 className="name">
                      In its genesis in 2023, Moo & More embarked on its journey with a modest beginning,
                      </h5>
                      <div className="kf-text">
                        <p>
                       
                         Starting with a pair of in-calf heifers. Over the years, the farm has demonstrated
                          impressive growth, currently boasting an extensive herd that approaches 40,
                           symbolizing a commitment to quality breeding, optimal nutrition, and meticulous
                            care for the well-being of its cattle.

                        </p>
                      </div>
                    </div>
                    <div style={{color: "black"}} className="date">2023</div>
                    <div style={{color: "black"}} className="label">25 January 2023</div>
                    <div style={{color: "black"}} className="date-value">2023</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="/images/history2.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">Green Horizons:</div>
                      <h5 className="name">
                       Moo & More Dairy Farm's Pioneering Commitment to Sustainable Agriculture
                       and Clean Energy
                      </h5>
                      <div className="kf-text">
                        <p>
                        One notable aspect that sets Moo & More Dairy Farm apart is its commitment to environmental 
                        sustainability. The farm has embraced green energy practices with the implementation of a commercial
                         biogas system. This system not only aids in efficient waste management but also contributes to the
                          generation of cleaner and greener energy. Moo & More stands as a beacon for eco-friendly
                         farming, demonstrating that agricultural operations can align with sustainable energy practices.
                        </p>
                      </div>
                    </div>
                    <div style={{color: "black"}} className="date">2023</div>
                    <div style={{color: "black"}} className="label">14 March 2023</div>
                    <div style={{color: "black"}} className="date-value">2023</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="/images/history3.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">Nurturing the Future:</div>
                      <h5 className="name">
                      Moo & More Dairy Farm's Exemplary Calf
                       Rearing Practices for a Healthy Herd Tomorrow.
                      </h5>
                      <div className="kf-text">
                        <p>
                        Calf rearing is another pivotal facet of Moo & More's operations. The farm places emphasis on the 
                        nurturing of young calves, implementing best practices in health management, nutrition, and overall
                         welfare. 
                        This dedication ensures the development of a robust and healthy future generation within the herd.
                        </p>
                      </div>
                    </div>
                    <div style={{color: "black"}} className="date">2023</div>
                    <div style={{color: "black"}} className="label">10 June 2023</div>
                    <div style={{color: "black"}} className="date-value">2023</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="/images/history4.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">
                      Fostering Community Growth:
                      </div>
                      <h5 className="name">
                      Fostering Community Growth: Moo & More Dairy Farm's Commitment to 
                      Farmer Training and Collaborative Knowledge Exchange
                      </h5>
                      <div className="kf-text">
                        <p>
                        Furthermore, Moo & More Dairy Farm takes pride in hosting visiting farmers who have 
                        undergone training. These visits serve as a platform for knowledge sharing, where
                         trained farmers can exchange experiences, discuss challenges, and seek advice from 
                         the seasoned experts at Moo & More. The collaborative atmosphere fosters a sense of 
                              community among farmers, promoting a supportive network that enhances the overall
                                agricultural landscape.
      By actively engaging in farmer training and facilitating onsite visits, Moo & More Dairy Farm Limited not only contributes to the skill development of local farmers but also strengthens the bond within the farming community. The farm envisions a future where shared knowledge and sustainable practices create a ripple effect, positively impacting the broader agricultural ecosystem. In this way, Moo & More strives not only to be a leader in dairy farming but also a catalyst for 
      positive change in the lives of the farmers and the sustainability of agriculture in the region.
                              </p>
                      </div>
                    </div>
                    <div style={{color: "black"}} className="date">2023</div>
                    <div  style={{color: "black"}} className="label">15 December 2023</div>
                    <div style={{color: "black"}} className="date-value">2023</div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination" />
              <div className="swiper-scrollbar" />
              <div className="swiper-button-prev">
                <i className="fas fa-angle-left" />
              </div>
              <div className="swiper-button-next">
                <i className="fas fa-angle-right" />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Section Brands */}
      {/* <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="/images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
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
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(/images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a visit   On Our Farm
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking a Visit For Your &amp; Team Members
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
export default History;
