"use client";
import { useState } from "react"; 
export default function Home() {

/* Energiewerte nach GfE */
  function berechneEnergiebedarf(gewicht: number, faktor: number, pferdetyp: string): number {
    let energieFaktor =0.52; 
    if (pferdetyp === "vollblut") {
      energieFaktor = 0.64; 
    }
    if (pferdetyp === "pony") {
      energieFaktor = 0.4; 
    }
    if (pferdetyp ==="kaltblut") {
      energieFaktor = 0.45;
    }
    return Math.pow(gewicht, 0.75) *energieFaktor * faktor; /** abhängig vom Pferdetyp  */
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
  const [pferdeName, setzePferdeName] = useState("");
  const [heumenge, setzeHeumenge]= useState(""); 
  const [pferdetyp, setzePferdetyp] = useState(""); 
  const [gewicht, setzeGewicht] = useState("");
  const [alter, SetzeAlter] = useState("");
  const alterAlsZahl = Number(alter) || 0;
  const gewichtalsZahl= Number(gewicht) || 0;
  const heumengealsZahl= Number(heumenge) || 0;
 
  
  
  
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


 /*Heumenge berechnen nach GfE */
 function berechneHeumenge (gewicht: number):number {
  return gewicht*0.02;
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



  //const heumenge= berechneHeumenge(gewichtalsZahl);
  //LUFA
  
  const heuTrockensubstanz = heumengealsZahl * 0.877;
  const heuEnergie = heuTrockensubstanz*7; //MJ ME nach LUFA 2025 
  const heuRohprotein = heuTrockensubstanz*76; 
  const heuProtein = heuTrockensubstanz*45; 
  const heuZucker = heuTrockensubstanz*106;
  const heustaerke = heuTrockensubstanz*3;
  const heuCalcium = heuTrockensubstanz * 4; 
  const heuPhosphor = heuTrockensubstanz * 1.9;
  const heuMagnesium = heuTrockensubstanz*1.5;
  const heuNatrium = heuTrockensubstanz*0.8;
  const heuKalium = heuTrockensubstanz*16.4; 
  const heuZink = heuTrockensubstanz*24; 
  const heuKupfer = heuTrockensubstanz*4.5;
  const heuSelen = heuTrockensubstanz*0.05;
  const heuCaP = heuCalcium/heuPhosphor;
  const heuNSC = heuZucker+heustaerke; // kann weg 
  const heuNSCProzent = ((heuZucker+heustaerke)/heuTrockensubstanz)/10; 
 // LUFA ENDE

  const energiebedarf = berechneEnergiebedarf(gewichtalsZahl, faktor * koeperfaktor, pferdetyp);
  const energieDifferenz = heuEnergie-energiebedarf; //für Differenz Heu Ist/soll
  
  const proteinbedarf = berechneProteinbedarf(gewichtalsZahl, arbeit);
  const proteinDifferenz = heuProtein-proteinbedarf; 

  const phosphorbedarf = berechnePhosphorbedarf(gewichtalsZahl);
  const phosphorDifferenz = heuPhosphor-phosphorbedarf; 

  const calciumbedarf = berechneCalciumbedarf(gewichtalsZahl, arbeit);
  const calciumDifferenz = heuCalcium-calciumbedarf; 

  const magnesiumbedarf = berechneMagnesiumbedarf(gewichtalsZahl, arbeit);
  const magnesiumDifferenz = heuMagnesium-magnesiumbedarf; 

  const natriumbedarf = berechneNatriumbedarf(gewichtalsZahl, arbeit);
  const natriumDifferenz = heuNatrium-natriumbedarf
  
  const kaliumbedarf = berechneKaliumbedarf(gewichtalsZahl, arbeit);
  const kaliumDifferenz = heuKalium-kaliumbedarf

  const chloridbedarf = berechneChloridbedarf(gewichtalsZahl, arbeit);
  
  const zinkbedarf = berechneZinkbedarf(gewichtalsZahl, arbeit);
  const zinkDifferenz = heuZink-zinkbedarf; 

  const kupferbedarf = berechneKupferbedarf(gewichtalsZahl, arbeit);
  const kupferDifferenz = heuKupfer - kupferbedarf; 

  const manganbedarf = berechneManganbedarf(gewichtalsZahl, arbeit);
  const selenbedarf = berechneSelenbedarf(gewichtalsZahl, arbeit);
  const selenDifferenz= heuSelen - selenbedarf; 
  const jodbedarf = berechneJodbedarf(gewichtalsZahl, arbeit);
  const gewichtVorhanden = gewicht !== "" && !isNaN(gewichtalsZahl) && gewichtalsZahl > 0 && gewichtalsZahl <= 1500;
  const alterVorhanden = alter !== "" && !isNaN(alterAlsZahl) && alterAlsZahl > 0 && alterAlsZahl <= 40;
  const eingabeVollstaendig = gewichtVorhanden && alterVorhanden;

  return (
   
    <main className="mx-auto bg-[#FAFAF8] max-w-6xl mx-auto overflow-hidden py-10">

      <div className="relative">

        {/* HERO BEREICH */}
        <div className="relative min-h-[400px] overflow-hidden">


         <img
         src="/horse-head3.png"
         alt="Pferd auf der Weide"
        className="absolute inset-0 h-full w-full object-cover object-[60%_top]"
        />

  <div className="relative z-10 flex min-h-[400px] items-center px-12 md:px-20">
    <div className="max-w-xl -translate -x-20" >
      <h1 className="text-6xl font-bold tracking-tight text-emerald-950">
        Equibytes 
      </h1>
      <p className="mt-1 text-sm font-medium text-gray-700"> BETA</p>
      <p className="mt-4 text-2xl text-gray-500">
        Fütterung mit System
      </p>
      <p className="mt-3 max-w-lg text-lg text-gray-500">
        Bedarf berechnen, Ration analysieren <br/> 
        und Nährstofflücken erkennen. 
      </p>
      <div className="mt-6 h-[2px] w-12 bg-gray-400"></div>
    </div>
  </div>
</div>

        {/* CARD MIT FORMULAR — jetzt mit gesamtem Inhalt drin */}
        <div className="relative z-20 mx-auto -mt-12 max-w-5xl rounded-2xl bg-white p-3 mg:p-6 shadow-lg">

          <h2 className="text-xl font-semibold mb-6">Pferdedaten</h2>

          <div className="grid grid-cols-3 gap-6 mb-8 w-full">
            {/* Pferdegewicht Eingabe*/}
            <div className="flex flex-col gap-2">
              <label >Gewicht (kg):</label>
              <input
                type="number"
                max="1500"
                value={gewicht}
                onChange={(e) => {
                  setzeGewicht(e.target.value);
                  setzeBerechnet(false);
                }}
                className="border border-gray-300 rounded-xl bg-white px-3 py-1 h-10 w-full"
              />
            </div>

             {/* Heumenge Eingabe*/}
            <div className="flex flex-col gap-2 w-full">
              <label >Heu (kg):</label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={heumenge}
                onChange={(e) => {
                  setzeHeumenge(e.target.value);
                  setzeBerechnet(false);
                }}
                className="border border-gray-300 rounded-xl bg-white px-3 py-1 h-10 w-full"
              />
            </div>

            {/* Pferdealter Eingabe*/}
            <div className="flex flex-col gap-2 w-full">
              <label>Alter:</label>
              <input
                type="number"
                min="1"
                max="40"
                value={alter}
                onChange={(e) => SetzeAlter(e.target.value)}
                className="border border-gray-300 rounded-xl bg-white py-1 px-3 h-10 w-full"
              />
            </div>

            
          </div>

          {alterAlsZahl > 40 && <p>Das Alter darf maximal 40 Jahre betragen.</p>}
          {alterAlsZahl <= 0 && alter !== "" && <p>Das Alter muss größer als 0 Jahre sein.</p>}

          <div className="grid grid-cols-3 gap-8 mb-6">
            {/* Pferdetyp Eingabe*/}
            <div className="flex flex-col gap-2 w-full">
              <label>Typ</label>
              <select
                value={pferdetyp}
                onChange={(e) => {
                  setzePferdetyp(e.target.value);
                  setzeBerechnet(false);
                }}
                className="w-full h-10 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none"
              >
                <option value="warmblut"> Warmblut / Großpferd</option>
                <option value="vollblut"> Vollblut</option>
                <option value="kaltblut"> Kaltblut</option>
                <option value="pony"> Pony</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label>Körperzustand:</label>
              <select
                value={koerperzustand}
                onChange={(e) => {
                  setzeKoerperzustand(e.target.value);
                  setzeBerechnet(false);
                }}
                className="w-full h-10 rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
              >
                <option value="untergewicht">Untergewicht</option>
                <option value="normalgewicht">Normalgewicht</option>
                <option value="uebergewicht">Übergewicht</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label>Belastung:</label>
              <select
                value={arbeit}
                onChange={(e) => {
                  setzeArbeit(e.target.value);
                  setzeBerechnet(false);
                }}
                className="w-full h-10 rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
              >
                <option value="erhaltung">Erhaltung</option>
                <option value="leicht">Leichte Arbeit</option>
                <option value="mittel">Mittlere Arbeit</option>
                <option value="schwer">Schwere Arbeit</option>
              </select>
            </div>
            

            <button
              className="mt-6  bg-green-700 text-white px-2 py-2 rounded-xl hover:bg-green-700 transition"
              onClick={() => {
                console.log("Button wurde geklickt");
                if(heumengealsZahl <0) {
                  alert ("Die Heumenge darf nicht negativ sein."); 
                  return;
                }
                if(heumengealsZahl <=0) {
                  alert ("Die Heumenge muss größer als 0 kg sein."); 
                  return; 
                }
                if (eingabeVollstaendig) {
                  setzeBerechnet(true);
                } else {
                  alert("Bitte fülle alle Felder aus.");
                }
              }}
            >
              berechnen
            </button>
          </div>

          {gewichtalsZahl > 1500 && <p>Das Gewicht darf maximal 1500 kg betragen.</p>}
          {gewichtalsZahl <= 0 && gewicht !== "" && <p>Das Gewicht muss größer als 0 kg sein.</p>}

          {berechnet && gewichtVorhanden && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-5 mb-4 bg-slate-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Grundbedarf (SOLL)</h3>
                   <p className="text-xs text-gray-500 mb-4"> Bedarf nach GfE Empfehlungen</p>
                  
                  <div className="mt-3 rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">⚡Energie (ME) </p>
                    <p className="mt-1 text-2xl font-bold text-emerald-950">{energiebedarf.toFixed(1)} MJ
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl bg-white p-4 shadow-sm">
                    
                    <p className="text-sm text-gray-500">🌱Protein (dvRP) </p>
                    <p className="mt-1 text-2xl font-bold text-emerald-950"> {proteinbedarf.toFixed(1)} g 
                    </p>
                  </div>

                </div>

                <div className="border border-green-100 rounded-xl p-5 mb-4 bg-green-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Nährstoffdeckung aus Heu (IST)</h3>
                  <p className="text-xs text-gray-500 mb-4">auf Basis der LUFA-Durchnittswerte 2025</p>


                   <div className="mt-3 rounded-xl bg-green-100/60 p-4"> 
                    <p className="text-sm text-gray-500">Heu:</p>
                    <p className="text-2xl font-bold text-emerald-950">{heumengealsZahl.toFixed(1)} kg</p>
                    </div>

                  
                   <div className="mt-3 rounded-xl bg-green-100/60 p-4"> 
                    <p className="text-sm text-gray-500">⚡Energie (ME)</p>
                    <p className="text-2xl font-bold text-emerald-950">{heuEnergie.toFixed(1)} MJ </p>
                    <p className={`mt-1 text-sm font-semibold ${energieDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {energieDifferenz >=0? "+" : ""}
                       {energieDifferenz.toFixed(1) } MJ 
                       </p>
                       </div>




                   <div className="mt-3 rounded-xl bg-green-100/60 p-4"> 
                    <p className="text-sm text-gray-500">🌱Protein (dvRP)</p>
                    <p className="text-2xl font-bold text-emerald-950">{heuProtein.toFixed(1)} g </p>
                    <p className={`mt-1 text-sm font-semibold ${proteinDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {proteinDifferenz >=0? "+" : ""}
                       {proteinDifferenz.toFixed(1) } g 
                       </p>
                       </div>

                  <p className="text-gray-600">Trockensubstanz (TS): 87.7 %</p>
                  <p className="text-gray-600">Rohfaser: 32.8 % der TS</p>
                  <p className="text-gray-600">Rohasche: 7.0 % der TS</p>



                  <p className="text-gray-600">Zucker: {heuZucker.toFixed(1)} g</p>
                  <p className="text-gray-600">Stärke: {heustaerke.toFixed(1)} g</p>
                  <p className="text-gray-600">NSC: {heuNSCProzent.toFixed(1)} % in TS</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-5 mb-4 bg-slate-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Mengenelemente</h3>
                  {gewichtVorhanden && <p className="text-gray-600">Calcium: {calciumbedarf.toFixed(1)} g</p>}
                  {gewichtVorhanden && <p className="text-gray-600">Phosphor: {phosphorbedarf.toFixed(1)} g</p>}
                  {gewichtVorhanden && <p className="text-gray-600">Magnesium: {magnesiumbedarf.toFixed(1)} g</p>}
                  {gewichtVorhanden && <p className="text-gray-600">Natrium: {natriumbedarf.toFixed(1)} g</p>}
                  {gewichtVorhanden && <p className="text-gray-600">Kalium: {kaliumbedarf.toFixed(1)} g</p>}
                  {gewichtVorhanden && <p className="text-gray-600">Chlorid: {chloridbedarf.toFixed(1)} g</p>}
                </div>

                <div className="border border-green-100 rounded-xl p-5 mb-4 bg-green-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Mengenelemente aus Heu (IST)</h3>
                  <p className="text-xs text-gray-500 mb-4">auf Basis der LUFA-Durchnittswerte 2025</p>
                  <p className="text-gray-600">
                    Calcium: {heuCalcium.toFixed(1)} g{" "}
                    <span className={`font-semibold ${calciumDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {calciumDifferenz >=0? "+" : ""}
                       {calciumDifferenz.toFixed(1) } g 
                      
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Phosphor: {heuPhosphor.toFixed(1)} g{" "}
                    <span className={`font-semibold ${phosphorDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {phosphorDifferenz >=0? "+" : ""}
                       {phosphorDifferenz.toFixed(1) } g 
                    </span>
                  </p>
                  <p className="text-gray-600">Ca:P: {heuCaP.toFixed(1)} : 1</p>

                  <p className="text-gray-600">
                    Magnesium: {heuMagnesium.toFixed(1)}{" "}
                    <span className={`font-semibold ${magnesiumDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {magnesiumDifferenz >=0? "+" : ""}
                       {magnesiumDifferenz.toFixed(1) } g 
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Natrium: {heuNatrium.toFixed(1)}{" "}
                    <span className={`font-semibold ${natriumDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {natriumDifferenz >=0? "+" : ""}
                       {natriumDifferenz.toFixed(1) } g 
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Kalium: {heuKalium.toFixed(1)}{" "}
                    <span className={`font-semibold ${kaliumDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {kaliumDifferenz >=0? "+" : ""}
                       {kaliumDifferenz.toFixed(1) } g 
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-5 mb-4 bg-slate-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Spurenelemente</h3>
                  <p className="text-gray-600">Zink: {zinkbedarf.toFixed(1)} mg</p>
                  <p className="text-gray-600">Kupfer: {kupferbedarf.toFixed(1)} mg</p>
                  <p className="text-gray-600">Mangan: {manganbedarf.toFixed(1)} mg</p>
                  <p className="text-gray-600">Selen: {selenbedarf.toFixed(1)} mg</p>
                  <p className="text-gray-600">Jod: {jodbedarf.toFixed(1)} mg</p>
                </div>

                <div className="border border-green-100 rounded-xl p-5 mb-4 bg-green-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Spurenelemente aus Heu (IST)</h3>
                  <p className="text-xs text-gray-500 mb-4">auf Basis der LUFA-Durchnittswerte 2025</p>
                  <p className="text-gray-600">
                    Zink: {heuZink.toFixed(1)} mg{" "}
                    <span className={`font-semibold ${zinkDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {zinkDifferenz >=0? "+" : ""}
                       {zinkDifferenz.toFixed(1)}mg 
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Kupfer: {heuKupfer.toFixed(1)} mg{" "}
                    <span className={`font-semibold ${kupferDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {kupferDifferenz >=0? "+" : ""}
                       {kupferDifferenz.toFixed(1)}mg 
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Selen: {heuSelen.toFixed(1)} mg{" "}
                    <span className={`font-semibold ${selenDifferenz < 0 ? "text-orange-600" : "text-green-600"}`}>
                      {selenDifferenz >=0? "+" : ""}
                       {selenDifferenz.toFixed(1)}mg 
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <footer className="mt-16 border-t border-gray-200 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6">
        <a href="/impressum" className="hover:text-emerald-900">
        Impressum 
        </a>
        <a href="/datenschutz" className="hover:text-emerald-900">
        Datenschutz 
        </a>
       
        </div>
      </footer>

    </main>
  );
}