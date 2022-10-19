---
layout: lesson
title: Methods
---

## Learning Goals

- Explain why we use methods
- Use built-in methods on appropriate objects
- Define and call methods in Ruby
- Use and explain the flow of data with arguments and parameters

## Vocabulary

- <span class="vocab">method</span>
- <span class="vocab">parameter</span>
- <span class="vocab">argument</span>
- <span class="vocab">define</span>
- <span class="vocab">execute</span>
- <span class="vocab">return</span>

## Warm-Up

<div class="s-card">
  <h3>Warm-Up</h3> 
  <p><a target="blank" href="https://www.freecodecamp.org/news/ruby-number-methods-integer-and-float-methods-with-examples/">Using this list of Methods for Integers and Floats</a>, explore some of those that interest you!</p>
  <ol>
    <li>"Play around" with some of the code you see. Type or copy-and-paste and run in your code editor. Modify it, then run again, to observe the change in output.</li>
    <li>Attempt to write 1-2 sentences for a couple methods of your choice, explaining clearly what they do.</li>
  </ol>
</div>
<br>

## Methods

<div class="s-card">
  <h3>Exploration: PART 1</h3> 
  <p>Fork, then run the code <a href="https://replit.com/@turingschool/m0builtinmethods#main.rb" target="blank">in this replit</a> and observe the output.</p>
  <p>Discuss: How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</p>
  <p>Use strategies you've learned to work to answer questions for yourself.</p>
</div>
<br>

A <span class="vocab">Method</span> is a package of instructions. Once a method is defined, it can be used as many times as needed. Ruby provides many methods that developers can use. 

The code snippet that follows was part of the previous Exploration activity:

```ruby
p 14.odd? 
```

>To describe the code snippet in English, one could say "the `odd question mark` method is being called on the Integer 14. Since 14 is not odd, `false` will be printed out.

In this particular example, the utility of the `odd?` method is to determine if an Integer is odd, or not. It answers the question with a Boolean (`true` or `false`). The benefit of having this built into Ruby and packaged into a one-work method is, if a developer needs to check if a number is odd or not, they only have to type `.odd?` anywhere they need to check. If they didn't have a packaged up method, they'd have to write several lines of code involving logic, potentially many times. **Reusability is what makes methods so powerful.**

<br>
<div class="s-card">
  <h3>Exploration: PART 2</h3> 
  <p>In <a href="https://replit.com/@turingschool/m0builtinmethods#main.rb" target="blank">the same replit</a> from the first exploration, comment <em>out</em> the code from Part 1, and <em>uncomment</em> the code under Part 2.</p>
  <ul>
    <li>Run the code</li>
    <li>Discuss: What is different about this from the first set of method calls? How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</li>
    <li>Use strategies you've learned to work to answer questions for yourself.</li>
  </ul>
</div>
<br>

The following code snippet demonstrates that a method can be called on a variable that holds data:

```ruby
new_string = "Hello World"
p new_string.upcase
```

>To describe the code snippet in English, one could say "the first line declares a variable called `new_string`. The second line calls the `upcase` method on the `new_string` variable. As a result, any character that is a letter in the String that is stored in `new_string` will be capitalized.

<br>
<div class="s-card">
  <h3>Exploration: PART 3</h3> 
  <p>In <a href="https://replit.com/@turingschool/m0builtinmethods#main.rb" target="blank">the same replit</a> from the first exploration, comment <em>out</em> the code from Part 2, and <em>uncomment</em> the variable declarations and first method call under Part 3.</p>
  <ul>
    <li>Run the code and read the error message carefully. Work to make sense of what the problem is.</li>
    <li>Comment out that method call, and uncomment the next one. Run the code and read the error message carefully. Work to make sense of what the problem is.</li>
    <li>Repeat the previous step until you've run the code for each method call.</li>
    <li>Modify the existing code so that it runs without errors.</li>
    <li><strong>Write down</strong> a 1-3 sentence explanation of your main takeaway from this exploration.</li>
  </ul>
</div>
<br>

<br>
<div class="s-card s-border-yellow-500">
  <h3>Key Points</h3> 
  <ul>
    <li>A method is a package of instructions that once defined, can be reused as many times as needed.</li>
    <li>A method can be called on a variable that holds data.</li>
    <li>Ruby provides built in methods for each data type. Not every method will work on every piece of data.</li>
  </ul>
</div>
<br>

## Defining Our Own Methods

The methods we've used up until now were built into the Ruby language. Those are great and will be used by you heavily and regularly as a developer. And, there will be times when you need to write your own methods to solve the unique problems in the application you are building or maintaining. 

### Syntax for Defining a Method

To define our own method, we'll use the following guidelines: 
- The `def` and `end` keywords act like bookends for the code block. 
- Following the keyword `def`, we give our method a name. It's best if the name describes what the method _does_.
- The code block is indented and contains all of the "instructions" for what the method should do when it is called.

```ruby
# method definition
def greet_a_texan
  "Howdy, partner!"
end
```

After defining a method, nothing will _appear_ to happen. The interpreter that reads the Ruby code will read it, and be aware of that set of instructions, but it won't carry out those instructions until it is explicitly told to do so.

