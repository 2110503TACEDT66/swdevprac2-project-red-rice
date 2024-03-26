import { convertTimeToISO } from '../utils/dateConverter';

describe('convertTimeToISO', () => {
  it('converts a time string to ISO format for the current date', () => {
    const time = '14:30';
    const isoString = convertTimeToISO(time);

    // Extract the date part and the time part from the ISO string
    const [date, timePart] = isoString.split('T');
    const [hours, minutes] = timePart.split(':').map(Number);

    // Extract the current date to compare
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1; // Months start at 0
    const dd = today.getDate();

    // Leading zeros for month and day
    const new_mm = mm < 10 ? `0${mm}` : mm;
    const new_dd = dd < 10 ? `0${dd}` : dd;

    // Check if the date matches today's date
    expect(date).toEqual(`${yyyy}-${new_mm}-${new_dd}`);

    // Check if the time matches the input time
    expect(hours).toEqual(14);
    expect(minutes).toEqual(30);
  });

});
