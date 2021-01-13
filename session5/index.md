---
layout: page
title: Session 5
subheading: Iteration and Error Messages
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>define iteration in programming</li>
      <li>demonstrate iteration in real-world and programming situations</li>
      <li>read and debug error messages</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>6:15 </strong>Follow-Ups and Goals</li>
      <li><strong>6:25 </strong><a href="#iteration">Iteration</a></li>
      <li><strong>7:00 </strong>Break</li>
      <li><strong>7:05 </strong><a href="#psuedocode">Pseudocode</a></li>
      <li><strong>7:35 </strong><a href="#annotations">Annotating Code</a></li>
      <li><strong>7:55 </strong>Break</li>
      <li><strong>8:00 </strong>Questions- Close Out</li>
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

### Wins

- You finished the assessment!

### Follow-Ups

- We will have assessment feedback to everyone by this Friday.
- Everyone should know if they are `turing ready` (passed Mod 0) by early next week.
- If you pass, what do you have left to be mod 1 ready?
- Check the <a href="https://mod0.turing.io/calendar/">calendar</a>! This is your source of truth for Mod 1 Orientation and prework due dates.

### Today's Goals

(See above)

## Intros, Review, and Icebreaker

Note: Update your zoom display name to include your first name, last initial, pronouns, and "FE" or "BE"

<div class="try-it">
  <h3>Intros, Review, and Icebreaker (2-3 people, 5 min)</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What is a book, tv show, or movie that you've read/watched recently and really enjoyed? Why?</p>
  <p>3. Accountability review: what tangible progress have you made toward your mod 0 focus skills?</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

<a name="iteration"></a>
## Iteration

Iteration (or looping for a specified number of times) is a process of repeating a task for each object in a collection. For each of the scenarios below, we'll walk through step by step to demonstrate the concept.

### Iteration in Real Life

These are examples that would be programatically challenging because they would require a ton of steps, but are things that we do everyday.

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Grading papers</td>
      <td>papers</td>
      <td>paper</td>
      <td>
        <ol>
          <li>read through it</li>
          <li>mark the score on the top</li>
        </ol>
      </td>
      <td>repeat with next paper</td>
    </tr>
    <tr>
      <td>Feeding animals</td>
      <td>animals</td>
      <td>animal</td>
      <td>
        <ol>
          <li>bring the animal to the food bucket</li>
          <li>allow the animal to eat</li>
          <li>bring animal back to barn</li>
        </ol>
      </td>
      <td>repeat with next animal</td>
    </tr>
  </tbody>
</table>

### Iteration in Programming

By "in programming", we mean things that could be done, with relative ease, by a computer. Like crunching numbers.

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Calculating max heart rate</td>
      <td>birth years</td>
      <td>year</td>
      <td>
        <ol>
          <li>subtract birth year from the current year to get age</li>
          <li>subtract age from 220</li>
        </ol>
      </td>
      <td>repeat with next year</td>
    </tr>
    <tr>
      <td>Formatting names</td>
      <td>names</td>
      <td>name</td>
      <td>
        <ol>
          <li>capitalize the first letter</li>
          <li>lowercase all remaining letters</li>
        </ol>
      </td>
      <td>repeat with next name</td>
    </tr>
  </tbody>
</table>

<div class="try-it">
  <h3>Try It: Iteration in Real Life and Programming</h3>
  <p>Brainstorm a real life scenario that uses iteration. Fill out the table below and be ready to share.</p>
  <table>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Collection</th>
        <th>For each...</th>
        <th>Do this:</th>
        <th>Then:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
      </tr>
    </tbody>
  </table>
  <p>Think back to your grocery store app. What is something you said you'd keep inside of an array? Why might you need to iterate over that collection? Jot down your scenario below.</p>
  <table>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Collection</th>
        <th>For each...</th>
        <th>Do this:</th>
        <th>Then:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
      </tr>
    </tbody>
  </table>
</div>

## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.
<hr>

<a name="psuedocode"></a>

# Pseudocode and Breaking Apart A Problem

The ability to critically examine a problem and break it down into smaller pieces is an essential skill of a developer that can be improved with practice. Breaking large problems into several smaller problems can help you in every step of the development process:

- *Pseudocode*: Breaking apart coding challenges into steps is often referred to as <span class="vocab">pseudocode</span>. This is done by writing those steps in plain english (or whatever language you speak), and then those steps, can later be converted to code the computer understands.

