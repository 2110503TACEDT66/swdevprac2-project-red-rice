export interface reservation {
    ID: string;
    name: string;
    table: number;
    dateTime: string;
    state: 'Pending' | 'Canceled' | 'Confirmed' | string; // More state options
    restaurant: any;
    picture: string;
}
