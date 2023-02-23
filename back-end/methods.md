---
layout: lesson
title: Methods
---

## Learning Goals

- Explain the purpose of methods
- Use built-in methods on appropriate objects based on data type
- Define and call methods in Ruby
- Use and explain the flow of data with arguments and parameters
- Describe the purpose of a return value

## Vocabulary

- <span class="vocab">method</span>
- <span class="vocab">define</span>
- <span class="vocab">execute or call</span>
- <span class="vocab">return</span>
- <span class="vocab">parameter</span>
- <span class="vocab">argument</span>

## Warm-Up

<div class="s-card">
  <h3>Exploration: PART 1</h3> 
  <p>Fork, then run the code <a href="https://replit.com/@turingschool/m0builtinmethods#main.rb" target="blank">in this replit</a> and observe the output.</p>
  <p><strong>Think:</strong> How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</p>
</div>
<br>

## Methods

A <span class="vocab">Method</span> is a package of instructions. Once a method is defined, it can be used as many times as needed. Ruby provides many methods that developers can use. 

The code snippet that follows was part of the previous Exploration activity:

```ruby
p 14.odd? 
```

>To describe the code snippet in English, one could say, "the `odd question mark` method is being called on the Integer 14." Since 14 is not odd, `false` will be the return value. The `p` command prints that return value of `false` to the console.

In this particular example, the utility of the `odd?` method is to determine if an Integer is odd, or not. It answers the question with a Boolean (`true` or `false`). The benefit of having this method built into Ruby is if a developer needs to check if a number is odd or not, they only have to type `.odd?` anywhere they need to check. If they didn't have a pre-packaged method, they'd have to write several lines of code involving logic, every time they want to check if an integer is odd. **Reusability is what makes methods so powerful.**

<br>
<div class="s-card">
  <h3>Exploration: PART 2</h3> 
  <p>In <a href="https://replit.com/@turingschool/m0builtinmethods#main.rb" target="blank">the same replit</a> from the first exploration, comment <em>out</em> the code from Part 1, and <em>uncomment</em> the code under Part 2.</p>
  <ul>
    <li>Run the code.</li>
    <li><strong>Think:</strong> What is different about this from the first set of method calls? How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</li>
  </ul>
</div>
<br>

The following code snippet demonstrates that a method can be called on a variable assigned to data:

```ruby
new_string = "Hello World"
p new_string.upcase
```

>To describe the code snippet in English, one could say, "the first line declares a variable called `new_string` and the second line calls the `upcase` method on the `new_string` variable." As a result, the method will return a String object where any letter character in the original String stored in `new_string` will now be capitalized. The `p` command prints that return value of `"HELLO WORLD"` to the console. However, it's important to note that the original data stored in `new_string` is not modified permanently. 

<br>
<div class="s-card">
  <h3>Exploration: PART 3</h3> 
  <p>In <a href="https://replit.com/@turingschool/m0builtinmethods#main.rb" target="blank">the same replit</a>, comment <em>out</em> the code from Part 2, and <em>uncomment</em> the variable declarations and first method call under Part 3.</p>
  <ul>
    <li>Run the code and read the error message carefully. Work to make sense of what the problem is.</li>
    <li>Comment out that method call, and uncomment the next one. Run the code and read the error message carefully. Work to make sense of what the problem is.</li>
    <li>Repeat the previous step until you've run the code for each method call.</li>
    <li>Modify the existing code so that it runs without errors.</li>
    <li><strong>Write down</strong> a 1-3 sentence explanation of your main takeaway from this exploration.</li>
  </ul>
</div>
<br>

<div class="s-card s-border-yellow-500">
  <h3>Key Points</h3> 
  <ul>
    <li>A method is a package of instructions that once defined, can be reused as many times as needed.</li>
    <li>A method can be called on a variable that holds data.</li>
    <li>Ruby provides built-in methods for each data type. Not every method will work on every type of data.</li>
  </ul>
</div>
<br>

## Defining Our Own Methods

The methods we've used up until now were built into the Ruby language. Those are great and you will use them heavily and regularly as a developer. And, there will also be times when you need to write your own method to solve a unique problem in the application you are building or maintaining. 

