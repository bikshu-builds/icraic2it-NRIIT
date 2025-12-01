export default function AwardsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* PAGE TITLE */}
      <div className="text-center mb-12">
        <span
          className="px-6 py-2 rounded-full text-white text-xl font-semibold shadow-lg"
          style={{ backgroundColor: "#EB1165" }}
        >
          ICRAIC2IT – Conference Awards
        </span>
      </div>

      {/* INTRO TEXT */}
      <p className="text-gray-700 text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-14">
        The awards are presented to recognize excellence in presentations,
        research quality, clarity, and contribution to the conference theme.
        These awards encourage impactful research, motivate innovation, and
        celebrate academic excellence.
      </p>

      {/* MODERN AWARD SECTION */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* BEST PRESENTATION */}
        <div className="relative bg-white rounded-2xl shadow-xl p-7 transition transform hover:scale-[1.04] hover:shadow-2xl">
          {/* Ribbon */}
          <div
            className="absolute -top-3 left-6 px-4 py-1 text-white text-sm font-bold rounded-full shadow-md"
            style={{ backgroundColor: "#EB1165" }}
          >
            Best Presentation
          </div>

          <div className="text-center mt-6">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#EB1165" }}>
              Best Presentation Awards
            </h3>
            <p className="text-gray-600 text-1xl leading-relaxed">
              Presented to individuals who demonstrated the highest level of clarity, professionalism, and impact during their conference presentations. The Conference Chair selects the 1st and 2nd award recipients based on evaluation committee scoring, content quality, and overall delivery.
            </p>
          </div>
        </div>

        {/* SESSION'S BEST PAPER */}


        {/* BEST POSTER */}
        <div className="relative bg-white rounded-2xl shadow-xl p-7 transition transform hover:scale-[1.04] hover:shadow-2xl">
          {/* Ribbon */}
          <div
            className="absolute -top-3 left-6 px-4 py-1 text-white text-sm font-bold rounded-full shadow-md"
            style={{ backgroundColor: "#EB1165" }}
          >
            Poster Award
          </div>

          <div className="text-center mt-6">
            <div className="text-5xl mb-4">🖼️</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#EB1165" }}>
              Best Poster Award
            </h3>
            <p className="text-gray-600 text-1xl leading-relaxed">
              Awarded to the most creative, informative, and visually clear
              poster aligned with the conference theme. Winners receive
              appreciation certificates.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT BOX */}
    </div>
  );
}
