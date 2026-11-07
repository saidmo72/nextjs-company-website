
import Link from "next/link";

const services = [
  {
    title: "Gartenpflege & Rasenmähen",
    description:
      "Wir kümmern uns um die regelmäßige Pflege Ihres Gartens und das Mähen Ihrer Rasenflächen.",
  },
  {
    title: "Hecken- & Baumschnitt",
    description:
      "Wir schneiden Hecken, Sträucher und Bäume und sorgen für ein gepflegtes Erscheinungsbild.",
  },
  {
    title: "Pflasterarbeiten",
    description:
      "Wir gestalten Gartenwege, Einfahrten und Außenflächen mit Pflastersteinen.",
  },
  {
    title: "Zaunbau",
    description:
      "Wir unterstützen Sie bei der Montage und Gestaltung von Gartenzäunen.",
  },
  {
    title: "Gartengestaltung",
    description:
      "Wir helfen Ihnen bei der Gestaltung und Verschönerung Ihrer Außenanlagen.",
  },
  {
    title: "Gartenreinigung",
    description:
      "Wir übernehmen die Reinigung und Pflege von Gärten und Außenbereichen.",
  },
];

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
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
      
<div
  className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/leistungen.png')" }}
>

      <section className=" px-6 py-20 text-center">
        <h1 className="mx-auto w-fit rounded-lg bg-green-900/60 px-4 py-2 text-5xl font-extrabold text-white shadow-lg">
  Unsere Leistungen
</h1>
    

        <p className="mx-auto w-fit rounded-lg bg-green-900/70 px-4 py-2 text-5xl font-extrabold text-white shadow-lg">
  
          Professionelle Gartenpflege, Pflasterarbeiten
          und Zaunbau in Negenborn, Holzminden und Umgebung.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-gray-200 bg-green-100/70 p-7 shadow-lg"
          >
            <h2 className="text-4xl font-bold text-green-900">
              {service.title}
            </h2>

            <p className="mt-4 text-2xl text-gray-600">
              {service.description}
            </p>
          </article>
        ))}
      </section>

      <section className="bg-green-900 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Jetzt Angebot anfragen
        </h2>

        <p className="mt-4">
          Kontaktieren Sie uns für Ihr Gartenprojekt.
        </p>

        <Link
          href="/#kontakt"
          className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-green-900"
        >
          Kontakt aufnehmen
        </Link>
      </section>
      </div>
    </main>
  );
}
