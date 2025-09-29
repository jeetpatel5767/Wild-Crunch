import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import products from "@/data/product";
import Review from "./Review.tsx";
import Others from "./Others.tsx";
import FooterForInProduct from "./FooterForInProduct.tsx";
import Header from "@/components/Header";

const InProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product by ID
  const selectedProduct = products.find((product) => product.id === id);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden"; // disable page scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }
    return () => {
      document.body.style.overflow = "auto";
    };
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
    <AnimatePresence mode="wait">
      <motion.div
        key={`modal-${selectedProduct.id}`}
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Header */}
        <Header />

        {/* Background with grain + color fade */}
        <motion.div
          className="absolute top-[90px] left-0 right-0 bottom-0 z-0"
          style={{
            backgroundColor: selectedProduct.bgColor,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={handleClose}
        />

        {/* Back button */}
<button
  onClick={handleClose}
  className="absolute top-24 left-4 bg-white/20 p-2 rounded-full z-[9999] hidden md:block"
>
  <ArrowLeft />
</button>


        {/* Modal content */}
        <div className="relative w-full h-full flex flex-col items-center justify-start px-4 pt-20 z-50 overflow-y-auto overflow-x-hidden hide-scrollbar mt-12 sm:mt-24">
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
                <p className="font-suez text-2xl text-black mb-2">
                  {selectedProduct.name}
                </p>
                <div className="flex items-center gap-4 text-white">
                  <p className="font-suez text-base">
                    {selectedProduct.weight}
                  </p>
                  <p className="font-suez text-lg">
                    {selectedProduct.price}
                  </p>
                </div>
              </motion.div>

              {/* Product Image and Features Row */}
<div className="flex gap-6 mb-8">
  {/* Product Image */}
  <motion.div
    className="flex-shrink-0"
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
          className="w-[160px] h-[180px] sm:w-[200px] sm:h-[230px] md:w-[220px] md:h-[250px] lg:w-[240px] lg:h-[270px]"
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  </motion.div>

  {/* Features and Action Buttons */}
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.5 }}
  >
    {/* Features */}
    <div className="space-y-3 mb-6">
      <div className="text-white font-suez text-xs sm:text-sm md:text-base py-2 border-b border-dashed border-white">
        <span>Made with Multigrams</span>
      </div>
      <div className="text-white font-suez text-xs sm:text-sm md:text-base py-2 border-b border-dashed border-white">
        <span>Fried Not Baked</span>
      </div>
      <div className="text-white font-suez text-xs sm:text-sm md:text-base py-2 border-b border-dashed border-white">
        <span>High Protein</span>
      </div>
      <div className="text-white font-suez text-xs sm:text-sm md:text-base py-2 border-b border-dashed border-white">
        <span>Low In Cholesterol</span>
      </div>
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
          <button className="px-1 text-white font-suez text-xs sm:text-sm">-</button>
          <span className="px-2 text-white font-suez text-xs sm:text-sm">1</span>
          <button className="px-1 text-white font-suez text-xs sm:text-sm">+</button>
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


              {/* Ingredients */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <h3 className="font-suez text-lg mb-3 text-white">
                  INGREDIENTS
                </h3>
                <p className="font-suez text-sm text-black leading-relaxed">
                  Makhana (Fox Nuts), Rice Bran Oil, Habanero Chili Powder, Red Chili Flakes,<br />
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
                  Craving something light yet flavorful? No worries. Just grab a handful of our perfectly roasted makhana, seasoned to hit every taste bud with the right crunch and spice. Pure, wholesome, and guilt-free. Damn tasty. It's the little joys of snacking, made better…
                </p>
              </motion.div>
            </div>


            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col lg:flex-row gap-8 overflow-hidden">
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
                    Craving something light yet flavorful? No worries.
                    Just grab a handful of our perfectly roasted makhana,
                    seasoned to hit every taste bud with the right crunch
                    and spice. Pure, wholesome, and guilt-free. Damn
                    tasty. It's the little joys of snacking, made better…
                  </motion.p>
                </div>
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
                    Makhana (Fox Nuts), Rice Bran Oil, Habanero Chili Powder, Red Chili Flakes, Rock Salt, Black Pepper, Natural Spices
                  </p>
                </motion.div>
              </motion.div>

              {/* Middle Column (Product Image) */}
              <div className="flex-1 flex justify-center items-center relative min-w-0">
                <motion.div
                  key={`modal-image-container-${selectedProduct.id}`}
                  layoutId={`product-image-container-${selectedProduct.id}`}
                  className="rounded-[80px] border-dashed border-2 border-white p-6"
                >
                  <div className="rounded-[80px] border border-white flex justify-center items-center">
<motion.img
  key={`modal-image-${selectedProduct.id}`}
  layoutId={`product-image-${selectedProduct.id}`}
  src={selectedProduct.imageSrc}
  alt={selectedProduct.name}
  className="h-[400px]"
  initial={{ scale: 1 }}
  animate={{ scale: 1.6 }} // zoomed in
  transition={{ duration: 0.3 }}
/>

                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <motion.div
                className="flex-1 flex flex-col justify-between text-white min-w-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h3 className="font-suez text-3xl mb-2 text-white break-words">
                    Discover our Makhana
                  </h3>
                  <p className="font-suez text-3xl xl:text-5xl text-[#212121] break-words">
                    {selectedProduct.name}
                  </p>
                  <div className="flex items-center gap-4 text-white flex-wrap">
                    <p className="font-suez text-lg">
                      {selectedProduct.weight}
                    </p>
                    <p className="font-suez text-xl">
                      {selectedProduct.price}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8 flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
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
                  className="flex items-center mt-8 gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center border border-white rounded-full px-6 py-3 bg-transparent">
                    <button className="px-3 text-white font-suez">
                      -
                    </button>
                    <span className="px-4 text-white font-suez">
                      1
                    </span>
                    <button className="px-2 text-white font-suez">
                      +
                    </button>
                  </div>
                  <button className="border border-white rounded-full p-3 bg-transparent">
                    <Heart size={20} className="text-white" />
                  </button>
                  <button className="bg-[#F1B213] text-white px-6 py-3 rounded-full font-jost whitespace-nowrap">
                    ADD TO CART
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <Review />
          <Others /> 
          <FooterForInProduct />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InProduct;