function toHoursMinutesSeconds(value) {
    const hours = Math.floor(value/3600);
    const minutes = Math.floor((value % 3600)/60);
    const seconds = value % 60;

    return `${hours}:${minutes}:${seconds}`;
}

console.log(toHoursMinutesSeconds(3600));
console.log(toHoursMinutesSeconds(3720));
console.log(toHoursMinutesSeconds(3725));
