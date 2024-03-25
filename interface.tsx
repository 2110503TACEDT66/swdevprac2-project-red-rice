export interface reservation {
    id: string;
    name: string;
    table: number;
    time: string;
    state: "Pending" | "Canceled" | "Confirmed" | string; // More state options
    picture: string;
  }