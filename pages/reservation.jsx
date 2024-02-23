import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    persons: '1 Person',
    date: '',
    time: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if any of the required fields are empty
    const requiredFields = ['name', 'email', 'tel', 'date', 'time'];
    const isEmptyField = requiredFields.some(field => !formData[field].trim());
  
    if (isEmptyField) {
      // Display an error message or prevent form submission
      toast.error('Please fill in all the required fields.');
      return;
    }
  
    try {
      // Send form data to the server using the API route
      const response = await fetch('/api/submit-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Reservation request sent successfully');
        toast.success('Reservation sent successfully!');
        // Clear form data
        setFormData({
          name: '',
          email: '',
          tel: '',
          persons: '1 Person',
          date: '',
          time: '',
        });
      } else {
        console.error('Error submitting reservation request');
        toast.error('Error submitting reservation request');
      }
    } catch (error) {
      console.error('Error submitting reservation request:', error);
      toast.error('Error submitting reservation request');
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(/images/calfs3.webp)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Book A visit To Our farm
          </h1>
        </div>
      </section>
      {/* Section Reservation */}
      <section className="section kf-reservation">
        <div className="container">
          <div
            className="kf-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Book a Visit</div>
              <h3 className="kf-title">Get in touch with us to Visit</h3>
            </div>
            <form id="rform" method="post" onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="kf-field">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <i className="far fa-user" />
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="kf-field">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <i className="fas fa-at" />
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="kf-field">
        <input
          type="tel"
          name="tel"
          placeholder="Phone Number"
          value={formData.tel}
          onChange={handleChange}
        />
        <i className="fas fa-mobile-alt" />
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="kf-field">
        <select
          name="persons"
          value={formData.persons}
          onChange={handleChange}
        >
          <option style={{ color: "black" }}>1 Person</option>
          <option style={{ color: "black" }}>2 Person</option>
          <option style={{ color: "black" }}>3 Person</option>
          <option style={{ color: "black" }}>4 Person</option>
        </select>
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="kf-field">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <i className="far fa-calendar-alt" />
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="kf-field">
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={formData.time}
          onChange={handleChange}
        />
        <i className="far fa-clock" />{" "}
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="kf-bts">
        <button type="submit" className="kf-btn">
          <span>booking A visit</span>
          <i className="fas fa-chevron-right" />
        </button>
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
      {/* Section Insta Carousel */}
      {/* <InstaCarousel /> */}
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
            {/* ... other brand items ... */}
          {/* </div>
        </div>
      </div> */}
      <Toaster position="top-right" reverseOrder={false} />
    </Layouts>
  );
};

export default Reservation;
