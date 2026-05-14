import React, { useState } from "react";
import logo from "/public/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
  FaChevronUp,
  FaLocationArrow,
} from "react-icons/fa";

export default function Home() {
  const [openBranch, setOpenBranch] = useState(null);

  // =========================
  // 🏢 Branches Data
  // =========================
  const branches = [
    {
      id: 1,
      name: "Puff Stuff - Nasr City",
      links: {
        facebook: "https://www.facebook.com/PuffStuffNasr",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201070908692",
        location:" https://maps.app.goo.gl/rb5pjAi3XKYCriJx9"
      },
    },

    {
      id: 2,
      name: "Puff Stuff - El Rehab",
     links: {
        facebook: "https://www.facebook.com/PuffStuffRehab",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201022294578",
        location:" https://maps.app.goo.gl/yS1eMWJEXSGb2DCh9?g_st=aw"
      },
    },

    {
      id: 3,
      name: "Andrea Smoking - El Mohandseen",
       links: {
        facebook: "https://www.facebook.com/andreasmokinghouse",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201022298960",
        location:" https://maps.app.goo.gl/KDtNHu8wj8LqBr1x6"
      },
    },
      {
      id: 4,
      name: "Puff Mart - Dokki",
       links: {
        facebook: "https://www.facebook.com/PuffMartDokki",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201012915524",
        location:" https://maps.app.goo.gl/DjkicheFPC6pfzWZ6?g_st=aw"
      },
    },
      {
      id: 5,
      name: "Every Cloud Vape - Lebanon Square",
       links: {
        facebook: "https://www.facebook.com/profile.php?id=100087559839001",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201022294138",
        location:"https://maps.app.goo.gl/4VNeEerpeCq3kohv6"
      },
    },
      {
      id: 6,
      name: "Hellwan Vape Store - Hellwan",
       links: {
        facebook: "https://www.facebook.com/HellwanVapeStore",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201001831117",
        location:"https://maps.app.goo.gl/1pb79Z8N84YhjGhq6"
      },
    },
      {
      id: 7,
      name: "Mega Vape Store - 15May",
       links: {
        facebook: "https://www.facebook.com/Megaavapestore",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201000132334",
        location:"https://maps.app.goo.gl/JA3oxZm71hLJw5tp7"
      },
    },
      {
      id: 8,
      name: "Suez Vape - El Salam Suez ",
       links: {
        facebook: "https://www.facebook.com/SuezvapeSalam",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201022298609",
        location:" https://maps.app.goo.gl/tSXttkYxEhsco5aU8?g_st=aw"
      },
    },
      {
      id: 9,
      name: "Puff Mart - El Mallaha Suez",
       links: {
        facebook: "https://www.facebook.com/PuffMartMallaha",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201122607650",
        location:"https://maps.app.goo.gl/bbXdejJdUpMohRgE8?g_st=aw"
      },
    },
      {
      id: 10,
      name: "Puff Mart - El Shohadaa Suez",
       links: {
        facebook: "https://www.facebook.com/PuffMartShohadaa",
         instagram: "https://www.instagram.com/puffstuffnasrcity/",
        phone: "tel:+201030990029",
        location:"https://maps.app.goo.gl/UtumUPJxSB8sRN5P9"
      },
    },
    //   {
    //   id: 11,
    //   name: "Mega Vape Store - 15May",
    //    links: {
    //     facebook: "https://www.facebook.com/Megaavapestore",
    //      instagram: "https://www.instagram.com/puffstuffnasrcity/",
    //     phone: "tel:+201000132334",
    //     location:"https://maps.app.goo.gl/JA3oxZm71hLJw5tp7"
    //   },
    // },
    

    // كمل لحد 11 فرع
  ];

  const toggleBranch = (id) => {
    setOpenBranch(openBranch === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gradient-to-r from-[#4E0000] via-[] to-black text-white">
      
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-52 mb-4"
      />

      <h1 className="text-3xl font-bold mb-8">
        Our Branches
      </h1>

      {/* Branches */}
      <div className="w-full max-w-md flex flex-col gap-4">

        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#b89f4f]/30"
          >

            {/* Branch Header */}
            <button
              onClick={() => toggleBranch(branch.id)}
              className="w-full flex items-center justify-between px-5 py-4 font-bold text-lg hover:bg-[#2a2a2a] transition"
            >
              {branch.name}

              {openBranch === branch.id ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {/* Dropdown Links */}
            {openBranch === branch.id && (
              <div className="p-4 flex flex-col gap-3 bg-black/40">


                <a
                  href={branch.links.facebook}
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-blue-600 py-3 rounded-lg hover:scale-105 transition"
                >
                  <FaFacebookF size={20} />
                  Facebook
                </a>

                <a 
           href={branch.links.instagram}
          target="_blank" 
          className="flex items-center font-semibold hover:font-bold justify-center gap-3 bg-linear-to-r from-pink-600 to-yellow-500 py-3 rounded-lg hover:scale-105 transition"
        >
          <FaInstagram size={20} />
          Instagram
        </a>

   <a
                  href={branch.links.phone}
                  className="flex items-center justify-center gap-3 bg-[#063f78] py-3 rounded-lg hover:scale-105 transition"
                >
                  <FaPhoneAlt size={20} />
                  Call Us
                </a>
                
                <a
                  href={branch.links.location}
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 via-emerald-700 to-blue-800 py-3 rounded-lg hover:scale-105 transition"
                >
                  <FaLocationArrow size={20} />
                  location
                </a>

           

             

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}