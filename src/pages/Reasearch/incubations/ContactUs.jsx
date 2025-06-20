 import React from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

export default function ContactUsStrip() {
  return (
    <div className="bg-white border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 gap-3">

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-blue-600" />
            0120-2346170 / 4275
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-blue-600" />
            incubator@gbu.ac.in
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-blue-600" />
            gburif@gbu.ac.in
          </span>
        </div>

        <div className="flex items-center gap-3 text-blue-600">
          <a href="https://www.linkedin.com/company/gbu-incubation-centre" aria-label="LinkedIn" className="hover:text-blue-800"><Linkedin size={18} /></a>
          <a href="https://x.com/GBU_Incubation" aria-label="Twitter" className="hover:text-sky-500"><Twitter size={18} /></a>
          <a href="https://www.facebook.com/people/GBU-Incubation-Centre" aria-label="Facebook" className="hover:text-blue-700"><Facebook size={18} /></a>
          <a href="https://www.instagram.com/gbu_incubation_centre/" aria-label="Instagram" className="hover:text-pink-500"><Instagram size={18} /></a>
            <a href="https://www.youtube.com/@GBUIncubationCentre" aria-label="Youtube" className="hover:text-red-500"><Youtube size={18} /></a>
        </div>

      </div>
    </div>
  );
}
