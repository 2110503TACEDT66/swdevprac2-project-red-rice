function convertTimeToISO(time: string) {
    const today = new Date();
    console.log(`Today's date: ${today.toString()}`); // Log the current date

    const [hours, minutes] = time.split(':').map(Number);
    console.log(`Hours: ${hours}, Minutes: ${minutes}`); // Log the extracted hours and minutes

    const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
    console.log(`Constructed Date: ${dateWithTime.toString()}`); // Log the constructed date

    if (isNaN(dateWithTime.getTime())) {
        console.error('Constructed date is invalid:', dateWithTime);
        return null; // Handle invalid date construction
    }

    return dateWithTime.toISOString();
}

export { convertTimeToISO}