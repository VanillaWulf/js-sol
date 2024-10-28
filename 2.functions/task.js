// Создайте функцию, которая принимает на ввод массив.

function getArrayParams(...arr) {
  // Внутри функции задайте переменные min, max, sum, присвоив им некоторые первоначальные значения.
  let min = Infinity; // arr[0]
  let max = -Infinity;
  let sum = 0;

  // Пройдите по массиву циклом for и для каждого элемента определите:

  // max =  Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    // если элемент больше предыдущего максимума, то максимум становится равен элементу;
    // /* 2 5 1 */
    //    0 1 2 < 3
    //     min 2 max 2
    //     min 2 max 5
    //     min 1 max 5

    if (arr[i] > max) {
      max = arr[i]
    }

    // если элемент меньше предыдущего минимума, то минимум становится равен элементу;

    if (arr[i] < min) {
      min = arr[i];
    }

    // добавляем элемент к сумме sum для последующего вычисления среднего.
    sum += arr[i];
  }

  // После прохождения цикла (п. 3) или использования другого подхода (п. 4), функция должна возвращать объект вида {max:..., min: ..., avg:...}, то есть минимальное, максимальное и средние значения. Чтобы вычислить среднее, надо сумму элементов поделить на их количество. Среднее надо округлить до двух знаков после запятой. Для округления используйте toFixed. Заметьте, toFixed возвращает string. Так как вам нужно вернуть число (number), то необходимо дополнительное преобразование значения к числу.


  const avg = +(sum / arr.length).toFixed(2);
  return { max: max, min: min, avg: avg };
  // const arrSum = arr.reduce((acc, curr) => acc + curr, 0); 
  // const avg = arrSum / arr.length;
  // return {max: Math.max(...arr), min: Math.min(...arr), avg: avg}
}

console.log(getArrayParams(-99, 99, 10), '{ min: -99, max: 99, avg: 3.33') // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10), '{ min: -100, max: 10, avg: -16.80 }')  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5), 'expect { min: 5, max: 5, avg: 5.00 }')  // { min: 5, max: 5, avg: 5 }

// function testCase() {
//   console.log('test ', getArrayParams(1, 2, 3), ' res: ', '{ min: 1, max: 2, avg: 2');
// }

// testCase();


// Напишите функцию summElementsWorker, которая должна находить сумму элементов массива и возвращать её. Суммирование элементов можно реализовать аналогично первому заданию c помощью цикла или метода reduce.
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // [1,2,3]
  // 1 + 2 = 3
  // 3 + 3 = 6
  // let sum = arr.reduce((acc, c) => {
  //       return acc + c
  //   });

  return sum;
}

// Напишите функцию differenceMaxMinWorker для вычисления разницы максимального и минимального элементов.
// C помощью цикла или методов Math.max и Math.min найдите максимальное и минимальное значения.
// Возвращайте разницу этих значений.
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = arr[0]; /*1 эдеменнт массива */
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    console.log(arr, 'i',i, arr[i]);
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

// Напишите функцию differenceEvenOddWorker вычисления разницы сумм чётных и нечётных элементов.

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;

  // 0 !0 = true
  // 3 !3 = false
  // Объявите две переменные, например, sumEvenElement и sumOddElement, в которых будут накапливаться чётные и нечётные элементы. Инициализируйте эти переменные начальными значениями — нулями.

  let sumEvenElement = 0;
  let sumOddElement = 0;
  // Реализуйте цикл для перебора всех элементов массива.

  for (let i = 0; i < arr.length; i++) {
    // При переборе каждый элемент проверяйте с помощью конструкции if / else.
    // Если элемент чётный, то увеличивайте одну переменную (sumEvenElement), а если нечётный, то другую (sumOddElement)

    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

// Напишите функцию averageEvenElementsWorker, которая будет вычислять среднее значение чётных элементов.

// [1, 2, 3] -  2 / 1

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  // Объявите две переменные, например, sumEvenElement и countEvenElement, в которых будут накапливаться сумма чётных элементов и их количество. Инициализируйте эти переменные начальными значениями — нулями.
  let sumEvenElement = 0;
  let countEvenElement = 0;
  // Реализуйте цикл для перебора всех элементов массива.
  for (let i = 0; i < arr.length; i++) {
    // console.log('el ' + arr[i], '%' + arr[i] % 2)
    // При переборе каждый элемент проверяйте с помощью конструкции if.
    // Если элемент чётный, то увеличивайте одну переменную (sumEvenElement) на перебираемый элемент, а другую переменную (countEvenElement) — на единицу.
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) return 0;
  // После выполнения цикла выполняйте возвращение результата деления суммы элементов на их количество.
  return +(sumEvenElement / countEvenElement).toFixed(2);
  // Во всех функциях должна быть проверка наличия элементов. Если элементы не передавались в функцию, то нет смысла что-либо считать и можно сразу возвращать ноль.
}

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38


function makeWork(arrOfArr, func) {
  // Инициализируйте переменную (maxWorkerResult), в которой будет формироваться максимальный результат, и инициализуйте её начальным значением. Можно использовать самое минимальное числовое значение -Infinity, либо использовать результат насадки от самого первого элемента из полученных данных (на позиции ноль массива arrOfArr). Используйте spread-оператор для разделения массива элементов на отдельные элементы.

  let maxWorkerResult = -Infinity;

  // Реализуйте цикл для перебора всех элементов массива arrOfArr.

  // [[1,6,8] ,[9, 6, 1]]
  // [1,6,8] - 15 -maxWorkerResult
  // [9, 6, 1] - 16-maxWorkerResult

  for (let i = 0; i < arrOfArr.length; i++) {
    // Внутри цикла каждый перебираемый элемент передавайте в функцию-насадку. Используйте spread-оператор для разделения массива элементов на отдельные элементы. Результат функции сохраните в отдельную константу.
    const result = func(...arrOfArr[i]);
    console.log('result:',result);
    // console.log(result);
    // Добавьте проверку: полученное значение больше переменной, в которой формируется максимальное значение?
    if (result > maxWorkerResult) {
      // Если полученное значение больше переменной с максимумом, то переприсваивайте переменную максимума на полученное значение.
      maxWorkerResult = result;
    }
  }
  // После выполнение цикла в переменной максимума должно быть максимальное значение результатов насадки. Эту переменную следует возвращать из функции.
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
