type Project = {
  title: string;
  desc: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Sistem Perentalan Mobil",
    desc: "Website perentalan mobil dengan fitur CRUD dan serta pengelolaan secara online.",
    tech: ["Laravel", "MySQL"],
  },
  {
    title: "Website Portfolio",
    desc: "Website portfolio personal menggunakan Next.js dan TypeScript.",
    tech: ["Next.js", "TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="section">
      <h1>Projects</h1>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="tech">
              {p.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}