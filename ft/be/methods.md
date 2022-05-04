---
layout: page
title: Methods
---

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

A <span class="vocab">Method</span> is a package of instructions. Once a method is defined, it can be used as many times as needed. If you open up `irb` and run the following:

```ruby
irb(main):001:0> "Hello World".upcase
=> "HELLO WORLD"
```

This code calling the `upcase` method. It is a built-in String method whose job is to create a version of the String with all capital letters.

One of the most important reasons we need methods is to reuse code. Instead of rewriting all those lines of code for creating an upcased string, we simply call the `upcase` method.

The example illustrates another key point: **methods run on objects**. In the example above, the upcase method is running _on_ "Hello World", which is a String object. You can think of methods like they are messages to an object. The above code is like saying, “Hey String, give me an upcased version of yourself.”

To recap the Key Points from this section:
- We use methods so we can reuse code
- Methods run on objects

## Arguments

<span class="vocab">Arguments</span> are the input(s) to a method.

If you open an `irb` session and run the following:

```ruby
irb(main):005:0> "Hello World".include?("Hello")
=> true
```

You are calling the `include?` method on the String `"Hello World"`. The argument `"Hello"` is being passed to the `include?` method. The return value is `true`.

**Note:** Parenthesis are optional when passing arguments. The previous code snippet could also be written as:

```ruby
irb(main):005:0> "Hello World".include? "Hello"
=> true
```

Some methods take multiple **arguments**. For example:

```ruby
irb(main):006:0> "Hello World".gsub("World", "Turing")
=> "Hello Turing"
```

This is the same as:

```ruby
irb(main):007:0> "Hello World".gsub "World", "Turing"
=> "Hello Turing"
```

<br>
<div class="s-card">
  <h3>Practice: Define and Identify</h3> 
  <p>In the <a href="https://github.com/turingschool/methods_cfu_am0/blob/main/self_eval.md" target="blank">Check For Understanding repo</a>, complete the <code>define_and_id.rb</code> file.</p>
</div>
<br>


## Variables

We can use methods in the same way on variables which store objects.

```ruby
irb(main):001:0> greeting = "hello"
=> "hello"
irb(main):002:0> greeting.upcase
=> "HELLO"
```

<br>
<div class="s-card">
  <h3>Practice: Calling Methods on Variables</h3> 
  <p>Complete the <code>methods_variables.rb</code> file in the Check For Understanding repo.</p>
</div>
<br>

## Defining Our Own Methods

The methods we've used up until now were built into the Ruby language. Those are great and will be used by you heavily and regularly as a developer. And, there will be times when you need to write your own methods to solve the unique problems in the application you are building or maintaining. To do this, we'll use the `def` and `end` keywords, following the syntax in the example:

```ruby
# method definition
def print_age
  puts 100
end

# method call
print_age
```

In the example above, the developer chose the method name of `print_age`. Method names should usually include verbs, since methods _do_ something. The definition just tells the program that it's a set of directions ready to be followed; the method call is what makes the code in the method <span class="vocab">execute</span>, or follow the packaged directions. You can call a method as many times as you want, once it's been defined!

### Defining Methods with Arguments

We can also define methods designed to take arguments. As developers, we have control to name the <span class="vocab">parameters</span>, or placeholders, for the data that will be passed in. Those names should follow variable name conventions and be concise, yet descriptive.

```ruby
def add(num1, num2)
  num1 + num2
end

add(2, 3)

add(9, 12)

add 8, -8
```
<br>

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
  <p>Complete the <code>final_practice.rb</code> in the Check For Understanding repo. Submit your copy of the repo to the submission form.</p>
</div>

<br><br><br>