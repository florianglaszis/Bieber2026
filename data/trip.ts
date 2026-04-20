import type { Trip } from "@/types/trip";

export const trip: Trip = {
  name: "Bieber 2026",
  destination: "Lake Bieber, Bavaria",
  tagline: "Sun, friends, and absolutely zero plans to be productive.",
  departureDate: "2026-07-10",
  returnDate: "2026-07-12",
  coverEmoji: "🏖️",

  schedule: [
    {
      date: "2026-07-10",
      title: "Arrival Day",
      activities: [
        {
          time: "14:00",
          title: "Convoy departs Munich",
          location: "Munich Central Station",
          notes: "Meet at the south exit. Don't be the one who's late.",
          mapLink: "https://maps.google.com/?q=Munich+Central+Station",
        },
        {
          time: "16:30",
          title: "Check in & settle",
          location: "Lake House",
          notes: "Key under the flower pot by the back door.",
        },
        {
          time: "18:00",
          title: "First swim & sunset beers",
          location: "Private lake jetty",
        },
        {
          time: "20:30",
          title: "BBQ dinner",
          location: "Lake House garden",
          notes: "Veggie skewers + bratwurst. Someone bring the good mustard.",
        },
      ],
    },
    {
      date: "2026-07-11",
      title: "Full Day of Nothing Useful",
      activities: [
        {
          time: "09:00",
          title: "Slow breakfast",
          location: "Lake House kitchen",
          notes: "Pastries picked up from the village bakery the night before.",
        },
        {
          time: "11:00",
          title: "Kayaking",
          location: "Lake Bieber rental dock",
          notes: "4 kayaks pre-booked. Bring water shoes.",
          mapLink: "https://maps.google.com/?q=Lake+Bieber",
        },
        {
          time: "13:30",
          title: "Lunch at the Seerestaurant",
          location: "Seerestaurant am Biebersee",
          notes: "Reservation under 'Müller' for 8 people.",
          mapLink: "https://maps.google.com/?q=Seerestaurant+Biebersee",
        },
        {
          time: "16:00",
          title: "Afternoon swim & hammock time",
          location: "Private lake jetty",
        },
        {
          time: "19:00",
          title: "Card games & wine",
          location: "Lake House living room",
        },
      ],
    },
    {
      date: "2026-07-12",
      title: "Farewell Morning",
      activities: [
        {
          time: "09:00",
          title: "Final breakfast & coffee",
          location: "Lake House terrace",
        },
        {
          time: "10:30",
          title: "Pack up & check out",
          location: "Lake House",
          notes: "Leave the place as you found it — or better.",
        },
        {
          time: "11:30",
          title: "Drive back to Munich",
          location: "Lake House → Munich",
        },
      ],
    },
  ],

  accommodation: {
    name: "Lake House am Biebersee",
    address: "Seeweg 12, 83700 Biebersee, Bavaria",
    checkIn: "15:00",
    checkOut: "11:00",
    wifi: {
      network: "LakeHouse_Bieber",
      password: "sunshine2026",
    },
    hostName: "Klaus Huber",
    hostPhone: "+49 170 123 4567",
    bookingLink: "https://www.airbnb.com",
    notes:
      "Parking for 4 cars in the gravel driveway. No smoking indoors. Quiet hours after 23:00.",
  },

  crew: [
    {
      name: "Florian",
      arrivalTime: "2026-07-10T14:00",
      emoji: "🎸",
    },
    {
      name: "Anna",
      arrivalTime: "2026-07-10T14:00",
      dietary: "Vegetarian",
      emoji: "🌿",
    },
    {
      name: "Marco",
      arrivalTime: "2026-07-10T16:00",
      phone: "+49 160 987 6543",
      emoji: "🏄",
    },
    {
      name: "Sophie",
      arrivalTime: "2026-07-10T14:00",
      dietary: "Gluten-free",
      emoji: "📸",
    },
    {
      name: "Tobias",
      arrivalTime: "2026-07-10T15:00",
      phone: "+49 151 555 4321",
      emoji: "🍺",
    },
    {
      name: "Julia",
      arrivalTime: "2026-07-10T14:00",
      dietary: "Vegan",
      emoji: "🧘",
    },
    {
      name: "Felix",
      arrivalTime: "2026-07-10T17:00",
      phone: "+49 176 000 1111",
      emoji: "🚗",
      notes: "Arriving late from work — save him a bratwurst.",
    },
    {
      name: "Lena",
      arrivalTime: "2026-07-10T14:00",
      emoji: "🎉",
    },
  ],

  info: {
    emergencyContacts: [
      { label: "Emergency (EU)", number: "112" },
      { label: "Police Germany", number: "110" },
      { label: "Host Klaus", number: "+49 170 123 4567" },
      { label: "Nearest hospital", number: "+49 8051 60 0" },
    ],
    groupChatLink: "https://chat.whatsapp.com/placeholder",
    expensesLink: "https://secure.splitwise.com/groups/placeholder",
    localTips: [
      "The village bakery opens at 07:00 — perfect for early risers.",
      "Bring cash for the kayak rental; they don't take cards.",
      "Sunscreen is non-negotiable — the lake reflection is brutal.",
      "Mosquitoes are active at dusk; pack repellent.",
      "The supermarket in Miesbach is 20 min away and open until 20:00.",
    ],
    packingList: [
      {
        category: "Essentials",
        items: ["Passport / ID", "Health insurance card", "Cash & card", "Phone charger", "Meds"],
      },
      {
        category: "Clothing",
        items: [
          "Swimwear (× 2)",
          "Light jacket for evenings",
          "Comfortable shoes",
          "Change of clothes for each day",
        ],
      },
      {
        category: "Beach & Lake",
        items: ["Towel", "Sunscreen SPF 50+", "Sunglasses", "Water shoes", "Dry bag"],
      },
      {
        category: "Extras",
        items: ["Bluetooth speaker", "Card game", "Book / Kindle", "Reusable water bottle"],
      },
    ],
  },
};
