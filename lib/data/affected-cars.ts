export interface AffectedModel {
  model: string;
  yearFrom: number;
  yearTo: number;
}

export interface ManufacturerData {
  name: string;
  words?: string[];
  affected?: AffectedModel[];
  links?: {
    hexagon?: string;
    guadeloupe?: string;
    martinique?: string;
    guyane?: string;
    reunion?: string;
  };
}

export const AllManufacturers = [
  "audi",
  "bmw",
  "cadillac",
  "chrysler",
  "daihatsu",
  "ferrari",
  "fisker",
  "ford",
  "honda",
  "jaguar",
  "jeep",
  "land rover",
  "lexus",
  "mazda",
  "mercedes",
  "mitsubishi",
  "nissan",
  "opel",
  "peugeot",
  "renault",
  "seat",
  "skoda",
  "stellantis",
  "subaru",
  "suzuki",
  "tesla",
  "toyota",
  "volkswagen",
  "volvo",
] as const;

export type Manufacturer = (typeof AllManufacturers)[number];

export const ManufacturersInfo: Partial<
  Record<Manufacturer, ManufacturerData>
> = {
  audi: {
    name: "Audi",
    affected: [
      { model: "A4 I et II (B5 et B6)", yearFrom: 1997, yearTo: 2001 },
      { model: "A4 II et III (B6 et B7)", yearFrom: 2003, yearTo: 2011 },
      { model: "A5 I", yearFrom: 2008, yearTo: 2012 },
      { model: "A6 II (C5)", yearFrom: 1997, yearTo: 2001 },
      { model: "A6 III (C6)", yearFrom: 2003, yearTo: 2011 },
      { model: "A8 I (D2)", yearFrom: 1997, yearTo: 2001 },
      { model: "Q5 I", yearFrom: 2008, yearTo: 2012 },
      { model: "R8 I et II", yearFrom: 2014, yearTo: 2017 },
      { model: "TT I", yearFrom: 1997, yearTo: 2001 },
      { model: "TT III", yearFrom: 2014, yearTo: 2017 },
    ],
    links: {
      hexagon: "https://www.audi.fr/fr/campagne-rappel-airbag-takata/",
      guadeloupe: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
      martinique: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
      guyane: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
      reunion: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
    },
  },
  bmw: {
    name: "BMW",
    affected: [
      { model: "Série 1 I (E81/E82/E87/E88)", yearFrom: 2004, yearTo: 2005 },
      { model: "Série 1 II 5 (F20/F21)", yearFrom: 2012, yearTo: 2015 },
      { model: "Série 2 I (F22/F23)", yearFrom: 2012, yearTo: 2015 },
      {
        model: "Série 2 Active Tourer I et Gran Tourer (F45 et F46)",
        yearFrom: 2012,
        yearTo: 2015,
      },
      { model: "Série 3 III et IV (E36 et E46)", yearFrom: 1997, yearTo: 1997 },
      {
        model: "Série 3 IV et V (E46 et E90/E91/E92/E93)",
        yearFrom: 2004,
        yearTo: 2005,
      },
      { model: "Série 4 I (F32/F33/F36)", yearFrom: 2012, yearTo: 2015 },
      { model: "Série 5 IV (E39)", yearFrom: 2001, yearTo: 2003 },
      { model: "Série 5 VI (F07/F10/F11)", yearFrom: 2012, yearTo: 2015 },
      { model: "Série 6 III (F12/F13/F06)", yearFrom: 2012, yearTo: 2015 },
      { model: "Série 7", yearFrom: 2008, yearTo: 2012 },
      { model: "X1 I (E84)", yearFrom: 2012, yearTo: 2015 },
      { model: "X3 I (E83)", yearFrom: 2004, yearTo: 2005 },
      { model: "X3 II (F25)", yearFrom: 2012, yearTo: 2015 },
      { model: "X4 I (F26)", yearFrom: 2012, yearTo: 2015 },
      { model: "X5 I (E53)", yearFrom: 2001, yearTo: 2004 },
      { model: "X5 II (E70)", yearFrom: 2006, yearTo: 2014 },
      { model: "X6 I (E71)", yearFrom: 2006, yearTo: 2014 },
    ],
    links: {
      hexagon:
        "https://vehiclerecall.bmwgroup.ceom/index.html?brand=bmw&market=ch&language=fr",
    },
  },
  cadillac: {
    name: "Cadillac",
    affected: [{ model: "Escalade", yearFrom: 2007, yearTo: 2013 }],
    links: {
      hexagon:
        "https://experience.gm.com/recalls/takata-airbag evar25=experiencegmrecallnav",
    },
  },
  chrysler: {
    name: "Chrysler",
    affected: [{ model: "300", yearFrom: 2005, yearTo: 2010 }],
    links: {
      hexagon: "https://www.mopar.com/fr-ca/my-vehicle/recalls/search.html",
    },
  },
  daihatsu: {
    name: "Daihatsu",
    affected: [{ model: "Charade", yearFrom: 2011, yearTo: 2011 }],
    links: {},
  },
  ferrari: {
    name: "Ferrari",
    affected: [
      { model: "458 et 488", yearFrom: 2010, yearTo: 2017 },
      { model: "California", yearFrom: 2009, yearTo: 2017 },
      { model: "F12", yearFrom: 2013, yearTo: 2017 },
      { model: "FF et GTC4Lusso", yearFrom: 2012, yearTo: 2017 },
    ],
    links: {
      hexagon: "https://www.ferrari.com/fr-FR/auto/recall-campaigns",
    },
  },
  fisker: {
    name: "Fisker",
    affected: [{ model: "Karma", yearFrom: 2012, yearTo: 2012 }],
    links: {},
  },
  ford: {
    name: "Ford",
    affected: [
      { model: "Galaxy II", yearFrom: 2006, yearTo: 2017 },
      { model: "GT II", yearFrom: 2005, yearTo: 2006 },
      { model: "Mondeo III et IV", yearFrom: 2007, yearTo: 2017 },
      { model: "Ranger I et II", yearFrom: 2004, yearTo: 2014 },
      { model: "S-Max I et II", yearFrom: 2014, yearTo: 2017 },
    ],
    links: {
      hexagon: "https://www.ford.fr/support/rappels",
      guadeloupe: "https://www.ford.fr/support/rappels",
      martinique: "https://www.ford.fr/support/rappels",
      guyane: "https://www.ford.fr/support/rappels",
      reunion: "https://www.ford.fr/support/rappels",
    },
  },
  honda: {
    name: "Honda",
    affected: [
      { model: "Accord VI, VII et VIII", yearFrom: 1998, yearTo: 2015 },
      { model: "Civic VI, VII, VIII et IX", yearFrom: 1996, yearTo: 2015 },
      { model: "CR-V I, II, III et IV", yearFrom: 1997, yearTo: 2015 },
      { model: "FR-V", yearFrom: 2004, yearTo: 2009 },
      { model: "Insight II", yearFrom: 2007, yearTo: 2014 },
      { model: "Jazz I, II et III", yearFrom: 2000, yearTo: 2015 },
      { model: "Legend IV", yearFrom: 2007, yearTo: 2010 },
      { model: "Stream", yearFrom: 2004, yearTo: 2005 },
    ],
    links: {
      hexagon: "https://auto.honda.fr/cars/owners/airbag-recall.html",
      guadeloupe: "https://auto.honda.fr/cars/owners/airbag-recall.html",
      martinique: "https://auto.honda.fr/cars/owners/airbag-recall.html",
      guyane: "https://auto.honda.fr/cars/owners/airbag-recall.html",
    },
  },
  jaguar: {
    name: "Jaguar",
    affected: [{ model: "XF I", yearFrom: 2007, yearTo: 2018 }],
    links: {
      hexagon: "https://topix.jaguar.jlrext.com/topix/vehicle/lookupForm",
      guadeloupe: "https://topix.jaguar.jlrext.com/topix/vehicle/lookupForm",
      martinique: "https://topix.jaguar.jlrext.com/topix/vehicle/lookupForm",
      guyane: "https://topix.jaguar.jlrext.com/topix/vehicle/lookupForm",
      reunion: "https://topix.jaguar.jlrext.com/topix/vehicle/lookupForm",
    },
  },
  jeep: {
    name: "Jeep",
    affected: [{ model: "Wrangler", yearFrom: 2007, yearTo: 2016 }],
    links: {
      hexagon: "https://www.mopar.com/fr-ca/my-vehicle/recalls/search.html",
      guadeloupe:
        "https://www.mopar.com/fr-ca/my-vehicle/recalls/results.html?OS=OnZhAD9ro3%2BE0BUbh4c3J1pVqbbb29yur7GlrSOjis4%3D",
      martinique:
        "https://www.mopar.com/fr-ca/my-vehicle/recalls/results.html?OS=OnZhAD9ro3%2BE0BUbh4c3J1pVqbbb29yur7GlrSOjis4%3D",
      guyane:
        "https://www.mopar.com/fr-ca/my-vehicle/recalls/results.html?OS=OnZhAD9ro3%2BE0BUbh4c3J1pVqbbb29yur7GlrSOjis4%3D",
      reunion:
        "https://www.mopar.com/fr-ca/my-vehicle/recalls/results.html?OS=OnZhAD9ro3%2BE0BUbh4c3J1pVqbbb29yur7GlrSOjis4%3D",
    },
  },
  "land rover": {
    name: "Land Rover",
    affected: [
      { model: "Discovery Sport", yearFrom: 2014, yearTo: 2016 },
      { model: "Range Rover III", yearFrom: 2006, yearTo: 2012 },
    ],
    links: {
      hexagon: "https://topix.landrover.jlrext.com/topix/vehicle/lookupForm",
      guadeloupe: "https://topix.landrover.jlrext.com/topix/vehicle/lookupForm",
      martinique: "https://topix.landrover.jlrext.com/topix/vehicle/lookupForm",
      guyane: "https://topix.landrover.jlrext.com/topix/vehicle/lookupForm",
      reunion: "https://topix.landrover.jlrext.com/topix/vehicle/lookupForm",
    },
  },
  lexus: {
    name: "Lexus",
    affected: [
      { model: "IS II", yearFrom: 2005, yearTo: 2014 },
      { model: "IS Cab", yearFrom: 2008, yearTo: 2012 },
      { model: "IS-F", yearFrom: 2008, yearTo: 2013 },
      { model: "LFA", yearFrom: 2012, yearTo: 2012 },
      { model: "SC430", yearFrom: 2001, yearTo: 2011 },
    ],
    links: {},
  },
  mazda: {
    name: "Mazda",
    affected: [
      { model: "2 II", yearFrom: 2007, yearTo: 2014 },
      { model: "6 I", yearFrom: 2007, yearTo: 2010 },
      { model: "B2500", yearFrom: 1996, yearTo: 1999 },
      { model: "BT-50 I", yearFrom: 2006, yearTo: 2011 },
      { model: "CX-7", yearFrom: 2007, yearTo: 2009 },
      { model: "RX-8", yearFrom: 2003, yearTo: 2010 },
      { model: "Xedos 6", yearFrom: 1996, yearTo: 1999 },
      { model: "Xedos 9", yearFrom: 1996, yearTo: 1999 },
    ],
    links: {
      hexagon:
        "https://www.mazda.fr/proprietaires/mon-vehicule/campagne-takata/#",
      guyane:
        "https://campagnerappel.guyane-automobile.com/rappel-de-vehicules/airbags-takata",
    },
  },
  mercedes: {
    name: "Mercedes",
    affected: [
      { model: "Classe A II (type 169)", yearFrom: 2004, yearTo: 2016 },
      {
        model: "Classe C II et III (types 203 et 204)",
        yearFrom: 2004,
        yearTo: 2016,
      },
      { model: "Classe E IV (types 207 et 212)", yearFrom: 2004, yearTo: 2016 },
      { model: "Classe M II (type 164)", yearFrom: 2004, yearTo: 2016 },
      { model: "Classe R", yearFrom: 2004, yearTo: 2016 },
      { model: "GL I (type 164)", yearFrom: 2004, yearTo: 2016 },
      { model: "SLK II (type 171)", yearFrom: 2004, yearTo: 2016 },
      { model: "SLS", yearFrom: 2004, yearTo: 2016 },
    ],
    links: {
      hexagon: "https://www.mercedesbenz.fr/passengercars/services/recall.html",
      guadeloupe: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
      guyane:
        "https://campagnerappel.guyane-automobile.com/rappel-de-vehicules/airbags-takata",
    },
  },
  mitsubishi: {
    name: "Mitsubishi",
    affected: [
      { model: "Colt V", yearFrom: 1996, yearTo: 2000 },
      { model: "I-MiEV", yearFrom: 2010, yearTo: 2013 },
      { model: "Pajero Pinin", yearFrom: 1998, yearTo: 1998 },
      { model: "Pajero", yearFrom: 1998, yearTo: 2000 },
    ],
    links: {
      hexagon: "https://www.paquetmitsubishi.com/rappels/rappels.html",
      guadeloupe: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
      guyane:
        "https://campagnerappel.guyane-automobile.com/rappel-de-vehicules/airbags-takata",
    },
  },
  nissan: {
    name: "Nissan",
    affected: [
      { model: "Almera II", yearFrom: 2001, yearTo: 2008 },
      { model: "Almera Tino", yearFrom: 2001, yearTo: 2005 },
      { model: "Maxima QX", yearFrom: 2000, yearTo: 2003 },
      { model: "Note I", yearFrom: 2005, yearTo: 2013 },
      { model: "Pathfinder II", yearFrom: 2001, yearTo: 2004 },
      { model: "Patrol V", yearFrom: 2001, yearTo: 2003 },
      { model: "Pick-Up", yearFrom: 2000, yearTo: 2003 },
      { model: "Terrano II", yearFrom: 2003, yearTo: 2004 },
      { model: "X-Trail I", yearFrom: 2001, yearTo: 2003 },
    ],
    links: {
      hexagon:
        "https://www.nissan.fr/etre-proprietaire-d-une-nissan/avis-de-rappel/takata-recall-campaign.html",
      martinique:
        "https://martinique.nissan.fr/services-apres-vente/avis-de-rappel/takata-recall-campaign.html",
      guyane:
        "https://campagnerappel.guyane-automobile.com/rappel-de-vehicules/airbags-takata",
    },
  },
  opel: {
    name: "Opel",
    affected: [
      { model: "Astra 3", yearFrom: 2005, yearTo: 2014 },
      { model: "Astra 4", yearFrom: 2009, yearTo: 2018 },
      { model: "Cascada", yearFrom: 2012, yearTo: 2018 },
      { model: "Meriva 2", yearFrom: 2009, yearTo: 2017 },
      { model: "Mokka 1", yearFrom: 2011, yearTo: 2018 },
      { model: "Vectra 3", yearFrom: 2003, yearTo: 2008 },
      { model: "Zafira 3", yearFrom: 2011, yearTo: 2016 },
    ],
    links: {
      hexagon: "https://www.opel.fr/apres-vente/campagne-de-rappel.html",
      guadeloupe: "https://www.opel.gp/apres-vente/check-vin.html",
      martinique: "https://www.opel.mq/apres-vente/check-vin.html",
      guyane: "https://www.opel.gf/apres-vente/check-vin.html",
      reunion: "https://www.opel.re/apres-vente/check-vin.html",
    },
  },
  peugeot: { name: "Peugeot" },
  renault: { name: "Renault" },
  seat: {
    name: "Seat",
    affected: [
      { model: "Leon 3", yearFrom: 2013, yearTo: 2015 },
      { model: "Toledo 4", yearFrom: 2013, yearTo: 2015 },
    ],
    links: {
      hexagon:
        "https://www.seat.fr/proprietaire/services-apres-vente/campagne-rappel-airbags-takata",
      guadeloupe: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
      reunion: "https://seat.re",
    },
  },
  skoda: {
    name: "Skoda",
    affected: [
      { model: "Citigo", yearFrom: 2012, yearTo: 2017 },
      { model: "Fabia II et III", yearFrom: 2012, yearTo: 2017 },
      { model: "Kodiaq", yearFrom: 2012, yearTo: 2017 },
      { model: "Octavia III", yearFrom: 2012, yearTo: 2017 },
      { model: "Rapid", yearFrom: 2012, yearTo: 2017 },
      { model: "Superb I et III", yearFrom: 2012, yearTo: 2017 },
      { model: "Yeti", yearFrom: 2012, yearTo: 2017 },
    ],
    links: {
      hexagon: "https://recallactions.skoda-auto.com/995/fr-fr/",
      guadeloupe: "https://www.sgdm.gp/rappel-de-vehicules/airbags-takata",
    },
  },
  stellantis: {
    name: "Stellantis (Citroën & DS)",
    words: ["stellantis", "citroen", "ds"],
    affected: [
      { model: "C3 II", yearFrom: 2008, yearTo: 2017 },
      { model: "C4 II", yearFrom: 2010, yearTo: 2018 },
      { model: "DS3 I", yearFrom: 2008, yearTo: 2019 },
      { model: "DS4 I", yearFrom: 2010, yearTo: 2017 },
      { model: "DS5", yearFrom: 2010, yearTo: 2018 },
    ],
    links: {
      hexagon: "https://www.citroen.fr/entretenir/campagnes-de-rappel.html",
      guadeloupe: "https://www.citroen.gp/entretenir/campagnes-de-rappel.html",
      martinique: "https://www.citroen.mq/services/campagnes-de-rappel",
      guyane: "https://www.citroen.gf/services/campagnes-de-rappel/",
      reunion: "https://citroen-campagne-de-rappel.re/",
    },
  },
  subaru: {
    name: "Subaru",
    affected: [
      { model: "Forester III", yearFrom: 2009, yearTo: 2012 },
      { model: "Impreza III", yearFrom: 2007, yearTo: 2014 },
      { model: "Legacy IV et V", yearFrom: 2006, yearTo: 2014 },
      { model: "Outback III et IV", yearFrom: 2006, yearTo: 2014 },
      { model: "Tribeca", yearFrom: 2006, yearTo: 2014 },
    ],
    links: {},
  },
  suzuki: {
    name: "Suzuki",
    affected: [{ model: "Grand Vitara", yearFrom: 1998, yearTo: 2000 }],
    links: {
      hexagon: "https://www.suzuki.fr/campagne-rappel",
    },
  },
  tesla: {
    name: "Tesla",
    affected: [{ model: "Model S", yearFrom: 2012, yearTo: 2016 }],
    links: {},
  },
  toyota: {
    name: "Toyota",
    affected: [
      { model: "Auris I", yearFrom: 2006, yearTo: 2012 },
      { model: "Avensis II", yearFrom: 2001, yearTo: 2011 },
      { model: "Avensis Verso", yearFrom: 2001, yearTo: 2011 },
      { model: "Celica VI", yearFrom: 1997, yearTo: 1999 },
      { model: "Corolla IX", yearFrom: 2001, yearTo: 2010 },
      { model: "Hilux VI", yearFrom: 2003, yearTo: 2005 },
      { model: "Hilux VII", yearFrom: 2011, yearTo: 2014 },
      { model: "PICNIC", yearFrom: 2001, yearTo: 2005 },
      { model: "RAV4 I", yearFrom: 1997, yearTo: 1999 },
      { model: "RAV4 II", yearFrom: 2003, yearTo: 2005 },
      { model: "Starlet V", yearFrom: 1997, yearTo: 1998 },
      { model: "Yaris I", yearFrom: 1998, yearTo: 1999 },
      { model: "Yaris II", yearFrom: 2001, yearTo: 2011 },
      { model: "Yaris III", yearFrom: 2011, yearTo: 2014 },
    ],
    links: {
      hexagon:
        "https://www.toyota.fr/votre-toyota/entretien/campagnes-de-rappel",
      guadeloupe: "https://www.toyota-guadeloupe.fr/campagne-de-rappel/",
      martinique: "https://toyota-martinique.com/Campagne-de-rappel",
      reunion: "https://www.toyota.re/takata/",
    },
  },
  volkswagen: {
    name: "Volkswagen",
    affected: [
      { model: "Beetle", yearFrom: 2012, yearTo: 2018 },
      { model: "Crafter", yearFrom: 2005, yearTo: 2016 },
      { model: "Eos", yearFrom: 2008, yearTo: 2014 },
      { model: "Fox", yearFrom: 2005, yearTo: 2009 },
      { model: "Golf IV", yearFrom: 1997, yearTo: 2000 },
      { model: "Golf V et VI", yearFrom: 2008, yearTo: 2014 },
      { model: "Multivan", yearFrom: 2008, yearTo: 2015 },
      { model: "Passat V", yearFrom: 1997, yearTo: 2000 },
      { model: "Passat VI et VII", yearFrom: 2005, yearTo: 2014 },
      { model: "Passat CC/CC", yearFrom: 2008, yearTo: 2014 },
      { model: "Polo IV et V", yearFrom: 2005, yearTo: 2014 },
      { model: "Sharan I et II", yearFrom: 2008, yearTo: 2014 },
      { model: "Tiguan", yearFrom: 2006, yearTo: 2017 },
      { model: "Transporter", yearFrom: 2008, yearTo: 2015 },
      { model: "Up", yearFrom: 2011, yearTo: 2012 },
    ],
    links: {
      hexagon:
        "https://www.volkswagen.fr/fr/entretenir-ma-volkswagen/action-de-rappel/rappel-69be-69ag-69dv.html",
      guadeloupe:
        "https://www.volkswagen.fr/fr/entretenir-ma-volkswagen/action-de-rappel/rappel-69be-69ag-69dv.html",
      martinique:
        "https://www.volkswagen.fr/fr/entretenir-ma-volkswagen/action-de-rappel/rappel-69be-69ag-69dv.html",
      guyane:
        "https://www.volkswagen.fr/fr/entretenir-ma-volkswagen/action-de-rappel/rappel-69be-69ag-69dv.html",
    },
  },
} as const;

// According to "Envoyé spécial", these brands are never affected by Takata airbags recalls
export const NeverAffectedManufacturers: string[] = [
  "peugeot",
  "renault",
] as const;
