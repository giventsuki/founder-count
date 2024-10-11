const founderInput = document.querySelector(".founder-input");
const founderButton = document.querySelector(".founder-button");

const history = document.querySelector(".history");
let randomNumber = Math.floor(Math.random() * 100);
let attemps = 1;

alert('Число загадано. Введите свои догадки и нажмите на кнопку. Удачи!');

founderButton.addEventListener("click", () => {
  const userNumber = parseInt(founderInput.value); 
  if (isNaN(userNumber)) { 
    alert('Введите корректное число');
    return;
  }

  if (attemps <= 10) {
    alert(`Попытка номер ${attemps}`);

    if (userNumber > randomNumber) {
      alert(`Загаданное число меньше, осталось попыток ${10 - attemps}`);
    } else if (userNumber < randomNumber) {
      alert(`Загаданное число больше, осталось попыток ${10 - attemps}`);
    } else {
      alert(`Поздравляю, вы угадали число с ${attemps} попытки!`);
      const restart = prompt("Хотите начать заново? (да/нет)");
      if (restart.toLowerCase() === "да") {
        restartGame();
      } else {
        alert("Игра завершена");
        return;
      }
    }

    history.insertAdjacentHTML('afterbegin', `
      <p class="history-text">Попытка ${attemps}: ${userNumber}</p>
    `);
    attemps++;
    founderInput.value = ''; 
  } else {
    alert(`К сожалению, у вас закончились попытки. Загаданное число: ${randomNumber}`);
    const restart = prompt("Хотите начать заново? (да/нет)");
    if (restart.toLowerCase() === "да") {
      restartGame();
    } else {
      alert("Игра завершена");
    }
  }
});

// Функция перезапуска игры
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100);
  attemps = 1;
  history.innerHTML = ''; 
  founderInput.value = ''; 
  alert('Число загадано. Введите свои догадки и нажмите на кнопку. Удачи!');
}
