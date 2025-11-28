import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Marianna Charalambous",
    role: "Director, Web3 Consultant",
    description:
      "10+ years across Web3, research, and tech—securing €4M+ in grants and managing large-scale projects. Experience from EU-funded projects to Web3 grant programs, with work involving the European Commission, the ECB, and multiple blockchain startups. Project management, grant strategy, and policy & regulation.",
    image:
      "https://eigenjobs.s3.us-east-1.amazonaws.com/marianna.jpeg",
    linkedin: "https://www.linkedin.com/in/mariannacharalambous/",
    twitter: "https://x.com/Mariannach",
    email: "#",
  },
  {
    id: 2,
    name: "Dr. Androniki Menelaou",
    role: "Director, AI & Data Strategy Consultant",
    description:
      "From building models to leading teams to executive strategy—10+ years turning AI/Data into revenue. Track record across academia, corporate, and startups: data products from zero to Tier-1 pilots, 3x growth through ML, 60%+ of revenue attributed to AI/Data. Oxford DPhil in Statistics.",
    image:
      "https://eigenjobs.s3.us-east-1.amazonaws.com/androniki.jpeg",
    linkedin:
      "https://www.linkedin.com/in/dr-androniki-menelaou-7994aa60/?originalSubdomain=cy",
    twitter: "#",
    email: "#",
  },
  {
    id: 3,
    name: "Stamatis Papangelou",
    role: "TBA",
    description: "TBA",
    image:
      "https://eigenjobs.s3.us-east-1.amazonaws.com/manos.jpeg",
    linkedin: "https://www.linkedin.com/in/stamatis-papangelou/",
    twitter: "#",
    email: "#",
  },
  {
    id: 4,
    name: "Prajal Sharma",
    role: "Tech Lead & Devrel",
    description:
      "Full-stack engineer building the future of decentralized grant management. Passionate about Web3 accessibility.",
    image: "https://eigenjobs.s3.us-east-1.amazonaws.com/photo_6230926347748883466_x.jpg",
    linkedin: "https://www.linkedin.com/in/prajal-sharma-72b125206/",
    twitter: "https://x.com/0xPrajal",
    email: "prajalsharma1120@gmail.com",
  },
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      {/* Floating blur orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium text-sm uppercase tracking-widest mb-4">
            Our Team
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading mb-6">
            Meet the Experts
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A team of Web3 pioneers, blockchain architects, and grant specialists
            dedicated to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-full bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 rounded-3xl overflow-hidden border border-gray-800/50 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm">
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 transition-opacity duration-500" />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent z-20 transition-opacity duration-500 ${
                      hoveredId === member.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Social Icons */}
                  <div
                    className={`absolute top-6 right-6 flex gap-2 z-30 transition-all duration-500 ${
                      hoveredId === member.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4"
                    }`}
                  >
                    {member.linkedin && member.linkedin !== "#" && (
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300 border border-white/20"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.twitter && member.twitter !== "#" && (
                      <a
                        href={member.twitter}
                        className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300 border border-white/20"
                        aria-label="X (Twitter)"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {member.email && member.email !== "#" && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300 border border-white/20"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>

                  {/* Name & Role */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                    <h3 className="text-2xl font-bold text-white font-heading mb-1 transition-colors duration-300 group-hover:text-cyan-400">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`p-6 transition-all duration-500 ${
                    hoveredId === member.id
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-400 text-lg">
              Ready to bring your Web3 project to life?
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 border border-cyan-400/20"
            >
              <span>Work With Us</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
