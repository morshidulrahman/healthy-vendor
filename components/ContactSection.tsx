"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col justify-start">
          <span className="text-[#1890F2] font-medium mb-4">Contact Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contact Health Vend HK
          </h2>
          <p className="text-gray-600 mb-12 max-w-md">
            Ready to upgrade your space? Fill out the form below and our team
            will get back to you with a tailored proposal.
          </p>

          <div className="mt-auto">
            <p className="text-gray-900 font-medium mb-4">
              Also you can find me here:
            </p>
            <div className="flex gap-3">
              {/* X (Twitter) */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
                aria-label="X"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-[#F9FAFB] border-none rounded-lg text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company / Building
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company/Building Name"
                  className="w-full px-4 py-3 bg-[#F9FAFB] border-none rounded-lg text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-[#F9FAFB] border-none rounded-lg text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-gray-700"
                >
                  Area
                </label>
                <div className="relative">
                  <select
                    id="area"
                    className="w-full px-4 py-3 bg-[#F9FAFB] border-none rounded-lg text-gray-900 appearance-none focus:ring-2 focus:ring-blue-500 outline-none pr-10 placeholder-gray-300"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-300">
                      Select Area
                    </option>
                    <option value="area1">Area 1</option>
                    <option value="area2">Area 2</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="footfall"
                  className="block text-sm font-medium text-gray-700"
                >
                  Footfall Estimate
                </label>
                <input
                  type="text"
                  id="footfall"
                  placeholder="Daily Visitor (Approx.)"
                  className="w-full px-4 py-3 bg-[#F9FAFB] border-none rounded-lg text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Exact Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="123 Main St, Des Moines, IA"
                  className="w-full px-4 py-3 bg-[#F9FAFB] border-none rounded-lg text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Leave us a message..."
                className="w-full px-4 py-3 bg-[#F9FAFB] border-none rounded-lg text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="text-gray-600">
                  You agree to our friendly{" "}
                  <a href="#" className="text-[#1890F2] hover:underline">
                    Privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-gradient-to-r from-[#1890F2] to-[#7DC5FF] hover:translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,103,186,0.75)] shadow-[0_4px_10px_rgba(0,103,186,0.6)] text-white font-semibold rounded-xl transition-all"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
