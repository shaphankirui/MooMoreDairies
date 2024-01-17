import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialsCarousel = () => {
  return (
    <section
    
      className="section kf-testimonials kf-testimonials-2 section-bg"
      // style={{ backgroundImage: "url(images/testimonials_bg2.jpeg)" }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
            style={{color:'#FFFFFF'}}
          >
            People's Feedback
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
            style={{color:'black'}}

          >
            What People says About Us
          </h3>
        </div>
        <div className="kf-testimonials-carousel">
          <Swiper
            {...sliderProps.kfTestimonialsCarousel}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev1.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                    Moo and Moro Dairy is a treasure in our community! The freshness of their dairy products is unmatched, and I love knowing 
                    that I'm supporting a local business committed to quality and sustainability
                    </div>
                    <h5 className="name">
                      Frederick Marwa <em>Farmer</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev2.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                    "I can't get enough of Moo and Moro's artisanal cheeses! Every bite is a testament to their dedication to craftsmanship
                     and the highest standards of quality. It's not just dairy – it's an experience.
                    </div>
                    <h5 className="name">
                      Winny Ngeno <em>Business Woman</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev3.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                    Moo and Moro Dairy has become a staple in our household. Their commitment to sustainable farming practices and the well-being of their cows shines through in every glass of milk.
                     It's more than a brand; it's a trusty companion in our daily routine.
                    </div>
                    <h5 className="name">
                      Olivia D. Nakuru <em>Local Farmer</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev1.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                    I recently toured Moo and Moro Dairy, and the passion the team has for their work is contagious. From the picturesque pastures to the state-of-the-art facilities, it's clear that they pour their hearts 
                    into every aspect of their dairy production. Proud to be a Moo and Moro supporter!
                    </div>
                    <h5 className="name">
                      Frederick S. Nairobi <em>Teacher</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev2.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      Sed ut perspiciatis unde omnis natus error luptatem
                      accusantium doloremque laudantium totam remriam eaque quae
                      abillo
                    </div>
                    <h5 className="name">
                      James M. London <em>Lawyer</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev3.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                    I can't get enough of Moo and Moro's artisanal Mala! Every drop is a testament to their dedication to craftsmanship
                     and the highest standards of quality. It's not just dairy – it's an experience.
                    </div>
                    <h5 className="name">
                      Olivia D. Molo <em>Custommer</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsCarousel;
