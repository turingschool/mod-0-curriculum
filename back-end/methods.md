---
layout: lesson
title: Methods
---

## Preview

Before attending class, students should complete the <a href="./methods-pw" target="blank">Methods Preview</a> assignment.

## Learning Goals

- Explain why we use methods
- Use built-in methods on appropriate objects
- Define and call methods in Ruby, including those with arguments

## Vocabulary

- <span class="vocab">argument</span>
- <span class="vocab">execute</span>
- <span class="vocab">explicit return</span>
- <span class="vocab">implicit return</span>
- <span class="vocab">method</span>
- <span class="vocab">parameter</span>
- <span class="vocab">return</span>

## Methods

<div class="s-card">
  <h3>Exploration: PART 1</h3> 
  <p>Fork, then run the code <a href="https://replit.com/@turingschool/m0builtinmethods#main.rb" target="blank">in this replit</a> and observe the output.</p>
  <p>Discuss with your partner: How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</p>
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
    <li>Discuss with your partner: What is different about this from the first set of method calls? How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</li>
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

The methods we've used up until now were built into the Ruby language. Those are great and will be used by you heavily and regularly as a developer. And, there will be times when you need to write your own methods to solve the unique problems in the application you are building or maintaining. To do this, we'll use the `def` and `end` keywords, following the syntax in the example:

```ruby
# method definition
def print_num
  puts 100
end

# method call
print_num
```

In the example above, the developer chose the method name of `print_num`. Method names should usually include verbs, since methods _do_ something. The definition just tells the program that it's a set of directions ready to be followed; the method call is what makes the code in the method <span class="vocab">execute</span>, or follow the packaged directions. You can call a method as many times as you want, once it's been defined!

## Arguments

<div class="s-card s-border-yellow-500">
  <h3>Waterfall</h3> 
  <p>Look at the (intentionally incomplete) code snippet the follows and, with the information you have, make an educated guess about what the outcomes would be:</p>
  <pre>
add(4, 10)
add(6, 7)


subtract(10, 3)
subtract(12, 9)
</pre>
  <p>Type your answers in the chat and be ready to submit when it's time!</p>
</div>
<br>

Without possibly having all the information about Ruby syntax, you probably made some connection as to what might be happening with the previous code snippets: Instructions were given to either add or subtract, and two Integers were provided, to presumptively perform the respective mathematical operation on.

<span class="vocab">Arguments</span> are inputs to a method such as the Integers that were provided in the previous example. As developers, we have control to name the <span class="vocab">parameters</span>, or placeholders, for the data that will be passed in. Those names should follow variable name conventions and be concise, yet descriptive.

```ruby
# num1 and num2 are parameters
def add(num1, num2)
  num1 + num2
end

# 2 and 3 are the arguments for this method call
add(2, 3)

# 9 and 12 are the arguments for this method call
add(9, 12)
```
<br>

<div class="s-card">
  <h3>Pair Practice</h3>
  <p>In your Breakout room, the person with the longest Starbucks order will Drive. The other will Navigate.</p>
  <p>The Driver should screenshare a replit and the Navigator should keep these instructions up.</p>
  <ul>
    <li>Write a method named <code>greet_an_animal</code>. This method should declare one parameter, a String, and when called, should print out the String that was passed in. Call the method several times with different arguments and run the code to ensure it's working as expected.</li>
    <li>Write a method named <code>multiply</code>. This method should declare two parameters, Integers, and when called, should print the product of the values that were passed in as arguments.</li>
  </ul>
</div>

## Return Values

A <span class="vocab">return value</span> is either:

- defined _explicitly_ using the `return` keyword OR
- is the last line of code run, if no `return` keyword was used

In the `print_age` example, the return value is `nil`. The reason for this is, the last line of code is `puts 100`, and `puts` is a built-in command whose return value is `nil`. This is called an <span class="vocab">implicit return</span>.

```ruby
def print_age
  puts 100
end

print_age
# 100 (100 is printed because the puts command did that)
#  => nil (puts retuns nil, since puts is on the last line of the method, the return value of the method is nil)
```

In the `add` example, the return value is an Integer or Float, based on what values were passed in as arguments. If 2 and 3 are passed in, the return value is 5. This is called an implicit return.

```ruby
def add(num1, num2)
  num1 + num2
end

add(2, 3)
# => 5 (return value is 5 since that's the sum of 2+3, and on the last line of the method)
```

In the `subtract` example, the return value will be whatever is stored in the `difference` variable. If 10 and 7 are passed in, the return value is 3 because 3 is stored in the `difference` variable, and the last line of the method uses the return keyword to return the `difference` variable. This is called an <span class="vocab">explicit return</span>.

```ruby
def subtract(bigger, smaller)
  difference = bigger - smaller
  return difference
end

subtract(10, 7)
#  => 3 (return value is 3 since it is stored in the difference variable, and the last line of the method uses the return keyword)
```
<br>

### Storing a Return Value

The examples we've looked at so far so call the method and execute the code within the method, but the return values go nowhere/can never be used in the program again. Many time, we'll store the return value of a method in another variable, as modeled below:

```ruby
def add(num1, num2)
  num1 + num2
end

sum1= add(2, 3)
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