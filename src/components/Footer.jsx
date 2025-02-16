import React from "react";
import Facebook from "./assets/sm/facebook.png";
import LinkedIN from "./assets/sm/linkedin-logo.png";
import X from "./assets/sm/twitter.png";
import Youtube from "./assets/sm/youtube.png";

const Footer = () => {
  return (
    <div>
      <div>
        <footer class=" text-[#696969] mt-[70px] ">
          <div class=" mx-auto px-[100px] border-t-2 pt-10   ">
            {/* <!-- Top Section: Logo & Description --> */}
            <div class="flex flex-col md:flex-row md:justify-between gap-6 pb-10">
              {/* <!-- Logo & Description --> */}
              <div class="md:w-1/3 flex flex-col  justify-center  ">
                <div>
                  <img
                    src="https://media.geeksforgeeks.org/auth-dashboard-uploads/gfgFooterLogo.png"
                    alt=""
                  />
                </div>

                <p class="text-gray-400 mt-2 text-sm">
                  A Computer Science portal for geeks. It contains well written,
                  well thought and well explained computer science and
                  programming articles.
                </p>
              </div>

              {/* <!-- Quick Links --> */}
              <div class="md:w-1/3 flex flex-col justify-center items-center">
                <h3 class="text-lg font-semibold text-[rgb(55,141,70)]">
                  Quick Links
                </h3>
                <ul class="mt-2 space-y-2 text-[#696969] text-sm">
                  <li>
                    <a href="#" class="hover:text-black">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-black">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-black">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-black">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Social Media Links --> */}
              <div class="md:w-1/3 flex  items-center flex-col  ">
                <h3 class="text-lg font-semiboldtext text-[rgb(55,141,70)]">
                  Follow Us
                </h3>
                <div class="flex space-x-4 mt-2 ">
                  <img className="size-9" src={Facebook} alt="" />
                  <img className="size-9" src={X} alt="" />
                  <img className="size-9" src={LinkedIN} alt="" />
                  <img className="size-9" src={Youtube} alt="" />
                </div>
              </div>
            </div>

            {/* <!-- Bottom Section --> */}
            <div class="border-t  text-gray-400 text-sm p-[20px] flex justify-center">
              <p>© 2025 GeeksforGeeks. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
