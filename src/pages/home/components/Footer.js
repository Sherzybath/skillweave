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
                <p>Selling on Skill-Weave</p>
                <p>Buying on Skill-Weave</p>
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

            {/* More From Skill-Weave Section */}
            <div className="space-y-4 w-1/5">
              <h2 className="font-bold text-lg">More From Skill-Weave</h2>
              <div className="space-y-1">
                <p>Skill-Weave Business</p>
                <p>Skill-Weave Pro</p>
                <p>Skill-Weave Logo Maker</p>
                <p>Skill-Weave Guides</p>
                <p>Get Inspired</p>
                <p>Skill-Weave Select</p>
                <p>ClearVoice</p>
                <p>Skill-Weave Workspace</p>
                <p>Learn</p>
                <p>Working Not Working</p>
              </div>
            </div>
          </div>

          <hr className="border-[#291747] border-2 mt-32 mb-5" />

          {/* Footer Bottom Section */}
          <div className="flex justify-between items-center text-[#291747]">
            {/* Left Side */}
            <div>
              <h2 className="font-bold text-lg">SkillWeave</h2>
              <span>© SkillWeave International Ltd. 2024</span>
            </div>

             {/* Right Side */}
             <div className="flex space-x-6">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                  <FaPinterest className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-2">
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
