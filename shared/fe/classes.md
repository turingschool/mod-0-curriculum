---
layout: lesson
title: Classes
---

<div class="s-card s-border-yellow-500">
  <h3>Learning Collaboratively</h3> 
  <p>This lesson is intended for 2-3 students to work through together. Learning collaboratively likely means moving through content slower, but also should result in learning more thoroughly. In addition to working together, this learning environment is new for all students - take time to learn about strategies your partner uses, tips they have, etc. as well as share your best practices!</p>
  <p>To make sure you are set up for success, get yourself prepared for a pairing-like environment. Fill your water bottle, put your phone aside, and be ready to fully engage.</p>
  <p>As you work through this lesson with your partner(s), focus in on your communication, exercising patience, and making sure all students complete the lesson with a similar level of understanding.</p>
</div>
<br>

## Learning Goals

- Write JavaScript classes with properties and methods
- Create JavaScript object instances


## Vocabulary

- <span class="vocab">property</span>
- <span class="vocab">class</span>
- <span class="vocab">method</span>
- <span class="vocab">object instance</span>
- <span class="vocab">this</span>

<div class="s-card s-border-yellow-500">
  <h3>Share with Partner</h3> 
  <p>What do you do with the Vocabulary sections? How do you ensure you can fluently define and use all terms listed, by the end of the lesson?</p>
</div>
<br>

## What is Object Oriented Programming?

<span class="vocab">Object Oriented Programming (OOP)</span> is one way to design a program to manage the data in a program.

## Connecting OOP to Real-World Scenarios

In the introduction, we shared that Object Oriented Programming (OOP) is a paradigm for how we can organize code. Without seeing examples, that definition just feels… unhelpful. In this section, we won’t dig into code quite yet, but we’ll do some thinking and list-making to set ourselves up to write code in the next section!

### Car Factory

Let’s think about some components of a Ford car factory. We may make some stuff up, but this analogy should help us build context for what OOP is.
- The factory has a machine that is designed to make a Ford Escape
- All Ford Escapes have four wheels and four doors
- The color, interior fabric and engine size can vary from one Ford Escape to another

With the information above, in theory, the manager at the factory should be able to say “please make a blue Escape with a leather interior and 2.5 cylinder engine”, and that should be possible.

That example about the car factory ties directly to concepts of OOP. We will use three main technical terms today. They are below, with the connection to the car factory example:

- <span class="vocab">class</span> - A class is like a blueprint or template. The factory machines are designed to make a car - that is the template for ALL Ford Escapes. We could probably name it the `EscapeCar` class.
- <span class="vocab">object instance</span> - An instance is an object that is made from the class template. The blue Escape that the manager requested (and was able to physically sit in and drive) is referred to as an object or instance of the `EscapeCar` class.
- <span class="vocab">property</span> - A property is a specific characteristic about an instance that has the potential of varying from other instances. With our Escapes, color, interior and engine would be properties, because they weren’t programmed into the template, but were extra information the manager was able to give for each specific instance of that class. The fact that the Escape has four wheels may also be an property; but it's not a dynamic property since all Escapes have four wheels.

<div class="s-card">
  <h3>Brainstorm & Share</h3> 
  <p>Each partner should do this independently: Pick an object that you see in the physical space you are in. It could be a candle, water bottle, glove, anything!</p>
  <ul>
    <li>What <em>type</em> of object is it? What might the class name be?</li>
    <li>Are there multiple objects/instances of it in your home, or in the world? List a few.</li>
    <li>What are some of its properties?</li>
  </ul>
  <p>Share your ideas with your partner.</p>
</div>

## Explore Class Syntax

While this may feel uncomfortable at first, research shows that one of the most effective ways to learn is to explore. Instead of your instructor typing code and explaining every character, you are going to read some Ruby code that's already been written. You will likely have some questions about what X or Y is doing, and you'll also likely be able to make some deductions about what other pieces are doing. We will talk through it all after you've had a chance to use your brain and make some connections on your own.

<a href="https://replit.com/@turingschool/oop-intro-ford-escape-js#index.js" target="_blank">Look at the code in this replit</a> and think through the guiding questions:

- What is the name of the class?
- How many object instances are being made?
- What are the properties? Which is a default property and which is dynamic?
- How might you make another _object instance_?

