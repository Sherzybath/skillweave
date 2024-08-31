import React from "react";
import { FaTwitter, FaYoutube, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Main content goes here */}
      </div>
      
      <footer id="footer" className="bg-[#fff4f0] p-10">
        <div className="mx-auto max-w-screen-4xl w-full bg-[#faf3e3] border-8 border-[#291747] rounded-lg p-12 shadow-lg ">
          <hr className="border-[#291747] border-2 mb-10" />
          <div className="flex justify-between text-[#291747]">
            {/* Categories Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg transition-transform transform hover:scale-110">Categories</h2>
              <div className="space-y-1">
                <p className="transition-transform transform hover:scale-110">Graphics & Design</p>
                <p className="transition-transform transform hover:scale-110">Digital Marketing</p>
                <p className="transition-transform transform hover:scale-110">Writing & Translation</p>
                <p className="transition-transform transform hover:scale-110">Video & Animation</p>
                <p className="transition-transform transform hover:scale-110">Music & Audio</p>
                <p className="transition-transform transform hover:scale-110">Programming & Tech</p>
                <p className="transition-transform transform hover:scale-110">Data</p>
                <p className="transition-transform transform hover:scale-110">Business</p>
                <p className="transition-transform transform hover:scale-110">Lifestyle</p>
                <p className="transition-transform transform hover:scale-110">Photography</p>
                <p className="transition-transform transform hover:scale-110">Sitemap</p>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg transition-transform transform hover:scale-110">About</h2>
              <div className="space-y-1">
                <p className="transition-transform transform hover:scale-110">Press & News</p>
                <p className="transition-transform transform hover:scale-110">Partnerships</p>
                <p className="transition-transform transform hover:scale-110">Privacy Policy</p>
                <p className="transition-transform transform hover:scale-110">Terms of Service</p>
                <p className="transition-transform transform hover:scale-110">Intellectual Property Claims</p>
                <p className="transition-transform transform hover:scale-110">Investor Relations</p>
                <p className="transition-transform transform hover:scale-110">Contact Sales</p>
              </div>
            </div>

            {/* Support Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg transition-transform transform hover:scale-110">Support</h2>
              <div className="space-y-1">
                <p className="transition-transform transform hover:scale-110">Help & Support</p>
                <p className="transition-transform transform hover:scale-110">Trust & Safety</p>
                <p className="transition-transform transform hover:scale-110">Selling on Skill-Weave</p>
                <p className="transition-transform transform hover:scale-110">Buying on Skill-Weave</p>
              </div>
            </div>

            {/* Community Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg transition-transform transform hover:scale-110">Community</h2>
              <div className="space-y-1">
                <p className="transition-transform transform hover:scale-110">Customer Success Stories</p>
                <p className="transition-transform transform hover:scale-110">Community hub</p>
                <p className="transition-transform transform hover:scale-110">Forum</p>
                <p className="transition-transform transform hover:scale-110">Events</p>
                <p className="transition-transform transform hover:scale-110">Blog</p>
                <p className="transition-transform transform hover:scale-110">Influencers</p>
                <p className="transition-transform transform hover:scale-110">Affiliates</p>
                <p className="transition-transform transform hover:scale-110">Podcast</p>
                <p className="transition-transform transform hover:scale-110">Invite a Friend</p>
                <p className="transition-transform transform hover:scale-110">Become a Seller</p>
                <p className="transition-transform transform hover:scale-110">Community Standards</p>
              </div>
            </div>

            {/* More From Skill-Weave Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg transition-transform transform hover:scale-110">More From Skill-Weave</h2>
              <div className="space-y-1">
                <p className="transition-transform transform hover:scale-110">Skill-Weave Business</p>
                <p className="transition-transform transform hover:scale-110">Skill-Weave Pro</p>
                <p className="transition-transform transform hover:scale-110">Skill-Weave Logo Maker</p>
                <p className="transition-transform transform hover:scale-110">Skill-Weave Guides</p>
                <p className="transition-transform transform hover:scale-110">Get Inspired</p>
                <p className="transition-transform transform hover:scale-110">Skill-Weave Select</p>
                <p className="transition-transform transform hover:scale-110">ClearVoice</p>
                <p className="transition-transform transform hover:scale-110">Skill-Weave Workspace</p>
                <p className="transition-transform transform hover:scale-110">Learn</p>
                <p className="transition-transform transform hover:scale-110">Working Not Working</p>
              </div>
            </div>
          </div>

          <hr className="border-[#291747] border-2 mt-32 mb-5" />

          {/* Footer Bottom Section */}
          <div className="flex justify-between items-center text-[#291747]">
            {/* Left Side */}
            <div className="transition-transform transform hover:scale-110">
              <h2 className="font-bold text-lg">SkillWeave</h2>
              <span>© SkillWeave Private Ltd. 2024</span>
            </div>

            {/* Right Side */}
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FaPinterest className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-2 transition-transform transform hover:scale-110">
                <MdLanguage className="w-5 h-5" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
