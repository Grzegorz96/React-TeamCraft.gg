export const getActualDate = () => {
    const actualDate = new Date();
    let day = actualDate.getDate();
    let month = actualDate.getMonth() + 1;
    let year = actualDate.getFullYear();
    let hour = actualDate.getHours();
    let minute = actualDate.getMinutes();
    let second = actualDate.getSeconds();

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    const formatedDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

    return formatedDate;
};
