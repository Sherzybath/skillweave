import React from 'react';

function FAQs() {
  
  return (
    <section id="faq" className="py-8 bg-[#fff4f0] mb-0 mt-16">
      
      <div className="container mx-auto px-6 mt-16 animate-pulse-faq">
        <div className="flex flex-col md:flex-row items-start justify-between">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8 w-full md:w-1/3 animate-pulse-faq">
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What makes SkillWeave unique?</h3>
              <p className="text-[#13544e] mb-4">
                SkillWeave stands out with its exclusive access to top talent, seamless communication through our custom chatbot, and a proprietary payment gateway designed for security and efficiency.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How does SkillWeave enhance user experience?</h3>
              <p className="text-[#13544e] mb-4">
                Our platform enhances user experience with an integrated chat system for smooth communication, and personalized support to ensure a seamless interaction between clients and freelancers.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What features does SkillWeave offer?</h3>
              <p className="text-[#13544e] mb-4">
                SkillWeave offers features like a custom-built chatbot, a secure in-house payment gateway, and comprehensive support to provide an optimal freelancing environment.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How does SkillWeave ensure secure transactions?</h3>
              <p className="text-[#13544e] mb-4">
                We use a proprietary payment gateway designed and developed in-house to ensure all transactions are secure, reliable, and efficient.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How can I get support from SkillWeave?</h3>
              <p className="text-[#13544e] mb-4">
                For any inquiries or support, you can contact us through the details provided in the footer of our website. We are committed to assisting you with any issues or questions.
              </p>
            </div>
          </div>

          {/* Center Title */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 my-4 animate-pulse-faq">
            <div className="flex flex-col items-center space-y-2 mt-24">
              <span className="text-9xl font-bold text-[#13544e] transition-transform transform hover:scale-105">F</span>
              <span className="text-9xl font-bold text-[#13544e] transition-transform transform hover:scale-105">A</span>
              <span className="text-9xl font-bold text-[#13544e] transition-transform transform hover:scale-105">Q</span>
              <span className="text-9xl font-bold text-[#13544e] transition-transform transform hover:scale-105 ">S</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8 w-full md:w-1/3 animate-pulse-faq">
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How do I start using SkillWeave?</h3>
              <p className="text-[#13544e] mb-4">
                Simply sign up on our platform, set up your profile, and start connecting with top freelancers. Our system is designed to help you get started quickly and easily.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What types of projects are suitable for SkillWeave?</h3>
              <p className="text-[#13544e] mb-4">
                SkillWeave is ideal for various projects, including business websites, e-commerce platforms, and freelance tasks that require high-quality talent and seamless communication.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How does SkillWeave support freelancers?</h3>
              <p className="text-[#13544e] mb-4">
                We support freelancers by providing a platform with integrated communication tools, secure payments, and dedicated support to help them succeed in their projects.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">Can I update my SkillWeave profile?</h3>
              <p className="text-[#13544e] mb-4">
                Yes, you can update your profile information at any time to reflect your latest skills, experience, and availability.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What if I encounter issues with SkillWeave?</h3>
              <p className="text-[#13544e] mb-4">
                If you encounter any issues, please reach out to our support team via the contact details in the footer. We are here to assist you and resolve any problems promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
