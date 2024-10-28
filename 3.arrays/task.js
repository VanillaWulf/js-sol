// Создайте функцию compareArrays(arr1, arr2), которая с помощью функции высшего порядка будет сравнивать значения двух массивов.

function compareArrays(arr1, arr2) {

    /* смотрим длину  */
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    /*
     Если массивы имеют одинаковые значения на одинаковых индексах, compareArrays должна выдавать true (иначе false
    Используйте метод every для сравнения элементов одного массива с соответствующими элементами другого массива.
    сравниваем значения по индексу 2-го массива*/
  
    // [ 1, 8, 8 ]  [ 1, 5 , 8]
    //   0  1  2      0  1   2 
  
    // (1, 0) => 1 = 1
    // (8, 1) => 8 === 5
  
    
    return arr1.every((value, index) => {
      console.log(value, arr2[index]);
      // return arr1[index] === arr2[index];
      return value === arr2[index];
    });
  }
  // 1
  
  // (8, 0) ={
  //   8 === 6 // false
  // }
  
  
  
  console.log(compareArrays([8, 9], [6, 7])) // false, разные значения
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])) // false, разные значения
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])) // false, разные значения
  console.log(compareArrays([1, 2, 3], [2, 3, 1])) // false, разные индексы, хотя и одинаковые значения
  console.log(compareArrays([8, 1, 2], [8, 1, 2])) // true

// Создайте функцию getUsersNamesInAgeRange(users, gender), которая возвращает среднее значение возраста пользователей одного пола.

function getUsersNamesInAgeRange(users, gender) {

    // спользуйте метод filter для получения нужных пользователей.
    const filteredUsers = users.filter(user => user.gender === gender);
  
    /* чтобы не nan*/
    if (filteredUsers.length === 0) {
      return 0;
    }
  
    // Используйте метод reduce для формирования среднего значения возраста.
     // const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
  
    /*
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  (0, { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },) => 0 + 40
  (40, { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },) => 40 + 37
  (77, { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" }) = > 77 + 18
  */
  
    
    //  const filteredUsers = users.filter(user => user.gender === gender);
    //здесь отдельно делаем массив с возрастами
    const ages = filteredUsers.map(user => user.age)
    // [40, 37, 18]
    // 40 + 37 = 77
    // 77 + 18 = 
    const averageAge = (ages.reduce((sum, age) => (sum + age)))/filteredUsers.length;
  
    // console.log(averageAge);
    
    // const averageAge = totalAge / filteredUsers.length;
    return averageAge;
  
    // let filterCount = 0;
    // return (users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, ageItem) => acc + ageItem.age, 0) / filterCount);
  }
  
  const people = [
    { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
    { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
    { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
    { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
    { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
    { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
    { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
    { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
    { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
    { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
    { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
    { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
    { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
    { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
  ]
  
  console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
  console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
  console.log(getUsersNamesInAgeRange([], "женский")); // 0
  console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
  
  