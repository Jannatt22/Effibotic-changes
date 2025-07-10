import { NextPage } from 'next';
import Head from 'next/head';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Effibotic</title>
        <meta name="description" content="Privacy Policy for Salesy – AI Automation for Business by Effibotic Inc." />
      </Head>
      <main className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-8">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Effective Date:</strong> July 9, 2025
          </p>
          <p className="text-base text-gray-700 mb-8">
            At <strong>Salesy by Effibotic Inc.</strong>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                1. Information We Collect
              </h2>
              <p className="text-base text-gray-700 mb-4">
                When you interact with our services—including Facebook Lead Ads, website forms, or other digital touchpoints—we may collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Contact Information</strong> (e.g., name, email address, phone number)</li>
                <li><strong>Business Information</strong> (e.g., company name, role, industry)</li>
                <li><strong>Usage Data</strong> (e.g., device type, browser, interaction behavior)</li>
                <li><strong>Marketing Preferences</strong> (e.g., opt-ins, subscriptions)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-base text-gray-700 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Deliver our services and products</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve user experience and system performance</li>
                <li>Send updates, offers, and marketing communications (only if opted in)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                3. Sharing Your Information
              </h2>
              <p className="text-base text-gray-700 mb-4">
                We <strong>do not sell</strong> your personal data. However, we may share it with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Service providers</strong> helping us operate our business (e.g., CRM tools, email services)</li>
                <li><strong>Legal authorities</strong> if required by law</li>
                <li><strong>Partners and affiliates</strong> only with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                4. Your Privacy Rights
              </h2>
              <p className="text-base text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access the personal information we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt-out of marketing communications at any time</li>
              </ul>
              <p className="text-base text-gray-700 mt-4">
                To exercise your rights, contact us at: <a href="mailto:siva@effibotic.com" className="text-blue-600 hover:underline">siva@effibotic.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                5. Data Retention & Security
              </h2>
              <p className="text-base text-gray-700">
                We retain your data only as long as necessary for business and legal purposes. We implement industry-standard safeguards to protect your data from unauthorized access or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                6. Third-Party Links
              </h2>
              <p className="text-base text-gray-700">
                Our services may include links to third-party platforms (e.g., Facebook, payment providers). We are not responsible for their privacy practices and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                7. Changes to This Policy
              </h2>
              <p className="text-base text-gray-700">
                We may update this policy from time to time. Changes will be posted on this page with the updated date.
              </p>
            </section>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Custom Notice (for Facebook Forms):</strong> By submitting this form, you agree to be contacted by Salesy - Effibotic Inc. for product updates, offers, and helpful resources. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy; 