---
layout: page
title: Session 5
subheading: Top-down design, Breaking down a problem, Modeling OOP
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>define top-down design and object oriented programming</li>
      <li>break down real-world tasks using top-down design strategies</li>
      <li>model real-world objects by breaking down their attributes and behaviors</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Housekeeping and Goals</li>
      <li><strong>45 min: </strong><a href="#topdowndesign">Top Down Design</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>45 min: </strong><a href="#oop">Object Oriented Programming</a></li>
      <li><strong>10 min: </strong><a href="#homework">Assessment Preview</a></li>
    </ul>
  </div>
  <div>
    <h3>Materials</h3>
    <ul>
      <li>Notebook</li>
      <li>Writing instrument</li>
      <li>Laptop</li>
      <li>Headphones & mic</li>
    </ul>
  </div>
</div>

## Housekeeping and Goals

### Wins From Feedback

### Follow-Ups From Feedback

### Other Notes


<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What's something you're really good at? (Don't be humble!)</p>
  <p>3. Accountability review: how are you progressing toward mastery of your focus skills?</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

<a name="topdowndesign"></a>
## Top Down Design

<span class="vocab">Top Down Design</span> (or step-wise design) is an approach to breaking down a problem or system. In this approach, the designer lays out the problem or system's high-level overview, then breaking down the overview into sub-systems (or sub-steps), then repeating that process until the system has been broken down into the smallest pieces. 

As humans, we memorize and practice the steps that it takes in order to do even the most basic tasks. If you tell a human to tie their shoe, you (generally) don't need to specify any further instructions. However, if you were to build a shoe-tying machine, you would need to break down the process into the most basic steps. 

<div class="try-it">
  <h3>Top Down Design: Independent</h3>
  <p>Watch <a href="https://www.youtube.com/watch?v=QsKkG9gWxF4" title="">Damian Gordon's Top Down Design video</a> where he talks through the process of breaking down the process of making a cup of tea.</p>

  <p>In your notebooks, jot down key points to consider in the process of top down design. Be ready to share.</p>
</div>

### Whole-Group Share

What are some key considerations when breaking down a problem using top down design? 

What are some questions related to top down design and the points brought up in the video? 

<div class="try-it">
  <h3>Top Down Design: Breakout Rooms</h3>
  <p>Open your text editor (either Atom or Sublime) and press <code>command + n</code> which will give you a blank file. There is no need to save this file right now.</p>
  <p>In your groups, breakdown steps 6-10 and document your process in your text editor. You can find the full list at 2:00 in the video. Be ready to share.</p>
</div>

### Share

Be ready to share how your group broke down the remaining steps. 

### Further Break Down

The video only demonstrates one layer deep of breaking down a problem. What would it look like if we broke down the sub steps? 

<textarea rows="15" name="">
1.1 Get a cup
      1.1.1 Open the cupboard
              1.1.1.1 Decide which cupboard contains the mugs
              1.1.1.2 Put fingers on handle of cupboard
              1.1.1.3 Pull cupboard door open
      1.1.2 Select a mug
      1.1.3 Put the mug on the counter
1.2 Get tea bags
      1.2.1
      1.2.2
1.3 Get sugar
1.4 Get milk
1.5 Get spoon/fork
</textarea>

<div class="try-it">
  <h3>Top Down Design: Breakout Rooms</h3>
  <p>Back in your breakout rooms, see if you can identify any sub steps from making tea (6-10) that can be broken down into smaller parts. Be ready to share.</p>
</div>

### Share

What did you come up with? 

<div class="try-it">
  <h3>Top Down Design: The Library</h3>
  <p>Back in your breakout groups, the person whose birthday is next will share their screen. Happy birthday! Pull up your text editor. You can either delete what you already had from the last exercise, or you can start fresh underneath your previous work.</p>
  <p>Break down the process of <strong>checking out a specific book (group choice) from the library</strong>.</p>
</div>

<a name="oop"></a>
## Object Oriented Programming

<span class="vocab">Object oriented programming</span>, or OOP for short, is an approach to programming (or a [programmming paradigm](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)) where programs are organized as a series of objects. Each object has <span class="vocab">attributes</span> and <span class="vocab">methods</span>. 

#### Objects

An object can be anything that has state and behavior (usually). For example, here are a few objects that I've used in recent programs that I've written:

```
Student
Course
Account
```

Notice that I didn't say something as specific as `Joey`, `Calculus`, or `Briana's school breakfast account`. 

Think of an object as a blueprint that could be used for many versions of itself, not a specific instance of something. 

<div class="try-it">
  <h3>Breakout Rooms: Object Brainstorm</h3>
  <p>Think back to your shopping app from session 2. Brainstorm as many objects as you can that might exist in a shopping app and jot your ideas down. Be ready to share.</p>
</div>

#### Attributes

Attributes contain information about the **state** of an object. The information format should be one of the basic data types from Session 2 (string, integer, float, boolean, array, hash). You can think of them as the things that differentiate one type of this object from another. These are NOT things that the object can do. Let's look at a few examples:

```
Student

Attributes:
FirstName (string)
LastName (string)
Birthdate (date) -- this is not one of the data types we discussed, but it's a valid type to use
Enrolled (boolean)
```

All of these things would differentiate one student from another, but none of these attributes are **behaviors**. For example, I didn't include `enroll_in_school` as an attribute because that's an action, not a state. Instead, these are traits that I can ask about but not things that a student can do. 

```
Course

Attributes: 
Title (string)
Period (integer)
Category (string)
Offered (boolean)
Roster (array)
```

Again, all of these attributes would differentiate one course from another. Notice that this last attribute, `Roster`, could be an array containing strings of student names, or an array of `Student` objects depending on how the program is set up. 

```
Account

Attributes:
Type (string)
Balance (float)
UserID (integer)
Transactions (array)
```

The same thing is true of this final attribute as well. The `Transactions` array could potentially contain `Transaction` objects. 

<div class="try-it">
  <h3>Breakout Rooms: Object Attributes</h3>
  <p>Select four objects from your shopping app. Brainstorm and jot down (using the format above) attributes for the four selected objects. Be ready to share. </p>
</div>

#### Methods

Methods encapsulate an object's **behavior** and how that object reacts when asked to do something. Methods are generally verbs (action words or very short phrases). Let's look at a few examples: 

```
Student

Attributes:
FirstName (string)
LastName (string)
Birthdate (date)
Enrolled (boolean)

Methods:
Greet
IntroduceSelf
CompleteAssignment
RaiseHand
Enroll
```

Unlike attributes, methods do not necessarily differentiate one instance of the object from another. For example, the steps that Briana and Jose would take to raise their hands might be identical. The steps they take to enroll at school might also be identical. Often (but not always), a method will use or change an attribute. For example, the `IntroduceSelf` method would rely on the `FirstName` and `LastName` attributes. 

Here's another example:

```
Account

Attributes:
Type (string)
Balance (float)
UserID (integer)
Transactions (array)

Methods: 
Withdraw
Deposit
```

In this case, both the `Withdraw` and `Deposit` methods would change the `Balance` attribute in addition to adding to the `Transactions` array. 

<div class="try-it">
  <h3>Breakout Rooms: Object Methods</h3>
  <p>Select two objects from your shopping app that lend themselves nicely to brainstorming methods. For example, <code>Product</code> might not have many easily brainstormed methods, but <code>Cashier</code> or <code>Customer</code> might.</p>
  <p>Brainstorm methods for the two selected objects. Discuss whether these methods would use/change any attributes of the object. Be ready to share.</p>
</div>

### Individual Practice Round

<div class="try-it">
  <h3>Objects in a System</h3>
  <ol>
      <li>Choose one of these systems:</li>
      <ul>
        <li>Museum</li>
        <li>Hotel</li>
        <li>Beach</li>
        <li>Concert</li>
    </ul>
      <li>Brainstorm two objects in your chosen system.</li>
      <li>List the attributes for both objects.</li>
      <li>List the methods for both objects.</li>
  </ol>
  <p>Be ready to share with a partner and give/receive feedback.</p>
</div>

<a name="homework"></a>
## Homework

This is our final Mod 0 technical session. Your assignment between now and Thursday is to find 60 minutes to complete the Mod 0 Technical Assessment. 



