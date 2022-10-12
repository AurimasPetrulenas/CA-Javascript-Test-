/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { composition } from "../Task 10/modules/math/composition.js";
import { division } from "../Task_10/modules/math/division.js";
import { subtraction } from "../Task_10/modules/math/subtraction.js";
import { multiplication } from "../Task_10/modules/math/multiplication.js";

import {
  one,
  two,
  three,
  four,
  five,
} from "../Task_10/modules/numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = subtraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
