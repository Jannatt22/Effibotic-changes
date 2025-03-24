import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AILeadGeneratorPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                AI Lead Generator
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Transform your sales pipeline with our intelligent AI lead generation system that identifies, qualifies, and nurtures potential customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/book-demo" 
                  className="bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                >
                  Book Demo
                </Link>
                <a 
                  href="#benefits" 
                  className="bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                >
                  Explore Benefits
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <Image
                  src="/images/funnel.png"
                  alt="AI Agent Sales Funnel"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                  priority
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
            Benefits of Our <span className="gradient-text">AI Lead Generator</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Higher Quality Leads</h3>
              <p className="text-gray-600">
                Our AI analyzes multiple data points to identify prospects with the highest conversion potential, focusing your team's efforts on qualified leads.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Accelerated Sales Cycle</h3>
              <p className="text-gray-600">
                Automate lead nurturing with personalized engagement, moving prospects through your sales funnel faster with less manual intervention.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Gain valuable intelligence about your prospects, market trends, and campaign performance to continuously optimize your sales strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our AI Lead Generator can help your business identify and convert more high-quality prospects.
          </p>
        </div>
      </section>
    </main>
  );
} 