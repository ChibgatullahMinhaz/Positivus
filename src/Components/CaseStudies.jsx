import React from "react";
import SectionHeading from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    description:
      "How we helped TechCorp increase organic traffic by 120% in just 6 months.",
  },
  {
    id: 2,
    description:
      "Boosting conversions for BrandX through targeted paid campaigns.",
  },
  {
    id: 3,
    description:
      "Scaling StartupHub’s online presence with full-funnel digital marketing.",
  },
  {
    id: 4,
    description: "Revamping eCommerce growth with SEO and CRO strategies.",
  },
  {
    id: 5,
    description:
      "Local business success story: tripling foot traffic with Google Ads.",
  },
  {
    id: 6,
    description:
      "Driving B2B leads with LinkedIn campaigns and email automation.",
  },
];

const CaseStudies = () => {
  const title = "case study";
  const des =
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies";

  return (
    <section>
      <SectionHeading title={title} des={des} />

      <section className="max-w-7xl bg-[#191a23] rounded-2xl mx-auto py-10 px-6">

        {/* ✅ Desktop View (flex, 3 cards) */}
        <div className="hidden lg:flex">
          {caseStudies.slice(0, 3).map((study) => (
            <div
              key={study.id}
              className="flex-1 border border-gray-200 p-6 flex flex-col justify-between "
            >
              <p className="text-white mb-4">{study.description}</p>
              <button className="flex items-center text-green-600 font-semibold hover:underline">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* ✅ Mobile View (Carousel) */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop={true}
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className=" border border-gray-200 p-6 flex flex-col justify-between h-64">
                  <p className="text-white mb-4">{study.description}</p>
                  <button className="flex items-center text-green-600 font-semibold hover:underline">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default CaseStudies;