### Syntax for Defining a Method

To define our own method, we'll use the following guidelines: 
- The `def` and `end` keywords act like bookends for the code block. 
- Following the keyword `def`, we assign our method a name. It's best if the name describes what the method _does_.
- The code block is indented and contains all of the "instructions" for what the method should do when it is called.
- The value that follows the `return` keyword is the data that the method will return when it is called.

In the method below, the code block has only one line, but it's important to note that there could be many lines of code within the code block, describing the steps that a method should follow. You can even include other things we've learned like conditionals and built-in methods within your code block.

```ruby
# method definition
def greet_a_texan
  return "Howdy, partner!"
end
```

After defining a method, nothing will _appear_ to happen. The interpreter that reads the Ruby code will read it, and be aware of that set of instructions, but it won't carry out those instructions until it is explicitly told to do so.

### Syntax for _Calling_ a Method

To instruct the interpreter to carry out the instructions in a method, the developer must write code to <span class="vocab">call</span> or <span class="vocab">execute</span> that method. Simply writing the name of the method, `greet_a_texan` in this example, <span class="vocab">calls</span> or executes the method. When we call this method by writing the name of the method, it triggers the "instructions" held within the code block of that method. Now, this method by itself only returns the string "Howdy, partner!" - we still need to use a `puts` command to _see_ that return value in the console.

```ruby
# method call
greet_a_texan
```

In the example above, the developer chose the method name of `greet_a_texan`. Method names should usually include verbs, since methods _do_ something. The definition just tells the program that it's a set of directions ready to be followed; the method call is what makes the code in the method <span class="vocab">execute</span>, or follow the packaged directions. You can call a method as many times as you want, once it's been defined!

### A Method Metaphor

Often, we want to use a method to perform an action on or with a piece of data. Think back to those built-in methods. We didn't simply call the `odd?` method by itself. We called it on an Integer object and it returned a Boolean value. We can do the same thing with the methods we define. Think of your method like a machine with inputs and outputs. 

<img src="../assets/images/function-machine.png">

If this were a cookie machine, for example, the machine would take in all of the raw ingredients (eggs, flour, sugar, etc.) and perform some steps to make the cookies: 
1. Mix ingredients to make dough
2. Place dough balls on a baking sheet
3. Bake at 350 degrees for 10 minutes
4. Let cookies cool
5. Serve the cookies on a plate

We can imagine that our cookie machine would do all of those steps and then give us back freshly baked, warm cookies! 

Let's expand this example to any kind of machine. We give the machine the raw materials, it does something with those materials, and then returns the final product. This is _very_ similar to what we are doing with our own <span class="vocab">methods</span>. We give the method some piece of data or information (or even multiple pieces of information) and then the method does something with that information and spits out a return value. 

<div class="s-card s-border-yellow-500">
  <h3>Think About It</h3> 
  <p>Look at the method call below and make a guess about how this might be different from the previous method example.</p>
  <pre>
  greet_a_texan("Kaitlyn")
  # => "Howdy, Kaitlyn!"</pre>
  <!-- <p>Type your answers in the chat and be ready to submit when it's time!</p> -->
</div>
<br>

Without possibly having all the information about Ruby syntax, you probably made some connection as to what might be happening with the previous code snippet. The `greet_a_texan` method was called, but this time, we were able to dynamically change the name of the person we were greeting!


### Arguments & Parameters

<span class="vocab">Arguments</span> are the technical term for the inputs to a method such as the String that was provided in the parenthesis after the method name in the previous example. As developers, we have the control to name the <span class="vocab">parameters</span>, or placeholders, for the data that will be passed in. Those names should follow variable name conventions and be concise, yet descriptive. The number of arguments passed in should match the number of parameters declared.

```ruby
# name is a parameter
def greet_a_texan(name)
  return "Howdy, #{name}!"
end

# "Kaitlyn" is the argument for this method call
puts greet_a_texan("Kaitlyn")
# => "Howdy, Kaitlyn!"

# "Brian" is the argument for this method call
puts greet_a_texan("Brian")
# => "Howdy, Brian!"
```

