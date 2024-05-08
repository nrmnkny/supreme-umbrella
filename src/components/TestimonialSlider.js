import React from 'react';
import Slider from 'react-slick';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const testimonials = [
    { id: 1, name: "John Doe", text: "Excellent service, highly recommend!" },
    { id: 2, name: "Jane Smith", text: "Very professional and thorough." },
    { id: 3, name: "Alice Johnson", text: "They helped us transform our business." },
  ];

  return (
    <div className="p-8">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="text-center">
            <p className="text-lg text-gray-800">{testimonial.text}</p>
            <p className="text-sm text-gray-500">— {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
