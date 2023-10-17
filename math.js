const convertMinutesToHours = (minutes) => {
    if (minutes < 0) {
        return "";
    }

    if (minutes === 0) {
        return "";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
        return `${remainingMinutes} min${remainingMinutes === 1 ? '' : 's' + ' age'}`;
    }
    else if (remainingMinutes === 0) {
        return `${hours} hr${hours === 1 ? '' : 's' + ' ago'}`;
    }
    else if (hours === 0 && remainingMinutes === 0) {
        return '';
    }
    else {
        return `${hours} hr${hours === 1 ? '' : 's'} ${remainingMinutes} min${remainingMinutes === 1 ? '' : 's' + ' ago'}`;
    }
}

const noZero = (min) =>{
    const time = convertMinutesToHours(min);
    
    if(time === '0 mins age'){
        return '';
    }
    else{
        return time;
    }
}
