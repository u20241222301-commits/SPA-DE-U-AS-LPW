import { webLightTheme } from "@fluentui/react-components";

export const customLuxuryTheme = {
  ...webLightTheme,
  colorBrandBackground: "#5B6B82",
  colorBrandBackgroundHover: "#475569",
  colorBrandBackgroundPressed: "#334155",
  colorBrandStroke1: "#C084FC",
  colorCompoundBrandStroke: "#EC4899",
  fontFamilyBase: "'Plus Jakarta Sans', sans-serif",
};

export const promoItems = [
  "✦ 20% OFF EN LUMIÈRE SILVER CHROME RITUAL",
  "🥂 CHAMPAGNE & INFUSIONES BOTÁNICAS DE CORTESÍA",
  "💎 PIGMENTOS TORNASOL & BIO-GEL ESPEJO EUROPEO",
  "👑 RESERVA TU EXPERIENCIA PRIVADA HAUTE COUTURE",
];

export const recommendedServices = [
  {
    id: "manicura-silver-chrome",
    tag: "MÁS SOLICITADO",
    icon: "💎",
    name: "Manicura Rusa Silver Chrome",
    duration: "75 MIN",
    price: "$145.000",
    accentColor: "#F472B6",
    bottleShade: "#E2E8F0",
    shortNote: "Limpieza profunda + Bio-Gel Europeo + Efecto Espejo",
    description:
      "Perfección anatómica de cutícula con puntas de diamante rusas, nivelación estructural en bio-gel hipoalergénico y sellado con pigmento de plata líquida y destellos tornasol.",
    includes: [
      "Manicura rusa de alta precisión microscópica",
      "Nivelación con Bio-Gel 12-Free europeo",
      "Acabado Silver Mirror con velo rosa/lila tornasol",
      "Hidratación con elixir de péptidos y perla",
    ],
  },
  {
    id: "ritual-rose-lila",
    tag: "EXPERIENCIA SENSORIAL",
    icon: "🌸",
    name: "Ritual Spa Rose & Lila Tornasol",
    duration: "90 MIN",
    price: "$180.000",
    accentColor: "#C084FC",
    bottleShade: "#F4B8D4",
    shortNote: "Exfoliación de cuarzo + Mascarilla de seda + Esmaltado VIP",
    description:
      "Ceremonia de rejuvenecimiento para manos con exfoliación de micro-cristales de cuarzo rosa, envoltura tibia de seda lila botánica, masaje relajante y esmaltado tornasol de larga duración.",
    includes: [
      "Exfoliación mineral con cuarzo rosa y plata coloidal",
      "Mascarilla térmica de seda lila y ácido hialurónico",
      "Masaje linfático de manos y antebrazos (20 min)",
      "Esmaltado gel tornasol con brillo diamante",
    ],
  },
  {
    id: "esculpido-haute-couture",
    tag: "ALTA COSTURA",
    icon: "✨",
    name: "Esculpido Cristal & Joyería",
    duration: "120 MIN",
    price: "$220.000",
    accentColor: "#EC4899",
    bottleShade: "#C4B5FD",
    shortNote: "Extensión ultraligera en gel + Cristales tornasol",
    description:
      "Arquitectura de uñas esculpidas a medida en gel cristal de última generación, con diseño de encapsulado plateado, reflejos aurora boreal e incrustación de cristales certificados.",
    includes: [
      "Esculpido anatómico sin daño a la uña natural",
      "Diseño personalizado Silver, Rosa & Lila Tornasol",
      "Incrustación de cristales de corte diamante",
      "Garantía de brillo espejo intacto por 21 días",
    ],
  },
  {
    id: "pedicura-imperial",
    tag: "RELAX ABSOLUTO",
    icon: "👑",
    name: "Pedicura Imperial & Parafina",
    duration: "85 MIN",
    price: "$165.000",
    accentColor: "#A855F7",
    bottleShade: "#93C5FD",
    shortNote: "Suite privada + Parafina tibia + Brillo Espejo",
    description:
      "Descanso absoluto en sillón zero-gravity con baño efervescente de sales del Himalaya, terapia de parafina tibia botánica, reflexología podal y esmaltado plateado tornasol.",
    includes: [
      "Baño sensorial con pétalos, sales y bruma lila",
      "Terapia de parafina botánica para suavidad extrema",
      "Limpieza profunda en seco y esmaltado gel espejo",
      "Copa de Champagne Rosé o Mocktail de autor",
    ],
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Valentina Montoya",
    role: "Clienta VIP · Medellín",
    service: "Manicura Rusa Silver Chrome",
    rating: 5,
    date: "Hace 2 días",
    accent: "pink",
    comment:
      "El acabado plateado con reflejos rosa y lila tornasol parece sacado de una pasarela en París. La precisión en la cutícula es impecable y tres semanas después siguen brillando como un espejo.",
  },
  {
    id: 2,
    name: "Camila Restrepo",
    role: "Novia Haute Couture",
    service: "Esculpido Cristal & Joyería",
    rating: 5,
    date: "Hace 1 semana",
    accent: "lilac",
    comment:
      "Me hice las uñas para mi boda en Lumière y fue una experiencia mágica. Desde el champagne de bienvenida hasta los cristales tornasol hechos a medida, todo el mundo me preguntó por mis uñas.",
  },
  {
    id: 3,
    name: "Isabella Londoño",
    role: "Miembro Privée Club",
    service: "Ritual Spa Rose & Lila Tornasol",
    rating: 5,
    date: "Hace 2 semanas",
    accent: "pink",
    comment:
      "El masaje con mascarilla tibia de seda lila y el aroma del spa te desconectan por completo. Mis manos quedaron súper suaves y el tono perla tornasol resalta precioso con cualquier luz.",
  },
];

export const contactInfo = {
  address: "Av. El Poblado · Milla de Oro, Torre Lumière Piso 8, Medellín",
  hours: [
    { days: "Lunes a Viernes", time: "9:00 AM – 8:00 PM" },
    { days: "Sábados", time: "9:00 AM – 7:00 PM" },
    { days: "Domingos & Festivos", time: "10:00 AM – 5:00 PM (Cita VIP)" },
  ],
  phone: "+57 (300) 894-2100",
  email: "concierge@lumierespa.co",
  instagram: "@lumiere.nailspa",
};

export const sparkles = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  top: `${(i * 17 + 7) % 95}%`,
  left: `${(i * 23 + 11) % 96}%`,
  size: `${10 + (i % 4) * 6}px`,
  delay: `${(i * 0.6).toFixed(1)}s`,
  duration: `${3.2 + (i % 4) * 1.1}s`,
}));

export const ribbonOneItems = [
  "💎 ACABADO CROMO PLATEADO",
  "✨ DESTELLOS ROSA & LILA TORNASOL",
  "🌿 PARAFINA BOTÁNICA TIBIA",
  "💅 MANICURA RUSA DE PRECISIÓN",
  "🌸 BIO-GEL EUROPEO HIPOALERGÉNICO",
];

export const ribbonTwoItems = [
  "🥂 CHAMPAGNE & MOCKTAIL BAR",
  "💖 BRILLO ESPEJO HOLOGRÁFICO",
  "⭐ EXPERIENCIA HAUTE COUTURE",
  "👑 ELIXIRES DE PLATA & PERLA",
  "✨ AROMATERAPIA FRANCESA",
];
