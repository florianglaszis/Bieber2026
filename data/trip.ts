import type { Trip } from "@/types/trip";

export const trip: Trip = {
  name: "10 Jahre Durstige Bieber - Koblenz 2026",
  destination: "Koblenz, Rheinland-Pfalz",
  tagline: "Budapest, Berlin oder Mallorca...",
  departureDate: "2026-06-04",
  returnDate: "2026-06-07",
  coverEmoji: "🍺",

  schedule: [
    {
      date: "2026-06-04",
      title: "Tag 1 - Wen trifft es als Erstes?",
      activities: [
        {
          time: "07:45",
          title: "Treff am Bahnhof",
          location: "Bahnhof Rheda-Wiedenbrück",
          notes: "Bier und Bäckerei-Sachen – mit guter Stimmung in den Trip starten.",
          mapLink: "https://maps.google.com/?q=Bahnhof+Rheda-Wiedenbr%C3%BCck",
        },
        {
          time: "08:15",
          title: "Abfahrt nach Koblenz",
          location: "Bahnhof Rheda-Wiedenbrück",
          notes: "Auf der Zugtoilette eine rauchen.",
          mapLink: "https://maps.google.com/?q=Bahnhof+Rheda-Wiedenbr%C3%BCck",
        },
        {
          time: "11:46",
          title: "Ankunft in Koblenz",
          location: "Hauptbahnhof Koblenz",
          notes: "Wildpinkeln & checken ob noch alle leben.",
          mapLink: "https://maps.google.com/?q=Hauptbahnhof+Koblenz",
        },
        {
          time: "12:00",
          title: "Deutsches Eck",
          location: "Deutsches Eck, Koblenz",
          notes: "Bier und Cocktails in Massen – in der Sonne sitzen und Blödsinn reden.",
          mapLink: "https://maps.google.com/?q=Deutsches+Eck+Koblenz",
        },
        {
          time: "ab 15:00",
          title: "Check-In Wohnungen",
          location: "Friedrich-Ebert-Ring 46, 56068 Koblenz",
          notes: "Kurz die Kontrolle zurückgewinnen – bevor sie für die nächsten Tage wieder weg ist.",
          mapLink: "https://maps.google.com/?q=Friedrich-Ebert-Ring+46,+56068+Koblenz",
        },
        {
          time: "18:00",
          title: "Essen im Alten Brauhaus",
          location: "Altes Brauhaus Koblenz",
          notes: "Am Tisch einschlafen aber trotzdem noch ein Bier bestellen.",
          mapLink: "https://maps.google.com/?q=Altes+Brauhaus+Koblenz",
        },
        {
          time: "20:00",
          title: "Schiffchen & Spökes",
          location: "An d. Liebfrauenkirche 21, 56068 Koblenz",
          mapLink: "https://maps.google.com/?q=An+d.+Liebfrauenkirche+21,+56068+Koblenz",
          location2: "Weißer G. 19-25, 56068 Koblenz",
          mapLink2: "https://maps.google.com/?q=Wei%C3%9Fer+G.+19-25,+56068+Koblenz",
          notes: "Ab jetzt machen wir was wir wollen – so lange wir wollen.",
        },
      ],
    },
    {
      date: "2026-06-05",
      title: "Tag 2 – Strand, Sonne & Sundowner",
      activities: [
        {
          time: "10:00–12:00",
          title: "Frühstück im Alten Brauhaus",
          location: "Altes Brauhaus Koblenz",
          notes: "Hangover-Frühstück – mit frisch gezapftem Bier und Prosecco wieder auf die Beine kommen.",
          mapLink: "https://maps.google.com/?q=Altes+Brauhaus+Koblenz",
        },
        {
          time: "11:45",
          title: "Taxi zum Stattstrand",
          notes: "Taxi vorher bestellen – der Stattstrand öffnet um 12 Uhr, pünktlich dabei sein.",
        },
        {
          time: "12:00",
          title: "Stattstrand Koblenz",
          location: "Stattstrand Koblenz",
          notes: "Sonne, Drinks, am Wasser chillen – mehr braucht's nicht.",
          mapLink: "https://maps.google.com/?q=Stattstrand+Koblenz",
        },
        {
          time: "16:00",
          title: "Taxi zur Wohnung",
          location: "Friedrich-Ebert-Ring 46, 56068 Koblenz",
          mapLink: "https://maps.google.com/?q=Friedrich-Ebert-Ring+46,+56068+Koblenz",
          notes: "Duschen und umziehen – fit machen für die Bootstour.",
        },
        {
          time: "18:00–22:00",
          title: "Sundowner Bootstour",
          location: "Anlegestelle Konrad-Adenauer-Ufer",
          notes: "4 Stunden auf dem Rhein mit Blick auf die Festung – Tickets sind bereits gebucht. Drinks an Bord, Prost!",
          mapLink: "https://maps.google.com/?q=Konrad-Adenauer-Ufer+Koblenz",
        },
        {
          time: "ab 22:00",
          title: "Circus Maximus (optional)",
          location: "Circus Maximus, Koblenz",
          notes: "ABBA Party – wer noch Energie hat, tanzt weiter. Freiwillig, aber legendär.",
          mapLink: "https://maps.google.com/?q=Circus+Maximus+Koblenz",
        },
      ],
    },
    {
      date: "2026-06-06",
      title: "Tag 3 – Weinland Winningen",
      activities: [
        {
          time: "10:00–11:45",
          title: "Frühstück im Alex",
          location: "Alex Koblenz",
          notes: "Mit Prosecco in den Tag – weil Samstag das verdient.",
          mapLink: "https://maps.google.com/?q=Alex+Restaurant+Koblenz",
        },
        {
          time: "11:45",
          title: "Spaziergang zum Bahnhof",
          location: "Koblenz Hauptbahnhof",
          mapLink: "https://maps.google.com/?q=Hauptbahnhof+Koblenz",
        },
        {
          time: "12:25",
          title: "Zug nach Winningen",
          location: "Koblenz Hbf → Winningen",
          notes: "Kurze Fahrt ins Weindorf an der Mosel.",
        },
        {
          time: "12:45",
          title: "Weingut Weyh",
          location: "Weingut Weyh, Winningen",
          notes: "Erster Stopp im Weindorf – 5 verschiedene Weine direkt an der Quelle probieren. Wer danach noch gerade steht, weiter geht's.",
          mapLink: "https://maps.google.com/?q=Weingut+Weyh+Winningen",
        },
        {
          time: "15:30",
          title: "Weingut Löwensteinhof",
          location: "Weingut Löwensteinhof, Winningen",
          notes: "Zweite Runde – noch mehr Riesling, noch mehr Aussicht über die Mosel. Der Zug hat keine Bremse.",
          mapLink: "https://maps.google.com/?q=Weingut+L%C3%B6wensteinhof+Winningen",
        },
        {
          time: "19:00",
          title: "Abendessen im Poseidon",
          location: "Restaurant Poseidon, Koblenz",
          notes: "Ouzo zum Einstieg, Gyros auf den Tisch – nach dem Weintag ordentlich auftanken bevor die Nacht beginnt.",
          mapLink: "https://maps.google.com/?q=Restaurant+Poseidon+Koblenz",
        },
        {
          time: "ab 22:00",
          title: "Circus Maximus (optional)",
          location: "Circus Maximus, Koblenz",
          notes: "90er Party – Backstreet Boys, Britney, volle Tanzfläche und Flaschen Vodka. Wer mitmacht, wird es bereuen.",
          mapLink: "https://maps.google.com/?q=Circus+Maximus+Koblenz",
        },
      ],
    },
    {
      date: "2026-06-07",
      title: "Tag 4 – Abreisetag",
      activities: [
        {
          time: "10:00",
          title: "Frühstück im Ulrikes Kulturbackhaus",
          location: "Ulrikes Kulturbackhaus, Koblenz",
          notes: "Hangover – checken ob noch alle leben.",
          mapLink: "https://maps.google.com/?q=Ulrikes+Kulturbackhaus+Koblenz",
        },
        {
          time: "bis 11:00",
          title: "Check-out",
          location: "Friedrich-Ebert-Ring 46, 56068 Koblenz",
          mapLink: "https://maps.google.com/?q=Friedrich-Ebert-Ring+46,+56068+Koblenz",
          notes: "Checken ob alle noch dabei sind – und dann ab nach Hause.",
        },
        {
          time: "12:13",
          title: "Abfahrt nach Rheda",
          location: "Koblenz Hauptbahnhof",
          notes: "Zug gebucht – die Fieberträume beginnen in den nächsten Nächten.",
          mapLink: "https://maps.google.com/?q=Hauptbahnhof+Koblenz",
        },
      ],
    },
  ],

  accommodation: {
    name: "Ferienwohnung Koblenz Altstadt",
    address: "Friedrich-Ebert-Ring 46, 56068 Koblenz",
    checkIn: "15:00",
    checkOut: "11:00",
    wifi: {
      network: "Koblenz_Fewo",
      password: "mosel2026",
    },
    hostName: "Klaus Huber",
    hostPhone: "+49 170 123 4567",
    bookingLink: "https://www.airbnb.com",
    notes:
      "Parkplätze in der Tiefgarage Münzplatz (kostenpflichtig). Kein Rauchen in der Wohnung. Nachtruhe ab 22:00 Uhr.",
  },

  crew: [
    {
      name: "Florian",
      arrivalTime: "2026-06-04T14:00",
      emoji: "🎸",
    },
    {
      name: "Anna",
      arrivalTime: "2026-06-04T14:00",
      dietary: "Vegetarisch",
      emoji: "🌿",
    },
    {
      name: "Marco",
      arrivalTime: "2026-06-04T16:00",
      phone: "+49 160 987 6543",
      emoji: "🏄",
    },
    {
      name: "Sophie",
      arrivalTime: "2026-06-04T14:00",
      dietary: "Glutenfrei",
      emoji: "📸",
    },
    {
      name: "Tobias",
      arrivalTime: "2026-06-04T15:00",
      phone: "+49 151 555 4321",
      emoji: "🍺",
    },
    {
      name: "Julia",
      arrivalTime: "2026-06-04T14:00",
      dietary: "Vegan",
      emoji: "🧘",
    },
    {
      name: "Felix",
      arrivalTime: "2026-06-04T17:00",
      phone: "+49 176 000 1111",
      emoji: "🚗",
      notes: "Kommt direkt von der Arbeit – bitte ein Bier kalt stellen.",
    },
    {
      name: "Lena",
      arrivalTime: "2026-06-04T14:00",
      emoji: "🎉",
    },
  ],

  info: {
    emergencyContacts: [
      { label: "Notruf (EU)", number: "112" },
      { label: "Polizei Deutschland", number: "110" },
      { label: "Gastgeber Klaus", number: "+49 170 123 4567" },
      { label: "Klinikum Koblenz", number: "+49 261 499 0" },
    ],
    groupChatLink: "https://chat.whatsapp.com/placeholder",
    expensesLink: "https://secure.splitwise.com/groups/placeholder",
    localTips: [
      "Der Bäcker am Münzplatz öffnet um 07:00 – perfekt für Frühaufsteher.",
      "Bargeld für die Seilbahn zur Festung mitbringen – Kartenzahlung nicht immer möglich.",
      "Sonnencreme nicht vergessen – die Reflexion vom Rhein ist brutal.",
      "Moselwein unbedingt probieren – wir sind schließlich in der Region.",
      "Der nächste Supermarkt (REWE) ist 10 Minuten zu Fuß entfernt.",
    ],
    packingList: [
      {
        category: "Wichtiges",
        items: ["Ausweis / Reisepass", "Krankenversicherungskarte", "Bargeld & Karte", "Ladekabel", "Medikamente"],
      },
      {
        category: "Kleidung",
        items: [
          "Badekleidung (× 2)",
          "Leichte Jacke für den Abend",
          "Bequeme Schuhe",
          "Wechselkleidung für jeden Tag",
        ],
      },
      {
        category: "Sommer & Outdoor",
        items: ["Handtuch", "Sonnencreme LSF 50+", "Sonnenbrille", "Wasserfeste Tasche"],
      },
      {
        category: "Extras",
        items: ["Bluetooth-Lautsprecher", "Kartenspiel", "Buch / Kindle", "Wiederverwendbare Flasche"],
      },
    ],
  },
};
