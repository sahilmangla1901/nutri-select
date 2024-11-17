import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [query, setQuery] = useState({ name: '', address: '', phone: '', type:'', message: '' });
  const [partner, setPartner] = useState({ businessName: '', contactName: '', address: '', phone: '', type: '', message: '' });

  const handleQueryChange = (e) => setQuery({ ...query, [e.target.name]: e.target.value });
  const handlePartnerChange = (e) => setPartner({ ...partner, [e.target.name]: e.target.value });

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    // Handle email submission for query
    window.location.href=`mailto:nutriselect@nmacgroup.in?subject=Feedback%20related%20to%20${query.type}&body=Hey%0D%0A%0D%0AI%20want%20to%20give%20feedback%20for%20${query.type}.%0D%0A%0D%0A${query.message}%0D%0A%0D%0A${query.name}-${query.phone}%20%3A%29`
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    // Handle email submission for partner request
    window.location.href=`mailto:nutriselect@nmacgroup.in?subject=Partnership%20opportunity%20with%20${partner.businessName}&body=Hey%0D%0A%0D%0AI%20want%20to%20partner%20with%20Nutriselect%20as%20${partner.type}.Let's%20rock%20!together.%0D%0A%0D%0A${partner.message}%0D%0A%0D%0A${partner.contactName}-${partner.phone}%20%3A%29`
  };
  const scrollQuery=()=>{
    document.getElementById('query-submit').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  };
  const scrollPartner=()=>{
    document.getElementById('partner-with-us').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  };

  return (
    <div className="contact-page">
      <section className="hero-section-contact">
        <div className="hero-content-contact">
          <h1 className="hero-title-contact">Get in Touch with NutriSelect</h1>
          <p className="hero-subtitle-contact">We’re here to help! Whether you have a question, want to partner with us, or just want to say hello, feel free to reach out.</p>
          <div className="hero-buttons-contact">
            <a className="btn-primary" onClick={scrollPartner}>Partner With Us</a>
            <a className="btn-secondary" onClick={scrollQuery}>Feedback?</a>
          </div>
        </div>
      </section>

      <div className="form-container">
        {/* Queries Form */}
        <form id="query-submit" className="contact-form" onSubmit={handleQuerySubmit}>
          <h2>Submit Feedback</h2>
          <input type="text" name="name" placeholder="Your Name" value={query.name} onChange={handleQueryChange} required />
          <input type="text" name="address" placeholder="Your Address" value={query.address} onChange={handleQueryChange} required />
          <input type="text" name="phone" placeholder="Your Phone Number (Optional)" value={query.phone} onChange={handleQueryChange} />
          <select name="type" value={query.type} onChange={handleQueryChange} required>
            <option value="">Select Product</option>
            <option value="Wheat Flour">Wheat Flour</option>
            <option value="Mustard Oil">Mustard Oil</option>
          </select>
          <textarea name="message" placeholder="Your Feedback" value={query.message} onChange={handleQueryChange} required></textarea>
          <button type="submit">Submit Feedback</button>
        </form>

        {/* Partner with Us Form */}
        <form id="partner-with-us" className="partner-form" onSubmit={handlePartnerSubmit}>
          <h2>Partner with Us</h2>
          <input type="text" name="businessName" placeholder="Business Name" value={partner.businessName} onChange={handlePartnerChange} required />
          <input type="text" name="contactName" placeholder="Contact Person's Name" value={partner.contactName} onChange={handlePartnerChange} required />
          <input type="text" name="address" placeholder="Your Business Address" value={partner.address} onChange={handlePartnerChange} required />
          <input type="text" name="phone" placeholder="Your Phone Number" value={partner.phone} onChange={handlePartnerChange} required />
          <select name="type" value={partner.type} onChange={handlePartnerChange} required>
            <option value="">Type of Partnership</option>
            <option value="Distributor">Distributor</option>
            <option value="Supplier">Supplier</option>
            <option value="Retailer">Retailer</option>
            <option value="Other">Other</option>
          </select>
          <textarea name="message" placeholder="Additional Details" value={partner.message} onChange={handlePartnerChange} required></textarea>
          <button type="submit">Send Request</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
