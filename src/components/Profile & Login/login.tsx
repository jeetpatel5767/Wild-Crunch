import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import { motion } from "framer-motion";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import Logo from "@/assets/LogoWC.png";

const LoginPage = () => {
  const navigate = useNavigate(); // <-- initialize navigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "1234" && password === "1234") {
      // navigate to /profile
      navigate("/profile");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F8F7E5] flex flex-col items-center justify-center overflow-hidden">

      {/* Background floating images */}
     <div className="absolute inset-0 pointer-events-none z-0">
  {/* Top-Left Image */}
  <motion.img
    src={img1}
    alt="bg-1"
    className="absolute opacity-40"
    style={{ top: "-60%", left: "-30%", width: "1100px", height: "1100px" }}
    initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
    animate={{ scale: 0.9, rotate: 125, opacity: 0.9 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  />

  {/* Top-Right Image */}
  <motion.img
    src={img2}
    alt="bg-2"
    className="absolute opacity-40"
    style={{ top: "-85%", right: "-40%", width: "1500px", height: "1500px" }}
    initial={{ scale: 0.6, rotate: 0, opacity: 0 }}
    animate={{ scale: 0.7, rotate: -140, opacity: 0.9 }}
    transition={{ delay: 0.4, duration: 0.6 }}
  />

  {/* Bottom-Right Image */}
  <motion.img
    src={img3}
    alt="bg-3"
    className="absolute opacity-70"
    style={{ bottom: "-55%", left: "-20%", width: "900px", height: "900px" }}
    initial={{ scale: 1, rotate: 0, opacity: 0 }}
    animate={{ scale: 1.2, rotate: 45, opacity: 0.9 }}
    transition={{ delay: 0.5, duration: 0.6 }}
  />

  {/* Bottom-Left Image */}
  <motion.img
    src={img4}
    alt="bg-4"
    className="absolute opacity-50"
    style={{ bottom: "-50%", right: "-20%", width: "900px", height: "900px" }}
    initial={{ scale: 0.7, rotate: 0, opacity: 0 }}
    animate={{ scale: 0.9, rotate: -50, opacity: 0.9 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  />
</div>

      {/* Logo & Welcome */}
      <div className="flex flex-col items-center mb-6 z-10">
        <img src={Logo} alt="Logo" className="w-50 h-40 mb-4" />
        <h2 className="text-2xl sm:text-6xl font-suez text-center">
          Welcome to Crunch
        </h2>
      </div>

      {/* Login Card */}
      <motion.div
        className="relative p-10 rounded-3xl shadow-2xl border-2 border-dashed border-black w-11/12 sm:w-[400px] z-10 bg-white"
        initial={{ rotateY: -15, rotateX: 10 }}
        animate={{ rotateY: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 rounded-2xl shadow-inner border-2 border-black">
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg bg-transparent text-[#212121] font-jost text-lg focus:outline-none focus:ring-2 focus:ring-[#C06441]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-8 px-4 py-3 border border-gray-300 rounded-lg bg-transparent text-[#212121] font-jost text-lg focus:outline-none focus:ring-2 focus:ring-[#C06441]"
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 bg-[#F1B213] text-white rounded-lg font-jost uppercase tracking-wide hover:bg-[#C06441] transition-colors text-lg"
          >
            Login
          </button>

          <p className="text-base text-center mt-6 font-jost">
            New here?{" "}
            <span className="text-[#466DDF] cursor-pointer">Create Account</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
