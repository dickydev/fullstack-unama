// Looping -> Loops offer a quick and easy way to do something repeatedly.

// Looping for -> The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.
/**
 * Pattern :
 * for(initial; condition; step){
 *  // code here
 * }
 */
for (let i = 0; i <= 30; i = i + 1) {
  console.log(i);
}

// Looping while -> The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

/**
 * Pattern :
 * initial;
 *
 * while(condition){
 *  // code here
 * step;
 * }
 */

let counter = 0;

while (counter <= 10) {
  console.log(counter);

  counter = counter + 2;
}

// Looping do...while -> The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
/**
 * Pattern :
 * initial;
 *
 * do{
 *  // code here
 *  step;
 * }while(condition)
 */

let j = 0;

do {
  console.log(j);
  j = j + 1;
} while (j <= 10);
