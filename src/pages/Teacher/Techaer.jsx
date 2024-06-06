import React from 'react';
import "./Techer.css"
import Blog1Img from '../../utils/images/gallery5.jpeg';
const testimonials = [
  {
    name: 'John Doe',
    position: 'Math Teacher',
    image: [Blog1Img], 
    testimonial: 'Teaching math at this school has been an incredibly rewarding experience. The students are eager to learn and the administration is very supportive.',
  },
  {
    name: 'Jane Smith',
    position: 'Science Teacher',
    image: '/jane.jpg', 
    testimonial: 'The collaborative environment among the teachers and the passion of the students make this a great place to work.',
  },
  {
    name: 'Mary Johnson',
    position: 'History Teacher',
    image: '/mary.jpg', // Make sure to place your image in the public directory
    testimonial: 'I love teaching history here. The school provides excellent resources and the students are very engaged.',
  },
];

const TeacherTestimonials = () => {
  return (
    <div className="testimonials-container">
         <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Teacher</h1>
                <p className='text-center w-75 mb-5'>A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence, or virtue, via the practice.</p>
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
            <p className="testimonial">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherTestimonials;
