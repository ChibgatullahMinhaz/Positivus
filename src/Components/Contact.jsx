import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import contactImage from '../assets/contactImage.png'
const Contact = () => {
  const [formType, setFormType] = useState("sayhi");

  const title = "Contact Us";
  const des = "Connect with Us: Let's Discuss Your Digital Marketing Needs";
  return (
    <section>
      <SectionHeading title={title} des={des} />
      <section
        className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100 rounded-2xl my-4 justify-between"
        aria-labelledby="contact-title"
      >
        {/* Left Side - Form */}
        <div>
          

          {/* Radio Buttons */}
          <div className="flex space-x-4 mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="formType"
                value="sayhi"
                checked={formType === "sayhi"}
                onChange={() => setFormType("sayhi")}
                className="form-radio text-green-600"
              />
              <span>Say Hi</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="formType"
                value="quote"
                checked={formType === "quote"}
                onChange={() => setFormType("quote")}
                className="form-radio text-green-600"
              />
              <span>Get Quote</span>
            </label>
          </div>

          {/* Dynamic Form */}
          {formType === "sayhi" ? (
            <form className="space-y-4" aria-label="Say Hi Form">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
            className="w-full bg-[#191A23] hover:bg-white hover:text-black border transition-all duration-500 text-white rounded-2xl p-3 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          ) : (
            <form className="space-y-4" aria-label="Get Quote Form">
              <div>
                <label htmlFor="company" className="block mb-1 font-medium">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="Your Company"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email-quote" className="block mb-1 font-medium">
                  Business Email
                </label>
                <input
                  id="email-quote"
                  type="email"
                  required
                  placeholder="Business Email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block mb-1 font-medium">
                  Budget
                </label>
                <select
                  id="budget"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                >
                  <option>Less than $1000</option>
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10,000</option>
                  <option>More than $10,000</option>
                </select>
              </div>
              <div>
                <label htmlFor="details" className="block mb-1 font-medium">
                  Project Details
                </label>
                <textarea
                  id="details"
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#191A23] hover:bg-white hover:text-black border transition-all duration-500 text-white rounded-2xl p-3 cursor-pointer"
              >
                Request Quote
              </button>
            </form>
          )}
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block">
          <img
            src={contactImage}
            alt="Contact Positivus"
            className="rounded-2xl"
          />
        </div>
      </section>
    </section>
  );
};

export default Contact;
