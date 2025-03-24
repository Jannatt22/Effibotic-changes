import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AIReceptionistPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                AI Receptionist
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Transform your customer service with an intelligent virtual receptionist that handles calls, messages, and appointment scheduling 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/book-demo" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                >
                  Book a Demo
                </Link>
                <a 
                  href="#features" 
                  className="bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                >
                  Explore Features
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <Image
                  src="/images/ai-receptionist-hero.jpg"
                  alt="AI Receptionist Interface"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Benefits of Our <span className="gradient-text">AI Receptionist</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Never miss a call or inquiry again. Our AI receptionist works around the clock to ensure every customer interaction is handled promptly.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Significantly reduce operational costs by automating routine customer interactions while maintaining high-quality service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Improved Efficiency</h3>
              <p className="text-gray-600">
                Free up your staff to focus on high-value tasks while routine inquiries and scheduling are handled automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key <span className="gradient-text">Features</span>
          </h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">Intelligent Call Handling</h3>
                <p className="text-gray-600 mb-4">
                  Our AI receptionist uses natural language processing to understand caller needs, route calls appropriately, and take messages when necessary.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Understands natural language
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Routes calls based on intent
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Captures detailed messages
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-100 p-4">
                <Image
                  src="/images/call-handling-feature.jpg"
                  alt="AI Call Handling"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">Automated Appointment Scheduling</h3>
                <p className="text-gray-600 mb-4">
                  Allow customers to book appointments without human intervention, syncing directly with your calendar system.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Calendar integration
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automatic confirmation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Reminder notifications
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-100 p-4">
                <Image
                  src="/images/appointment-scheduling.jpg"
                  alt="Appointment Scheduling"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our AI Receptionist can help your business handle customer interactions more efficiently.
          </p>
          <Link 
            href="/book-demo" 
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Book Your Free Demo
          </Link>
        </div>
      </section>
    </main>
  );
} 