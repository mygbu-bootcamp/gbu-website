import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function ContactUsCard() {
  return (
    <section className="py-12 mx-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[22rem]">
        {/* Left: Contact Card */}
        <div className="bg-white rounded-none md:rounded-r-2xl shadow-lg p-6 border border-gray-200">
          <div className="space-y-4 text-sm text-gray-700">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pink-500 mt-1" />
              <div>
                GBU Campus,
                <br />
                Greater Noida - 201312,
                <br />
                UP, India
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <a href="tel:01202346170" className="hover:underline">
                0120-2346170 / 4275
              </a>
            </div>

            {/* Emails */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:incubator@gbu.ac.in"
                  className="hover:underline"
                >
                  incubator@gbu.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:gburif@gbu.ac.in" className="hover:underline">
                  gburif@gbu.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/company/gbu-incubation-centre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
            </a>
            <a
              href="https://x.com/GBU_Incubation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:scale-110 transition"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
            </a>
            <a
              href="https://www.facebook.com/people/GBU-Incubation-Centre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/gbu_incubation_centre/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
            </a>
            <a
              href="https://www.youtube.com/@GBUIncubationCentre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:scale-110 transition"
            >
              <Youtube className="w-5 h-5 text-red-500" />
            </a>
          </div>

          {/* Get in Touch Button */}
          <div className="flex mt-6">
            <a
              href="mailto:incubator@gbu.ac.in"
              aria-label="Email us"
              className="inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Map */}
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7128.415848084939!2d77.51964081404842!3d28.417677761507015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0f9524f6bbb%3A0xf4defe71d66269b3!2sSchool%20of%20Management!5e0!3m2!1sen!2sin!4v1751363700590!5m2!1sen!2sin"
            width="600"
            height="450"
            
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
