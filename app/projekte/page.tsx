
import Link from "next/link";

const projects = [
  {
    title: "Heckenschnitt",
    description: "Professionelle Pflege und Schnitt von Gartenhecken.",
  },
  {
    title: "Heckenpflege",
    description: "Pflege von Hecken entlang von Wegen und Einfahrten.",
  },
  {
    title: "Formschnitt",
    description: "Formgebung und Pflege von Sträuchern und Gehölzen.",
  },
  {
    title: "Pflasterarbeiten",
    description: "Arbeiten an gepflasterten Außenflächen.",
  },
  {
    title: "Bodenbefestigung",
    description: "Vorbereitung und Befestigung von Außenflächen.",
  },
];

export default function ProjektePage() {
  return (
    <main className="min-h-screen bg-green-300 text-gray-900">
      <header className="bg-green-900 px-6 py-5 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold">
            Weser Bau & Objektservice
          </Link>

          <Link href="/" className="hover:underline">
            Startseite
          </Link>
        </nav>
      </header>

      <section className="bg-green-200 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Unsere Projekte
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Einblicke in unsere Arbeiten rund um Gartenpflege
          und Außenanlagen.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
            >
              <img
  src={`/projects/foto-${projects.indexOf(project) + 1}.jpeg`}
  alt={project.title}
  className="h-48 w-full object-cover"
/>

              <div className="p-6">
                <h2 className="text-xl font-bold text-green-900">
                  {project.title}
                </h2>
                <p className="mt-3 text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-green-900 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Haben Sie ein ähnliches Projekt?
        </h2>
        <p className="mt-4">
          Kontaktieren Sie uns für ein individuelles Angebot.
        </p>
        <Link
          href="/#kontakt"
          className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-green-900"
        >
          Jetzt anfragen
        </Link>
      </section>
    </main>
  );
}
