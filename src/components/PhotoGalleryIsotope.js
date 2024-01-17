import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const PhotoGalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".kf-gallery-items", {
        itemSelector: ".kf-gallery-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-gallery-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  return (
    <section className="section kf-gallery">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Our Photo Gallery
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Looks Our Photo Gallery
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-gal element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            All
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("fast-food")}
            data-href="fast-food"
          >
            our Farm
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hot-coffee")}
            data-href="hot-coffee"
          >
            Milking Cattles
          </a>
          <a
            className="c-pointer"
            data-href="dinner-menu"
            onClick={handleFilterKeyChange("dinner-menu")}
          >
            Breeding Bulls
          </a>
          <a
            className="c-pointer"
            data-href="special-pizza"
            onClick={handleFilterKeyChange("special-pizza")}
          >
           Our Products
          </a>
        </div>
        <div className="kf-gallery-items row">
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/pick2.jpg" className="has-popup-gallery">
                  <img src="images/pick2.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Barns and Shelters</div>
                </div>
                <div className="subname">
                  <div className="value">Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/pic1.jpg" className="has-popup-gallery">
                  <img src="images/pic1.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Fresian</div>
                </div>
                <div className="subname">
                  <div className="value">Breed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/pic3.jpg" className="has-popup-gallery">
                  <img src="images/pic3.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Barns and Shelters</div>
                </div>
                <div className="subname">
                  <div className="value">Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all special-pizza">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/calf2.jpg" className="has-popup-gallery">
                  <img src="images/calf2.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Calf Rearing Area</div>
                </div>
                <div className="subname">
                  <div className="value">Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all hot-coffee">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/calf1.jpg" className="has-popup-gallery">
                  <img src="images/calf1.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Calf</div>
                </div>
                <div className="subname">
                  <div className="value">Breed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/hero2.jpg" className="has-popup-gallery">
                  <img src="images/hero2.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Feeding</div>
                </div>
                <div className="subname">
                  <div className="value">Animals</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all hot-coffee">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/hero3.jpg" className="has-popup-gallery">
                  <img src="images/hero3.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Resting </div>
                </div>
                <div className="subname">
                  <div className="value">Cattles</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/hero4.jpg" className="has-popup-gallery">
                  <img src="images/hero4.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Feeds</div>
                </div>
                <div className="subname">
                  <div className="value">Feeding Animals</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/hero5.jpg" className="has-popup-gallery">
                  <img src="images/hero3.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Shelter</div>
                </div>
                <div className="subname">
                  <div className="value">Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhotoGalleryIsotope;
