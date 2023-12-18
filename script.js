function askForName() {
    var userName = prompt("Введи своє ім'я:");

    if (userName === null || userName.trim() === "") {
        askForName(); 
    } else {
       
        alert("Вітаю, " + userName + ", на моїй сторінці!");
    }
}