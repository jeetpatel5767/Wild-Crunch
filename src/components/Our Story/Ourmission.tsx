import React from "react";
import Img from "@/assets/OurMission.png"
const OurMission = () => {
  return (
    <div className="w-full bg-[#F8F7E5] py-16 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl text-center font-bold text-[#1a1a1a] mb-16 font-suez">
        Our Mission
      </h2>

      {/* Main container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left side - Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src= {Img} 
              alt="Wild Crunch snacks"
              className="w-full h-[910px] object-cover  shadow-lg"
            />
          </div>
        </div>

        {/* Right side - Mission cards */}
        <div className="lg:w-1/2 space-y-4">
          {/* Card 1: Promote Healthy Living */}
          <div className="bg-[#FFE0D3] p-8  shadow-sm">
            <h3 className="text-2xl font-bold text-[#2D1B13] mb-4 font-suez font-jost">
              Promote Healthy Living
            </h3>
            <p className="text-[#6B4E3D] text-base leading-relaxed">
              At WildCrunch, we believe snacking should make you feel good — not
              guilty. That's why we carefully craft every product with natural, clean
              ingredients that are light, wholesome, and nourishing. Our mission is to
              inspire healthier lifestyles by offering snacks that balance taste and wellness
              in every crunch.
            </p>
          </div>

          {/* Card 2: Encourage Better Choices */}
          <div className="bg-[#FFE0D3] p-8  shadow-sm">
            <h3 className="text-2xl font-bold text-[#2D1B13] mb-4 font-suez">
              Encourage Better Choices
            </h3>
            <p className="text-[#6B4E3D] text-base leading-relaxed font-jost">
              We want to change the way people think about snacking. Instead of heavy,
              oily, or processed options, we provide smarter alternatives that keep you
              energized throughout the day. From protein-packed puffs to low-calorie
              makhana, our snacks are designed to fuel your body and support better
              choices.
            </p>
          </div>

          {/* Card 3: Redefine Snacking */}
          <div className="bg-[#FFE0D3] p-8  shadow-sm">
            <h3 className="text-2xl font-bold text-[#2D1B13] mb-4 font-suez">
              Redefine Snacking
            </h3>
            <p className="text-[#6B4E3D] text-base leading-relaxed font-jost">
              Snacking isn't just about filling your stomach — it's about enjoyment. At
              WildCrunch, we're redefining the snacking experience by combining bold
              flavors with mindful recipes. Every bite is crafted to be fun, exciting, and
              satisfying, so you never have to compromise between taste and health.
            </p>
          </div>

          {/* Card 4: Support Sustainability */}
          <div className="bg-[#FFE0D3] p-8  shadow-sm">
            <h3 className="text-2xl font-bold text-[#2D1B13] mb-4 font-suez">
              Support Sustainability
            </h3>
            <p className="text-[#6B4E3D] text-base leading-relaxed font-jost">
              We care not just about people, but also about the planet. Our commitment
              to sustainability is reflected in the way we source our ingredients and
              design our packaging. By using eco-friendly practices and reducing waste,
              we aim to create snacks that are good for you and kind to the Earth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;