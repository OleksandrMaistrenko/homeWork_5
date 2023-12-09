// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

// Не забуваємо про валідацію того, що вводить юзер.

// І в пункті про долар юзер нічого не вводить

const exchangeRate = 40;

for (let i = 10; i <= 100; i += 10) {
  const result = exchangeRate * i;

  console.log(`${i} dollars = ${result} hrivnas`);
}

// Юзер вводить число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий цілий ступінь. Наприклад, числа 9, 81 можна отримати, бо це 3^2 і 3^4, а 13 - не можна.

let enterUserValue = +prompt(" Enter number");

if (!isNaN(enterUserValue) && enterUserValue > 0) {
  while (enterUserValue > 3) {
    enterUserValue /= 3;
  }

  if (enterUserValue === 3) {
    alert("Okey");
  } else {
    alert("bull sheet");
  }
} else {
  alert("Write correct value please");
}

// Юзер вводить число. З'ясувати, чи є воно простим. Простим називається ціле число, більше ніж 1, яке не має інших дільників, крім 1 і себе (1 не є простим).

let simpleNumber = +prompt("Enter number");

if (!isNaN(simpleNumber)) {
  if (simpleNumber > 1) {
    let isSimple = true;

    for (let j = 2; j < simpleNumber; j++) {
      if (simpleNumber % j === 0) {
        isSimple = false;
        break;
      }
    }

    if (isSimple) {
      alert("Simple value");
    } else {
      alert("not simple value");
    }
  } else {
    alert("not simple value");
  }
} else {
  alert("incorect input");
}
