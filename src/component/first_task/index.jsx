import { useEffect } from 'react';

export default function FisrtTask() {
  // Напишите реализацию createTimerAnimator
  // который будет анимировать timerEl

  useEffect(() => {
    const inputEl = document.querySelector('input');
    const buttonEl = document.querySelector('button');
    const timerEl = document.querySelector('span');
    // Вводимые значение секунд таймера
    inputEl.addEventListener('input', () => {
      inputEl.value = inputEl.value.replace(/\D+/g, '');
    });
    //  Ивент, который заберет данные из input-а, активирует таймер и подчистит input
    buttonEl.addEventListener('click', () => {
      const seconds = Number(inputEl.value);

      animateTimer(seconds);

      inputEl.value = '';
    });
    const createTimerAnimator = () => {
      return seconds => {
        if (seconds != 0) {
          var timer = setInterval(() => {
            // Меняю значение внутри span на посекнудное время
            timerEl.textContent = new Date(
              0,
              0,
              0,
              0,
              0,
              seconds
            ).toLocaleTimeString();
            seconds -= 1;
            if (seconds == -1) {
              // Проверка на то, что таймер закончил свой подсчет
              clearInterval(timer);
            }
          }, 1000);
        }
      };
    };

    const animateTimer = createTimerAnimator();
  }, []);

  return (
    <>
      <input placeholder="Seconds" type="text" />

      <button>Start</button>

      <br />
      <br />

      <span>hh:mm:ss</span>
    </>
  );
}
