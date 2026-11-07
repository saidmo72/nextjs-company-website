
"use client";

import { useState, type FormEvent } from "react";

export default function KontaktPage() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Senden fehlgeschlagen");
      }

      setStatus("Vielen Dank! Ihre Nachricht wurde gesendet.");
      form.reset();
    } catch {
      setStatus(
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-800 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <p className="mt-4 text-lg">
          Kontaktieren Sie Weser Bau &amp; Objektservice.
          Wir freuen uns auf Ihre Anfrage!
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-green-800">
            Angebot anfragen
          </h2>

          <p className="mb-6 text-gray-700">
            Sie benötigen Unterstützung bei Gartenpflege,
            Pflasterarbeiten oder anderen Arbeiten rund um
            Ihr Grundstück? Schreiben Sie uns gerne.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700"
              >
                Ihr Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                maxLength={100}
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="Vor- und Nachname"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700"
              >
                Ihre E-Mail-Adresse
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                maxLength={254}
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="name@beispiel.de"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-gray-700"
              >
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={5}
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="Beschreiben Sie Ihr Projekt..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
            >
              {sending ? "Wird gesendet..." : "Anfrage senden"}
            </button>

            {status && (
              <p role="status" aria-live="polite" className="text-gray-700">
                {status}
              </p>
            )}
          </form>
        </div>

        <p className="mt-8 text-center text-gray-600">
          Standort: Negenborn bei Holzminden
          <br />
          Einsatzgebiet: ca. 60 km Umkreis
        </p>
      </section>
    </main>
  );
}
