export default function LocationPage() {
  const attractions = [
    "Akkanna Madanna Caves",
    "Amaravati Shrine",
    "Bhavani Island",
    "Gandhi Hill",
    "Gunadala Matha Shrine",
    "Hailand",
    "Hazratbal Mosque",
    "Hinkar Thirtha Jain Temple",
    "Kolleru Lake",
    "Kondapalli Fort",
    "Kuchipudi Kala Kshetram",
    "Mangalagiri Panakala Swami",
    "Manginapudi Beach",
    "Mogalarajapuram Caves",
    "Pavitra Sangamam",
    "Prakasam Barrage",
    "Rajiv Gandhi Park",
    "Scrap Sculpture Park",
    "Subramanya Swami Temple",
    "Undavalli Caves",
    "Uppalapadu Bird Sanctuary",
    "Bapu Museum",
  ];

  // Featured Places – you will add images later
  const featured = [
    {
      title: "Kanaka Durga Temple",
      img: "./durgamma.jpg", // replace later
      desc: "One of the most sacred temples located atop Indrakeeladri Hill overlooking the Krishna River.",
    },
    {
      title: "Ambedkar Statue",
      img: "./ambedkar1.jpg",
      desc: "A newly developed monumental statue representing equality and social justice.",
    },
    {
      title: "Rajiv Gandhi Park",
      img: "./rajiv.jpg",
      desc: "A popular urban park known for greenery, musical fountains and family-friendly spaces.",
    },
    {
      title: "Bhavani Island",
      img: "./island.jpg",
      desc: "A scenic river island known for boating, water sports and nature retreats.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* PAGE TITLE */}
      <h1
        className="text-4xl font-extrabold text-center mb-8"
        style={{ color: "#EB1165" }}
      >
        VIJAYAWADA
      </h1>

      {/* MODERN TWO-COLUMN CITY DESCRIPTION */}
      <div className="grid md:grid-cols-2 gap-10 text-gray-800 leading-relaxed text-[15px]">
        <div>
          <p>
            Vijayawada is one of the major cities of Andhra Pradesh, located on
            the banks of the River Krishna beside the Eastern Ghats
            (Indrakeeladri Hills). It is popularly known as the “Business
            Capital of Andhra Pradesh” and stands as the second largest city in
            the state.
          </p>

          <p className="mt-4">
            The city has been recognized as a “Global City of the Future” by
            McKinsey and is a major hub for trade, transport, agriculture, and
            tourism. With strong economic growth, it is one of the fastest
            developing cities in South India.
          </p>
          <p>
            Top attractions include the famous Kanaka Durga Temple, Undavalli
            Caves, the iconic Prakasam Barrage, and several ancient cultural and
            spiritual sites.
          </p>
          <br></br>

          <p>
            From peaceful islands like Bhavani Island to bustling commercial
            streets and vibrant food culture, the city offers a perfect blend of
            nature, devotion, and urban excitement. Its central location makes
            it a preferred starting point to explore the coastal belt and the
            Amaravati region.
          </p>
          <p className="mt-4">
            Vijayawada also boasts efficient air, rail, and road connectivity,
            making it one of India`s most accessible cities.
          </p>
        </div>

        <div className="mt-0">
          {/* SECTION TITLE */}
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "#EB1165" }}
          >
            HOW TO REACH
          </h2>

          {/* TOP TWO CARDS IN SAME DIV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AIR */}
            <div className="rounded-xl shadow-md border border-gray-200 bg-white p-5 hover:shadow-lg transition">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#EB1165" }}
              >
                ✈️ By Air
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Vijayawada International Airport (13.5 km) has flights to Delhi,
                Mumbai, Chennai, Bengaluru, Hyderabad, Tirupati, Vizag, etc.
              </p>
            </div>

            {/* RAIL */}
            <div className="rounded-xl shadow-md border border-gray-200 bg-white p-5 hover:shadow-lg transition">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#EB1165" }}
              >
                🚆 By Rail
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Vijayawada Junction is one of India’s largest junctions, located
                on Chennai–Howrah & Chennai–Delhi main routes.
              </p>
            </div>
          </div>

          {/* CENTERED BOTTOM CARD BUT STILL IN SAME DIV */}
          <div className="flex justify-center mt-6">
            {/* ROAD */}
            <div className="w-full md:w-1/2 rounded-xl shadow-md border border-gray-200 bg-white p-5 hover:shadow-lg transition">
              <h3
                className="text-xl font-bold mb-2 text-center"
                style={{ color: "#EB1165" }}
              >
                🚌 By Road
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Regular APSRTC & private buses connect Vijayawada to all major
                cities in South and North India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAJOR ATTRACTIONS GRID */}
      <h2
        className="text-2xl font-bold mt-12 mb-3"
        style={{ color: "#EB1165" }}
      >
        Major Attractions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-[13px]">
        {attractions.map((item, i) => (
          <div
            key={i}
            className="px-3 py-2 border rounded-md bg-gray-50 hover:bg-white hover:shadow-sm transition truncate"
            style={{ borderColor: "#EB1165" }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* FEATURED ATTRACTIONS SECTION */}
      <h2
        className="text-2xl font-bold mt-12 mb-4"
        style={{ color: "#EB1165" }}
      >
        Featured Attractions
      </h2>

      {/* 4 FEATURED PLACES IN ONE SINGLE ROW */}
      <div className="grid md:grid-cols-4 gap-4">
        {featured.map((place, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg bg-white transition"
          >
            {/* IMAGE (replace with your own) */}
            <div className="h-40 w-full bg-gray-200">
              {/* when you add image: <img src={place.img} className="w-full h-full object-cover" /> */}
              <img src={place.img} className="w-full h-full object-cover" />
            </div>

            {/* CONTENT */}
            <div className="p-3">
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: "#EB1165" }}
              >
                {place.title}
              </h3>

              <p className="text-[13px] text-gray-700 leading-tight">
                {place.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
