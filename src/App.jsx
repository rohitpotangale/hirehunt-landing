import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Cursor glow tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* 🌈 Moving Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 opacity-20 blur-3xl" />

      {/* 🖱️ Cursor Glow */}
      <div
        className="pointer-events-none fixed z-10 w-[300px] h-[300px] rounded-full bg-blue-500 opacity-20 blur-3xl"
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
        }}
      />

      {/* 🌟 Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center shadow-[0_0_80px_rgba(0,0,0,0.6)]"
        >

          {/* 🔥 HERO TEXT */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"
          >
            HireHunt.in
          </motion.h1>

          <p className="mt-4 text-gray-300 text-lg">
            Build the Next Big Hiring Platform 🚀
          </p>

          <p className="mt-2 text-green-400 font-medium">
            🚀 We can also build your job portal using this domain
          </p>

          {/* ⚡ Animated Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="mt-4 text-yellow-400"
          >
            ⚡ Only 1 buyer • Premium domain
          </motion.p>

          {/* 💎 FEATURES */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm md:text-base">
            {[
              "💼 Job Portal",
              "👨‍💻 Freelance Platform",
              "🏢 Recruitment Brand",
              "📊 HR SaaS",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10"
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* 💰 PRICE */}
          <div className="mt-10">
            <p className="text-gray-400 text-sm">Starting Price</p>
            <h2 className="text-4xl font-bold text-yellow-400">
              ₹49,999
            </h2>
            <p className="text-red-400 mt-2 text-sm">
              ⚡ Price increasing soon
            </p>
          </div>

          {/* 🚀 CTA */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919975580530?text=I%20want%20to%20buy%20HireHunt.in"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold text-lg transition"
            >
              💬 WhatsApp Now
            </a>

            <a
              href="https://wa.me/919975580530?text=I%20want%20to%20buy%20HireHunt.in%20for%2049999"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl font-semibold text-lg"
            >
              💰 Buy Now
            </a>
          </div>

          {/* 🔒 TRUST */}
          <p className="mt-6 text-gray-500 text-sm">
            🔒 Secure deal • Direct owner • Instant transfer
          </p>

        </motion.div>
      </div>

      {/* 🎨 Tailwind Custom Animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { transform: translateX(-50%) }
            50% { transform: translateX(50%) }
            100% { transform: translateX(-50%) }
          }
          .animate-gradient {
            width: 200%;
            height: 200%;
            animation: gradientMove 15s ease infinite;
          }
        `}
      </style>

    </div>
  );
}

export default App;