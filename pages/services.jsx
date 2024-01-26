import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Services = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(/images/calf2.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Services
          </h1>
        </div>
      </section>
    
      {/* Section Numbers-2 */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
              style={{color:"#FFFFFF"}}
            >
              What we 
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
              style={{color:"black"}}
            >
              Have In Our Farm
            </h3>
          </div>
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-home"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Barns and Shelters</h5>
                  <div style={{color:"black"}} className="subname">Well-designed barns provide comfortable housing for the dairy cattle, with proper ventilation and natural lighting. 
                  The barns are equipped with state-of-the-art technology for climate control.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-blender"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Milking Parlor</h5>
                  <div style={{color:"black"}} className="subname">The milking parlor is a modern facility with automated milking machines to ensure efficient and stress-free milking processes.
                   The emphasis is on maintaining high milk quality and hygiene standards.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-hippo"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Calf Rearing Area</h5>
                  <div style={{color:"black"}} className="subname">: A dedicated area for calf rearing ensures that the young calves receive optimal care. Individual pens with comfortable bedding 
                  and access to nutritious feed contribute to the health and development of the calves.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-store-alt"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Feed Storage</h5>
                  <div  style={{color:"black"}} className="subname">Moo & More dairy farm has a well-organized feed storage facility that includes silage storage, hay storage, and a feed mixing area.
                   The farm places a strong emphasis on balanced nutrition for the cattle.</div>
                </div>
              </div>
            </div>
            <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
          
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
              style={{color:"black"}}
            >
              Cattle Management Practices
            </h3>
          </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-first-aid"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Health and Veterinary Care</h5>
                  <div style={{color:"black"}} className="subname">The farm follows a comprehensive health management program, including regular veterinary check-ups, vaccinations, and preventive measures.
                   The family believes in proactive health care to ensure the well-being of their herd.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-chess"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Breeding Program</h5>
                  <div style={{color:"black"}} className="subname">Moo & more dairy farm implements a strategic breeding program, incorporating artificial insemination techniques to improve the genetic quality of the herd. 
                  The focus is on traits that enhance milk production and overall herd vitality.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="lab la-pagelines"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Pasture Management</h5>
                  <div style={{color:"black"}} className="subname">The farm practices rotational grazing, allowing the cattle access to fresh pasture regularly. This not only promotes natural behavior but also optimizes the use of available land.
                    Environmental Sustainability
                    </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-burn"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Moo & More dairy farm is committed to sustainable farming practices</h5>
                  <div style={{color:"black"}} className="subname">The farm incorporates measures to minimize its environmental footprint, such as waste recycling, 
                  composting, and energy-efficient infrastructure (biogas)
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
          
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
              style={{color:"black"}}
            >
             Community Tranining Program and Technology
            </h3>
          </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-school"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Education and Outreach</h5>
                  <div style={{color:"black"}} className="subname">The family actively engages with the local community and offers educational programs for aspiring farmers. They organize farm tours, workshops, 
                  and demonstrations to share their knowledge and promote best practices in dairy farming.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-microchip"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Technology integration</h5>
                  <div style={{color:"black"}} className="subname">The farm embraces modern technologies, including data analytics for herd management, precision farming tools, and automation in the milking process. 
                  This not only improves efficiency but also allows the family to make informed decisions.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-syringe"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Artificial Insemination</h5>
                  <div style={{color:"black"}} className="subname">Moo & more dairy farm implements a strategic breeding program, incorporating artificial insemination techniques to improve the genetic quality of the herd.
                   The focus is on traits that enhance milk production and overall herd vitality.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                <i class="las la-memory"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Morder Technolgy</h5>
                  <div style={{color:"black"}} className="subname">Moo & More Dairy Farm serves as a model for sustainable and ethical dairy farming practices, showcasing the harmonious coexistence of modern
                   technology, traditional values, and a deep respect for the welfare of the animals.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(/images/cows6.webp)" }}
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
export default Services;
