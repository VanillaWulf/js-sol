// Необходимо написать класс AlarmClock с методами:

class AlarmClock {
    // constructor — выделяет память для объекта.
    constructor() {
  
      // Создайте свойство для хранения коллекции звонков alarmCollection с начальным значением пустого массива.
  
      this.alarmCollection = [];
  
      // Создайте свойство intervalId для хранения id таймера без начального значения.
  
      this.intervalId = null;
    }
  
    // addClock — добавляет новый звонок в коллекцию существующих.
    // Принимает параметр времени в формате HH:MM — время, когда действие должно запуститься. - 0-23:0-59 
    // нюаннсы - 12:03 - 0 это не игнорируемый символ
  
    // // первые 2 символа - часы
    // const hours = time[0] + time[1];
    // //  4 и 5  - минуты (3 cимвол - это :) формат помогает нам определить, где часы, а где минуты
    // const minutes = time[3] + time[4];
    // return (hours + minutes);
    // Принимает параметр функции-колбека — действие, которое должно запуститься.
    addClock(time, callback) {
      //try catch на проверку формата
      // Проверьте, переданы ли параметры времени и колбека. Если параметр не передан, выполните выброс ошибки с помощью throw new Error('Отсутствуют обязательные аргументы').
      if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
  
      // Проверьте, есть ли звонок с таким же временем. Если есть, выведите предупреждение в консоль с помощью console.warn('Уже присутствует звонок на это же время'). some - проверяет на соотвествие
  
      if (this.alarmCollection.some(alarm => alarm.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
      }
  
      // Перед завершением метода добавьте в массив звонков объект со свойствами callback, time, canCall. В свойстве canCall должно быть значение запуска функции колбека. Изначально значением должно быть true
  
      const newAlarm = {
        time,
        callback,
        canCall: true
      };
      this.alarmCollection.push(newAlarm);
    }
  
    // removeClock — удаляет звонки по определённому времени.
  
    removeClock(time) {
  
      //      Принимает time звонка, который следует удалить.
      // Удалите из массива звонков те, у которых time совпадает со значением аргумента. Например, можно использовать метод filter.
  
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  
      // const indexToRemove = this.alarmCollection.findIndex(alarm => alarm.time === time);
  
      // if (indexToRemove !== -1) {
      //   console.log(indexToRemove, this.alarmCollection.length)
      //   let any = this.alarmCollection.splice(indexToRemove, 1);
      //   console.log(any, this.alarmCollection.length);
      // }
  
      // const filteredAlarms = [];
  
      // for (const alarm of this.alarmCollection) {
      //   if (alarm.time !== time) {
      //     filteredAlarms.push(alarm);
      //   }
      // }
  
  
      // this.alarmCollection = filteredAlarms;
    }
  
    // getCurrentFormattedTime — возвращает текущее время в строковом формате HH:MM.
  
    getCurrentFormattedTime() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      // const hours = String(now.getHours()).padStart(2, '0');
      // const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  
    // start — запускает будильник.
  
    start() {
  
      // Проверьте наличие значения в свойстве intervalId. Если в нём присутствует значение, то завершайте выполнение метода. Программа не должна позволять создавать несколько интервалов.
      if (this.intervalId) {
        return; // уже есть запущенный таймер
      }
      // Создавайте новый интервал, в котором каждую секунду выполняйте действия:
      // Результат создания интервала сохраняйте в свойство intervalId.
  
  
      this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
    
        // Перебирайте все звонки с помощью метода forEach.
  
        // [17.45, 17.50, 18.00]
        // currentTime  = 17.45
        // 17.45 => 17.45 === currentTime & canCall {
        //   cb
        // }
        // 17.50 => 17.50 === currentTime & canCall {
          
        // }
        // 18.00 => 18.00 === currentTime & canCall {
  
        // }
  
      
        this.alarmCollection.forEach(alarm => {
  
          // При переборе каждый звонок проверяйте на возможность его запуска: свойство time совпадает с текущим временем, и звонок может выполняться (в свойстве canCall находится true).
          if (alarm.time === currentTime && alarm.canCall) {
            // При истином условии (необходимости запуска звонка) в свойство canCall (возможность вызова звонка) присваивайте false и вызывайте колбек звонка (свойство callback).
            alarm.canCall = false;
            // alarm.callback.call(null);
            alarm.callback();
          }
        });
      }, 1000);
    }
  
    // stop — останавливает выполнение интервала будильника.
    stop() {
      // Вызовите функцию clearInterval для удаления интервала.
      clearInterval(this.intervalId);
  
      // Сбросьте значение из свойства intervalId. Для сброса свойства можно присваивать null.
  
      this.intervalId = null;
    }
  
    // resetAllCalls — сбрасывает возможность запуска всех звонков.
    resetAllCalls() {
      // С помощью метода forEach присваивайте true в свойство canCall у каждого звонка.
      this.alarmCollection.forEach(alarm => {
        alarm.canCall = true;
      });
    }
  
    clearAlarms() {
      // Вызывает метод остановки интервала (метод stop).
      this.stop();
      // Удаляет все звонки. Для удаления всех звонков переприсваивайте свойство alarmCollection в пустой массив.
      this.alarmCollection = [];
    }
  
  }
  
  function testCase() {
    const clock = new AlarmClock();
    // const callback = function(f) {
    //   return f;
    // };
  
    const cb = function(time) {
      console.log('allarm tiem ' + time);
    }
  
    callback = f => f;
    clock.addClock('16:45', cb);
    console.log('1----------');
    console.log(clock.alarmCollection.length, 1);
    console.log(clock.alarmCollection[0].canCall, true)
    console.log(clock.alarmCollection[0].time, "16:45");
    console.log(clock.alarmCollection[0].callback, 'callback');
  
    console.log('2----------');
  
    console.log(clock.intervalId, null);
  
    console.log('3----------');
    clock.addClock("16:45", f => f);
    clock.start();
    console.log(clock.intervalId, 'any id')
    clock.stop();
  
    console.log('4----------');
    console.log(clock.getCurrentFormattedTime(), '2 digits');
  
    console.log('5----');
  
    clock.start();
    console.log(clock.intervalId, 'any id');
    clock.stop();
    console.log(clock.intervalId, null);
  
    console.log('---- delete');
    clock.addClock("16:45", callback);
    clock.addClock("16:45", callback);
    clock.addClock("16:46", callback);
    clock.removeClock("16:45");
    console.log(clock.alarmCollection.length, 1)
  }
  
  testCase();