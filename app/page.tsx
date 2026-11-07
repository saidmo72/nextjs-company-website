
export default function Home() {
  return (
    
<main className="min-h-screen bg-[url('/images/startseite.jpg')] bg-cover bg-center bg-no-repeat text-white">

      {/* القائمة العلوية */}
      <header className="bg-green-900 px-6 py-5 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold">
            Weser Bau & Objektservice
          </h1>
          <a href="#kontakt" className="rounded-lg bg-white px-4 py-2 font-semibold text-green-900">
            Kontakt
          </a>
        </nav>
      </header>

      {/* الواجهة الرئيسية */}
      
<section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 text-center bg-transparent">

        
<h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">

          Ihr Partner für Gartenpflege & Außenanlagen
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
          Professionelle Gartenpflege, Pflasterarbeiten und Zaunbau
          in Negenborn, Holzminden und Umgebung.
        </p>
        <a
          href="#kontakt"
          className="mt-8 inline-block rounded-lg bg-green-800 px-7 py-3 font-semibold text-white"
        >
          Jetzt Angebot anfragen
        </a>
      </section>

      {/* الخدمات */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-900">
          Unsere Leistungen
        </h2>
        <div className="grid gap-6 md:grid-cols-3"
          >{[
            "Gartenpflege & Rasenmähen",
            "Hecken- & Baumschnitt",
            "Pflasterarbeiten & Gartenwege",
            "Zaunbau",
            "Gartengestaltung",
            "Gartenreinigung",
          ].map((service) => (
            <div
              key={service}
              className="rounded-xl border border-gray-200
               bg-green-200/60 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-900">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* منطقة العمل */}
      <section className=" px-6 py-16 text-center">
        <h2 className="  mx-auto w-fit h-auto
         bg-green-200/60 px-6 py-3 rounded-xl text-center text-3xl text-blue-700 font-bold">
        Unser Einsatzgebiet</h2>
        <p className="mt-5 text-4xl font-black text-blue-900">
          Wir sind in Negenborn, Holzminden und im Umkreis
          von bis zu 60 km für Sie im Einsatz.
        </p>
      </section>

      {/* تقييمات العملاء */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-black text-red-700">
          Das sagen unsere Kunden
        </h2>
        <p className="mt-5 text-4xl font-black text-red-700">
          Lesen Sie die Erfahrungen unserer Kunden auf MyHammer.
        </p>
        <a
          href="https://www.my-hammer.de/auftragnehmer/weser-bau-objekseserice"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-4xl border border-green-800 px-6 py-3 font-semibold bg-red-700 hover:bg-green-900 text-3xl text-white hover:text-white"
        >
          Bewertungen auf MyHammer ansehen
        </a>
      </section>

      {/* التواصل */}
      <section
        id="kontakt"
        className="bg-green-900 px-6 py-20 text-center text-white"
      >
        <h2 className="text-3xl font-bold">Kontaktieren Sie uns</h2>
        <p className="mt-5 text-3xl">
          Sie benötigen Unterstützung bei Ihrem Gartenprojekt?
          Wir freuen uns auf Ihre Anfrage.
        </p>
        <p className="mt-4 text-2xl text-green-100">
          Kontaktformular folgt in Kürze.
        </p>
      </section>

      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Weser Bau & Objektservice
      </footer>
    </main>
  );
}
