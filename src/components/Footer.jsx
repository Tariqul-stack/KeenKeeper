import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>

        {/* Description */}
        <p className="text-gray-200 mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
              <FaInstagram />
            </button>

            <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </button>

            <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
              <FaXTwitter />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Terms of Service</p>
            <p className="hover:underline cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
