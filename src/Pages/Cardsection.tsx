// src/Pages/Cardsection.tsx
import React from "react";
import studentImg from "../assets/student.png";
import mentorImg from "../assets/mentor.png";
import studentL from "../assets/studentl.png";
import mentorL from "../assets/mentorl.png";
import adminL from "../assets/adminl.png";

const CardsSection: React.FC = () => {
  // Register cards
  const cards = [
    { title: "As Student", color: "text-blue-600", img: studentImg },
    { title: "As  Mentor", color: "text-blue-600", img: mentorImg },
  ];

  // Login cards
  const loginCards = [
    { title: "As Student", color: "text-blue-600", img: studentL },
    { title: "As Mentor", color: "text-blue-600", img: mentorL },
    { title: "As Admin", color: "text-blue-600", img: adminL },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Register Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#154D71]">
          Register
        </h2>

        {/* Register Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 justify-items-center mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full max-w-xs hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-24 h-24 mb-4 rounded-md overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className={`text-xl font-semibold ${card.color} mb-4`}>
                {card.title}
              </h3>

              {/* Arrow with background div */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9AF] rounded-full hover:bg-[#FFE066] transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#154D71]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Login Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#154D71]">
          Login
        </h2>

        {/* Login Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
          {loginCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full max-w-xs hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-24 h-24 mb-4 rounded-md overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className={`text-xl font-semibold ${card.color} mb-4`}>
                {card.title}
              </h3>

              {/* Arrow with background div */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9AF] rounded-full hover:bg-[#FFE066] transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#154D71]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