### Syntax for _Calling_ a Method

To instruct the interpreter to carry out the instructions in a method, the developer must write code to <span class="vocab">call</span> that method. Simply writing the name of the method, `greet_a_texan` in this example, <span class="vocab">calls</span> or invokes the method. When we call this method by writing the name of the method, it triggers the "instructions" held within the code block of that method. Now, this method by itself only returns the string "Howdy, partner!" - we still need to use a `puts` command to see that string in the console.

```ruby
# method call
puts greet_a_texan
```

In the example above, the developer chose the method name of `greet_a_texan`. Method names should usually include verbs, since methods _do_ something. The definition just tells the program that it's a set of directions ready to be followed; the method call is what makes the code in the method <span class="vocab">execute</span>, or follow the packaged directions. You can call a method as many times as you want, once it's been defined!

## Arguments

<div class="s-card s-border-yellow-500">
  <h3>Waterfall</h3> 
  <p>Look at the (intentionally incomplete) code snippet the follows and make a guess about how this might be different from the previous method example.</p>
  <pre>
  puts greet_a_texan("Kaitlyn")
  # => "Howdy, Kaitlyn!"</pre>
  <p>Type your answers in the chat and be ready to submit when it's time!</p>
</div>
<br>

Without possibly having all the information about Ruby syntax, you probably made some connection as to what might be happening with the previous code snippet. Instructions were given to greet a person, but this time, we were able to dynamically change the name of the person we were greeting!

<span class="vocab">Arguments</span> are inputs to a method such as the String that was provided in the parenthesis after the method name in the previous example. As developers, we have control to name the <span class="vocab">parameters</span>, or placeholders, for the data that will be passed in. Those names should follow variable name conventions and be concise, yet descriptive.

```ruby
# name is a parameter
def greet_a_texan(name)
  "Howdy, #{name}!"
end

# "Kaitlyn" is the argument for this method call
puts greet_a_texan("Kaitlyn")
# => "Howdy, Kaitlyn!"

# "Brian" is the argument for this method call
puts greet_a_texan("Brian")
# => "Howdy, Brian!"
```
<br>

<div class="s-card">
  <h3>Pair Practice</h3>
  <p>In your Breakout room, the person with the longest first name will Drive. The other will Navigate.</p>
  <p>The Driver should screenshare a replit and the Navigator should keep these instructions up.</p>
  <ul>
    <li>Write a method named <code>multiply</code>. This method should declare two parameters, both Integers, and when called, should return the product of the two Integers. Call the method several times with different arguments and run the code to ensure it's working as expected.</li>
    <li>Write a method named <code>greet_an_animal</code>. This method should declare one parameter, a String, and when called, should return a string with a greeting for the specific animal that was passed in as an argument.</li>
  </ul>
</div>

## Return Values

A <span class="vocab">return value</span> is either:

- defined _explicitly_ using the `return` keyword OR
- is the last line of code run, if no `return` keyword was used

In the `subtract` example below, the return value will be whatever is stored in the `difference` variable. If 10 and 7 are passed in as arguments, the return value is 3 because the last line of the method uses the `return` keyword to return the `difference` variable. This is called an <span class="vocab">explicit return</span>.

```ruby
def subtract(bigger, smaller)
  difference = bigger - smaller
  return difference
end

subtract(10, 7)
#  => 3 (return value is 3 since it is stored in the difference variable, and the last line of the method uses the return keyword)
```

In the `add` example below, the return value is an Integer or Float, based on what values were passed in as arguments. If 2 and 3 are passed in, the return value is 5. This is called an <span class="vocab">implicit return</span>. Ruby automatically returns the value of the last expression in a method if no `return` is present. For this reason, if we want to return the value of the last expression in a method, we usually do not use the `return` keyword, as it is considered redundant and unnecessary.

```ruby
def add(num1, num2)
  num1 + num2
end

add(2, 3)
# => 5 (return value is 5 since that's the sum of 2+3, and on the last line of the method)
```

In the `say_goodbye` example below, notice we included the `puts` command in the last line of the method. The return value is `nil`. The reason for this is, the last line of code is `puts 100`, and `puts` is a built-in command whose return value is `nil`. This is called an <span class="vocab">implicit return</span>.

```ruby
def say_goodbye
  puts "See you later!"
end

say_goodbye
# "See you later!" will be printed to the console
#  => nil (puts returns nil, since puts is on the last line of the method, the return value of the method is nil)
```
<br>

### Storing a Return Value

The examples we've looked at so far call the method and execute the code within the method, but the return values go nowhere/can never be used in the program again. Many times, we'll store the return value of a method in another variable, as modeled below:

```ruby
def add(num1, num2)
  num1 + num2
end

sum1 = add(2, 3)
sum2 = add(7, 9)

puts sum1
puts sum2
```

<br>

<div class="s-card">
  <h3>Check For Understanding</h3>
  <p>Complete the tasks in the <a href="https://github.com/turingschool/methods_cfu_am0" target="blank">Check For Understanding repository</a>. Submit your copy of the repository to the submission form.</p>
</div>

<br>
<br>
<br>