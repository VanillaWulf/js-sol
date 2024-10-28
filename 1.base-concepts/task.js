// Активируйте строгий режим c помощью строки "use strict";.

"use strict";

function solveEquation(a, b, c) {
  // Вычислите дискриминант по формуле b²-4*a*c. Для возведения в степень используйте оператор — ** или функцию Math.pow.
  const discriminant = (b ** 2) - (4 * a * c);
  if (discriminant < 0) {
    // Если дискриминант меньше нуля, то корней нет (пустой массив).
    return [];
  } else if (discriminant === 0) {
    // Если дискриминант равен нулю, то корень один. Его нужно вычислить и вернуть из функции (массив с одним корнем). Формула для вычисления корня: -b/(2*a).
    const x = -b / (2 * a);
    return [x];
  } else {
    // Если дискриминант больше нуля, то существует два решения уравнения. Их нужно вычислить и вернуть из функции — массив с двумя корнями: (-b + Math.sqrt(d) )/(2*a) и (-b - Math.sqrt(d) )/(2*a).
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  }
}

// Реализуйте функцию solveEquation, которая принимает три аргумента: a, b, c — коэффициенты квадратного уравнения.
console.log(solveEquation(1, 2, 1)); // [ -1 ]
console.log(solveEquation(1, 5, 6)); // [ -2, -3 ]
console.log(solveEquation(1, -1, -6)); // [ 3, -2 ]

// "use strict";
// Реализуйте функцию calculateTotalMortgage, которая принимает четыре аргумента: percent, contribution, amount и countMonths.

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  /*обработка типов*/
  if (typeof percent !== "number") {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (typeof contribution !== "number") {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (typeof amount !== "number") {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  if (typeof countMonths !== "number") {
    return `Параметр "Количество месяцев" содержит неправильное значение "${countMonths}"`;
  }

  /*можно так
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return "Ошибка ввода данных";
  }

  if (percent < 0 || percent > 100) {
    return "Процентная ставка должна быть в диапазоне от 0 до 100";
  }
  */

  //Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную.
  const percentPerMonth = percent / 100 / 12;

  // Посчитайте тело кредита — сумму, которую нужно вернуть банку (сумма кредита минус первоначальный взнос).
  const loanBody = amount - contribution;
  // Ежемесячная оплата рассчитывается по формуле: Платёж = S * (P + (P / (((1 + P)^n) - 1))), где: S — тело кредита, P — 1/12 процентной ставки (от 0 до 1), n — количество месяцев, ^ — возведение в степень. Для возведения в степень используйте оператор — ** или функцию Math.pow.
  const monthlyPayment = loanBody * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1));
  //   Посчитайте общую сумму, которую придётся заплатить клиенту.
  // Округлите результат до двух значений после запятой. Результат округления должен быть числом - или + но тогда могут быть проблемы в переводе.
  const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));


  // Верните результат из функции. Результатом функции должно быть значение числового типа.
  return totalAmount;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52