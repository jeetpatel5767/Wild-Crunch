import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import products from "@/data/product";
import Special from "./Special.tsx";
import Review from "./Review.tsx";
import Others from "./Others.tsx";
import Footer from "../Footer.tsx";
import Header from "@/components/Header";

const InProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product by ID
  const selectedProduct = products.find((product) => product.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProduct]);

  const handleClose = () => {
    navigate("/products");
  };

  // If product not found, redirect to products page
  if (!selectedProduct) {
    navigate("/products");
    return null;
  }

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <Header />

      {/* Background with grain + color fade */}
      <div
        className="w-full"
        style={{
          backgroundColor: selectedProduct.bgColor,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* Back button */}
        <button
          onClick={handleClose}
          className="absolute top-24 left-4 bg-white/20 p-2 rounded-full hidden md:block"
        >
          <ArrowLeft />
        </button>

        {/* Product content */}
        <div className="w-full px-4 pt-32 pb-16">
          <div className="w-full max-w-[1300px] mx-auto">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              {/* Product Title */}
              <motion.div
                className="text-left mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="font-suez text-sm mb-1 text-white">
                  DISCOVER OUR MAKHANA
                </h3>
                <p className="font-suez text-4xl text-black mb-2">
                  {selectedProduct.name}
                </p>
                <div className="flex items-center gap-4 text-white">
                  <p className="font-suez text-base">
                    {selectedProduct.weight}
                  </p>
                  <p className="font-suez text-lg">{selectedProduct.price}</p>
                </div>
              </motion.div>

              {/* Product Image and Radio Buttons Row */}
              <div className="flex gap-6 mb-8">
                {/* Product Image */}
                <motion.div
                  className="flex-shrink-0 w-[250px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="rounded-[40px] border-dashed border-2 border-white p-4">
                    <div className="rounded-[40px] border border-white flex justify-center items-center">
                      <motion.img
                        key={`modal-image-${selectedProduct.id}`}
                        layoutId={`product-image-${selectedProduct.id}`}
                        src={selectedProduct.imageSrc}
                        alt={selectedProduct.name}
                        className="w-[300px] h-[250px] sm:w-[200px] sm:h-[230px] md:w-[220px] md:h-[250px] lg:w-[240px] lg:h-[270px]"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Pack Selection Radio Buttons and Action Buttons */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="space-y-2 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="pack"
                          value="2"
                          className="appearance-none w-4 h-4 rounded-full border-2 border-white cursor-pointer checked:bg-black"
                        />
                      </div>
                      <span className="font-jost text-white text-xs sm:text-sm">
                        Pack of 3
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="pack"
                          value="4"
                          className="appearance-none w-4 h-4 rounded-full border-2 border-white cursor-pointer checked:bg-black"
                        />
                      </div>
                      <span className="font-jost text-white text-xs sm:text-sm">
                        Pack of 6
                      </span>
                    </label>

                    
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-white rounded-full px-2 sm:px-3 py-1 bg-transparent">
                        <button className="px-1 text-white font-suez text-xs sm:text-sm">
                          -
                        </button>
                        <span className="px-2 text-white font-suez text-xs sm:text-sm">
                          1
                        </span>
                        <button className="px-1 text-white font-suez text-xs sm:text-sm">
                          +
                        </button>
                      </div>
                      <button className="border border-white rounded-full p-1 bg-transparent">
                        <Heart size={14} className="text-white sm:w-4 sm:h-4" />
                      </button>
                    </div>
                    <button className="w-full bg-[#F1B213] text-white py-2 rounded-full font-jost font-semibold text-xs sm:text-sm md:text-base">
                      ADD TO CART
                    </button>
                    <p className="text-white text-[10px] sm:text-xs md:text-sm text-center">
                      3000+ Happy Customers
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Features */}
              <motion.div
                className="flex flex-col gap-3 mb-8 mx-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                {/* Top border */}
                <div className="border-t border-dashed border-white"></div>

                {/* Main content area */}
                <div className="flex items-center justify-center text-white font-suez text-xs sm:text-sm gap-8">
                  {/* Left block */}
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span>Made with Multigrams</span>
                    <span className="border-t border-dashed border-white w-20 sm:w-28"></span>
                    <span>Fried Not Baked</span>
                  </div>

                  {/* Vertical divider between both blocks */}
                  <div className="border-l border-dashed border-white h-14"></div>

                  {/* Right block */}
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span>High Protein</span>
                    <span className="border-t border-dashed border-white w-20 sm:w-28"></span>
                    <span>Low in Cholesterol</span>
                  </div>
                </div>

                {/* Bottom border */}
                <div className="border-t border-dashed border-white"></div>
              </motion.div>

              {/* Ingredients */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <h3 className="font-suez text-lg mb-3 text-black">
                  INGREDIENTS
                </h3>
                <p className="font-suez text-sm text-white leading-relaxed">
                  Makhana (Fox Nuts), Rice Bran Oil, Habanero Chili Powder, Red
                  Chili Flakes,
                  <br />
                  Rock Salt, Black Pepper, Natural Spices
                </p>
              </motion.div>

              {/* Description */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <h3 className="font-suez text-lg mb-3 text-black">
                  Taste the Lightness in Every Bite of Makhana.
                </h3>
                <p className="font-jost text-sm text-white leading-relaxed">
                  Craving something light yet flavorful? No worries. Just grab a
                  handful of our perfectly roasted makhana, seasoned to hit
                  every taste bud with the right crunch and spice. Pure,
                  wholesome, and guilt-free. Damn tasty. It's the little joys of
                  snacking, made better…
                </p>
              </motion.div>
            </div>
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col lg:flex-row gap-8 h-[600px]">
              {/* Left Column */}
              <motion.div
                className="flex-1 flex flex-col justify-between text-white min-w-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div>
                  <motion.h2
                    className="font-suez text-xl mb-4 text-black break-words"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    Taste the Lightness in Every Bite of Makhana.
                  </motion.h2>
                  <motion.p
                    className="font-jost text-base text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    Craving something light yet flavorful? No worries. Just grab
                    a handful of our perfectly roasted makhana, seasoned to hit
                    every taste bud with the right crunch and spice. Pure,
                    wholesome, and guilt-free. Damn tasty. It's the little joys
                    of snacking, made better…
                  </motion.p>
                </div>

                {/* Features Section - Moved from Right Column */}
                <motion.div
                  className="mt-8 flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                >
                  <div className="border-t border-dashed border-white"></div>
                  <div className="flex items-center justify-start text-white font-suez gap-4 pl-4 flex-wrap">
                    <span>Made with Multigrams</span>
                    <span className="border-l border-dashed border-white h-8 hidden sm:block"></span>
                    <span>Fried Not Baked</span>
                  </div>
                  <div className="border-t border-dashed border-white"></div>
                  <div className="flex items-center justify-start text-white font-suez gap-4 pl-4 flex-wrap">
                    <span className="mr-[75px]">High Protein</span>
                    <span className="border-l border-dashed border-white h-8 hidden sm:block"></span>
                    <span>Low in Cholesterol</span>
                  </div>
                  <div className="border-t border-dashed border-white"></div>
                </motion.div>

                <motion.div
                  className="text-right mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <h3 className="font-suez text-xl mb-2 text-white">
                    INGREDIENTS
                  </h3>
                  <p className="font-suez text-base text-black break-words">
                    Makhana (Fox Nuts), Rice Bran Oil, Habanero Chili Powder,
                    Red Chili Flakes, Rock Salt, Black Pepper, Natural Spices
                  </p>
                </motion.div>
              </motion.div>
              {/* Middle Column (Product Image) */}
              <div className="flex-1 flex justify-center items-center relative min-w-0">
                <motion.div
                  key={`modal-image-container-${selectedProduct.id}`}
                  layoutId={`product-image-container-${selectedProduct.id}`}
                  className="rounded-[80px] border-dashed border-2 border-white p-6 h-[500px]"
                >
                  <div className="rounded-[80px] border border-white flex justify-center items-center h-[450px]">
                    <motion.img
                      key={`modal-image-${selectedProduct.id}`}
                      layoutId={`product-image-${selectedProduct.id}`}
                      src={selectedProduct.imageSrc}
                      alt={selectedProduct.name}
                      className="h-[400px]"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.6 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </div>
              {/* Right Column */}{" "}
              <motion.div
                className="flex-1 flex flex-col justify-between text-white min-w-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                {" "}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-12"
                >
                  {" "}
                  <h3 className="font-suez text-3xl mb-2 text-white break-words">
                    {" "}
                    Discover our Makhana{" "}
                  </h3>{" "}
                  <p className="font-suez text-3xl xl:text-7xl text-[#212121] break-words">
                    {" "}
                    {selectedProduct.name}{" "}
                  </p>{" "}
                  <div className="flex items-center gap-4 text-white flex-wrap">
                    {" "}
                    <p className="font-suez text-lg">
                      {" "}
                      {selectedProduct.weight}{" "}
                    </p>{" "}
                    <p className="font-suez text-xl">
                      {" "}
                      {selectedProduct.price}{" "}
                    </p>{" "}
                  </div>{" "}
                </motion.div>{" "}
                {/* Pack Selection Radio Buttons */}{" "}
                <motion.div
                  className=" flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  {" "}
                  <div className="flex flex-col ">
                    {" "}
                    <div className="flex gap-3">
                      {" "}
                      <label className="flex items-center gap-2 cursor-pointer">
                        {" "}
                        <div className="relative">
                          {" "}
                          <input
                            type="radio"
                            name="pack"
                            value="3"
                            className="appearance-none w-5 h-5 rounded-full border-2 border-white cursor-pointer checked:bg-black"
                          />{" "}
                        </div>{" "}
                        <span className="font-jost text-white">Pack of 2</span>{" "}
                      </label>{" "}
                      <label className="flex items-center gap-2 cursor-pointer">
                        {" "}
                        <div className="relative">
                          {" "}
                          <input
                            type="radio"
                            name="pack"
                            value="6"
                            className="appearance-none w-5 h-5 rounded-full border-2 border-white cursor-pointer checked:bg-black"
                          />{" "}
                        </div>{" "}
                        <span className="font-jost text-white">Pack of 4</span>{" "}
                      </label>{" "}
                    </div>{" "}
                  </div>{" "}
                </motion.div>{" "}
                <motion.div
                  className="flex items-center gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {" "}
                  <div className="flex items-center border border-white rounded-full px-6 py-3 bg-transparent">
                    {" "}
                    <button className="px-3 text-white font-suez">
                      {" "}
                      -{" "}
                    </button>{" "}
                    <span className="px-4 text-white font-suez"> 1 </span>{" "}
                    <button className="px-2 text-white font-suez"> + </button>{" "}
                  </div>{" "}
                  <button className="border border-white rounded-full p-3 bg-transparent">
                    {" "}
                    <Heart size={20} className="text-white" />{" "}
                  </button>{" "}
                  <button className="bg-[#F1B213] text-white px-6 py-3 rounded-full font-jost whitespace-nowrap">
                    {" "}
                    ADD TO CART{" "}
                  </button>{" "}
                </motion.div>{" "}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Imported sections - now outside the padding container */}
      <Special />
      <Review />
      <Others />
      <Footer />
    </div>
  );
};

export default InProduct;
