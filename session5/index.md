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

- Solid understanding of creating repository, pushing to repository, cloning repository, and forking repository (average mastery scores above 4)
- More breakout rooms! :) 
- Nice work with pull requests on GitHub

### Follow-Ups From Feedback

- Time allotted for breakout rooms
- Terminal vs. text editor?
- Sessions move fast
- Markdown average mastery score 3.6
- Recordings don't record breakout rooms

### Other Notes

- Initial commit for starting point (see commits from [mod0references](https://github.com/turingschool-examples/mod0resources/commits/master) repo as an example)
- Good commit message format: 

```
Add list of mod 0 resources
Remove reference to old blog post
Change data type of age field
Fix spelling mistake
```

- Not good commit message format: 

```
Rachel is adding her list of mod 0 resources
old blog post
changed data type for age field
Oops, I need to fix my spelling mistake
```

- Instead of simply absorbing information, practice and apply
- Today's Goals

<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What's something you're really good at? (Don't be humble!)</p>
  <p>3. Accountability review: what tangible progress have you made toward the focus skills you identified at the beginning of Mod 0?</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

<a name="topdowndesign"></a>
## Top Down Design

> "Programing is hard because it requires us to solve ill-defined problems with unknown solutions. Our job is to invent the solutions. Coding is inherently creative." - [Danny Smith on Breaking Down Problems](https://medium.com/@dannysmith/breaking-down-problems-its-hard-when-you-re-learning-to-code-f10269f4ccd5)

<span class="vocab">Top Down Design</span> (or step-wise design) is an approach to breaking down a problem or system. In this approach, the designer lays out the problem or system's high-level overview, then breaking down the overview into sub-systems (or sub-steps), then repeating that process until the system has been broken down into the smallest pieces. 

**Why is this important?** A problem that is not broken down into its smallest components remains too complex and abstract to code. 


As humans, we memorize and practice the steps that it takes in order to do even the most basic tasks. If you tell a human to tie their shoe, you (generally) don't need to specify any further instructions. However, if you were to build a shoe-tying machine, you would need to break down the process into the most basic steps. 

<div class="try-it">
  <h3>Top Down Design: Independent</h3>
  <p>Watch <a href="https://www.youtube.com/watch?v=QsKkG9gWxF4" title="">Damian Gordon's Top Down Design video</a> where he talks through the process of breaking down the process of making a cup of tea.</p>

  <p>In your notebooks, jot down key points to consider in the process of top down design. Be ready to share.</p>
</div>

### Whole-Group Share

1. What are some key considerations when breaking down a problem using top down design? 
1. What are some questions related to top down design and the points brought up in the video? 

Even though we're not going to write the code for making a cup of tea, imagining the process of breaking down everyday tasks is great practice for getting your brain ready for top down design. 

<div class="try-it">
  <h3>Top Down Design: Breakout Rooms</h3>
  <p>Open your text editor (either Atom or Sublime) and press <code>command + n</code> which will give you a blank file. There is no need to save this file right now.</p>
  <p>Scroll to the full list of steps at 2:00 in the video.</p>
  <p>In your groups, breakdown steps 6-10 and document your process in your text editor.</p>
</div>

### Share

Be ready to share how your group broke down the remaining steps. 

### Further Break Down

The video only demonstrates one layer deep of breaking down a problem. What would it look like if we broke down the sub steps? 

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>When breaking down subsequent layers of a problem, finish an entire layer before creating a new layer.</p>
  <p>What does this look like?</p>
  <div class="flex-container">
    <div>
  <textarea rows="12" name="">
1.1 Get a cup
      1.1.1 Open the cupboard
      1.1.2 Select a mug
      1.1.3 Put the mug on the counter
1.2 Get tea bags
1.3 Get sugar
1.4 Get milk
1.5 Get spoon/fork
</textarea>
</div>
<div>
  <textarea rows="12" name="">
1.1 Get a cup
      1.1.1 Open the cupboard
              1.1.1.1 Decide which cupboard contains the mugs
              1.1.1.2 Put fingers on handle of cupboard
              1.1.1.3 Pull cupboard door open
      1.1.2 Select a mug
      1.1.3 Put the mug on the counter
1.2 Get tea bags
1.3 Get sugar
1.4 Get milk
1.5 Get spoon/fork
</textarea>
</div>
</div>
</div>

<div class="try-it">
  <h3>Top Down Design: Breakout Rooms</h3>
  <p>Back in your breakout rooms, see if you can identify any sub steps from making tea (6-10) that can be broken down into smaller parts. Be ready to share.</p>
</div>

### Share

What did you come up with? 

<div class="try-it">
  <h3>Top Down Design: Mailing a Package</h3>
  <p>Back in your breakout groups, the person whose birthday is next will share their screen. Happy birthday!</p>
  <p>Birthday person: Pull up your text editor. You can either delete what you already had from the last exercise, or you can just type underneath your previous work.</p>
  <p>Break down the process of <strong>mailing a package at the post office</strong>.</p>
</div>

### Top Down Design and OOP

Breaking down problems using top down design lends itself nicely to the object-oriented design principles of <span class="vocab">abstraction</span> (where an object performs a task without other objects being concerned about how it is done) and <span class="vocab">encapsulation</span> (where an object handles its own internal states and behind-the-scenes work). 

<hr>
## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body. 
<hr>

<a name="oop"></a>
## Object Oriented Programming

<span class="vocab">Object oriented programming</span>, or OOP for short, is an approach to programming (or a [programmming paradigm](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)) where programs are organized as a series of objects. 

OOP is very similar to how the world actually works. In my office right now, there are several <span class="vocab">objects</span> (bullet points) of various <span class="vocab">classes</span> (bold):

<strong>Chairs</strong>
- a navy blue chair
- a silver chair
- two black chairs

<strong>Crates</strong>
- a green crate 
- an orange crate

<strong>Teachers</strong>
- myself  
- two other teachers

<strong>WaterBottles</strong>
- a blue Nalgene  
- a red Nalgene

<strong>FileFolders</strong>
- countless multi-colored file folders

<strong>StickyNotePads</strong>
- a pad of small blue sticky notes  
- two pads of larger yellow sticky notes

<strong>WritingInstruments</strong>
- 10 wooden pencils
- 3 mechanical pencils
- 8 pens

<strong>Laptops</strong>
- a MacBook  
- a ChromeBook

We group these objects because they have similar attributes/states and behaviors/methods/abilities. 

<div class="try-it">
  <h3>Classes and Objects</h3>
  <p>In the chat, post an example of a class and objects of that class where you are right now. Example:</p>
  <code>Stapler: blue plastic Office Max stapler, One-Touch high capacity metal stapler</code>
</div>

#### Classes and Objects

Think of a <span class="vocab">class</span> as a blueprint that can be used for creating lots of different versions of itself. For example, here are a few classes that I've used in recent programs that I've written:

```
Student
Course
Account
```

An <span class="vocab">object</span>, on the other hand, **is** a very specific instance of a class. An object is what is created from the blueprint. 

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Objects of that class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Student</td>
      <td>Joey, Briana, Marisol</td>
    </tr>
    <tr>
      <td>Course</td>
      <td>5th period calculus, 2nd period English, 1st period theater, evening parenting course</td>
    </tr>
    <tr>
      <td>Account</td>
      <td>Brandon's school meal account, scholarship account, Student Council's fundraising account</td>
    </tr>
  </tbody>
</table>

The objects are similar enough in attributes/states and behaviors/methods/abilities that they are part of the same class. 

Sidenote: Let's imagine that the fundraising accounts and the school meal accounts were so different that they had different attributes. As an example, maybe only deposits can be made to the fundraising accounts, while a lunch account can have both deposits and withdraws. In addition, maybe a lunch account can only be accessed by one person, but the fundraising accounts can have multiple owners. In this case, we might actually create separate classes: MealAccount and FundraisingAccount. **This is up to you as the developer to figure out how similar or different your objects are.**

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>One trick you can use when determining whether something is an object or a class is to say:</p>
  <p><strong>[Object] is a type of [Class]</strong></p>
  <p>- Joey is a type of Student</p>
  <p>- 5th period calculus is a type of Course</p>
  <p>- Emily's college tuition account is a type of Account</p>
</div>

<div class="try-it">
  <h3>Classes vs. Objects</h3>
  <p>On your own, categorize the following classes and objects.</p>
  <textarea name="">
car, poodle, Ford Mustang, scrabble, tent, chess, game, Nissan Juke, rose, dog, daisy, shelter, chihuahua, orchid, apartment, bulldog, monopoly, flower, Honda Civic
  </textarea>
  <br><br>
  <table class="objectclass">
  <thead>
    <tr>
      <th>Class</th>
      <th>Objects of that class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
  </tbody>
</table>
</div>

<div class="try-it">
  <h3>Breakout Rooms: Class Brainstorm</h3>
  <p>Open up a new file in your text editor.</p>
  <p>Think back to your grocery shopping app from session 2. With your group, brainstorm as many classes as you can that might exist in a shopping app (keeping in mind that you're thinking <code>blueprint</code>, not specific items) and jot your ideas down. Be ready to share.</p>
  <p>Need an example? <code>Store</code> would be a good example of a class.</p>
</div>

#### Attributes

<span class="vocab">Attributes</span> contain information about the **state** of a specific object (or instance of a class). The information format should be one of the basic data types from Session 2 (string, integer, float, boolean, array, hash). 

> Attributes answer the question "What characteristics might distinguish this specific object from another object of the same class?". 

For example: "What characteristics might distinguish this specific student from another student? 


As we're looking at the examples below, note that I am using capital letters and no spaces for the attribute names. This is not a rule; this is simply a convention I'm using for today's lesson:

```
Student

Attributes:
FirstName (string)
LastName (string)
Birthdate (datetime) -- this is not one of the data types we discussed, but it's valid
Enrolled (boolean)
```

All of these things would differentiate one student from another, but none of these attributes are **behaviors** or **actions**. For example, I didn't include `EnrollInSchool` as an attribute because that's an action, not a state. 

```
Course

Attributes: 
Title (string)
Period (integer)
Category (string)
CurrentlyOffered (boolean)
Roster (array)
```

Again, all of these attributes would differentiate one course from another. Notice that this last attribute, `Roster`, could be an array containing strings of student names, or an array of `Student` objects depending on how the program is set up. 

```
Account

Attributes:
Type (string)
Balance (float)
OwnerSSN (integer)
Frozen (boolean)
Transactions (array)
```

<div class="try-it">
  <h3>Breakout Rooms: Attributes</h3>
  <p>Select four classes from your shopping app brainstorm. For those classes, jot down (using the format above) attributes for the four selected objects. Be ready to share.</p>
  <p>As an example, if I selected <code>Store</code> as one of my classes, I would write in my text editor:</p>
  <pre>
Store

Attributes:
Name (string)
Location (string)
SquareFeet (integer)
OpeningHour (datetime)
ClosingHour (datetime)
  </pre>
</div>

#### Methods

<span class="vocab">Methods</span> define **behavior/actions**. Methods are generally verbs (action words or very short action phrases). Methods generally answer the question "What things can objects of this specific class do?"

For example: "What things can students do?" or "What things can accounts do?"

Let's look at a few examples: 

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
Withdraw
```

Unlike attributes, methods do not necessarily differentiate one instance of the object from another. For example, the steps that Briana and Jose would take to raise their hands might be identical. The steps they take to enroll at school might also be identical. Often (but not always), a method will use or change an attribute. For example, the `IntroduceSelf` method would use the `FirstName` and `LastName` attributes. `Enroll` and `Withdraw` would change the `Enrolled` attribute.

Here's another example:

```
Account

Attributes:
Type (string)
Balance (float)
OwnerSSN (integer)
Frozen (boolean)
Transactions (array)

Methods: 
Withdraw
Deposit
```

In this case, both the `Withdraw` and `Deposit` methods would change the `Balance` attribute in addition to adding to the `Transactions` array. 

<div class="try-it">
  <h3>Try It: Attributes vs. Methods</h3>
  <p>By yourself, categorize the following as either <strong>attributes</strong> of a car or <strong>methods</strong> of a car.</p>
  <textarea name="">
Model, Reverse, Color, FillTank, GasTank, Beep, CurrentSpeed, StartEngine, Year, ChangeOil, LastOilChange, TireSize, Turn, Stop
  </textarea>
  <br><br>
  <table class="objectclass">
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Methods</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
  </tbody>
</table>
</div>

<div class="try-it">
  <h3>Breakout Rooms: Methods</h3>
  <p>Select two classes from your shopping app that lend themselves nicely to brainstorming methods. For example, <code>Product</code> might not have many easily brainstormed methods, but <code>Cashier</code> or <code>Customer</code> might.</p>
  <p>Brainstorm methods for the two selected classes.</p> 
  <p>Discuss whether your brainstormed methods would use/change any attributes. If so, which ones? Be ready to share.</p>
</div>

### Individual Practice Round

<div class="try-it">
  <h3>Classes in a System</h3>
  <ol>
      <li>Choose one of these systems:</li>
      <ul>
        <li>Museum</li>
        <li>Hotel</li>
        <li>Beach</li>
        <li>Concert</li>
    </ul>
      <li>Brainstorm two classes in your chosen system.</li>
      <li>List the attributes for both classes.</li>
      <li>List the methods for both classes.</li>
  </ol>
  <p>Be ready to share with a partner and give/receive feedback.</p>
</div>

### Share and Feedback

In just a minute, you'll be randomly paired with another student. The person with the longest last name will share first.

1. What system did you choose? (Museum, Hotel, Beach, Concert)
1. What two classes did you identify for that system? How do you know they are classes? (Partner: provide feedback to confirm or adjust)
1. What are the **attributes** for your first class? How do you know they are attributes and NOT methods? (Partner: provide feedback to confirm or adjust)
1. What are the **attributes** for your second class? How do you know they are attributes and NOT methods? (Partner: provide feedback to confirm or adjust)
1. What are the **methods** for your first class? How do you know they are methods and NOT attributes? (Partner: provide feedback to confirm or adjust)
1. What are the **methods** for your second class? How do you know they are methods and NOT attributes? (Partner: provide feedback to confirm or adjust)
1. Switch roles and repeat with second person.

<a name="homework"></a>
## Homework

This is our final Mod 0 technical session. Your assignment between now and Thursday is to find 70 minutes to complete the [Mod 0 Technical Assessment](https://fierce-beyond-34376.herokuapp.com). 
