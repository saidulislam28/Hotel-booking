import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcApplePay,
  FaCcDiscover,
  FaGooglePay,
} from "react-icons/fa";
import { SiMeta } from "react-icons/si";

const Footer = () => {
  // Categories data
  const categories = [
    { id: 1, title: "Deluxe Room", path: "/rooms/deluxe" },
    { id: 2, title: "Couple Room", path: "/rooms/couple" },
    { id: 3, title: "Family Room", path: "/rooms/family" },
    { id: 4, title: "Single Room", path: "/rooms/single" },
    { id: 5, title: "Twin Room", path: "/rooms/twin" },
  ];

  // Information data
  const information = [
    { id: 1, title: "About Us", path: "/about" },
    { id: 2, title: "Contact Us", path: "/contact" },
    { id: 3, title: "Privacy Policy", path: "/privacy" },
    { id: 4, title: "Wellness & Fitness", path: "/wellness" },
    { id: 5, title: "Amenities & Services", path: "/amenities" },
    { id: 6, title: "Events & Meetings", path: "/events" },
  ];

  // Social media data
  const socialMedia = [
    {
      id: 1,
      title: "Facebook",
      path: "https://facebook.com",
      icon: FaFacebook,
    },
    { id: 2, title: "Twitter", path: "https://twitter.com", icon: FaTwitter },
    { id: 3, title: "Youtube", path: "https://youtube.com", icon: FaYoutube },
    {
      id: 4,
      title: "Instagram",
      path: "https://instagram.com",
      icon: FaInstagram,
    },
    {
      id: 5,
      title: "Linkedin",
      path: "https://linkedin.com",
      icon: FaLinkedin,
    },
    {
      id: 6,
      title: "Pinterest",
      path: "https://pinterest.com",
      icon: FaPinterest,
    },
  ];

  // Payment icons
  const paymentIcons = [
    { id: 1, icon: FaCcAmex, name: "American Express" },
    { id: 2, icon: FaCcApplePay, name: "Apple Pay" },
    { id: 3, icon: FaCcDiscover, name: "Discover" },
    { id: 4, icon: SiMeta, name: "Meta Pay" },
    { id: 5, icon: FaCcMastercard, name: "Mastercard" },
    { id: 6, icon: FaCcVisa, name: "Visa" },
    { id: 7, icon: FaGooglePay, name: "Google Pay" },
  ];

  return (
    <footer className="bg-gray-100 pb-8 pt-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-800 flex items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  src={"/banner-min.png"}
                  alt="banner"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Sailing</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Do not just get there, get there in style.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.path}
                    className="text-[#4F5E71] hover:text-[#B1905E] transition-colors duration-200 text-sm"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              {information.map((info) => (
                <li key={info.id}>
                  <Link
                    href={info.path}
                    className="text-[#4F5E71] hover:text-[#B1905E] transition-colors duration-200 text-sm"
                  >
                    {info.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us and Payment Section */}

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <ul className="space-y-2">
              {socialMedia.map((social) => {
                const IconComponent = social.icon;
                return (
                  <li key={social.id}>
                    <Link
                      href={social.path}
                      className="flex items-center space-x-2 text-[#4F5E71] hover:text-[#B1905E] transition-colors duration-200 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{social.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Payment Channels */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Channels
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {paymentIcons.map((payment) => {
                const IconComponent = payment.icon;
                return (
                  <div
                    key={payment.id}
                    className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow duration-200"
                    title={payment.name}
                  >
                    <IconComponent className="w-6 h-6 text-[#B1905E]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="my-5"
          style={{ borderTop: "0.5px solid #9CA3AF" }}
        ></div>
        <div className="flex justify-between items-center">
          <p>Copyright © 2025 Sailing WP. All Rights Reserved</p>
          <div className="flex items-center gap-2">
            <Image src={"/globe.svg"} alt="globe" width={20} height={20} />
            <p>English | USD</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