Pseudocoding can help keep your thoughts in order, especially helpful for when you may need to put a little research into HOW to accomplish all the steps involved. Further, pseudocode is an excellent approach to explaining code to your team because it is code-language agnostic, allowing non-technical teammates, or teammates who work with different code/technology, to understand your ideas more easily.

## Pseudocode - An Algorithm

Pseudocode often reads like an algorithm. Algorithms often read like recipes:

![Recipe pseudocode](https://image.slidesharecdn.com/pseudocode-111128151539-phpapp02/95/introduction-to-pseudocode-15-638.jpg?cb=1393513763)

Here is an example of more technical pseudocode. Ultimately, how you write your own pseudocode depends on your personal preference and your audience (if it will be shared).

![More code-like pseudocode](https://cdn.lynda.com/video/90472-147-635182861185610073_338x600_thumb.jpg)

What do y'all notice about how the pseudocode is written in the technical example above?

### Task: Data Normalization

Given the following data:

```
[ "jokic_nikola", "murray_jamal", "harris_garry" ]
```

Write pseudocode to explain how you would approach transforming the names you receive into what you'd want to display on your website. Please note that the format is currently `lastname_firstname` and the desired result would be `Firstname Lastname`.
When possible, list ideas for specific methods you'd use. (Remember- Google is your friend)

#### 2 minutes - on your own
#### 5 minutes - in groups (finished? start converting to code)

Let's walk through the process together

#### 10 minutes - implement it! (finished? start on the extension's pseudocode)

Let's code it up together. Don't get too hung up on the syntax. **Focus on the process!**

* I will use JavaScript
* Everyone should read [This article](https://medium.com/@dannysmith/breaking-down-problems-its-hard-when-you-re-learning-to-code-f10269f4ccd5) at some point after class - note that it's written in Ruby, but again, **focus on the process**

### Extension - Hash/Object

Frequently, you will receive information from databases in the form of a hash (or 'object' in javascript). In the example below, we have data that represents that. Arrays of objects can be tricky to navigate, but trying, and researching how now won't hurt, even if this is a work in progress:

```
var customerNames = [
{ firstName: "nikola", lastName: "jokic" },
{ firstName: "william", lastName: "barton_iii" },
{ firstName: "jamal", lastName: "murray" }
];
```

Again, write pseudocode explaining how you would access this information and change it into a format to display.
When possible, list ideas for specific methods or notation of obtaining data.

<a name="annotations"></a>
## Annotating Code
Part of being a strong developer is not just writing code. Most of the job is actually reading others code and building on top of it. In order to do so, you'll need to build your skills around:
- Reading other people's code
- Annotation (adding your notes) to code other people have written
- Articulating (speaking about) code that isn't yours

Annotating code is a great way to start to understand how code works and dive into code that you yourself did not write. One strategy to annotating code is to write **comments** directly in the code you are trying to deciper.

Most text editors, like Atom, allow you to add comments in your code. You can highlight a selection and use `CMD + /` to turn your text into a comment. Conversely, you can start any line with `//` for Javascript or `#` in Ruby to indicate a comment. You should see your syntax highlighting change to a different color when code has been commented out!

### Code Annotation Tips
- Use code comments to add your annotations to code
- Use precise, technical vocabulary in your comments to build your articulation skills
- Add comments line by line to stay focused on specific functionality

### Code Annotation Example
Take a look at the following code example in Javascript and Ruby
##### Javascript Example
```js
function playWithCats(cat1, cat2, toy){
  var greeting = `Hello ${cat1} and ${cat2} - how are you both doing this fine morning!`
  var toyChest = [toy, 'piece of string', 'catnip mouse', 'another string']

  console.log(toyChest[2])
  toyChest[2] = 'shoelace'
  console.log(toyChest[2])
  toyChest[4] = 'Q tip'

  return greeting
}

playWithCats('Pumpernickel', 'Nigel', 'paperclip')
```
##### Ruby Example
```rb
def play_with_cats(cat1, cat2, toy)
  greeting = "Hello #{cat1} and #{cat2} - how are you both doing this fine morning!"
  toy_chest = [toy, "piece of string", "catnip mouse", "another string"]

  puts toy_chest[2]
  toy_chest[2] = "shoelace"
  puts toy_chest[2]
  toy_chest[4] = "Q tip"

  return greeting
end

play_with_cats("Pumpernickel", "Nigel", "paperclip")
```

As you can see, there is a lot of things happening in these few lines of code! As a new developer, looking at all this code can be very intimidating. Rather than get overwhelmed, I can go line by line and use comments to annotate what is happening to get a better understanding.
##### Javascript Example
```js
//this is a function with 3 parameters (cat1, cat2 and toy)
function playWithCats(cat1, cat2, toy){
  //declare a variable of greeting - value is a string with the cat1 and cat2 parameters interpolated in
  var greeting = `Hello ${cat1} and ${cat2} - how are you both doing this fine morning!`
  //declare a variable of toyChest - value is an array with 4 elements, including the toy parameter
  var toyChest = [toy, 'piece of string', 'catnip mouse', 'another string']

  //print the 3rd element from the toyChest array to console ('catnip mouse')
  console.log(toyChest[2])
  //reassign the 3 element in the toyChest array to 'shoelace'
  toyChest[2] = 'shoelace'
    //print the 3rd element from the toyChest array to console ('shoelace')
  console.log(toyChest[2])
  //add 'Q tip' as 4th element in the toyChest array
  toyChest[4] = 'Q tip'

  //When function is called, it will return the greeting string value
  return greeting
}
//invoke the playWithCats function with cat1 = 'Pumpernickel', cat2 = 'Nigel', 
//and toy = 'paperclip'
playWithCats('Pumpernickel', 'Nigel', 'paperclip')
// this function will output the string - "Hello Pumpernickel and Nigel - how are you both doing this fine morning!"
```
#### Ruby Example
```rb
# this is a function with 3 parameters (cat1, cat2 and toy)
def play_with_cats(cat_1, cat_2, toy)
  # declare a variable of greeting - value is a string with the cat1 and cat2 parameters interpolated in
  greeting = "Hello #{cat_1} and #{cat_2} - how are you both doing this fine morning!"
  # declare a variable of toy_chest - value is an array with 4 elements, including the toy parameter
  toy_chest = [toy, "piece of string", "catnip mouse", "another string"]

  # print the 3rd element from the toy_chest array ("catnip mouse")
  puts toy_chest[2]
  # reassign the 3rd element from the toy_chest array to "shoelace"
  toy_chest[2] = "shoelace"
  # print the 3rd element from the toy_chest array ("shoelace")
  puts toy_chest[2]
  # add "Q tip" as 4th element in the toy_chest array
  toy_chest[4] = "Q tip"

  # When function is called, it will return the greeting string value
  return greeting
end
# invoke the play_with_cats function with cat_1 = "Pumpernickel", cat_2 = "Nigel" 
# and toy = "paperclip"
play_with_cats('Pumpernickel', 'Nigel', 'paperclip')
# this function will output the string - "Hello Pumpernickel and Nigel - how are you both doing this fine morning!"
```

### Practice - 20 minutes
In program-specific groups of 2-3, work through the exercises in the [Annotations Practice repo](https://github.com/turingschool/annotation_practice).
- Carefully read the instructions in the `README` before starting
- Take turns being the driver and navigator, but all members of the group should have annotations for each file. 
- You may need to reference your notes, Mod 1 Prework, and/or Google
- Be sure to use code comments (`CMD + /`) on each line of code

After the time is up, we will share our annotations in smaller groups! 

### Close out

* This is your last mod 0 session
* All that's left is to turn in your mod 1 prework
* Check the calendar for Mod 1 Orientation
* When you start working on Mythical Creatures in Mod 1, think back to OOP, classes and methods in Mod 0
* Moving forward:
  * Keep up the hard work
  * Keep asking questions in your cohort channels

* Learning to code is much more like exercise than epiphanies - Think about MJ!

> Quote from Meg Stang (BE instructor) - "I've noticed that the students that do the bare minimum on their mod 1 pre-work are the ones that usually struggle for at least the first half of the mod."

> Quote from Tara Westover (author of the book Educated) - "In retrospect, I see that this was my education... the hours I spent sitting at a borrowed desk, struggling to parse narrow strands of Mormon doctrine... This skill I was learning was a crucial one, the patience to read things I could not yet understand."

When you're finished with your pre-work, work on the suggested exercises. Not sure what to work on at that point? Ask!
