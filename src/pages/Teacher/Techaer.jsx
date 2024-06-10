import React from 'react';
import "./Techer.css"
import Blog1Img from '../../utils/images/Pratima.jpeg';
import Blog2Img from '../../utils/images/jyoti.jpeg';
import Blog3Img from '../../utils/images/praween.jpeg';
import Blog4Img from '../../utils/images/sarswati.jpeg';
import Blog5Img from '../../utils/images/Priti.jpeg';
import Blog6Img from '../../utils/images/Neha.jpeg';
import Blog7Img from '../../utils/images/sweta.jpeg';
import Blog8Img from '../../utils/images/dubey.jpeg';
import Blog9Img from '../../utils/images/anjali.jpeg';
import Blog10Img from '../../utils/images/pragya.jpeg';
import Blog11Img from '../../utils/images/ritesh.jpeg';


const testimonials = [
  {
    name: 'Pragya Awasthi',
    position: 'Voice Principal',
    image: [Blog10Img], 
    testimonial: 'M.A(ENG)',
  },
  {
    name: 'Pratima Singh',
    position: 'Senior Hindi Teacher',
    image: [Blog1Img], 
    testimonial: 'M.A, B.ED',
  },
  {
    name: 'Jyoti Rani',
    position: 'Junior Math Teacher',
    image: [Blog2Img], 
    testimonial: 'B.ED, M.Com',
  },
  {
    name: 'Prabin Kumar Jha',
    position: 'Senior English Teacher',
    image: [Blog3Img], // Make sure to place your image in the public directory
    testimonial: 'D.LE.ED, B.A',
  },
  {
    name: 'Saraswati Oraon',
    position: 'Math Teacher',
    image: [Blog4Img], // Make sure to place your image in the public directory
    testimonial: 'B.SC, NTT',
  },
  {
    name: 'Priti Devi',
    position: 'G.K & E.V.S',
    image: [Blog5Img], // Make sure to place your image in the public directory
    testimonial: 'D.LE.ED, I.COM',
  },
  {
    name: 'Neha Kerketta',
    position: 'Junior Teacher',
    image: [Blog6Img], // Make sure to place your image in the public directory
    testimonial: 'M.A',
  },
  {
    name: 'Sweta Tirkey',
    position: 'Junior Hindi Teacher',
    image: [Blog7Img], // Make sure to place your image in the public directory
    testimonial: 'M.A, B.ED',
  },
  {
    name: 'Santosh Dubey',
    position: 'Computer Teacher',
    image: [Blog8Img], // Make sure to place your image in the public directory
    testimonial: 'MCA',
  },
  {
    name: 'Anjali Kumari',
    position: 'Senior Math Teacher ',
    image: [Blog9Img], // Make sure to place your image in the public directory
    testimonial: 'B.SC(Math)',
  },
  {
    name: 'Ritesh Sahu',
    position: 'Senior Science Teacher ',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.Tech',
  },
];

const TeacherTestimonials = () => {
  return (
    <div className="testimonials-container">
         <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Teacher</h1>
                <p className='text-center w-75 mb-5'>Teachers are the guiding lights in our lives, imparting knowledge, fostering critical thinking, and shaping the future by nurturing young minds with patience, dedication, and passion.</p>
            </div>
        </header>
      <h2 className="testimonials-title">Teacher Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="card-header">
              <img
                className="profile-image"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="name">{testimonial.name}</p>
                <p className="position">{testimonial.position}</p>
              </div>
            </div>
            <p className="testimonial">Qualification:-{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherTestimonials;
