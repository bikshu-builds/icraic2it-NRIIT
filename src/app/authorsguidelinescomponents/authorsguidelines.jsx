"use client";

export default function AuthorGuidelinesIconic() {
  return (
    <div
      className="min-h-screen bg-white py-8 px-6"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* FORCE single row on md+ and prevent wrapping so RIGHT column sits level with LEFT */}
        <div className="flex flex-col md:flex-row md:flex-nowrap gap-6 items-start">
          {/* left strip - CALL FOR PAPERS (keeps original width 45%) */}
          <div className="md:w-[45%]" style={{ flex: "0 0 45%" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#EB1165] flex items-center justify-center text-white font-bold">
                CF
              </div>
              <div>
                <div className="text-[#EB1165] font-extrabold uppercase">
                  CALL FOR PAPERS
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              Original contributions based on the results of research and
              developments are solicited. Prospective authors are requested to
              submit their papers in not more than 8 pages, prepared in Taylor &
              Francis publishers, UK paper format. All the accepted and
              presented papers will be published in one of the Taylor &
              Francis/AIP/IOP/Springer.
            </div>
            <br />
            <div className="text-sm text-gray-700 mb-2">
              ICRAIC2IT-2026 invites academicians, researchers, industry
              professionals for submitting their original, previously
              unpublished and high quality research papers. The conference will
              be focused on addressing research challenges in the following
              fields, but are not limited to:
            </div>
            <br />
            <div
              className="text-xs text-gray-600 bg-[#fafafa] p-2 rounded"
              style={{ borderLeft: "4px solid #EB1165" }}
            >
              <strong>Conference:</strong> ICRAIC2IT-2026 |{" "}
              <strong>Format:</strong> Max 8 Pages | <strong>Publisher:</strong>
              Taylor & Francis/AIP/IOP/Springer
            </div>
          </div>

          {/* right strip: TOPICS FOR SUBMISSIONS (keeps original width 55% and original chip size) */}
          <div className="md:w-[55%]" style={{ flex: "0 0 55%" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#EB1165] flex items-center justify-center text-white font-bold">
                TP
              </div>
              <div>
                <div className="text-[#EB1165] font-extrabold uppercase">
                  TOPICS FOR SUBMISSIONS
                </div>
                
              </div>
            </div>

            <div
              className="flex flex-wrap gap-2"
              style={{ alignContent: "flex-start" }}
            >
              {[
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
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs py-1 px-3 rounded-full border text-gray-700"
                  style={{
                    background: "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* guidelines + dates in a compact two-column horizontal line (no boxes) */}
        <div className="mt-5 flex flex-col md:flex-row gap-6">
          <div style={{ flex: "1 1 65%" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#EB1165] rounded text-white flex items-center justify-center font-bold">
                PG
              </div>
              <div className="text-[#EB1165] font-bold uppercase">
                PAPER SUBMISSION GUIDELINES
              </div>
            </div>
            <ol className="list-decimal ml-6 text-sm space-y-2">
              <li>Background, Motivation and Objective</li>
              <li>Statement of Contribution, Methodology</li>
              <li>Results, Discussions and Conclusions</li>
              <li>
                Maximum number of pages is 8 in 8.5 × 11-inch paper
                single-column template. The Paper format will be:
                http://aip.scitation.org/apc/authors/download
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

          <div style={{ flex: "0 0 35%" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#EB1165] rounded text-white flex items-center justify-center font-bold">
                ID
              </div>
              <div className="text-[#EB1165] font-bold uppercase">
                Important Dates
              </div>
            </div>
            <div className="text-sm space-y-2">
              <div>
                <strong>Submission deadline for Full-Text Paper:</strong> April
                05, 2026
              </div>
              <div>
                <strong>Notification of Acceptance/Rejection:</strong> April 15,
                2026
              </div>
              <div>
                <strong>
                  Last date for Camera-ready Full paper submission (with
                  modification) & Registration with Fees:
                </strong>{" "}
                April 30, 2026
              </div>
              <div>
                <strong>Conference Dates:</strong> May 08 - 09, 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
