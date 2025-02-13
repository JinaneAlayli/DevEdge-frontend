// pages/contact.js

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 max-w-[300px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">GET IN TOUCH</h2>
          <p className="text-sm mb-4">
            Kindly fill out the form with details of your inquiry. Our team will get in touch with you shortly to address your needs and provide the necessary assistance.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-start ml-40">  
          <form className="bg-white p-6">
            <div className="mb-4 flex">
              <input
                type="text"
                placeholder="First Name *"
                required
                className="w-[278px] bg-[#F7F6F8] p-2 rounded-none placeholder-[#A6A5A6] mr-2"
              />
              <input
                type="text"
                placeholder="Last Name *"
                required
                className="w-[278px] bg-[#F7F6F8] p-2 rounded-none placeholder-[#A6A5A6]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail *"
                required
                className="w-full bg-[#F7F6F8] p-2 rounded-none placeholder-[#A6A5A6]"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject *"
                required
                className="w-full bg-[#F7F6F8] p-2 rounded-none placeholder-[#A6A5A6]"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message *"
                required
                className="w-full bg-[#F7F6F8] p-2 rounded-none placeholder-[#A6A5A6]"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              GET IN TOUCH
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}