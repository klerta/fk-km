import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0170B7] text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        {/* Left side: Name and description */}
        <div>
          <div className="text-start space-y-4 lg:order-2">
            <h4 className="font-extrabold">Reach us</h4>
            <p className="font-thin text-sm">(+216) 93 215 031</p>
            <p className="font-thin text-sm">wiemmimouni74@gmail.com</p>
            <p className="font-thin text-sm">
              Avenida 5 de Outubro, n.o 148 - 3.o G
            </p>
          </div>
        </div>

        <div className="text-center lg:order-2"></div>

        <div className="text-center lg:text-start lg:order-3">
          <h3 className="font-bold">Social</h3>
          <div className="flex justify-center lg:justify-start space-x-4 mt-8">
            <a
              href="https://github.com/WiemMimouni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/WiemMimouni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/wiem-mimouni-109ba4241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/WiemMimouni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-xs text-center mt-8 pt-4 bg-blend-soft-light">
        Innothink IT
      </div>
    </footer>
  );
}
