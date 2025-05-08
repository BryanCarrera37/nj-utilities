# nj-utilities

This is a collection of utility functions for JavaScript and Node.js. You can use them in your projects to simplify common tasks and improve code readability. You'll find actions for:

- array
- date
- email
- object
- etc

Also, there's some defined values for regex and common messages and values for requests.

## Instructions

### Installation
```bash
$ npm install @bryancm/nj-utilities
```

or

```bash
$ yarn add @bryancm/nj-utilities
```

### Usage

After adding the library in your project you can use any of the functionalities listed below:

- Const Values
  - regex
- Enums
  - activated-field-values
  - server-message
- Helpers
  - array-helper
  - date-helper
  - email-helper
  - numeric-helper
  - object-helper
  - string-helper
  - values-helper

For example, within the values-helper file you can find a good function to get the values prepared for a WHERE-IN SQL Condition. The name of that function is getValuesPreparedForWhereClauseWithIn and the usage is like:

```ts
console.log(getValuesPreparedForWhereClauseWithIn([1, 2, 3, 4, 5, 6]));
// Output: 1, 2, 3, 4, 5, 6
```

And, it can be something like:

```ts
const values = getValuesPreparedForWhereClauseWithIn([1, 2, 3, 4, 5, 6]);
const query = `SELECT name, age FROM people WHERE id IN (${values})`;
console.log(query);
// Output: SELECT name, age FROM people WHERE id IN (1, 2, 3, 4, 5, 6)
```