type ProjectProps = {
  title: string;
  desc: string;
  tech: string;
  link: string;
};

export default function ProjectCard({
  title,
  desc,
  tech,
  link,
}: ProjectProps) {
  return (
    <div className="border rounded p-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="my-2">{desc}</p>
      <p className="text-sm text-gray-600">{tech}</p>

      <a
        href={link}
        target="_blank"
        className="inline-block mt-3 text-blue-600"
      >
        Lihat Repository →
      </a>
    </div>
  );
}
