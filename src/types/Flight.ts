// types/Flight.ts
export interface Flight {
    number: string;
    origin: string;
    destination: string;
    scheduledDepartureTime: string;
    status: string;
    airline?: string; // Optional if not always available
    type?: string; // Optional if not always available
  }
  