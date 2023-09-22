---
layout: lesson
title: Object Literals
---

## Learning Goals

- Use JavaScript syntax to declare variables that store Object Literals
- Access data from JavaScript Object Literals

## Vocabulary

- <span class="vocab">Object Literal</span>
- <span class="vocab">key</span>
- <span class="vocab">key-value pair</span>
- <span class="vocab">value</span>

## Warm Up

Look at the following array and take a moment to consider: What is problematic about it? How would you prefer to structure a list of students and such information?

```javascript
var students = ["Cristie Soto", "A+", "B", "in progress", true, "Oscar Smith", "A-", "D", "dropped", true];
```
<br>
<br>

## Object Literals

Object Literals (Objects) allow us to structure data in a different way than Arrays. It's not better; it's just different. Like an Array, an Object is a data structure used for representing a collection of things. But whereas an Array generally represents a list of ordered, indexed values, **an <span class="vocab">Object</span> represents a collection of _named_ values**. These names are called <span class="vocab">keys</span>, and each key has a corresponding <span class="vocab">value</span>. In an Object, we can insert data by assigning it to a name and later retrieving it using the same name.

Some languages call their Objects _dictionaries_ for this reason – you look up a word (the label) to retrieve its definition (the data or value with which the label was associated).

## Object Syntax

- An object is enclosed in curly braces `{ }`, <span class="vocab">key-value</span> pairs are separated by commas, and keys and values are separated by a colon.
- Each key in an object must be unique
  - If you attempt to have duplicate keys when you first create an object, you won't get any sort of indicator that you've done so, but the only value that will be stored is that of the last value assigned to a duplicate key.
  - If you try to add a new key-value pair using a key that already exists, that new key-value pair will overwrite the previous one - _dangerous_.
- Keys and values can be any of any data type:
```javascript  
var student1 = {
    name: "Christie Soto",
    grades: ["A+", "B", "in progress"],
    activeStudent: true
}
```
- Values can be accessed with dot notation:
  - `student1.name` returns `"Christie Soto"`

<div class="s-card">
  <h3>Object or Array?</h3> 
  <p>For each example, determine if an Object or Array would be more appropriate, and explain why. Share your responses in the Slack small group channel for feedback and discussions.</p>
  <ul>
    <li>A store's inventory</li>
    <li>The contents of a dishwasher</li>
    <li>List of all the places you've traveled to</li>
    <li>List of birthdays of all students</li>
    <li>Names of all dogs at doggie daycare</li>
    <li>Virtual address book</li>
    <li>Items of clothing in a dresser</li>
  </ul>
</div>
<br>

<div class="s-card">
  <h3>Object Syntax Practice</h3> 
  <p>Complete the following work in a replit or a new JavaScript file in VS Code:</p>
  <ol>
    <li>For one of the examples in the previous activity that you selected would be best suited for an Object, declare a variable that stores an Object with some (possibly fake) data.</li>
    <li>Declare a variable that stores an Object that represents <a href="https://twitter.com/MechEngSanchez/status/1485947286396014593" target="blank">this tweet</a>.</li>
  </ol>
</div>

## Accessing an Object

The examples below explore the `suitcase` Object:

```javascript
var suitcase = { 
  socks: 4,
  jeans: 1
};
```

Did we put any jackets on our list? Let’s check:
```javascript
suitcase.jackets;
// => undefined
```

We can create a new key-value pair:
```javascript
suitcase.shirts = 3;
suitcase.swimsuits = true;
```

We can remove the socks:
```javascript
delete suitcase.socks;
```

Check on the shirts:
```javascript
suitcase.shirts;
// => 3
```

Let's check what keys are in our Object:
```javascript
Object.keys(suitcase);
// => ["jeans", "shirts", "swimsuit"]
```

Let's check what values are in our Object:
```javascript
Object.values(suitcase);
// => [1, 3, true]
```

Note that when we use the `Object.keys` and `Object.values` methods, the return value of each is an Array!
<br>

<div class="s-card">
  <h3>Object Syntax and Access Practice</h3> 
  <p>Use the following <code>zoo</code> variable to complete each prompt:</p>
  <pre>
  var zoo = {
    giraffes: 3,
    zebras: 12,
    hippos: 2
  };
  </pre>
  <ol>
    <li>Print all of the keys of the zoo Object</li>
    <li>Print all of the values of the zoo Object</li>
    <li>Add an animal to the zoo</li>
    <li>Check how many monkeys are in the zoo</li>
    <li>Add another animal to the zoo</li>
  </ol>
</div>
<br>

## Additional Practice
This additional practice is encouraged, but not required.

Complete the work <a href="https://github.com/turingschool/m0_fe_objects" target="_blank">in this repository</a>.

<br>
<br>
<br>