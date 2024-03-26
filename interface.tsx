export interface reservation {
    ID: string;
    name: string;
    tableNum: number;
    dateTime: string;
    exitTime: string;
    state: 'Pending' | 'Canceled' | 'Confirmed' | string; // More state options
    restaurant: any;
    picture: string;
}
