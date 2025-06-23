function TimeAtCurrentJob(){
    let startingDate = Date.parse("2024-09-09");
    let currentDate = Date.now();
    let difference = currentDate - startingDate;
    let days = Math.round(difference / (1000 * 60 * 60 *24));
    let string = "Year(s)";
    if (days < 365) {
        string = "day(s)"
    }
    else{
        days = Math.floor(days/365);
    }
    const dateElement = document.getElementById("numberOfYears");
    dateElement.textContent = `${days} ${string}`;
}

window.addEventListener("DOMContentLoaded", () => {
    TimeAtCurrentJob();
})