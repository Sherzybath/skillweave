import React from 'react';

function FAQs() {
  return (
    <section className="py-8 bg-[#f9f9f9] mb-0 mt-16">
      <div className="container mx-auto px-6 mt-16 animate-pulse-faq">
        <div className="flex flex-col md:flex-row items-start justify-between">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8 w-full md:w-1/3 animate-pulse-faq">
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What is website design?</h3>
              <p className="text-[#13544e] mb-4">
                Website design is the process of creating and maintaining a website's visual appearance and functionality. It involves graphic design, UI/UX, and coding to create a user-friendly experience.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What kinds of projects need website design?</h3>
              <p className="text-[#13544e] mb-4">
                Any project that aims to establish an online presence, such as business websites, e-commerce platforms, and personal blogs, needs website design.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What makes a good website design?</h3>
              <p className="text-[#13544e] mb-4">
                A good website design is clean, responsive, and aligns with the brand. It provides easy navigation, fast loading times, and clear calls to action.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What is responsive web design?</h3>
              <p className="text-[#13544e] mb-4">
                Responsive web design ensures that a website looks and functions well on all devices, adjusting its layout based on screen size and orientation.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">Why is website design important?</h3>
              <p className="text-[#13544e] mb-4">
                Website design is crucial because it impacts how visitors perceive your brand. A well-designed website can increase trust and drive more engagement.
              </p>
            </div>
          </div>

          {/* Center Title */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 my-4 animate-pulse-faq">
            <div className="flex flex-col items-center space-y-2 mt-24">
              <span className="text-9xl font-bold text-[#13544e]">F</span>
              <span className="text-9xl font-bold text-[#13544e]">A</span>
              <span className="text-9xl font-bold text-[#13544e]">Q</span>
              <span className="text-9xl font-bold text-[#13544e]">S</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8 w-full md:w-1/3 animate-pulse-faq">
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How do I pick the right website designer for my business?</h3>
              <p className="text-[#13544e] mb-4">
                Review the designer's portfolio and past work. Choose someone with experience relevant to your industry and a style that aligns with your brand.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">What services do website designers provide?</h3>
              <p className="text-[#13544e] mb-4">
                Website designers create layouts, design graphics, and ensure a user-friendly experience. They also optimize websites for various devices.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How much does hiring a website designer cost?</h3>
              <p className="text-[#13544e] mb-4">
                Costs vary widely depending on the project's complexity and the designer's experience. Simple websites are cheaper, while custom designs cost more.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">How long does it take to design a website?</h3>
              <p className="text-[#13544e] mb-4">
                The timeline depends on the complexity. Simple sites may take a few weeks, while more complex sites can take several months.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#13544e] mb-2">Can I update my website design later?</h3>
              <p className="text-[#13544e] mb-4">
                Yes, websites can be updated or redesigned as needed to keep them current and aligned with evolving business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