> **Note:** You'll notice that we are using the `puts` command in front of the method call this time. This allows us to also **see** the return value of the `greet_a_texan` method printed to the console, but it is not necessary. The code `greet_a_texan("Kaitlyn")` by itself does return the string "Howdy, Kaitlyn!", but if we want to see it printed in the console, we will need to use `puts` or `print` along with the method call.

<br>

<div class="s-card">
  <h3>Practice</h3>
  <!-- <p>In your Breakout room, the person with the longest first name will Drive. The other will Navigate. The Driver should screenshare a replit and the Navigator should keep these instructions up.</p> -->
  <ul>
    <li>Write a method named <code>greet_an_animal</code>. This method should declare one parameter, a String, and when called, should return a string with a greeting for the specific animal that was passed in as an argument.</li>
    <li>Write a method named <code>multiply</code>. This method should declare two parameters, both Integers, and when called, should return the product of the two Integers. Call the method several times with different arguments and run the code to ensure it's working as expected.</li>
  </ul>
</div>
<br>

### Return Values

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

In the `add` example below, the return value is an Integer or Float, based on what values were passed in as arguments. If 2 and 3 are passed in, the return value is 5. This is called an <span class="vocab">implicit return</span>. <strong>Ruby automatically returns the value of the last expression in a method if no `return` is present.</strong> For this reason, if we want to return the value of the last expression in a method, we usually do not use the `return` keyword, as it is considered redundant and unnecessary.

```ruby
def add(num1, num2)
  num1 + num2
end

add(2, 3)
# => 5 (return value is 5 since that's the sum of 2+3, and on the last line of the method)
```

<div class="s-card s-border-yellow-500">
  <h3>Best Practices</h3> 
  <p>Typically, we do not include an explicit <code>return</code> unless it is absolutely necessary. Since ruby methods automatically <code>return</code> the  value of the last line, it's common practice to use <em>implicit</em> returns like in the example above.</p>
</div>
<br>

### Be Careful with <code>puts</code> Inside of Your Method

In the `say_goodbye` example below, notice we included the `puts` command in the last line of the method instead of returning a data point. The return value is `nil` because the last line of code is `puts "See you later"`, and `puts` is a built-in command with a return value of `nil`. <em>This is generally not a best practice, because the method doesn't return any usable data.</em>

```ruby
def say_goodbye
  puts "See you later!"
end

say_goodbye
# "See you later!" will be printed to the console
# The return value is nil because puts is on the last line of the method and the return value of the puts method is always nil
```

>**Key Point:** Up until now, we've use the `puts` and `print` commands to see values printed to the console. Be careful not to confuse what you see in the console with the return value of the method -- these are two different things. We use `puts` and `print` to **see** data in the console, but what we see in the console is **not always** the return values.

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
  <h3>Practice</h3>
  <!-- <p>In your Breakout room, the person with the shortest first name will Drive. The other will Navigate. The Driver should screenshare a replit and the Navigator should keep these instructions up.</p> -->
  <ul>
    <li>Write a method named <code>get_age</code>. This method should declare one parameter, an Integer, representing a birth year.</li>
    <li> When called, the method should calculate the person's approximate age. Let's not worry about birth month or day. 😉 </li>
    <li>The method should return an Integer representing the person's age.</li>
    <li>Call the method several times with different arguments and store the return values in variables.</li>
    <li>Print a sentence that says, "You have lived ___ years of life!" with each variable interpolated into the String.</li>
  </ul>
</div>

<br>

<div class="s-card s-border-yellow-500">
  <h3>Key Points Summary</h3>
  <ul>
    <li>A method is a packaged set of directions. If the method is never <em>called</em>, it will never run. And a method can be called many times, if needed!</li>
    <li>The number of arguments in a method call must match the number of parameters in the method definition.</li>
    <li>Method names should start with a verb and use <code>snake_case</code>.</li>
    <li>The value after the <code>return</code> keyword is the data that will be returned when a method is called.</li>
  </ul>
</div>
<br>

## Check For Understanding

Complete the tasks in <a href="https://github.com/turingschool/methods_cfu_am0" target="blank">this repository</a>. Submit your copy of the repository to the submission form.


<br>
<br>
<br>