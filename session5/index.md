---
layout: page
title: Session 5
subheading: Attention to Detail, Iteration, and Assessment Expectations
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>apply strategies to identify issues in syntax and style</li>
      <li>define iteration in programming</li>
      <li>demonstrate iteration in real-world and programming situations</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Follow-Ups and Goals</li>
      <li><strong>35 min: </strong><a href="#attention-to-detail">Attention to Detail</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>35 min: </strong><a href="#iteration">Iteration</a></li>
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

- Great work asking questions in the public channel!
- Answering questions in the public channel is the best way to solidify your learning and practice communicating technically

### Follow-Ups

- Finish those capstones strong! You should be finished or almost finished by now. They're due tomorrow at 6!

### Today's Goals

(See above)

## Intros, Review, and Icebreaker

<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What is a book, tv show, or movie that you've read/watched recently and really enjoyed? Why?</p>
  <p>3. Accountability review: what tangible progress have you made toward your mod 0 focus skills?</p>
  <p>4. Determine who will bring your breakout group questions back to the whole group</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

<a name="attention-to-detail"></a>
## Attention to Detail

After reflecting on and trying to find patterns for the people who are struggling in mod 1, we've identified that attention to detail is one of the main themes we've seen.

Attention to detail is something that constantly comes up when coding
* A missing or misplaced character can make your code behave in an entirely different way
* Documentation is super dense, you'll likely need to read it at least couple of times before you're able to understand and apply it
* Tutorials and directions for implementation are common place. If you miss one step, you won't get the same result

### Identifying Mistakes

#### Breakout Groups (10 minutes)
Go through the following examples, and determine whether or not each piece of code is syntactically correct. Even if the line of code is syntactically correct, are there any other mistakes in it?

Be sure to pay attention to how your capstone is formatted. If people have poorly formatted gists and repos for their capstone, it is a bit of a red flag on our end for this reason.

As a group, either in your text editors, or in a notebook, write down your answers for each number below. Be sure to deliberate as a group and try your best to explain **why** you expect something to work or not.

```
1. bestFoodOfAllTime = 'burritos'

2. isIt = true

3. secondBestFood = 'ramen'

4. sandwich = "taco?'

5. phoneNumber = '123-456-7890'

6. bestFoodOfAllTime

7. isLying = False

8. animals = ['donkey', 'giraffe', 'elephant', 'chimpanzee']

9. secondBestfood

10. sandwiches = ['cheesesteak', 'po' boy', 'reuben']

11. drinkSize = 12 oz

12. ,2 * 2

13. 4 / 2

14. (6 * 2) + (6 / 3) / 6)

15. grads = { "9th grade": 110, "10th grade": 125, "11th grad": 66 }

16.
instructors = {
  "Mod 0": "Tim and David",
  "Mod 1": 'Mike and Sal",
  "Mod 2": "Brittany and Robbie"
}
```

What were your strategies when trying to figure out if a piece of code is syntactically correct or not?

Did you do any experimentation? Did you reference any documentation?

Key things to think about when looking for syntax errors:
* parentheses, quotes, brackets, and braces are all like shoes, useless without their mate
* consistency is key. If you're looking through code that has inconsistent, indentation, casing, quote types some mental overhead is being used where it doesn't need to be

### Syntax and Style

<span class="vocab">Syntax</span> and <span class="vocab">Style</span> are both essential when it comes to writing code.

<span class="vocab">Syntax</span> refers to the structure of statements in a computer language. Are quotes surrounding both sides of a string? No, then the language will throw an error. If your code isn't working because of a placement of a character, it's a syntax issue.

<span class="vocab">Style</span> doesn't determine if a piece of code runs or not. Its purpose is to make code more readable. Ideally, when you're working on a team, you and your teammates are following similar patterns (conventions) when it comes to things like whitespace (including indentation) or double vs single quotes. What is one of those conventions you've already been using?

Let's take a look at what these two things might look like in action:

Difference in syntax

```
one doesn't work

animals = ['donkey', 'giraffe', 'elephant', 'chimpanzee']

animals = ['donkey', 'giraffe', 'elephant' 'chimpanzee']
```

Difference in style

```
both work below, but which reads better?

animals = ['donkey', 'giraffe', 'elephant', 'chimpanzee']

animals=["donkey",'giraffe','elephant',"chimpanzee"]
```

If you want to find code that is both syntactically correct and using good style the best place to look is going to be the docs (mdn for JavaScript and ruby-doc for Ruby). The code examples are a great place to look to see if you are writing your code in a similar way. Also, keep in mind that things like casing of variables is another good way to stay consistent and maintain good style.

## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.
<hr>

<a name="iteration"></a>
## Iteration

Iteration (or looping for a specified number of times) is a process of repeating a task for each object in a collection. For each of the scenarios below, we'll walk through using props to demonstrate the concept.

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
          <li>subtract birth year from 2019 to get age</li>
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

### Other Reminders

* This is your last technical session, next session will be with Emma, where she'll talk more about life in person at Turing
* When you start working on Mythical Creatures in Mod 1, think back to OOP, classes and methods in mod 0
* Moving forward:
  * Keep up the hard work
  * Keep asking questions in your cohort channels
  * Tim, Ellen, Bob and I are still around if you need us
  * Capstone is due tomorrow at 6!

> Quote from Meg Stang (BE instructor) - "I've noticed that the students that do the bare minimum on their mod 0 prework are the ones that usually struggle for at least the first half of the mod."
