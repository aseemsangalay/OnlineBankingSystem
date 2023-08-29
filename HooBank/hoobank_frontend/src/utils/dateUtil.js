export const formatDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today =  dd + '-' + mm + '-' + yyyy;
    return today;
}

export const formatReverseDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

export const getAccountNumber = () => {
    var time = new Date();
    var dd = String(time.getDate()).padStart(2, '0');
    var mm = String(time.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yy = time.getFullYear().toString().substring(2);
    var hh = String(time.getHours()).padStart(2, '0');
    var mi = String(time.getMinutes()).padStart(2, '0'); //January is 0!
    var random = Math.floor(Math.random() * 90 + 10);

    time = dd + mm + yy + hh + mi + random;
    return time;
}