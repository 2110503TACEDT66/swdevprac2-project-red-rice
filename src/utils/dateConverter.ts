function convertTimeToISO(time: string) {
    const today = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const dateWithTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        hours,
        minutes
    );

    return dateWithTime.toISOString();
}

export { convertTimeToISO };
