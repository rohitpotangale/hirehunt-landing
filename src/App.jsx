import { useEffect } from "react";

function App() {

  useEffect(() => {
    // Google Analytics
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 py-10">

      {/* HERO */}
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          HireHunt.in
        </h1>
        <p className="text-xl mt-4 text-gray-300">
          Premium Domain For Sale 🚀
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/919975580530"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-lg font-semibold"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>

      {/* WHY THIS DOMAIN */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">
          Why HireHunt.in?
        </h2>

        <ul className="mt-6 space-y-4 text-gray-300">
          <li>✅ Perfect for Job Portal / Hiring Platform</li>
          <li>✅ Short, Brandable & Easy to Remember</li>
          <li>✅ Great for Startups, HR Tools & Recruitment Agencies</li>
          <li>✅ SEO Friendly Keywords (Hire + Hunt)</li>
          <li>✅ Ideal for Indian Market (.in domain)</li>
        </ul>
      </div>

      {/* USE CASES */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">
          Possible Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            Job Portal Website
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            Freelance Hiring Platform
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            HR SaaS Product
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            Recruitment Agency Brand
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold">
          Make an Offer Today 💰
        </h2>
        <p className="text-gray-400 mt-2">
          Serious buyers only. Limited availability.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:your@email.com"
            className="bg-blue-500 px-6 py-3 rounded-xl"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/919975580530"
            className="bg-green-500 px-6 py-3 rounded-xl"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        © 2026 HireHunt.in | Domain For Sale
      </div>

    </div>
  );
}

export default App;