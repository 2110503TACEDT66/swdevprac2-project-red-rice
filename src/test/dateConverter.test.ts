import { convertTimeToISO } from "../utils/dateConverter";

describe('convertTimeToISO', () => {
    it('converts a time string to ISO format for the current date, accounting for timezone', () => {
      const inputTime = '14:30';
      const isoString = convertTimeToISO(inputTime) as string;
      const dateFromISO = new Date(isoString);
  
      // Get local time from the ISO date
      const hours = dateFromISO.getHours();
      const minutes = dateFromISO.getMinutes();
  
      // Split the original input time for comparison
      const [expectedHours, expectedMinutes] = inputTime.split(':').map(Number);
  
      expect(hours).toEqual(expectedHours);
      expect(minutes).toEqual(expectedMinutes);
    });
});
  
  
  