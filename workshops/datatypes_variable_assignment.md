Imagine that we're making an application for grocery stores to use (intentionally vague description 😁). For each of the data types we researched, we'll brainstorm examples of how we might use that data type in a grocery store app.

<div class="try-it">
  <h3>Try It: Data Types in a Grocery Shopping App</h3>
  <p>What sorts of data would you use strings for?</p>
  <div>
    <p class="toggle-show">
      String Definition (click here)
    </p>
    <div class="toggle-content hidden">  
      <p>A <span class="vocab">string</span> is a data type used represent text. Strings can contain alphabet characters in addition to spaces, numbers, and special characters.</p>
      <p>Examples:</p>
      <li><code>"two roads diverged in a yellow wood"</code></li>
      <li><code>"(303) 731-3117"</code></li>
      <li><code>"Turing School of Software & Design"</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">manager name</textarea>
    </div>
    <div class="left">
    <textarea rows="2">store address</textarea>
    </div>
    <div>
    <textarea rows="2">product description</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>What sorts of data in your shopping app would be integer data? What about float data?</p>
  <div>
    <p class="toggle-show">
      Integers and Floats Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p><strong><span class="vocab">Integer</span>:</strong> An integer is a whole number (not a fraction) that can be positive, negative, or zero. Unlike floating point numbers, integers cannot have decimal places.</p>
      <p>Examples:</p>
      <li><code>10</code></li>
      <li><code>0</code></li>
      <li><code>-25</code></li>
      <li><code>5148</code></li>
      <p><strong><span class="vocab">Float</span>:</strong> As the name implies, floating point numbers are numbers that contain floating decimal points. They can be positive or negative.</p>
      <p>Examples:</p>
      <li><code>-5.5</code></li>
      <li><code>0.0001</code></li>
      <li><code>98.2</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">number of items on shelf (int)</textarea>
    </div>
    <div class="left">
    <textarea rows="2">weight of meat at deli counter (float)</textarea>
    </div>
    <div>
    <textarea rows="2">number of employees clocked in (int)</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>Why might you use a boolean in a shopping application?</p>
  <div>
    <p class="toggle-show">
      Boolean Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>A <span class="vocab">boolean</span> value is either true or false. Boolean values are used in boolean logic, which is a subset of algebra used for creating true/false statements.</p>
      <p>Examples:</p>
      <li><code>true</code></li>
      <li><code>false</code></li>
      <li>Side note for later, can be used to check combinations: ie. if a password is over 8 characters and has both a letter and a number</li>
      <li><code>&& || ==</code> are all operators to help with boolean logic</li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">is an item on sale?</textarea>
    </div>
    <div class="left">
    <textarea rows="2">is the employee clocked in?</textarea>
    </div>
    <div>
    <textarea rows="2">is the store open right now?</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>What might you want to store in an array in your shopping app? Start all of your answers with "list of..." </p>
  <div>
    <p class="toggle-show">
      Array Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>An <span class="vocab">array</span> is a data structure that represents a group of things.</p>
      <p>You can think of an array as a collection, box, or container. Instead of saying "I have a collection of shirts," you could say "I have an array of shirts." The phrase "a container of pencils" would become "an array of pencils."</p>
      <p>Typically, elements in an array are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.</p>
      <p>Examples:</p>
      <li><code>[26, 24, 28, 25, 27, 27, 26, 27]</code></li>
      <li><code>["Mod 0", "Mod 1", "Mod 2", "Mod 3", "Mod 4"]</code></li>
      <li><code>[false, true, true, true, false, true, true]</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">list of checkout counters open</textarea>
    </div>
    <div class="left">
    <textarea rows="2">list of employee names</textarea>
    </div>
    <div>
    <textarea rows="2">list of items that need to be restocked</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>What might you want to store as a hash/object (data in key-value format) in your shopping app?</p>
  <div>
    <p class="toggle-show">
      <strong>EXTENSION</strong> Hash/Object Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>A <span class="vocab">hash</span> or <span class="vocab">object</span> is a collection of key-value pairs. It is similar to an array in that it is a collection of things, but in the case of hashes/objects, we are <strong>pairing</strong> data together.</p>
      <p>Sometimes, this data type is referred to as a dictionary because of the pairing of word -> definition.</p>
      <p>For example, you might have a hash/object where the keys are first names and the values are last names.</p>
      <p>When I think about whether or not I need to use a hash, I ask myself "Is this a collection of data where the pairing of items matters?"</p>
      <p>Examples:</p>
      <li><code>{ "9th grade": 110, "10th grade": 125, "11th grade": 66, "12th grade": 70}</code></li>
      <li><code>{ "Mod 0": "Tim and David", "Mod 1": "Mike and Sal", "Mod 2": "Brittany and Robbie" }</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">department (key) and employee count for that department (value)</textarea>
    </div>
    <div class="left">
    <textarea rows="2">manager (key) and employees for that manager (value)</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">item (key) and number of item on shelf (value)</textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
  </div>
</div>

<a name="syntax-practice"></a>
### Syntax Practice

We'll go into program specific breakout rooms to briefly discuss the how to check correct syntax for datatypes in Ruby and JavaScript.

In addition to practicing writing out our data types, we'll also touch briefly on what it looks like to <span class="vocab">assign a variable</span>. This allows us to reference a word in our computer's memory that returns the data we've stored.

```js
// Javascript examples of variable assignment
var bestFood = "ramen";
var isDelicious = true;
var inventory = 20;

// re-assignment
bestFood = "pizza";
```

```ruby
# Ruby examples of variable assignment
best_food = "ramen"
is_delicious = true
inventory = 10

# re-assignment
best_food = "pizza"
```

Videos on variable assignment:
* [Back-End](https://www.youtube.com/watch?v=S-IeM4xnCog&list=PL1Y67f0xPzdMFq2S1bK7E7veT_BbK-zjt&index=3)
* [Front-End](https://www.youtube.com/watch?v=sIGNox7OGD0&list=PL1Y67f0xPzdMFq2S1bK7E7veT_BbK-zjt&index=4)

After watching a brief demo from an instructor on how to write variables on your computer in either Ruby or JavaScript, try out the following:
* Assign a variable called `pizza` a value of 'the best food of all time'
* Assign a variable called `is_hungry` a value of true
* Assign a variable called `number` a value of 5
* Reassign that `number` variable so that is has a value of 4
* Assign a variable called `teachers` a value of an array with the names 'Ellen', 'Robert', and 'David'
* Try the following (these may take some googling):
  * Create another string variable and add combine it with your pizza variable
  * Create another integer variable and multiply it by your number variable
  * Remove the last item from your teachers array

Answer Keys:
* [Back-End](https://gist.github.com/damwhit/99e906bcfb3b39d34790e2a246029716)
* [Front-End](https://gist.github.com/damwhit/3656c48a09d5ab8bf85916b53fe6e760)