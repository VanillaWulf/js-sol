/* книги */

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
  
    fix() {
      this.state = this.state * 1.5;
    }
  
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "detective";
    }
  }
  
  /*
  Создайте класс Library со свойствами:
  name;
  books.
  Конструктор класса должен принимать название библиотеки name (строка). Значением свойства books должен быть пустой массив.
  */
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    // Реализуйте метод addBook(book), который в качестве аргумента будет принимать объект — книгу или журнал. Метод должен добавлять книгу в хранилище books, только если состояние state книги больше 30.
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    /* 
    Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ для проведения поиска (тип, автор, название, год выпуска и пр.) и искомое значение. Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.
    */
  
    findBookBy(type, value) {
      // for (let i = 0; i < this.books.length; i++) {
      //   const book = this.books[i];
      //   if (book[type] === value) {
      //     return book;
      //   }
      // }
  
      // item[type]
      // item['state'] item.state
      // item['author'] item.autor
      // item['name'] item.name
      
      const findedByParamBook = this.books.find(item => item[type] === value)
      return !!findedByParamBook ? findedByParamBook : null;
    }
  
    // name
    // book.name
    // book['name']
  
  
    /*
    Создайте метод giveBookByName(bookName), который в качестве аргумента будет принимать название книги, запрошенной читателем. Если запрошенная книга найдена, метод должен удалять книгу из хранилища books и возвращать её. Если книга не была найдена, метод должен возвращать null.
  
  */
    giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
      if (index !== -1) {
        return this.books.splice(index, 1)[0];
        // return this.books[index];
      }
      return null;
    }
  
  }
  
  /*test*/
  
  const library = new Library("Библиотека имени Ленина");
  
  const detective = new DetectiveBook(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008,
    "Артур Конан Дойл",
  )
  
  library.addBook(detective);
  
  library.addBook(
    new FantasticBook(
      "Пикник на обочине",
      1972,
      168,
      "Аркадий и Борис Стругацкие",
    )
  );
  
  library.addBook(new NovelBook("Машина времени", "Герберт Уэллс", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); //null
  console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
  
  console.log(library);

  /*-------------------*/


class Student {
  
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {

    /* если меньше 2 или больше 5, то выходим из метода*/
    if((mark < 2) || (mark > 5)) {
      return;
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      return 0;
    }

    const array = this.marks[subject];

    const sum = array.reduce((acc, curr) => acc + curr);
    /*здесь мы можем не указывать intial value, так как у нас здесь массив цифр*/
    return (sum / array.length);
  }

  getAverage() {
    const existSubjects = Object.keys(this.marks);

    console.log(existSubjects);

    if (existSubjects.length === 0) {
      return 0;
    }

    const sum = existSubjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    /* я тут забыла поставить intial value = 0, если его не указать, то возьмется первый элемент массив, в моем случае 'химия https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce */

    return sum / existSubjects.length;

    // console.log(result);
  }
}


const student = new Student("Олег Никифоров");
student.addMark(5, "химия");

student.addMark(5, "химия");

student.addMark(5, "физика");

student.addMark(4, "физика");

student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student);
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("химия"));
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75
