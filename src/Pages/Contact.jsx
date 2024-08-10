import React,{useState}from 'react'

import im from './Images/pic.jpg'

function Contact() {
 
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Normally, you would handle form submission here
      console.log('Form data submitted:', formData);
      setSubmitted(true);
      // Reset the form after submission
      setFormData({ name: '', email: '', message: '' });
    };
  
  return (
    <div>
      <h1>Contact</h1>
<p><h3>We would love to hear from you!<br></br>

Unfortunately the following types of emails will be ignored: <br />

Requests for individual recommendations. <br />
Requests for guest posts.
Any submissions that appear low-effort or automated</h3></p>
{submitted ? (
        <h2>Thank you for your message!</h2>
      ) : (
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name">Name:</label><br/>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label><br/>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br/>
          </div>
          <div>
            <label htmlFor="message">Message:</label><br/>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
         
      )}
       <img src={im} alt="Description" width={"100%"} />
       <h3>Our reviews take weeks or months of research and years of experience. To write our reviews we have interviewed thousands of real-life users of website builders, tested customer support response times and of course we have created many, many websites on different website builders.</h3>
Contact Us<br/>
Address: 13 Fifth Avenue, New York 101660<br/>
Email: contact@info.com<br/>
Phone: +91 987 654 321<br/>
    </div>
  )
}

export default Contact
