"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "254746562072"; // REPLACE with your actual number
  const message =
    "Hi Benson, I saw your portfolio and would like to discuss a project.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center gap-2 group"
      aria-label="Contact Benson on WhatsApp"
    >
      <FaWhatsapp
        size={24}
        className="group-hover:scale-110 transition-transform"
      />
      <span className="hidden md:inline font-medium text-sm">Chat Now</span>
    </a>
  );
}
