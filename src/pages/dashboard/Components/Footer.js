import React from "react";

function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Main content goes here */}
      </div>

      <footer className="bg[#faf9f9] p-10">
        <div className="mx-auto max-w-screen-4xl w-full bg-[#faf3e3] border-8 border-[#291747] rounded-lg p-12 shadow-lg ">
          {/* Ensures the container spans full width */}
          <hr className="border-[#291747] border-2 mb-10" /> {/* Made border inside the hr element thicker */}
          <div className="flex justify-between text-[#291747]">
            {/* Categories Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg">Categories</h2>
              <div className="space-y-1">
                <p>Graphics & Design</p>
                <p>Digital Marketing</p>
                <p>Writing & Translation</p>
                <p>Video & Animation</p>
                <p>Music & Audio</p>
                <p>Programming & Tech</p>
                <p>Data</p>
                <p>Business</p>
                <p>Lifestyle</p>
                <p>Photography</p>
                <p>Sitemap</p>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg">About</h2>
              <div className="space-y-1">
                <p>Press & News</p>
                <p>Partnerships</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Intellectual Property Claims</p>
                <p>Investor Relations</p>
                <p>Contact Sales</p>
              </div>
            </div>

            {/* Support Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg">Support</h2>
              <div className="space-y-1">
                <p>Help & Support</p>
                <p>Trust & Safety</p>
                <p>Selling on Fiverr</p>
                <p>Buying on Fiverr</p>
              </div>
            </div>

            {/* Community Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg">Community</h2>
              <div className="space-y-1">
                <p>Customer Success Stories</p>
                <p>Community hub</p>
                <p>Forum</p>
                <p>Events</p>
                <p>Blog</p>
                <p>Influencers</p>
                <p>Affiliates</p>
                <p>Podcast</p>
                <p>Invite a Friend</p>
                <p>Become a Seller</p>
                <p>Community Standards</p>
              </div>
            </div>

            {/* More From Fiverr Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg ">More From Fiverr</h2>
              <div className="space-y-1">
                <p>Fiverr Business</p>
                <p>Fiverr Pro</p>
                <p>Fiverr Logo Maker</p>
                <p>Fiverr Guides</p>
                <p>Get Inspired</p>
                <p>Fiverr Select</p>
                <p>ClearVoice</p>
                <p>Fiverr Workspace</p>
                <p>Learn</p>
                <p>Working Not Working</p>
              </div>
            </div>
          </div>

          <hr className="border-[#291747] border-2 mt-32 mb-5" /> {/* Made border inside the hr element thicker */}

          {/* Footer Bottom Section */}
          <div className="flex justify-between items-center text-[#291747]">
            {/* Left Side */}
            <div>
              <h2 className="font-bold text-lg">Skill-Weave</h2>
              <span>© skillweave International Ltd. 2024</span>
            </div>

            {/* Right Side */}
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <img src="../tweet.png" alt="Twitter" className="w-6 h-6" />
                <img src="../you.png" alt="Youtube" className="w-6 h-6" />
                <img src="../link.png" alt="LinkedIn" className="w-6 h-6" />
                <img src="../pin.png" alt="Pinterest" className="w-6 h-6" />
                <img src="../insta.png" alt="Instagram" className="w-6 h-6" />
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <img src="../lang.png" alt="Language" className="w-5 h-5" />
                <span>English</span>
              </div>

              {/* Currency Selector */}
              {/* <div className="flex items-center space-x-2">
                <img src="../dolla.png" alt="Currency" className="w-5 h-5" />
                <span>USD</span>
              </div> */}

              {/* Accessibility Icon
              <img src="/img/accessibility.png" alt="Accessibility" className="w-6 h-6" /> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
