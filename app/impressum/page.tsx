
export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-green-800">
          Impressum
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="mb-2 text-xl font-semibold">
              Angaben gemäß § 5 DDG
            </h2>
            <p>Weser Bau &amp; Objektservice</p>
            <p>[Vollständiger Name des Inhabers]</p>
            <p>[Straße und Hausnummer]</p>
            <p>[Postleitzahl] Negenborn</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              Kontakt
            </h2>
            <p>Telefon: [Telefonnummer]</p>
            <p>E-Mail: [Geschäftliche E-Mail-Adresse]</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              Weitere rechtliche Angaben
            </h2>
            <p>
              [Weitere Pflichtangaben je nach
              Rechtsform und Geschäftstätigkeit]
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
