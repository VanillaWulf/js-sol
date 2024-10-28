//Задача № 1
// Напишите усовершенствованный кеширующий декоратор cachingDecoratorNew, аналогичный рассмотренному на лекции, так, чтобы он кешировал только последние пять различных вызовов функции, то есть чтобы кеш мог хранить только пять значений.
// подключаю md5

// const md5 = require('js-md5');

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    // используем md5 для получения хеша аргументов функции,
    const hash = md5(JSON.stringify(args)); // получаем хеш аргументов
    // подсказка 2 -Тогда при каждом запуске (внутри wrapper) вам следует проверять, есть ли hash для данных аргументов в кеше. Это можно сделать методом find. const objectInCache = cache.find((item) => тут нужно подумать)

    let objectInCache = cache.find(item => item.hash === hash); // ищем элемент в кеше по хешу
    if (objectInCache) {
      //Рекомендуем параллельно выводить результаты в консоль, чтобы вам было удобнее отлаживать.

      console.log("Из кеша: " + objectInCache.value, cache);
      return "Из кеша: " + objectInCache.value;
    }
    let result = func(...args);

    // подсказка 1 - о том, как сохранять объект
    cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой

    // Если элемента в кеше нет (!objectInCache), проще всего добавить новый объект в кеш и, если объектов стало больше, чем 5, удалить первый с начала.
    if (cache.length > 5) {

      // Это можно сделать методом shift() массива.
      cache.shift(); // если слишком много элементов в кеше, удаляем самый старый
    }

    // Рекомендуем параллельно выводить результаты в консоль, чтобы вам было удобнее отлаживать.
    console.log("Вычисляем: " + result, cache);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3); // вычисляем: 9
upgraded(1, 2, 3); // из кэша: 9
upgraded(2, 2, 3); // вычисляем: 12
upgraded(3, 2, 3); // вычисляем: 15
upgraded(4, 2, 3); // вычисляем: 18
upgraded(5, 2, 3); // вычисляем: 21
upgraded(6, 2, 3); // вычисляем: 24 (при этом кеш для 1, 2, 3 уничтожается)
upgraded(1, 2, 3); // вычисляем: 9  (снова вычисляем, кеша нет)
//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    // тут наверно лучше через переменные count allcount
    wrapper.count = 0; // количество апли
    wrapper.allCount = 0; // количество всех оберток 
  
    function wrapper(...args) {
      // Если есть активный таймаут, увеличиваем счетчик отправленных сигналов - первый сигнал не учитвается, тайм аута еще нет
      if (timeoutId) {
        console.log('уже есть таймаут', args);
        clearTimeout(timeoutId);
      }
  
      //для первого сигнала - апли + счетчик вызова увеличиваем
      // Для ориентира при первом запуске можно опираться на идентификатор тайм-аута. При первом вызове в идентификаторе ничего не будет, но мы учитвает апли, поэтому почучается отправка первого сигнала
      if (!timeoutId) {
        console.log('первый сигнал', args);
        // func.apply(this, args);
        func.call(this, ...args);
        wrapper.count++;
      }
  
  
      timeoutId = setTimeout(() => {
        // планируем новую задержку
        // если у нас апли, значит мы запустили сигнал сделаем ++
        console.log('задержка больше 2000млсек, сработал таймаут');
  
        console.log('args', args);
        func.apply(this, args);
        wrapper.count++;
      }, delay);
  
      wrapper.allCount++;
    }
  
    return wrapper;
  }
  
  
  const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
  const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
  
  setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
  setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
  setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
  setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано, так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
  setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен, так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
  setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
  setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
  
  setTimeout(() => {
    console.log(upgradedSendSignal.count);
    // было выполнено 3 отправки сигнала (  а не 2 раз первый отменен)
    console.log(upgradedSendSignal.allCount);
    // было выполнено 6 вызовов декорированной функции
  }, 7000);
  
  