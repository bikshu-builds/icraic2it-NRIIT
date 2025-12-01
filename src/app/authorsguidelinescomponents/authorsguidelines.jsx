"use client";

export default function AuthorGuidelinesIconic() {
  const topics = [
    "Quantum Computing in AI",
    "Explainable AI and Ethical AI",
    "AI for Social Good",
    "Fuzzy Systems and Applications",
    "Evolutionary Algorithms and Swarm Intelligence",
    "Neural Networks and Cognitive Computing",
    "Intelligent Decision Support Systems",
    "Computational Intelligence in Data Mining",
    "Computational Neuroscience",
    "Assistive Technologies for Differentely-abled Individuals",
    "AI for Accessibility and Inclusive Design",
    "Smart Devices and Ubiquitous Computing",
    "Blockchain Applications in AI and IoT",
    "Augmented and Virtual Reality in Intelligent Systems",
    "Internet of Things (IoT) and Smart Cities",
    "Cybersecurity and Privacy in AI Systems",
    "Human-Computer Interaction and User Experience",
    "Autonomous Vehicles and Robotics",
    "Applications of AI",
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6 text-[#2c3e50]">
      <div className="max-w-[1200px] mx-auto space-y-16">
        {/* ------------------- CALL FOR PAPERS + SUBMISSION GUIDELINES ------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT — CALL FOR PAPERS */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EB1165] text-white font-bold text-lg flex items-center justify-center shadow-md">
                CF
              </div>
              <h2 className="text-xl font-extrabold text-[#EB1165] uppercase tracking-wide">
                CALL FOR PAPERS
              </h2>
            </div>

            <p className="text-sm leading-relaxed">
              Original contributions based on the results of research and
              developments are solicited. Prospective authors are requested to
              submit their papers in not more than 8 pages, prepared in Taylor &
              Francis publishers, UK paper format. All the accepted and
              presented papers will be published in one of the Taylor &
              Francis/AIP/IOP/Springer.
            </p>

            <p className="text-sm leading-relaxed">
              ICRAIC2IT-2026 invites academicians, researchers, industry
              professionals for submitting their original, previously
              unpublished and high quality research papers. The conference will
              be focused on addressing research challenges in the following
              fields, but are not limited to:
            </p>

            <div className="text-xs bg-gray-50 border-l-4 border-[#EB1165] p-3 rounded-md">
              <strong>Conference:</strong> ICRAIC2IT-2026 |{" "}
              <strong>Format:</strong> Max 8 Pages | <strong>Publisher:</strong>{" "}
              Taylor & Francis/AIP/IOP/Springer
            </div>
          </div>

          {/* RIGHT — PAPER SUBMISSION GUIDELINES */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EB1165] text-white font-bold text-lg flex items-center justify-center shadow-md">
                PG
              </div>
              <h2 className="text-xl font-extrabold text-[#EB1165] uppercase tracking-wide">
                PAPER SUBMISSION GUIDELINES
              </h2>
            </div>

            <ol className="list-decimal ml-6 text-sm space-y-2 leading-relaxed">
              <li>Background, Motivation and Objective</li>
              <li>Statement of Contribution, Methodology</li>
              <li>Results, Discussions and Conclusions</li>
              <li>
                Maximum number of pages is 8 in 8.5 × 11-inch paper
                single-column template.
              </li>
              <li>
                The Paper format will be:
                <a
                  href="http://aip.scitation.org/apc/authors/download"
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  http://aip.scitation.org/apc/authors/download
                </a>
              </li>
              <li>
                Language: English is the official language of the conference.
                The paper should be written and presented only in English.
              </li>
              <li>Plagiarism must not be above 10% to 15%...</li>
              <li>Few papers would be allowed as poster presentations.</li>
              <li>
                Paper submission Link:
                https://easychair.org/conferences/?conf=icraic2it-2026
              </li>
            </ol>
          </div>
        </div>

        {/* ----------------------- TOPICS + IMPORTANT DATES ----------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT — TOPICS FOR SUBMISSIONS */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EB1165] text-white font-bold text-lg flex items-center justify-center shadow-md">
                TP
              </div>
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-[#EB1165]">
                TOPICS FOR SUBMISSIONS
              </h2>
            </div>

            {/* 4 per row grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {topics.map((t) => (
                <div
                  key={t}
                  className="text-xs px-3 py-2 bg-gray-100 border border-gray-200 rounded-md shadow-sm hover:bg-gray-200 transition"
                >
                  • {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMPORTANT DATES TABLE */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EB1165] text-white font-bold text-lg flex items-center justify-center shadow-md">
                ID
              </div>
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-[#EB1165]">
                IMPORTANT DATES
              </h2>
            </div>

            <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden shadow">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-50">
                    Submission deadline for Full-Text Paper:
                  </td>
                  <td className="p-3 text-right">April 05, 2026</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-50">
                    Notification of Acceptance/Rejection:
                  </td>
                  <td className="p-3 text-right">April 15, 2026</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-50">
                    Last date for Camera-ready Full paper submission (with
                    modification) & Registration with Fees:
                  </td>
                  <td className="p-3 text-right">April 30, 2026</td>
                </tr>

                <tr>
                  <td className="p-3 font-semibold bg-gray-50">
                    Conference Dates:
                  </td>
                  <td className="p-3 text-right">May 08 - 09, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
