import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";
import { useEffect } from 'react';




const Contacts = () => {
  useEffect(() => {
    // Load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Function to initialize the Google Map
  const initMap = () => {
    // Coordinates for Kisumu, Kenya
    const kisumuLocation = { lat: -0.1000, lng: 34.7500 };

    // Create a map centered at Kisumu
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: kisumuLocation,
    });

    // Add a marker for the Kisumu location
    const marker = new window.google.maps.Marker({
      position: kisumuLocation,
      map: map,
      title: 'Kisumu, Kenya',
    });
  };
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(/images/cows1.jpg)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Contact Us
          </h1>
        </div>
      </section>
      {/* Section Contacts Info */}
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="/images/contact_icon1.png" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Main Location</h5>
                  <ul>
                    <li>
                      EDadira, <br />
                     7km off bumala centre 
                    </li>
                    <li>
                    on Kisumu-Busia <br />
                    highway 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="/images/contact_icon2.png" alt="" />*/}
                  <i className="las la-envelope-open-text" />
                </div>
                <div className="desc">
                  <h5 className="name">Email Address</h5>
                  <ul>
                    <li>
                      moomoredairyfarmlimited@gmail.com <br />
                      www.mooMore.co.ke
                    </li>
                    <li>
                      info@moomore.co.ke <br />
                      www.mooMore.co.ke
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="/images/contact_icon3.png" alt="" />*/}
                  <a href="https://www.facebook.com/MooMoreDairyFarm" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Facebook</h5>
                  <ul>
                    <li>
                    MooMore <br />
                    </li>
                    <li>
                    Dairy Farm <br />
                     
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="/images/contact_icon3.png" alt="" />*/}
                  <a href="https://twitter.com/YourTwitterHandle" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>                </div>
                <div className="desc">
                  <h5 className="name">X(formally Twitter)</h5>
                  <ul>
                    <li>
                    MooMore <br />
                      
                    </li>
                    <li>
                       Dairy Farm <br />
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="/images/contact_icon3.png" alt="" />*/}
                  <a href="https://wa.me/+254 711 320959" target="_blank">
                    <i className="fab fa-whatsapp" />
                  </a>  
                                </div>
                <div  href="https://wa.me/+254 711 320959"  className="desc">
                  <h5 className="name">WhatsApp</h5>
                  <ul>
                    <li>
                    +254 711 320959 <br />
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div href="tel: +254 711 320959" className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="/images/contact_icon3.png" alt="" />*/}
                  <a href="tel: +254 711 320959">
                  <i className="las la-headset" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Phone Number</h5>
                  <ul>
                    <li href="tel: +254 711 320959">
                    +254 711 320959 <br />
                      
                    </li>
                    {/* <li>
                      +25446914399 <br />
                      123456780
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Contacts Form */}
      <section className="section kf-contacts-form">
        <div className="container">
          <div
            className="kf-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Contact Us</div>
              <h3 className="kf-title">Send Us Message</h3>
            </div>
            <form id="cform" method="post">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="text" name="name" placeholder="Full Name" />
                    <i className="far fa-user" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <i className="fas fa-at" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="tel" name="tel" placeholder="Phone Number" />
                    <i className="fas fa-mobile-alt" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <textarea
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-bts">
                    <a
                      href="#"
                      className="kf-btn"
                      onclick="$('#cform').submit(); return false;"
                    >
                      <span>Send us message</span>
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <div className="alert-success" style={{ display: "none" }}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Section Google Map */}
       {/* <section className="section kf-google-map">
        <div className="container">
          <div id="map" style={{ height: '400px' }} />
        </div>
      </section> */}
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
                <i class="lab la-facebook"></i>      
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
                <i class="lab la-facebook"></i>      
                          </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layouts>
  );

  
};
export default Contacts;