Answers to the questions above are available on line 50 of the replit, if you'd like to check yourself!


## Write a New Class

In the previous section, you identified an object in your physical space and wrote a list of instances and properties. The Navigator in this activity will direct their Driver to write a JavaScript program that represents this object.

<div class="s-card">
  <h3>Driver-Navigator</h3> 
  <p>The person with the largest number of characters in their name is the Driver, the other is the Navigator. The Navigator should have this document opened, and the Driver should be screen sharing with their Terminal or Chrome opened. The Navigator will direct the Driver through the steps listed below.</p>
  <ul>
    <li>Create a new project called <code>classesLesson</code>. Inside the project, create a file called <code>firstClass.js</code> OR, create a JavaScript file in replit - your choice.</li>
    <li>Inside that file, write a class. Navigator - the class should represent the object <em>you</em> identified in your physical space. It does not yet need properties, just the class name.</li>
    <li>Below the class declaration, create an object instance. Print it out and run the file to confirm it has been created successfully.</li>
    <li>Now, add a default property.</li>
    <li>Now, add a dynamic property. Remember, something about the object instance will need to change now that the class expects dynamic info.</li>
    <li>Run the file again to check for errors or issues. If you don't have any, create a few more object instances. Consider adding another dynamic property.</li>
  </ul>
  <p>Switch Driver-Navigator roles, and do this again. If you haven't taken a break yet, consider taking one now!</p>
</div>

## Methods

Information, even when we include dynamic information, about an object is not always enough. In software engineering, we also want the ability to change information about an object. We will use methods to accomplish this.

<span class="vocab">Methods</span> are like functions that live inside of a class; defined by the developer that can be called on any existing instance object of that class. What follows is an example to illustrate the syntax:

```ruby
class EscapeCar {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
    this.gear = "park";
  }

  changeGear(newGear) {
    this.gear = newGear;
  }
}

var car1 = new EscapeCar("blue");
console.log(car1);

car1.changeGear("drive");
console.log(car1);
```

Read the code carefully. Consider copy-and-pasting it into a replit and running it. Work to build an understanding of what is happening, then, read the explanations below:

- `changeGear(newGear) {`: this line of code is declaring a method on the EscapeCar class. Note that it lives inside the curly braces of the class. It has declared a parameter, `newGear`.
- `this.gear = newGear;`: the code inside of the method will reassign the value of the `gear` property, to the value of the argument that will be passed in when this method is called
- `car1.changeGear("drive")`: this is the method call. It must be called with dot notation, after the variable name of the variable that holds the object instance. This is demonstrated by the change in that property value that prints out in the console.log.

## Connection to Apps we Use

Now that you’ve seen how this “factory” concept can be used in code, you may be wondering about how this code concept is used within apps we use every day.

We won’t get all the way there in illustrating it today, but, we can look at Instagram for a moment to talk through where we see some use of classes and instances.

<img src="https://try.turing.edu/popup-oop/assets/instagram-oop.png">

## Build A Class with Specifications

Many times, you'll build a class based on specifications (commonly referred to as specs). They will usually be written in the form of tests, which we will learn about later. For now, use the specifications below to write a class and object instances from it. You should struggle a bit while completing this, but do your best and try _something_!

<div class="s-card">
  <h3>Specifications</h3> 
  <ul>
    <li>In a new file, write a class called <code>Dino</code></li>
    <li>It should have a dynamic name property</li>
    <li>It should have a dynamic period property</li>
    <li>It should have a color property, that is green by default</li>
    <li>It should have a <code>roar</code> method that roars a sentence including its name, when called</li>
  </ul>
  <h4>Challenge Extensions</h4> 
  <ul>
    <li>It should have a diet property that defaults to "vegetarian" <em>but</em>, if data is passed in, it can be dynamic</li>
    <li>It should have a <code>printWelcome</code> method that prints a sentence welcoming the Dino to the world. The welcome message should vary based on the period the Dino existed (Triassic, Jurassic, and Cretaceous are examples).</li>
  </ul>
</div>
<br>


## Check For Understanding

Each partner should complete this independently. It is ok to consult one another if needed!

<a href="https://github.com/turingschool/m0_fe_classes" target="_blank">Follow the directions in the README of this repository</a>. Each student should submit their own repository to the submission form.

<br>
<br>