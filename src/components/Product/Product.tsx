import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import products from "@/data/product";
import { useWishlist } from "@/components/WishlistContext.tsx";

// Categories
const categories = [
  "All Products",
  "Makhana",
  "Protein Puffs",
  "Popcorn",
  "Combo",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const { wishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  // Filter products
const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "All Products"
      ? product.category !== "Combo" // ✅ exclude Combo from All Products
      : product.category === selectedCategory;

  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});

  const handleProductClick = (product: any) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-[#F8F7E5]">
      <div className="container mx-auto px-12 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-1/4 hidden md:block sticky top-20 h-fit">
          <h2 className="font-suez text-3xl text-[#212121] mb-6">SHOP ALL</h2>
          <hr className="border-t-2 border-[#212121] mb-8" />
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer font-suez text-lg ${
                  selectedCategory === cat ? "text-[#DD815C]" : "text-[#212121]"
                }`}
              >
                {cat}
                <hr className="border-b-2 border-dotted border-[#212121] w-1/2 mt-1" />
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          {/* Search bar */}
          <div className="sticky top-20 z-10 pb-16 sm:pb-10">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C06441]"
                size={20}
              />
              <input
                type="text"
                placeholder="SEARCH"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[#C06441] rounded-full bg-transparent placeholder-[#C06441] text-[#212121] focus:outline-none"
              />
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-20 sm:gap-x-12 sm:gap-y-24 mt-12">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                onClick={() => handleProductClick(product)}
                className="relative rounded-3xl p-6 shadow-md min-h-[280px] sm:min-h-[320px] overflow-visible block cursor-pointer"
                style={{ backgroundColor: product.bgColor }}
              >
                {/* Heart */}
                <button
                  className="absolute top-4 right-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  <Heart
                    size={20}
                    className={
                      wishlist.some((item) => item.id === product.id)
                        ? "fill-black"
                        : ""
                    }
                  />
                </button>

                {/* Product Image */}
<motion.div
  key={`product-image-container-${product.id}-${index}`}
  className={`absolute left-1/2 transform -translate-x-1/2 ${
    product.category === "Combo" ? "top-[-5px] sm:top-[-30px]" : "-top-16"
  }`}
>

<motion.img
  key={`product-image-${product.id}-${index}`}
  src={product.imageSrc}
  alt={product.name}
  className={`max-w-none h-auto mx-auto transform transition-transform duration-500 hover:-rotate-12 ${
    product.category === "Combo"
      ? "w-[200px] sm:w-[250px]" // ✅ bigger for combo
      : "w-[120px] sm:w-[150px]" // normal size
  }`}
/>

                </motion.div>

                {/* Details */}
                <div className="mt-2 flex flex-col justify-end text-left text-white h-full">
                  <h3 className="font-suez text-lg md:text-3xl mb-1">
                    {product.name}
                  </h3>
                  <p className="font-jost text-sm">{product.weight}</p>
                  <p className="font-suez text-lg">{product.price}</p>
                </div>

                {/* Cart */}
                <button
                  className="absolute -bottom-4 -right-4 bg-[#FCEB81] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ShoppingCart size={20} className="text-gray-800" />
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;