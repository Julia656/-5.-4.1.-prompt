let userName = prompt("Введіть своє ім'я:");


if (userName && userName.trim() !== "") {

    alert(`Hello, ${userName}! How are you?`);
} else {
 
    alert("Hello, [noname]! How are you?");
}