export interface Activity {
  time: string;
  title: string;
  location: string;
  notes?: string;
  mapLink?: string;
}

export interface Day {
  date: string; // ISO 8601, e.g. "2026-07-10"
  title: string;
  activities: Activity[];
}

export interface Accommodation {
  name: string;
  address: string;
  checkIn: string; // e.g. "15:00"
  checkOut: string; // e.g. "11:00"
  wifi?: { network: string; password: string };
  hostName?: string;
  hostPhone?: string;
  photo?: string; // path relative to /public or external URL
  bookingLink?: string;
  notes?: string;
}

export interface Person {
  name: string;
  arrivalTime?: string;
  phone?: string;
  dietary?: string;
  emoji?: string;
  notes?: string;
}

export interface EmergencyContact {
  label: string;
  number: string;
}

export interface PackingItem {
  category: string;
  items: string[];
}

export interface TripInfo {
  emergencyContacts: EmergencyContact[];
  groupChatLink?: string;
  expensesLink?: string;
  localTips: string[];
  packingList: PackingItem[];
}

export interface Trip {
  name: string;
  destination: string;
  tagline: string;
  departureDate: string; // ISO 8601
  returnDate: string; // ISO 8601
  coverEmoji: string;
  schedule: Day[];
  accommodation: Accommodation;
  crew: Person[];
  info: TripInfo;
}
