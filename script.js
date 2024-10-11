const founderInput = document.querySelector(".founder-input");
const founderButton = document.querySelector(".founder-button");

const history = document.querySelector(".history");
let randomNumber = Math.floor(Math.random() * 10000);
let attemps = 1;
alert('Число загадано. Введите свои догадки и нажмите на кнопку. Удачи!')
founderButton.addEventListener("click", () => {
  userNumber = parseInt(founderInput.value);
  if (attemps <= 10) {
    alert(`Попытка номер ${attemps}`);
    if (userNumber > randomNumber)
      alert(`Загаданное число меньше, осталось попыток ${10 - attemps}`);
    else if (userNumber < randomNumber)
      alert(`Загаданное число больше, осталось попыток ${10 - attemps}`);
    else if (userNumber == randomNumber) {
      alert(`Поздравляю, вы угадали число с  ${10 - attemps} попытки`);
      const restart = prompt("Хотите начать заново? (да/нет)");
      if (restart.toLowerCase() == "да") {
        alert('Число загадано. Введите свои догадки и нажмите на кнопку. Удачи!')
        randomNumber = Math.floor(Math.random() * 1000);
        attempts = 1;
      } else {
        alert("Игра завершена");
        return;
      }
    }
    history.insertAdjacentHTML('afterbegin' , `
      <p class="history-text">${founderInput.value}</p>
    `)
    attemps++;
  } else {
    alert(
      `К сожалению у вас закончились попытки, Загаданное число ${randomNumber}`
    );
    const restart = prompt("Хотите начать заново? (да/нет)");
    if (restart.toLowerCase() == "да") {
      randomNumber = Math.floor(Math.random() * 10000);
      attempts = 1;
    } else {
      alert("Игра завершена");
    }
  }
});
