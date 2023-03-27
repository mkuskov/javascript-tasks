// 1. Написать функцию, которая на вход принимает целое число и возвращает факториал 
//    этого числа

function getFactorial(num) {
  return num ? num * getFactorial(num - 1) : 1;
}

// getFactorial(5) возвращает 5 (num) умноженное на результат вызываемой функции (getFactorial(4)),
// т.е. результат след. функции будет равен 4 умноженное на результат вызываемой функции (getFactorial(3)),
// и так до тех пор пока не упрётся в условие что "num" равен 0, а соответственно --- 
// getFactorial(0) returns 1    \/\/\/
// getFactorial(1) returns 1 * 1 = 1 
// getFactorial(2) returns 2 * 1 = 2
// getFactorial(3) returns 3 * 2 = 6
// getFactorial(4) returns 4 * 6 = 24
// getFactorial(5) returns 5 * 24 = 120


console.log("1)", getFactorial(5));

// 2. Написать функцию, которая на вход принимает строку и возвращает длину самого 
//    длинного слова в этой строке

function getLongestWord(str) {
  const splitedString = str.split(' ');
  const longestWord = splitedString.reduce((prevWord, currentWord) => {
    return currentWord.length > prevWord.length ? currentWord : prevWord;
  }, "")

  return longestWord;
}

// метод split возвращает из СТРОКИ новый МАССИВ СТРОК, каждый элемет массива будет разделен по условию, котрое передавается в аргумент split(аргумент),
// в данном случае, каждый элемент разделён по пробелам, значит "Рандомная строка".split(" ") вернёт нам ["Рандомная", "строка"], а "Рандомная!строка!два".split("!")
// вернёт ["Рандомная", "строка", "два"]

console.log("2)", getLongestWord("Принимает строку и возвращает длину самого длинного слова"));

// 3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых 
//    чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из 
//    наибольшего числа каждого предоставленного подмассива

const array = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
]

function getMaxNumberOfArrays(arr) {
  return arr.reduce((prevArr, currArr) => prevArr.concat(Math.max(...currArr)), []);
}

// reduce - метод для перебора значений массива, принимает два аргумента: callback (принимает предыдущее и прошлое значение), а так же initial state (в данном случае пустой массив)
// в этом примере идет итерация по массиву arr, где есть три объекта, каждый является значением. При первой итерации он берет prevArr (предыдущее значение = initState) в качестве пустого массива, которым мы указали как пустой массив
// и производит метод concat, в который кладет максимальное число из объекта [1, 2, 3], получается [3]
// во второй итерации, prevArr = [3], т.к. перебор значений сдвинулся на шаг вперед, и currArr (текущее значение) стал равен [4, 5]
// следовательно: [3].concat(Math.max([4, 5])) ===> [3, 5].concat(Math.max([6, 7, 8, 9])) ===> return [3, 5, 9] т.к. дальше значений для итерации нет

console.log("3)", getMaxNumberOfArrays(array));

// 4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку 
//    (первый аргумент), если она длиннее заданной максимальной длины строки (второй 
//    аргумент) и возвращает обрезанную строку с «…» в конце.

function getCroppedString(str, maxLength) {
  if(str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength)}...`;
}

console.log("4)", getCroppedString("На вход принимает строку и целое число", 20));


// 5. Написать функцию, которая на вход принимает строку и возвращает эту строку в 
//    формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.

function getCapitalLetters(str) {
  const arr = str.split(" ")
  const capitalLetters = arr.reduce((prevWord, currWord) => {
    return `${prevWord} ${currWord[0].toUpperCase()}${currWord.slice(1)}`
  }, "");

  return capitalLetters.trim();
}

console.log("5)", getCapitalLetters("на вход принимает строку и возвращает эту строку в формате: каждое слово начинается с заглавной буквы"));

// 6. Написать функцию, которая на вход принимает два массива и целое число n. Функция 
//    должна скопировать каждый элемент первого массива во второй по порядку начиная с 
//    индекса n второго массива и вернуть полученный массив. Входные массивы не должны 
//    изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 
//    3, 5]

function getCopiedElements(firstArr, secondArr, index) {
  secondArr.splice(index, 0, ...firstArr);

  return secondArr;
}

console.log("6)", getCopiedElements([1, 2, 3], [4, 5], 1));

// 7. Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные 
//    значения"

function getTruthyArray(arr) {
  return arr.filter(Boolean);
}

console.log("7)", getTruthyArray(["", 0, "false", false, true, 100, null, "null"]));

// 8. Написать функцию, которая на вход принимает массив, состоящий из двух строк. Функция 
//    должна вернуть true, если строка в первом элементе массива содержит все буквы строки 
//    во втором элементе массива (регистр игнорируется).

function compareLetters(arr) {
  const firstString = arr[0].toLowerCase().trim().replace(/ /g,'');
  const secondString = arr[1].toLowerCase().trim().replace(/ /g,'');

  return firstString === secondString;
};

console.log("8)", compareLetters(["Как     Ая то ст рока    ", "Какаят  осТр ока"]));

// 9. Написать функцию, которая на вход принимает масссив и целое число. Функция должна 
//    разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их в 
//    виде двумерного массива.

function divideArray(arr, size) {
  const result = [];

  while (arr.length > 0) {
    const chunk = arr.splice(0, size);
    result.push(chunk);
  }

  return result;
};

console.log("9)", divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// 10. Используя рекурсию (без использования циклов). Написать функцию, которая принимает 
//     массив и целое число (n) и заполняет массив числами от n до 1.

function fillArray(arr, size) {
  return size ? fillArray(arr.concat(size), size - 1) : arr;
};

console.log("10)", fillArray([], 3));