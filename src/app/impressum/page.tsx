export default function Impressum () {
return ( 
    <main className="relative min-h-screen max-w-4xl px-8 py-12">

        <a
            href="/"
            className="text-sm text-gray-500 hover:text-emerald-900 font-bold">
                ← Zurück zu Equibyte
            
            
        </a>

        <h1 className="text-3xl font-bold text-emerald-950"> Impressum </h1>

        <section className="mt-10">
            <h2 className="text-xl font-semibold text-emerald-950"> Angaben zum Anbieter 
            </h2>
            <p className="mt-4 text-gray-700">
                Name: [Vorname, Nachname]
            </p>
            <p className="mt-4 text-gray-700">
                Anschrift: [Straße und Hausnummer]
            </p>

            <p className="mt-4 text-gray-700">
                [PLZ Ort ]
            </p>

            <p className="mt-4 text-gray-700">
               E-Mail [Email]
            </p>

        </section>

        <section className="mt-8">
            <h2 className="text-xl font-semibold text-emerald-950">
                Verantwortlich für den Inhalt 
            </h2>
            <p className="mt-4 text-gray-700">
                [Vorname, Nachname]
            </p>
            <p className="text-gray-700"> 
                [Anschrift]
            </p>
        </section>












    </main>
); 



}