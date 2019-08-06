- <strong>NOTE</strong>: text typed into this page will not save, so don't refresh or close this window until you've reviewed your notes. 
      <li>define and identify use cases for basic data types</li>

<a name="datatypes"></a>
## Basic Data Types 

In most programming languages, you'll find the same basic <span class="vocab">data types</span>. A data type represents the kind of data that you can use in the programming language. In this section, we'll discuss five different basic data types that are applicable to both the front end and back end. 

<div class="try-it">
  <h3>Try It: Basic Data Type Definitions</h3>
  <p>In your breakout groups, discuss and/or use Google to figure out what each of the following data types are used for in programming. Use your notebook to jot down your answer (and examples, if applicable).</p>

  <p>1. <strong>What are <span class="vocab">strings</span> used for in programming?</strong></p>
  <p>2. <strong>What are <span class="vocab">integers</span> and <span class="vocab">floats</span> used for in programming</strong>?</p>
  <p>3. <strong>What is a <span class="vocab">boolean</span> value used for in programming</strong>?</p>
  <p>4. <strong>What is an <span class="vocab">array</span> used for in programming?</strong></p>
  <p>5. If you're in the front end program, we're going to call the next data type an <span class="vocab">object</span>. If you're in the back end program, we're going to call it a <span class="vocab">hash</span>. <strong>What is this data type used for in programming?</strong></p>
</div>


### Data Type Use Cases and Syntax

Luckily for us, the <span class="vocab">syntax</span> (the way we write) for these basic data types is almost identical in Ruby and JavaScript. 

Imagine that we're making an application for grocery stores to use (intentionally vague description 😁). For each of the data types we researched, we'll brainstorm examples of how we might use that data type in a grocery store app.

<div class="try-it">
  <h3>Try It: Data Types in a Grocery Shopping App</h3>
  <p>What sorts of data would you use strings for?</p>
  <div class="toggle-show">
    String Definition (click here)
    <div class="hidden">  
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
  <div class="toggle-show">
    Integers and Floats Definition (click here)
    <div class="hidden">
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
  <div class="toggle-show">
    Boolean Definition (click here)
    <div class="hidden">
      <p>A <span class="vocab">boolean</span> value is either true or false. Boolean values are used in boolean logic, which is a subset of algebra used for creating true/false statements.</p> 
      <p>As a side note beyond the scope of today's lesson, boolean expressions use the operators AND, OR, and NOT to compare values and return a true or false result. An example of booleans in real life might be:
      </p>
      <p>If <span style="text-decoration: underline;">it's raining</span> and <span style="text-decoration: underline;">I have an appointment</span>, then grab the umbrella.</p>
      <p>This could translate to:</p>
      <p>TRUE and TRUE = TRUE</p>
      <p>TRUE and FALSE = FALSE</p>
      <p>FALSE and TRUE = FALSE</p>
      <p>FALSE and FALSE = FALSE</p>
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
  <div class="toggle-show">
    Array Definition (click here)
    <div class="hidden">
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
  <div class="toggle-show">
    Hash/Object Whole Group Review (click here)
    <div class="hidden">
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

