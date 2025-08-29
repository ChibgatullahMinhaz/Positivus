import React from "react";
import SectionHeading from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles (🚨 This was missing)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    message:
      "Positivus helped us scale our business with amazing SEO strategies. Our traffic doubled in just 3 months!",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Marketing Manager, BrandX",
    message:
      "Working with Positivus has been a game changer. Their digital marketing expertise is unmatched!",
  },

  {
    id: 3,
    name: "Michael Johnson",
    role: "Founder, StartupHub",
    message:
      "They truly care about their clients’ success. Our online presence has never been stronger!",
  },
];

const Testimonials = () => {
  const title = "Testimonials";
  const des =
    "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services";

  return (
    <section>
      <SectionHeading title={title} des={des} />

      <section
        className="max-w-6xl mx-auto text-center py-10 px-6 bg-[#191a23] rounded-2xl "
        aria-label="Testimonials"
      >

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 rounded-2xl shadow-md h-full flex flex-col items-center text-center">
               
                <p className="text-white italic mb-4 border border-green-600 rounded-2xl p-3 ">
                  "{testimonial.message}"
                </p>
                <h3 className="font-semibold text-lg text-orange-400">{testimonial.name}</h3>
                <span className="text-gray-500 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonials;
