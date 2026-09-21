"use client";
import { useState } from "react";
export default function Home() {

/* Energiewerte nach GfE */
  function berechneEnergiebedarf(gewicht: number, faktor: number): number {
    return Math.pow(gewicht, 0.75) *0.52 * faktor; /** nur für Warmblut / Hannoveraner  */
  } 


  /* Proteinbedarf berechnen mittels arbeit */
  function berechneProteinbedarf(gewicht: number, arbeit: string ): number {
    let proteinfaktor = 1;
  if (arbeit === "leicht") {
    proteinfaktor = 1.22;
  }
  if (arbeit === "mittel") {
    proteinfaktor = 1.67;
  }
  if (arbeit === "schwer") {
    proteinfaktor = 2.16;
  } 
    return Math.pow(gewicht, 0.75) * 3.01 * proteinfaktor; /** nur für Warmblut / Hannoveraner  */
  }

  const [berechnet, setzeBerechnet]=useState(false); 
  const [zeigeFormular, setzeZeigeFormular] = useState(true); 
  const [pferdeName, setzePferdeName] = useState("");
  const [gewicht, setzeGewicht] = useState("");
  const [alter, SetzeAlter] = useState("");
  const alterAlsZahl = Number(alter) || 0;
  const gewichtalsZahl= Number(gewicht) || 0;
  
  
  const [arbeit, setzeArbeit] = useState("erhaltung");
  const [koerperzustand, setzeKoerperzustand] = useState("normalgewicht");
 
  let koeperfaktor = 1;
  if (koerperzustand === "untergewicht") {
    koeperfaktor = 1.15;
  }
  if (koerperzustand === "uebergewicht") {
    koeperfaktor = 0.9;
  }


  /* Arbeitsfaktor berechnen */
  
  let faktor = 1;
  if (arbeit === "leicht") {
    faktor = 1.25;
  }
  if (arbeit === "mittel") {
    faktor = 1.50;
  }
  if (arbeit === "schwer") {
    faktor = 2.00;
  }


  /* Calciumbedarf berechnen */
  function berechneCalciumbedarf(gewicht: number, arbeit: string): number {
  const basis = Math.pow(gewicht/600,0.75);
  let calcium = 20;

  if (arbeit === "mittel") {
    calcium = 23;
  }
  if (arbeit === "schwer") {
    calcium = 27;
  } 
  return calcium * basis;
}
  //

  //Berechnet Phosphorbedarf über Gewicht ohne Arbeitsfaktor 
function berechnePhosphorbedarf(gewicht: number): number {
  const pbasis = Math.pow(gewicht/600,0.75);
  const phosphor = 14;
  return phosphor * pbasis;
}

//berechne Magnesiumbedarf 
function berechneMagnesiumbedarf(gewicht: number, arbeit: string): number {
  const mbasis = Math.pow(gewicht/600,0.75);
  let magnesium = 6;
  if (arbeit === "mittel") {
    magnesium = 8;
  }
  if (arbeit === "schwer") {
    magnesium = 9;
  }
  return magnesium* mbasis;
}

// berechne Natriumbedarf
function berechneNatriumbedarf(gewicht: number, arbeit: string): number {
  const nbasis = Math.pow(gewicht/600,0.75);
  let natrium = 3;

  if (arbeit === "leicht") {
    natrium = 9;
  }
  if (arbeit === "mittel") {
    natrium = 33;
  }
  if (arbeit === "schwer") {
    natrium = 64;
  }
  return natrium * nbasis;
}

// berechne Kaliumbedarf
function berechneKaliumbedarf(gewicht: number, arbeit: string): number {
  const kbasis = Math.pow(gewicht/600,0.75);
  let kalium = 17;

  if (arbeit === "leicht") {
    kalium = 19;
  }
  if (arbeit === "mittel") {
    kalium = 30;
  }
  if (arbeit === "schwer") {
    kalium = 42;
  }
  return kalium * kbasis;
}

// berechne Chloridbedarf
function berechneChloridbedarf(gewicht: number, arbeit: string): number {
  const cbasis = Math.pow(gewicht/600,0.75);
  let chlorid = 48;

  if (arbeit === "leicht") {
    chlorid = 57;
  }
  if (arbeit === "mittel") {
    chlorid = 91;
  }
  if (arbeit === "schwer") {
    chlorid = 135;
  }
  return chlorid * cbasis;
}

//berechne zink 
function berechneZinkbedarf(gewicht: number, arbeit: string): number {
  const zbasis = Math.pow(gewicht/600,0.75);
  let zink = 485;
  if (arbeit !== "erhaltung") {
    zink = 606;
  }

  return zink * zbasis;
}

//Berechne Kupfer 
function berechneKupferbedarf(gewicht: number, arbeit: string): number {
  const kubasis = Math.pow(gewicht/600,0.75);
  let kupfer = 121;
  return kupfer * kubasis;
}

//Berechne Mangan 
function berechneManganbedarf(gewicht: number, arbeit: string): number {
  const mbasis = Math.pow(gewicht/600,0.75);
  let mangan = 485;
  if (arbeit !== "erhaltung") {
    mangan = 546;
  }
  return mangan * mbasis;
} 

//Berechne Selen 
function berechneSelenbedarf(gewicht: number, arbeit: string): number {
  const sbasis = Math.pow(gewicht/600,0.75);
  let selen = 1.2;
  return selen * sbasis; 
}

//berechne Jod 
function berechneJodbedarf(gewicht: number, arbeit: string): number {
  const jdbasis = Math.pow(gewicht/600,0.75);
  let jod = 2.4;
  return jod * jdbasis; 
} 



  
  const energiebedarf = berechneEnergiebedarf(gewichtalsZahl, faktor * koeperfaktor);
  const proteinbedarf = berechneProteinbedarf(gewichtalsZahl, arbeit);
  const phosphorbedarf = berechnePhosphorbedarf(gewichtalsZahl);
  const calciumbedarf = berechneCalciumbedarf(gewichtalsZahl, arbeit);
  const magnesiumbedarf = berechneMagnesiumbedarf(gewichtalsZahl, arbeit);
  const natriumbedarf = berechneNatriumbedarf(gewichtalsZahl, arbeit);
  const kaliumbedarf = berechneKaliumbedarf(gewichtalsZahl, arbeit);
  const chloridbedarf = berechneChloridbedarf(gewichtalsZahl, arbeit);
  const zinkbedarf = berechneZinkbedarf(gewichtalsZahl, arbeit);
  const kupferbedarf = berechneKupferbedarf(gewichtalsZahl, arbeit);
  const manganbedarf = berechneManganbedarf(gewichtalsZahl, arbeit);
  const selenbedarf = berechneSelenbedarf(gewichtalsZahl, arbeit);
  const jodbedarf = berechneJodbedarf(gewichtalsZahl, arbeit);
  const gewichtVorhanden = gewicht !== "" && !isNaN(gewichtalsZahl) && gewichtalsZahl > 0 && gewichtalsZahl <= 1500;
  const alterVorhanden = alter !== "" && !isNaN(alterAlsZahl) && alterAlsZahl > 0 && alterAlsZahl <= 40;
  const eingabeVollstaendig = pferdeName !="" && gewichtVorhanden && alterVorhanden;

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-8 py-10 max-w-6xl mx-auto">
      <h1 className="text-5xl font-semibold tracking-tight text-green-800">Equibyte</h1>
     

     {zeigeFormular && (
        <>
        
          <div className="bg-white p-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Pferdedaten</h2>
           <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Pferdename Eingabe*/}
            <div className="flex flex-col gap-2"> 
            <label>Name des Pferdes:</label>
            <input 
            value={pferdeName} 
            onChange={(e) => setzePferdeName(e.target.value)}
            className="border border-gray-300 rounded-xl bg-white px-3 py-1 w-full"
            />
           </div>
            {/* Pferdegewicht Eingabe*/}
            <div className="flex flex-col gap-2"> 
            <label>Pferdegewicht (kg):</label>
            <input
            type ="number"
            max = "1500"
            value={gewicht} 
            onChange={(e) => setzeGewicht(e.target.value)}
            className="border border-gray-300 rounded-xl bg-white px-3 py-1 w-full"
            />
            </div>
            {/* Pferdealter Eingabe*/}
            <div className="flex flex-col gap-2"> 
            <label> 
              Alter in Jahren:
              </label>
              <input 
              type="number" 
              min="1"
              max="40"
              value={alter} 
              onChange={(e) => SetzeAlter(e.target.value)}
              className="border border-gray-300 rounded-xl bg-white px-3 py-1 w-full"
              />
             </div>
             </div>

            {alterAlsZahl > 40 && ( <p> Das Alter darf maximal 40 Jahre betragen. </p>)}
            {alterAlsZahl <= 0 && alter !== "" &&  ( <p> Das Alter muss größer als 0 Jahre sein. </p>)}

             
           
          <div className="grid grid-cols-3 gap-8 mb-6">
            <div className="flex flex-col gap-2">
            <label>Körperzustand:</label>
            <select
            value={koerperzustand}
            onChange={(e) => setzeKoerperzustand(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
            >
            <option value="untergewicht">Untergewicht</option>
            <option value="normalgewicht">Normalgewicht</option>
            <option value="uebergewicht">Übergewicht</option> 
            </select>
          </div> 
            {/* Auswahl Arbeitsleistung*/}            
            <div className="flex flex-col gap-2">
            <label>Arbeitsleistung:</label>
            <select
            value={arbeit}
            onChange={(e) => setzeArbeit(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
            >
            <option value="erhaltung">Erhaltung</option>
            <option value="leicht">Leichte Arbeit</option>
            <option value="mittel">Mittlere Arbeit</option>
            <option value="schwer">Schwere Arbeit</option> 
            </select>
            </div>


          
             <button 
        className="mt-8 bg-green-700 text-white px-4 py-2 rounded-xl  hover:bg-green-700 transition"

         onClick={() => {
        console.log("Button wurde geklickt");
          if(eingabeVollstaendig) {
            setzeBerechnet(true);
          } else {
            alert ("Bitte fülle alle Felder aus.");
          }
          }}
          > berechnen </button>
          </div>
          

          

          

          {/* Fehlermeldungen für Gewicht */}
           {gewichtalsZahl >1500 && ( <p> Das Gewicht darf maximal 1500 kg betragen. </p>)}
           {gewichtalsZahl <= 0 && gewicht !== "" &&  ( <p> Das Gewicht muss größer als 0 kg sein. </p>)}

          { berechnet && (
        <>
         <div className="border border-gray-300 rounded-xl p-4 mb-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-800 mb-3"> Energie & Proteine </h3>
           {gewichtVorhanden && (<p className="text-gray-600">Energiebedarf: {energiebedarf.toFixed(1)} MJ ME</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Proteinbedarf: {proteinbedarf.toFixed(1)} g dvRP</p>)}
        </div>
        
          

        <div className="border border-gray-300 rounded-xl p-4 mb-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-800 mb-3"> Mengenelemente </h3>
           {gewichtVorhanden && (<p className="text-gray-600">Calciumbedarf: {calciumbedarf.toFixed(1)} g</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Phosphorbedarf: {phosphorbedarf.toFixed(1)} g</p>)}
           
           {gewichtVorhanden && (<p className="text-gray-600">Magnesiumbedarf: {magnesiumbedarf.toFixed(1)} g</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Natriumbedarf: {natriumbedarf.toFixed(1)} g</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Kaliumbedarf: {kaliumbedarf.toFixed(1)} g</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Chloridbedarf: {chloridbedarf.toFixed(1)} g</p>)}
           
        </div>
        
          
        <div className="border border-gray-300 rounded-xl p-4 mb-4 bg-white">
           <h3 className="text-lg font-semibold text-gray-800 mb-3"> Spurenelemente </h3>
           {gewichtVorhanden && (<p className="text-gray-600">Zinkbedarf: {zinkbedarf.toFixed(1)} mg</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Kupferbedarf: {kupferbedarf.toFixed(1)} mg</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Manganbedarf: {manganbedarf.toFixed(1)} mg</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Selenbedarf: {selenbedarf.toFixed(1)} mg</p>)}
           {gewichtVorhanden && (<p className="text-gray-600">Jodbedarf: {jodbedarf.toFixed(1)} mg</p>)}
        </div>
        </>
        )}
         </div>
        
        
        
        
           
      </>
      )}

      
      
    </main>
  );
}