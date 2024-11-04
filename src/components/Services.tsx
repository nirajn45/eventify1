'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTasks, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = () => {
  return (
    <div>
      <section className="main-header mt-16 mb-12">
        <div className="w-10/12 flex flex-col lg:flex-row mx-auto">
          {/* Left Section */}
          <div className="lg:w-full flex items-center">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="border-l-2 border-[#b02027] h-4 mr-2"></span>
                <h1 className="text-base font-semibold">Contribute With Us</h1>
              </div>
              <h3 className="text-3xl font-semibold mb-4">Why Partner With Us?</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Our extensive reach ensures your scholarships get maximum visibility amongst deserving students across India.
              </p>

              {/* Services Cards */}
              <div className="grid gap-3">
                <div className="header-card p-4 rounded-md bg-white shadow-md border-b border-[#AF0305] flex">
                  <FontAwesomeIcon icon={faUsers} className="text-xl bg-gray-100 rounded-full p-2 text-[#b02027]" />
                  <div className='flex flex-col pl-3'>
                    <h4 className="text-lg text-[#b02027]">Diverse Audience</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      We cater to students from all backgrounds and academic disciplines, allowing you to target specific scholarship recipients.
                    </p>
                  </div>
                </div>
                <div className="header-card p-4 rounded-md bg-white shadow-md border-b border-[#AF0305] flex">
                  <FontAwesomeIcon icon={faTasks} className="text-xl bg-gray-100 rounded-full p-2 text-[#b02027]" />
                  <div className='flex flex-col pl-3'>
                    <h4 className="text-lg text-[#b02027]">Streamlined Process</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Our user-friendly platform simplifies scholarship application and management for both students and donors.
                    </p>
                  </div>
                </div>
                <div className="header-card p-4 rounded-md bg-white shadow-md border-b border-[#AF0305] flex">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-xl bg-gray-100 rounded-full p-2 text-[#b02027]" />
                  <div className='flex flex-col pl-3'>
                    <h4 className="text-lg text-[#b02027]">Positive Brand Image</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Partnering with us demonstrates your commitment to social responsibility and educational advancement, enhancing your brand image.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section - Image Gallery */}
        </div>
      </section>
    </div>
  );
};

export default Services;
