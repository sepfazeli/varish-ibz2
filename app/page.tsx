"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [timeUntilKickoff, setTimeUntilKickoff] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const kickoffDate = new Date("2026-06-11T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = kickoffDate - now;

      if (distance > 0) {
        setTimeUntilKickoff({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-100 to-amber-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(184,134,11,0.05),transparent_50%)]"></div>
        
        <header className="relative border-b-4 border-amber-900 bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-50 rounded-full flex items-center justify-center border-4 border-yellow-600 shadow-inner">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-900 rounded-full"></div>
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold text-amber-50 tracking-wider font-serif">
                  VARISH
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8 text-amber-50 font-serif">
                <a href="#" className="hover:text-yellow-300 transition-colors duration-300 border-b-2 border-yellow-600 pb-1">
                  HOME
                </a>
                <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
                  FIXTURES
                </a>
                <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
                  STANDINGS
                </a>
                <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
                  TEAMS
                </a>
              </nav>
            </div>
          </div>
        </header>

        <section className="relative py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-6 px-6 py-2 bg-amber-900 text-amber-50 font-serif tracking-widest border-4 border-yellow-700 shadow-lg">
                WORLD CUP 2026
              </div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-amber-900 mb-6 font-serif tracking-tight leading-none">
                THE GREATEST
                <br />
                <span className="text-yellow-800">TOURNAMENT</span>
                <br />
                ON EARTH
              </h2>
              <p className="text-xl sm:text-2xl text-stone-700 max-w-3xl mx-auto font-serif italic">
                Follow every goal, every moment, every triumph across three nations
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-4xl mx-auto">
              {[
                { label: "DAYS", value: timeUntilKickoff.days },
                { label: "HOURS", value: timeUntilKickoff.hours },
                { label: "MINUTES", value: timeUntilKickoff.minutes },
                { label: "SECONDS", value: timeUntilKickoff.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-stone-100 border-4 border-amber-900 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 font-serif mb-2">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm text-stone-600 font-serif tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {[
                {
                  title: "CANADA",
                  city: "Toronto · Vancouver",
                  matches: "13 MATCHES",
                },
                {
                  title: "MEXICO",
                  city: "Mexico City · Guadalajara",
                  matches: "13 MATCHES",
                },
                {
                  title: "UNITED STATES",
                  city: "New York · Los Angeles",
                  matches: "78 MATCHES",
                },
              ].map((host, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-amber-50 to-stone-50 border-4 border-yellow-700 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-amber-900 group"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-amber-900 rounded-full flex items-center justify-center border-4 border-yellow-600 group-hover:scale-110 transition-transform duration-500">
                      <div className="w-10 h-10 border-4 border-amber-50 rounded-full"></div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-3 font-serif tracking-wide">
                      {host.title}
                    </h3>
                    <p className="text-stone-600 mb-3 font-serif italic">{host.city}</p>
                    <div className="inline-block px-4 py-1 bg-yellow-700 text-amber-50 text-sm font-serif tracking-widest">
                      {host.matches}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 border-4 border-yellow-700 p-8 sm:p-12 shadow-2xl">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl sm:text-5xl font-bold text-amber-50 mb-6 font-serif">
                  LIVE SCORES COMING SOON
                </h3>
                <p className="text-lg sm:text-xl text-amber-100 mb-8 font-serif leading-relaxed">
                  Experience every heartbeat of the tournament. Real-time updates, comprehensive statistics, and historic moments as they unfold across the pitch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-amber-50 text-amber-900 font-bold text-lg font-serif tracking-wide border-4 border-yellow-600 hover:bg-yellow-100 transition-all duration-300 hover:scale-105 shadow-lg">
                    SUBSCRIBE FOR ALERTS
                  </button>
                  <button className="px-8 py-4 bg-transparent text-amber-50 font-bold text-lg font-serif tracking-wide border-4 border-amber-50 hover:bg-amber-50 hover:text-amber-900 transition-all duration-300 hover:scale-105 shadow-lg">
                    VIEW SCHEDULE
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
              {[
                { num: "48", label: "NATIONS" },
                { num: "104", label: "MATCHES" },
                { num: "16", label: "STADIUMS" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-6xl sm:text-7xl font-bold text-amber-900 mb-2 font-serif group-hover:text-yellow-800 transition-colors duration-300">
                    {stat.num}
                  </div>
                  <div className="text-lg text-stone-600 font-serif tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative border-t-4 border-amber-900 bg-gradient-to-r from-stone-800 via-amber-900 to-stone-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-amber-100 font-serif tracking-wide">
              © 2026 VARISH · THE DEFINITIVE WORLD CUP EXPERIENCE
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}