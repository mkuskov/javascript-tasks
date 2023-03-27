// 1. Написать свою реализацию функций: map, filter, find, some, every.

// Array.prototype.map

// const arr = [1, 2, 3, 4, 5];
//
// Array.prototype.customMap = function(callback) {                     // добавляем в протоип массива новый метод customMap который принимает callback
//   const result = [];                                                 // массив который будет возвращаться
//
//   for (let index = 0; index < this.length; index++) {                // итерируемся по длине значений
//     result.push(callback(this[index], index, this));                 // пушим в result результат вызова callback, он принимает первое значение массива и выполняет с ним передаваемую логику, т.е. this[i] = 1 * 1, на второй итерации this[i] = 2 * 2 и т.д.
//   }
//
//   return result;                                                     // вовзращаем обновленный result
// };
//
// console.log(arr.customMap((item) => item * item));

// Array.prototype.filter

const arr = [
  {
    user: "Bob",
    id: 1
  },
  {
    user: "John",
    id: 1
  },
  {
    user: "Emma",
    id: 2
  }
];

Array.prototype.customFilter = function(callback) {
  const result = [];

  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
}

console.log(arr.customFilter((item) => item.id === 1));

// 2. Попробовать для функций написать unit-тесты. Примеры тестов для предыдущих задач
// (https://github.com/vsmirnova/testFunctionJS)