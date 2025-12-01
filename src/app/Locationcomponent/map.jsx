export default function MapPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* PAGE TITLE */}

      
      
      <h1
        className="text-4xl font-extrabold text-center mb-10"
        style={{ color: "#EB1165" }}
      >
        Contact Us
      </h1>

      {/* SIDE-BY-SIDE MAP + VENUE DETAILS */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE — MAP (NO API KEY) */}
        <div
          className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg border"
          style={{ borderColor: "#EB1165" }}
        >
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            src="https://maps.google.com/maps?q=16.663338876474548,80.7378364640956&z=17&output=embed"
          ></iframe>
        </div>

        {/* RIGHT SIDE — VENUE DETAILS */}
        <div className="flex flex-col justify-center">
          
          <h2 className="text-1xl  mb-3" style={{ color: "black" }}>
          Dr. K. V. Sambasiva Rao, Professor & Dean, CSE, NRIIT- kvsrao@nriit.edu.in
          </h2>
          <h2 className="text-1xl  mb-3" style={{ color: "black" }}>
            Dr. D. Suneetha, Professor & HOD, CSE, NRIIT- hod.csenriit@gmail.com
          </h2>

          <h2 className="text-2xl font-bold mb-3" style={{ color: "#EB1165" }}>
            NRI Institute of Technology
          </h2>

          <p className="text-gray-800 text-1xl leading-relaxed">
            Pothavarappadu, Agiripalli Mandalam
            <br />
            Krishna District, Andhra Pradesh, India
            <br />
            Pin – 521212
          </p>

          <p className="mt-4 text-gray-800 text-1xl">
            <strong>Coordinates:</strong>
            <br />
            Primary: 16.66327986299729, 80.73777642559249
            <br />
            Secondary: 16.663338876474548, 80.7378364640956
          </p>

          <p className="mt-4 text-gray-700 text-1xl">
            The campus is conveniently accessible from Vijayawada city and is
            surrounded by serene greenery, making it an ideal location for
            academic and professional events.
          </p>
        </div>
      </div>
    </div>
  );
}
