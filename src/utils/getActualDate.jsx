// Function to get the current date and time formatted as "DD-MM-YYYY HH:mm:ss".
export const getActualDate = () => {
    // Get the current date and time.
    const actualDate = new Date();

    // Extract individual components of the date and time.
    let day = actualDate.getDate();
    let month = actualDate.getMonth() + 1;
    let year = actualDate.getFullYear();
    let hour = actualDate.getHours();
    let minute = actualDate.getMinutes();
    let second = actualDate.getSeconds();

    // Add leading zeros for single-digit day, month, hour, minute, and second.
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    // Format the date as "DD-MM-YYYY HH:mm:ss".
    const formatedDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

    return formatedDate;
};
