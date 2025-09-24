import React from "react";

// Import images
import Crunch1 from "@/assets/Crunch1.png";
import Crunch2 from "@/assets/Crunch2.png";
import Crunch3 from "@/assets/Crunch3.png";
import Crunch4 from "@/assets/Crunch4.png";

const Rightcrunch = () => {
  return (
    <div className="w-full bg-[#F8F7E5] py-20">
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center mb-12 px-6 lg:px-12">
        <h2 className="font-suez text-3xl sm:text-4xl lg:text-5xl text-foreground leading-snug mb-4">
          With the right crunch, flavor and lightness in every bite
        </h2>
        <p className="font-jost text-lg text-gray-600 mt-10">
          WildCrunch makes snacking simple, fun, and guilt-free. Every product is
          crafted to give you the taste you love and the lightness your body
          deserves. We’re here to bring you snacks that fit perfectly into your
          everyday moments — from work breaks to movie nights.
        </p>
      </div>

      {/* Products Section */}
      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-16 justify-items-center">
          {[Crunch1, Crunch2, Crunch3, Crunch4].map((img, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <img
                src={img}
                alt={`Crunch ${idx + 1}`}
                className="w-[100%] h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightcrunch;
