// Создайте функцию-конструктор Student(name, gender, age) и 
function Student(name, gender, age) {

    // Все аргументы функции-конструктора сохраните в соответствующие свойства и добавьте свойство marks со значением пустого массива. Позже в этот массив будут добавляться оценки.
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
    // Создайте доступный для всех экземпляров student метод setSubject(subjectName), который при вызове будет устанавливать поле предмет subject экземпляра в subjectName. Для этого добавьте в свойство Student.prototype функции-конструктора функцию setSubject.
  
    this.setSubject = function(subjectName) {
      this.subject = subjectName;
    };
  
  
    // Создайте метод addMarks(...marksToAdd) по аналогии с п. 2, который при вызове будет добавлять студенту сразу несколько оценок. Перед добавлением оценок добавьте проверку существования свойства marks, в котором хранятся оценки. Если пользователь отчислен, то у него не будет массива оценок, а, значит, и добавление будет невозможным.
  
    // this.addMarks = function(...marksToAdd) {
    //   if (!this.marks) {
    //     console.log("Error: Student has been expelled.");
    //     return;
    //   }
    //   this.marks.push(...marksToAdd);
    //   // this.marks = [...this.marks, ...marksToAdd]
    // };
  
    // Создайте метод getAverage() по аналогии с п. 2, который при вызове будет возвращать среднее арифметическое оценок студента. Добавьте проверку наличия оценок у студента. Если свойства marks не существует или оно пустое, сразу возвращайте ноль.
  
    // this.getAverage = function() {
    //   if (!this.marks || !this.marks.length) {
    //     return 0;
    //   }
    //   const sum = this.marks.reduce((acc, curr) => acc + curr);
    //   return sum / this.marks.length;
    // };
  
    // Создайте метод exclude(reason) по аналогии с п. 2, который при вызове будет исключать студента из учебного процесса и устанавливать причину исключения. Для этого надо удалить свойства subject и marks и добавить свойство excluded со значением reason.
  
    // this.exclude = function(reason) {
    //   delete this.subject;
    //   delete this.marks;
    //   this.excluded = reason;
    // };
  }
  
  
  // Создайте доступный для всех экземпляров student метод setSubject(subjectName), который при вызове будет устанавливать поле предмет subject экземпляра в subjectName. Для этого добавьте в свойство Student.prototype функции-конструктора функцию setSubject.
  
  // Student.prototype.setSubject = function(subjectName) {
  //   this.subject = subjectName;
  // }
  
  
  // Создайте метод addMarks(...marksToAdd) по аналогии с п. 2, который при вызове будет добавлять студенту сразу несколько оценок. Перед добавлением оценок добавьте проверку существования свойства marks, в котором хранятся оценки. Если пользователь отчислен, то у него не будет массива оценок, а, значит, и добавление будет невозможным.
  
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks) {
      console.log("Error: Student has been expelled.");
      return;
    }
  
    if (!!marksToAdd.length) {
      this.marks.push(...marksToAdd);
    }
  
    return;
  }
  
  // Создайте метод getAverage() по аналогии с п. 2, который при вызове будет возвращать среднее арифметическое оценок студента. Добавьте проверку наличия оценок у студента. Если свойства marks не существует или оно пустое, сразу возвращайте ноль.
  
  Student.prototype.getAverage = function() {
  
    if (!this.marks || !this.marks.length) {
      return 0;
    }
  
    // this.hasOwnProperty('marks')
    const sum = this.marks.reduce((acc, curr) => acc + curr);
    return sum / this.marks.length;
  }
  
  
  // Создайте метод exclude(reason) по аналогии с п. 2, который при вызове будет исключать студента из учебного процесса и устанавливать причину исключения. Для этого надо удалить свойства subject и marks и добавить свойство excluded со значением reason.
  
  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  
  let student1 = new Student("Василиса", "женский", 19);
  console.log(student1.name);
  student1.setSubject("Algebra");
  console.log(student1.age)
  console.log(student1.getAverage()); // 0
  student1.addMarks(4, 5, 4, 5);
  console.log(student1.getAverage()); // 4.5
  console.log(student1);
  // {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
  let student2 = new Student("Артём", "мужской", 25);
  student2.setSubject("Geometry");
  student2.exclude("плохая учёба");
  console.log(student2)
  console.log(student2.getAverage());
  // {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
  