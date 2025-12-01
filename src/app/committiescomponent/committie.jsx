export default function CommitteesPage() {
  const sections = [
    {
      title: "Chief Patrons",
      members: [
        "Dr. R Venkat Rao, Chairman, NRI Group of Colleges",
        "Dr. G Sambasivarao, Director – Academics, NRIIT",
        "Dr. G Rosalah, Director – Administration, NRIIT",
      ],
    },
    {
      title: "Patrons",
      members: ["Dr. C Naga Bhaskar, Principal, NRIIT"],
    },
    {
      title: "General Chairs",
      members: [
        "Dr. K. V. Sambasiva Rao, Professor & Dean, CSE, NRIIT",
        "Dr. D. Suneetha, Professor & HOD, CSE, NRIIT",
      ],
    },
    {
      title: "Organizing Committee",
      members: [
        "Dr. Y Srinivasa Vishnu Murthy, MIT Bengaluru",
        "Prof. Rama Murthy Garimella, Mahindra University",
        "Dr. Ramesh Kumar Bhukya, IIIT Allahabad",
        "Dr. Bheemappa Halavar, IIIT Sri City",
        "Dr.M.Venkateswara Rao, Prof.IT",
        "Dr. G Shobana, Prof., CSE",
        "Dr. K Krishna Prakash, Prof. CSM",
        "Dr M Chaitanya Kishore Reddi, IT Department",
      ],
    },
    {
      title: "Program Execution Committee",
      members: [
        "Dr. D Suneetha, HOD: CSE",
        "Dr. J Rajendra Prasad, HOD : IT",
        "Dr. P Rajendra Kumar, HOD : AIML",
        "Dr. Bh Dasaradha Ram, HOD : CSM",
        "Dr. Ch V Murali Krishna, HOD : CSD",
        "Mr.B.Venugopal, Assoc Prof. CSE",
        "Mr.N.V.Satyanarayana, Assoc Prof. CSE",
        "Dr.D.Vijay Kumar, Assoc Prof . CSD",
      ],
    },
    {
      title: "Technical Programme Committee",
      members: [
        "Prof. K. Sreenivasa Rao, IIT KGP",
        "Dr. Anil Vuppala, IIT Hyderabad",
        "Dr. Ansuman Mohapatra, NIT Puducherry",
        "Dr. D. Suneetha, HOD CSE",
        "Dr. Sumith N, MIT Manipal",
        "Dr. Basavaraj Talawar, NITK Surathkal",
        "Dr. V. Teju, NRIIT",
        "Prof O B V Ramanalah, INTU Hyderabad",
        "Dr.Jannu Chaitanya, NRIIT",
        "Dr Dharavath Ramesh, IIT Dhanbad",
      ],
    },
    {
      title: "Publication Chair",
      members: [
        "Dr. K V Sambasiva Rao, CSE Dept, NRIIT (Chair)",
        "Prof Anasuya Senha Roopa Devi Bhima, Conestoga College, Canada",
      ],
    },
    {
      title: "National Advisory Committee",
      members: [
        "Dr. D.Raiya Lakshmi, INTU Vizianagaram",
        "Dr. Jay Singh, BL Bajaj Institute of Tech",
        "Prof. V.V. Subrahmanyan, IGNOU New Delhi",
        "Dr. J. Venkataramanalah, NIT Surat",
        "Dr. Bheemappa Halavar, IIT Sricity",
        "Dr.M H M Krishna Prasad, INTUK Kakinada",
        "Prof K Viswanatha Raju, INTU Jagityala",
        "Dr.P Sandhya, VIT Chennai",
        "Dr. B V Subba Rao, PVP Siddhartha Vijayawada",
      ],
    },
    {
      title: "International Advisory Committee",
      members: [
        "Prof. Naveen Chilamkurti, Australia",
        "Prof. Marcos Eduardo Valle, Brazil",
        "Prof. Saad Mekhilef, Malaysia",
        "Dr. Manjunath Mullmani, Finland",
        "Dr. Mounica Yenugula, Equifax USA",
        "Mr. Niranjan Reddy Kotha, Charter USA",
        "Mr. Praveen Hegde, Verizon USA",
        "Dr. Shashi Kant Gupta, Malaysia",
        "Dr. Bhargavi Konda, USA",
        "Mr. Ruthvik Uppaluri, Missouri USA",
        "Mr. Vishal Jain, NYC USA",
        "Mr. Jyotirmay Jena, HCL USA",
        "Mr. Sudheer Kolla, CMS USA",
        "Ms. Priya Yesare, Nashville USA",
        "Mr. Rachit Gupta, Guardian USA",
        "Dr. Vinay Kumar Kasula, USA",
        "Mr. Sam Prakash Bheri, Microsoft USA",
        "Mr. Shubham Malhotra, AWS USA",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1
        className="text-4xl font-extrabold text-center mb-10"
        style={{ color: "#EB1165" }}
      >
        CONFERENCE COMMITTEE
      </h1>

      {/* Grid layout with compact boxes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((sec, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-all"
            style={{ borderColor: "#EB1165" }}
          >
            {/* Title Bar */}
            <div
              className="font-bold text-1xl mb-2 pb-1 border-b"
              style={{ borderColor: "#EB1165", color: "#EB1165" }}
            >
              {sec.title}
            </div>

            {/* Names (super compact styling) */}
            <div className="text-sm space-y-1 leading-tight p-4">
              {sec.members.map((m, i) => (
                <p
                  key={i}
                  className="list-disc list-item"
                  style={{ borderColor: "#EB1165" }}
                >
                  {m}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
